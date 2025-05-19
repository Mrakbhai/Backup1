import { useState } from 'react';
import { motion } from 'framer-motion';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    teamName: '',
    teamCaptain: '',
    email: '',
    teamMembers: '',
    termsAgreed: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, termsAgreed: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section 
      id="register" 
      className="py-20 bg-card section-reveal" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1559300214-d9301317954f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto bg-card bg-opacity-80 p-8 md:p-12 rounded-lg border border-primary border-opacity-30 backdrop-blur-sm shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
              <span className="text-primary">REGISTER</span>{" "}
              <span className="text-foreground">YOUR TEAM</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-foreground opacity-90">
              Secure your spot in the FF Max Pro League and begin your journey to glory
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="teamName" className="text-foreground opacity-90">Team Name</Label>
                <Input 
                  type="text" 
                  id="teamName" 
                  className="w-full bg-background border border-primary border-opacity-30 rounded px-4 py-3 text-foreground focus:border-secondary" 
                  placeholder="Enter your team name"
                  value={formData.teamName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="teamCaptain" className="text-foreground opacity-90">Team Captain</Label>
                <Input 
                  type="text" 
                  id="teamCaptain" 
                  className="w-full bg-background border border-primary border-opacity-30 rounded px-4 py-3 text-foreground focus:border-secondary" 
                  placeholder="Captain's name"
                  value={formData.teamCaptain}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground opacity-90">Contact Email</Label>
              <Input 
                type="email" 
                id="email" 
                className="w-full bg-background border border-primary border-opacity-30 rounded px-4 py-3 text-foreground focus:border-secondary" 
                placeholder="Your email address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="teamMembers" className="text-foreground opacity-90">Team Members (In-Game IDs)</Label>
              <Textarea 
                id="teamMembers" 
                className="w-full bg-background border border-primary border-opacity-30 rounded px-4 py-3 text-foreground focus:border-secondary h-32" 
                placeholder="Enter in-game IDs for all 4 team members"
                value={formData.teamMembers}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="flex items-center space-x-3">
              <Checkbox 
                id="terms" 
                checked={formData.termsAgreed}
                onCheckedChange={handleCheckboxChange}
                className="w-5 h-5 data-[state=checked]:bg-primary"
              />
              <label htmlFor="terms" className="text-foreground opacity-90">
                I agree to the <a href="#" className="text-secondary hover:underline">tournament rules</a> and <a href="#" className="text-secondary hover:underline">terms of service</a>
              </label>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-primary text-primary-foreground py-3 px-12 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 glow-btn text-lg"
                disabled={!formData.termsAgreed}
              >
                Register Now
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center text-foreground opacity-80 text-sm">
            <p>Registration closes on June 10, 2023 at 11:59 PM GMT</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
