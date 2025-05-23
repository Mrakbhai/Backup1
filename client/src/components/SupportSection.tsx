import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { db } from "../../../server/firebase"; // or relative path if alias not set
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function SupportSection() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
    if (!contactForm.name || !contactForm.email || !contactForm.subject || !contactForm.message) {
      alert("Please fill in all fields");
      return;
    }

    try {
      console.log("Attempting to submit form:", contactForm);
      const messagesCollection = collection(db, "supportMessages");
      console.log("Collection reference created:", messagesCollection.id);
      
      const docRef = await addDoc(messagesCollection, {
        ...contactForm,
        timestamp: serverTimestamp(),
        createdAt: new Date().toISOString() // Fallback timestamp
      });
      
      console.log("Document written with ID:", docRef.id);
      alert("Message sent successfully!");
      setContactForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error("Error submitting message:", err);
      alert(`Submission failed: ${(err as any).message}`);
    }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 0.7, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Zsjh_nrQPKcRspIvZtPWRCfVk7AbKqzMpM4uoKbJEYtNZXIKcwdpWc2q&s=10")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Adjust the overlay opacity as needed
    backgroundBlendMode: 'overlay',
  };

  return (
    <section id="support" className="py-20 section-reveal" style={backgroundStyle}>
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
                />
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
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground opacity-90">Subject</Label>
                <Select onValueChange={handleSelectChange}>
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
                />
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-primary text-primary-foreground py-3 px-10 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 glow-btn"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}