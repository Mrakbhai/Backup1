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
          <div className="max-h-[350px] overflow-y-auto custom-scrollbar pr-2">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function LearnMore() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const backgroundStyle = {
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXF00IXWgWt6dzQAfC8MtXoGEyw_U1fOT5-MoFKahABHy9gy15vhSzIX36&s=10')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

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
            <li>Stay connected through our <a href="https://whatsapp.com/channel/0029VbAc0D82v1IvjhgviA2x" className="text-link">WhatsApp channel</a> for updates.</li>
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
            <h4 className="text-lg font-orbitron text-primary mb-3">1. Fill the <Link href="/register" className="text-link">Registration Form</Link></h4>
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
            Ready to join? Click the <Link href="/register" className="text-link">"Join Tournament"</Link> button below to start the registration process!
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
            <h4 className="text-lg font-orbitron text-primary mb-3"><Link href="/rules" className="text-link">Rules & Expectations</Link></h4>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Only Solo mode for now (Duo and Squad coming soon!)</li>
              <li>Strictly no teaming, hacking, or unfair behavior</li>
              <li>Join the custom room 5-10 minutes before the match</li>
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
              <li><span className="font-semibold">Eliminations:</span> Every opponent you eliminate earns you ₹15</li>
              <li><span className="font-semibold">Match Victory:</span> Achieving Booyah (winning the match) earns you an additional ₹40 bonus</li>
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
              <li>₹15 per confirmed kill</li>
              <li>₹40 bonus for getting Booyah (1st place)</li>
            </ul>
          </div>

          <div className="bg-card bg-opacity-50 p-4 rounded-lg border border-primary border-opacity-20">
            <h4 className="text-lg font-orbitron text-primary mb-3">Reward Delivery</h4>
            <div className="space-y-3">
              <p>Processed within 24 hours after match verification</p>
              <p className="mb-2">Delivered via:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>UPI Transfer (Recommended)</li>
                <li>Gift Cards (Google Play)</li>
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
              <li>₹75 from eliminations (5 × ₹15)</li>
              <li>₹40 bonus for Booyah</li>
              <li>Total: <span className="text-primary font-bold">₹115</span></li>
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
        <div className="space-y-6">
          <p className="text-lg">Join our tournaments for a premium gaming experience:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card bg-opacity-50 p-4 rounded-lg border border-primary border-opacity-20 flex flex-col">
              <h4 className="text-lg font-orbitron text-primary mb-3">Trusted Process</h4>
              <p className="flex-grow">We manually review all applications and verifications to ensure a fair and secure tournament experience for everyone.</p>
              <div className="w-full h-1 bg-primary bg-opacity-30 mt-4"></div>
            </div>

            <div className="bg-card bg-opacity-50 p-4 rounded-lg border border-primary border-opacity-20 flex flex-col">
              <h4 className="text-lg font-orbitron text-primary mb-3">Fast & Fair Rewards</h4>
              <p className="flex-grow">Our performance-based reward system ensures you get paid for your skills within 24 hours after match verification.</p>
              <div className="w-full h-1 bg-primary bg-opacity-30 mt-4"></div>
            </div>

            <div className="bg-card bg-opacity-50 p-4 rounded-lg border border-primary border-opacity-20 flex flex-col">
              <h4 className="text-lg font-orbitron text-primary mb-3">Expanding Modes</h4>
              <p className="flex-grow">Currently supporting Solo mode with Duo and Squad tournaments coming soon to offer more ways to compete and win.</p>
              <div className="w-full h-1 bg-primary bg-opacity-30 mt-4"></div>
            </div>

            <div className="bg-card bg-opacity-50 p-4 rounded-lg border border-primary border-opacity-20 flex flex-col">
              <h4 className="text-lg font-orbitron text-primary mb-3">Growing Community</h4>
              <p className="flex-grow">Join our expanding competitive Free Fire community of skilled players looking to test their abilities and earn rewards.</p>
              <div className="w-full h-1 bg-primary bg-opacity-30 mt-4"></div>
            </div>
          </div>

          <div className="bg-card bg-opacity-50 p-5 rounded-lg border border-secondary border-opacity-20 mt-4">
            <h4 className="text-lg font-orbitron text-secondary mb-3 text-center">Coming Soon</h4>
            <p className="text-center">Upcoming features: personal dashboard, referral earnings, and more!</p>
          </div>

          <div className="text-center mt-6">
            <Link
              href="/register"
              className="inline-block bg-primary text-primary-foreground py-3 px-8 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 glow-btn"
            >
              Join Our Community Today
            </Link>
          </div>
        </div>
      )
    }
  ];

  return (
      <>
      <Helmet>
        <title>FF Max Pro League - Learn More</title>
        <meta
          name="description"
          content="Dive deeper into how the FF Max Pro League works, from registration to winning. Everything you need to know to get started."
        />
        <link rel="canonical" href="https://booyah.dailybyte.xyz/learn-more" />
        <meta
          name="keywords"
          content="Learn more Free Fire tournament, FF Max Pro League info, Free Fire league guide, esports competition details"
        />
        <meta property="og:title" content="FF Max Pro League - Learn More" />
        <meta
          property="og:description"
          content="Understand how the FF Max Pro League works — registration, gameplay, rewards, and everything in between."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://booyah.dailybyte.xyz/learn-more" />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/1362394089378676847/1376225455266463896/Image.png?ex=68348d55&is=68333bd5&hm=a713cc89bb1ad34ca2f0b7e3dd640b2b4649a4d38dc7ca66a84f5087e00f7e28&"
        />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <NavBar />

        <main className="flex-grow pt-24 pb-16" style={backgroundStyle}>
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

              <div className="mt-10 text-center flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/">
                  <button
                    className="w-full sm:w-auto bg-primary text-primary-foreground py-3 px-8 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 glow-btn"
                  >
                    Back to Home
                  </button>
                </Link>

                <Link href="/register">
                  <button
                    className="w-full sm:w-auto bg-transparent border-2 border-secondary text-secondary py-3 px-8 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-secondary hover:bg-opacity-10 transition-all duration-300 glow-btn-cyan"
                  >
                    Register Now
                  </button>
                </Link>
                <p className="text-lg text-foreground opacity-90 mb-8">
                  Check out our <Link href="/rules" className="text-link">rules and format</Link> for more details.
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}