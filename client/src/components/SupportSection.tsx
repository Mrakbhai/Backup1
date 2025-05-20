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
import { RectangleEllipsis, Headset, Clock, MessageSquare } from 'lucide-react';
import { db, collection, addDoc, serverTimestamp } from "../../../server/firebase";

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
    try {
      await addDoc(collection(db, "supportMessages"), {
        ...contactForm,
        timestamp: serverTimestamp(),
      });
      alert("Message sent successfully!");
      setContactForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error("Error submitting message:", err);
      alert("Submission failed. Please try again.");
    }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const faqItems = [
    {
      question: "When is the registration deadline?",
      answer: "You will be able to register until the tournament day starts. Keep an eye on our social media for updates."
    },
    {
      question: "Is there an age requirement?",
      answer: "All participants must be at least 11 years of age. Players under 11 will need parental consent forms submitted."
    },
    {
      question: "How do I claim my prize if I win?",
      answer: "Prize distribution details will be sent to each registered player via email. You'll need to provide payment information and complete verification."
    },
    {
      question: "Can I use an emulator?",
      answer: "Emulators are allowed in the tournamens."
    }
  ];

  const contactInfo = [
    {
      icon: <RectangleEllipsis className="w-5 h-5" />,
      info: "support@ffmaxproleague.com"
    },
    {
      icon: <Headset className="w-5 h-5" />,
      info: "Discord: FFMaxSupport#1234"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      info: "Support Hours: 24/7 during tournament days\n9 AM - 9 PM GMT on regular days"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      info: "Live chat available on our Discord server"
    }
  ];

  const backgroundStyle = {
    backgroundImage: 'url("https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/b256367962c4dd22384c89a73c6de3d5.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the overlay opacity as needed
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

          <div>
            <motion.div 
              className="bg-background rounded-lg p-8 border border-primary border-opacity-20 mb-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">FAQ</h3>

              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-orbitron text-secondary mb-2">{item.question}</h4>
                    <p className="text-foreground opacity-90">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a href="#" className="text-secondary hover:underline flex items-center">
                  <span>View all FAQs</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="bg-background rounded-lg p-8 border border-primary border-opacity-20"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">CONTACT INFO</h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1 w-5">{item.icon}</span>
                    <span className="text-foreground whitespace-pre-line">{item.info}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}