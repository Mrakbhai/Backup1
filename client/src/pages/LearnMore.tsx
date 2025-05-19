import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

const AccordionItem = ({ title, content, index, activeIndex, setActiveIndex }: AccordionItemProps) => {
  const isActive = activeIndex === index;
  
  const toggleAccordion = () => {
    setActiveIndex(isActive ? null : index);
  };
  
  return (
    <div className="mb-4 rounded-lg overflow-hidden border border-primary border-opacity-20">
      <div 
        className="flex items-center justify-between p-4 bg-card cursor-pointer hover:bg-opacity-90 transition-colors duration-300"
        onClick={toggleAccordion}
      >
        <h3 className="text-xl font-orbitron font-bold text-foreground flex items-center">
          <span 
            className={`mr-3 transition-transform duration-300 transform ${isActive ? 'rotate-180' : ''}`}
          >
            <ChevronDown size={20} className="text-primary" />
          </span>
          {title}
        </h3>
      </div>
      <div 
        className={`
          overflow-hidden transition-all duration-500 bg-background 
          ${isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="p-6 text-foreground">
          {content}
        </div>
      </div>
    </div>
  );
};

export default function LearnMore() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const accordionData = [
    {
      title: "What Are These Tournaments?",
      content: (
        <div className="space-y-4">
          <p>
            We organize skill-based Free Fire tournaments where players compete in private matches to earn money based on 
            performance — not just rank. These tournaments are perfect for players looking to turn their gameplay into real cash rewards.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Currently, we host Solo mode tournaments.</li>
            <li>Duo and Squad tournaments are coming soon!</li>
            <li>Stay connected through our WhatsApp channel for updates.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Registration Process",
      content: (
        <div className="space-y-6">
          <p className="text-lg">Follow these steps to register for our tournaments:</p>
          
          <div className="bg-card bg-opacity-50 p-4 rounded-lg border border-primary border-opacity-20">
            <h4 className="text-lg font-orbitron text-primary mb-3">1. Fill the Registration Form</h4>
            <p className="mb-2">You'll be asked to provide:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Full Name & In-Game Name</li>
              <li>Free Fire UID</li>
              <li>UPI ID (for payment verification & rewards)</li>
              <li>Email Address & WhatsApp Number</li>
              <li>Game Profile Screenshot</li>
              <li>Select your payment method (Online/Offline)</li>
              <li>Select how you want to receive rewards (UPI / Gift Card)</li>
            </ul>
          </div>
          
          <div className="bg-card bg-opacity-50 p-4 rounded-lg border border-primary border-opacity-20">
            <h4 className="text-lg font-orbitron text-primary mb-3">2. Pay the Entry Fee</h4>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>₹30 per player</li>
              <li>Upload proof of payment or enter transaction ID</li>
            </ul>
          </div>
          
          <div className="bg-card bg-opacity-50 p-4 rounded-lg border border-primary border-opacity-20">
            <h4 className="text-lg font-orbitron text-primary mb-3">3. Application Review</h4>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>We manually verify your payment & details</li>
              <li>Once approved, you'll receive a confirmation via WhatsApp/email</li>
            </ul>
          </div>
          
          <div className="bg-card bg-opacity-50 p-4 rounded-lg border border-primary border-opacity-20">
            <h4 className="text-lg font-orbitron text-primary mb-3">4. Match Announcement & Room Code</h4>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>We will announce the date and time of the matches. Most likely the matches will be held on Sundays</li>
              <li>You'll get personal room code & match info via WhatsApp or email (not on the public channel)</li>
            </ul>
          </div>
          
          <p className="mt-4 text-secondary font-semibold text-center">
            Ready to join? Click the "Join Tournament" button below to start the registration process!
          </p>
        </div>
      )
    },
    {
      title: "In Game Evaluation",
      content: (
        <div className="space-y-6">
          <p className="text-lg">We use a transparent and fair evaluation system to determine winners.</p>
          
          <div className="bg-card bg-opacity-50 p-4 rounded-lg border border-primary border-opacity-20">
            <h4 className="text-lg font-orbitron text-primary mb-3">Rules & Expectations</h4>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Only Solo mode for now (Duo and Squad coming soon!)</li>
              <li>Strictly no teaming, hacking, or unfair behavior</li>
              <li>Join the custom room 5–10 minutes before the match</li>
              <li>Cheating = permanent ban</li>
            </ul>
          </div>
          
          <div className="bg-card bg-opacity-50 p-4 rounded-lg border border-primary border-opacity-20">
            <h4 className="text-lg font-orbitron text-primary mb-3">Performance Evaluation</h4>
            <div className="space-y-3">
              <p>Each player must send a screenshot of their match result from history after the game.</p>
              <p className="text-secondary italic">(This helps us verify kills and position in case of bugs or disconnection.)</p>
              <p>We also monitor gameplay & results from our side for cross-checking.</p>
            </div>
          </div>
          
          <div className="bg-card bg-opacity-50 p-4 rounded-lg border border-primary border-opacity-20">
            <h4 className="text-lg font-orbitron text-primary mb-3">Reward Calculation</h4>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><span className="font-semibold">Eliminations:</span> Every opponent you eliminate earns you ₹10</li>
              <li><span className="font-semibold">Match Victory:</span> Achieving Booyah (winning the match) earns you an additional ₹10 bonus</li>
              <li><span className="font-semibold">Performance Tracking:</span> We keep detailed statistics of your performance across all tournaments</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Reward System",
      content: (
        <div className="space-y-6">
          <p className="text-lg">Our reward system is straightforward and performance-based:</p>
          
          <div className="bg-card bg-opacity-50 p-4 rounded-lg border border-primary border-opacity-20">
            <h4 className="text-lg font-orbitron text-primary mb-3">Earnings Breakdown</h4>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>₹10 per confirmed kill</li>
              <li>₹10 bonus for getting Booyah (1st place)</li>
            </ul>
          </div>
          
          <div className="bg-card bg-opacity-50 p-4 rounded-lg border border-primary border-opacity-20">
            <h4 className="text-lg font-orbitron text-primary mb-3">Reward Delivery</h4>
            <div className="space-y-3">
              <p>Processed within 24 hours after match verification</p>
              <p className="mb-2">Delivered via:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>UPI Transfer (Recommended)</li>
                <li>Gift Cards (Amazon / Flipkart / Google Play – optional)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-card bg-opacity-50 p-4 rounded-lg border border-secondary border-opacity-20">
            <h4 className="text-lg font-orbitron text-secondary mb-3">Important Notes</h4>
            <div className="space-y-3">
              <p><span className="font-semibold">Gift card users:</span> redeem as soon as received. We are not liable for delays or if a code is marked as already used after delivery.</p>
              <p><span className="font-semibold">False screenshots or tampering attempts</span> = immediate ban</p>
            </div>
          </div>
          
          <div className="bg-card bg-opacity-40 p-4 rounded-lg">
            <p className="font-semibold mb-2">Example Calculation:</p>
            <p>If you eliminate 5 players and win the match, you earn:</p>
            <ul className="list-inside space-y-1">
              <li>₹50 from eliminations (5 × ₹10)</li>
              <li>₹10 bonus for Booyah</li>
              <li>Total: <span className="text-primary font-bold">₹60</span></li>
            </ul>
          </div>
          
          <p className="text-secondary font-semibold text-center mt-2">
            The more you eliminate and the better you perform, the more you earn!
          </p>
        </div>
      )
    },
    {
      title: "Why Choose Us",
      content: (
        <div className="space-y-4">
          <p>There are many reasons to participate in our tournaments:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><span className="font-semibold">Fair Reward System:</span> Get paid for your skill, not just for winning</li>
            <li><span className="font-semibold">Professional Organization:</span> Smoothly run tournaments with clear rules</li>
            <li><span className="font-semibold">Community:</span> Connect with other competitive players</li>
            <li><span className="font-semibold">Immediate Rewards:</span> Payments processed quickly after tournament completion</li>
            <li><span className="font-semibold">Regular Events:</span> Consistent tournament schedule so you can always participate</li>
            <li><span className="font-semibold">Growth Opportunities:</span> Build your reputation as a skilled Free Fire player</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>Learn More About FF Max Pro League Tournaments</title>
        <meta name="description" content="Discover everything you need to know about our Free Fire tournaments, including registration process, rewards system, and more." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <NavBar />
        
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div 
              className="max-w-4xl mx-auto bg-card bg-opacity-90 p-8 rounded-lg border border-primary border-opacity-30 shadow-xl"
              style={{
                backgroundImage: "linear-gradient(to bottom, rgba(15,15,15,0.7), rgba(20,20,20,0.9))"
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
              >
                <h1 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
                  <span className="text-primary">LEARN MORE</span>{" "}
                  <span className="text-secondary">ABOUT OUR TOURNAMENTS</span>
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-lg text-foreground opacity-90 mb-8">
                  Click on a section below to expand and learn more about our Free Fire tournaments.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {accordionData.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    index={index}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                ))}
              </motion.div>
              
              <div className="mt-10 text-center">
                <Link href="/">
                  <a className="inline-block bg-primary text-primary-foreground py-3 px-8 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 glow-btn mr-4">
                    Back to Home
                  </a>
                </Link>
                <Link href="/register">
                  <a className="inline-block bg-transparent border-2 border-secondary text-secondary py-3 px-8 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-secondary hover:bg-opacity-10 transition-all duration-300 glow-btn-cyan">
                    Register Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}