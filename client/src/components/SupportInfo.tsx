import { motion } from 'framer-motion';
import { SiDiscord, SiInstagram, SiYoutube, SiWhatsapp } from 'react-icons/si';

export default function SupportInfo() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <motion.div 
      className="bg-background rounded-lg p-8 border border-primary border-opacity-20"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">SUPPORT INFO</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-orbitron font-semibold mb-2 text-secondary">Response Time</h4>
          <p className="text-foreground opacity-80">We aim to respond to all inquiries within 24-48 hours. For urgent tournament-related issues, our team will prioritize your request.</p>
        </div>
        
        <div>
          <h4 className="text-lg font-orbitron font-semibold mb-2 text-secondary">Contact Information</h4>
          <p className="text-foreground opacity-80">You can reach us directly via:</p>
          <ul className="list-disc list-inside text-foreground opacity-80 space-y-2 mt-2">
            <li>Email: support@ffproleague.com</li>
            <li>WhatsApp: +91 9876543210</li>
            <li>Discord: FFProLeague#2023</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-orbitron font-semibold mb-2 text-secondary">Common Issues</h4>
          <ul className="list-disc list-inside text-foreground opacity-80 space-y-2">
            <li>Registration or login problems</li>
            <li>Tournament schedule questions</li>
            <li>Prize distribution timelines</li>
            <li>Technical requirements for participation</li>
            <li>Reporting rule violations</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-orbitron font-semibold mb-2 text-secondary">Business Inquiries</h4>
          <p className="text-foreground opacity-80">For partnership, sponsorship, or business proposals, please select "Other" in the subject dropdown and provide details in your message.</p>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-primary border-opacity-20">
        <h4 className="text-lg font-orbitron font-semibold mb-4 text-secondary">FOLLOW US</h4>
        <div className="flex space-x-6">
          {/*<a href="#" className="text-foreground hover:text-primary transition-colors duration-300 text-2xl">
            <SiDiscord />
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors duration-300 text-2xl">
            <SiInstagram />
          </a>*/}
          <a href="https://youtube.com/@macrostrom?si=rtljS-G3zyMA-awv" className="text-foreground hover:text-primary transition-colors duration-300 text-2xl">
            <SiYoutube />
          </a>
          <a href="https://whatsapp.com/channel/0029VbAc0D82v1IvjhgviA2x" className="text-foreground hover:text-primary transition-colors duration-300 text-2xl">
            <SiWhatsapp />
          </a>
        </div>
      </div>
    </motion.div>
  );
}