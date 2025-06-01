import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Label } from '../../components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../../components/ui/select';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '../../hooks/use-toast';
import SupportInfo from '../SupportInfo';

export default function SupportSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    uid: '', // Free Fire UID field
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Make section visible immediately
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('revealed');
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setContactForm(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setContactForm(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!contactForm.name || !contactForm.email || !contactForm.uid || !contactForm.subject || !contactForm.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Validate UID is numeric
    if (!/^\d+$/.test(contactForm.uid)) {
      toast({
        title: "Validation Error",
        description: "Free Fire UID should contain only numbers",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      console.log("Attempting to submit form:", contactForm);
      const messagesCollection = collection(db, "supportMessages");
      console.log("Collection reference created:", messagesCollection.id);

      const docRef = await addDoc(messagesCollection, {
        ...contactForm,
        timestamp: serverTimestamp(),
        createdAt: new Date().toISOString() // Fallback timestamp
      });

      console.log("Document written with ID:", docRef.id);
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
      });
      setContactForm({
        name: '',
        email: '',
        uid: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error("Error submitting message:", err);
      toast({
        title: "Submission Failed",
        description: `There was a problem sending your message: ${(err as any).message}`,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Zsjh_nrQPKcRspIvZtPWRCfVk7AbKqzMpM4uoKbJEYtNZXIKcwdpWc2q&s=10")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background color
    backgroundBlendMode: 'overlay',
  };

  return (
    <section 
      ref={sectionRef}
      id="support" 
      className="py-20 section-reveal revealed" 
      style={backgroundStyle}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-primary">SUPPORT</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground opacity-90">
            Need help? Our support team is ready to assist you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          <motion.div 
            className="bg-background rounded-lg p-8 border border-primary border-opacity-20"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">CONTACT US</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground opacity-90">Your Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  className="w-full bg-card border border-primary border-opacity-30 rounded px-4 py-3 text-foreground focus:border-secondary" 
                  placeholder="Enter your name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="uid" className="text-foreground opacity-90 flex items-center">
                  <span className="text-primary mr-1">*</span>Free Fire UID
                </Label>
                <Input 
                  type="text" 
                  id="uid" 
                  className="w-full bg-card border border-primary border-opacity-30 rounded px-4 py-3 text-foreground focus:border-secondary" 
                  placeholder="Your Free Fire UID (e.g. 123456789)"
                  value={contactForm.uid}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
                <p className="text-xs text-muted-foreground mt-1">Your unique Free Fire player ID number</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground opacity-90">Email Address</Label>
                <Input 
                  type="email" 
                  id="email" 
                  className="w-full bg-card border border-primary border-opacity-30 rounded px-4 py-3 text-foreground focus:border-secondary" 
                  placeholder="Your email address"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground opacity-90">Subject</Label>
                <Select onValueChange={handleSelectChange} disabled={isSubmitting} value={contactForm.subject}>
                  <SelectTrigger className="w-full bg-card border border-primary border-opacity-30 rounded px-4 py-3 text-foreground focus:border-secondary">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="registration">Registration Issues</SelectItem>
                    <SelectItem value="technical">Technical Problems</SelectItem>
                    <SelectItem value="rules">Rules Clarification</SelectItem>
                    <SelectItem value="payment">Prize Payment</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground opacity-90">Message</Label>
                <Textarea 
                  id="message" 
                  className="w-full bg-card border border-primary border-opacity-30 rounded px-4 py-3 text-foreground focus:border-secondary h-32" 
                  placeholder="Describe your issue or question"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-primary text-primary-foreground py-3 px-10 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 glow-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>

          <SupportInfo />
        </div>

        <div className="text-center mt-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Link 
              to="/faqs" 
              className="inline-flex items-center text-xl font-orbitron font-bold text-secondary hover:text-secondary/80 transition-all duration-300"
            >
              VIEW ALL FAQs
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}