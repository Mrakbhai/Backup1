import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export default function Rules() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('registration');
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('revealed');
    }
  }, []);

  const backgroundStyle = {
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Zsjh_nrQPKcRspIvZtPWRCfVk7AbKqzMpM4uoKbJEYtNZXIKcwdpWc2q&s=10")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'overlay',
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 pt-16">
        <section 
          ref={sectionRef}
          id="rules" 
          className="py-20 section-reveal revealed" 
          style={backgroundStyle}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
                <span className="text-primary">RULES & REGULATIONS</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground opacity-90">
                Official guidelines for Free Fire Pro Max League tournaments
              </p>
            </div>

            <motion.div 
              className="max-w-4xl mx-auto bg-background/80 backdrop-blur-sm rounded-lg border border-primary border-opacity-20 overflow-hidden"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Tabs 
                defaultValue="registration" 
                value={activeTab}
                onValueChange={handleTabChange}
                className="w-full"
              >
                <TabsList className="w-full grid grid-cols-3 mb-0 rounded-none bg-card/70">
                  <TabsTrigger 
                    value="registration" 
                    className={`py-4 font-orbitron text-sm md:text-base ${activeTab === 'registration' ? 'text-secondary' : 'text-foreground/70'}`}
                  >
                    Registration
                  </TabsTrigger>
                  <TabsTrigger 
                    value="evaluation" 
                    className={`py-4 font-orbitron text-sm md:text-base ${activeTab === 'evaluation' ? 'text-secondary' : 'text-foreground/70'}`}
                  >
                    Evaluation
                  </TabsTrigger>
                  <TabsTrigger 
                    value="rewards" 
                    className={`py-4 font-orbitron text-sm md:text-base ${activeTab === 'rewards' ? 'text-secondary' : 'text-foreground/70'}`}
                  >
                    Rewards
                  </TabsTrigger>
                </TabsList>
                
                <div className="p-8">
                  <TabsContent value="registration" className="mt-0 animate-in slide-in-from-left-10 duration-300">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-orbitron font-bold mb-4 text-primary">Registration & Approval Process</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-orbitron text-secondary mb-2">Overview:</h4>
                            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
                              <li>Players must register using the official form linked on our website.</li>
                              <li>Required details: Name, Free Fire UID, UPI ID, Email, and WhatsApp number.</li>
                              <li>Choose payment mode: Online or Offline.</li>
                              <li>Entry fee: ₹30 per participant.</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-orbitron text-secondary mb-2">Approval Process:</h4>
                            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
                              <li>Your form will be reviewed within a few hours.</li>
                              <li>Only users who have completed payment will be approved.</li>
                              <li>Upon approval, we will notify you via WhatsApp or email with further details.</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-orbitron text-secondary mb-2">Important Notes:</h4>
                            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
                              <li>Duplicate or false information will lead to rejection or permanent ban.</li>
                              <li>Make sure your contact details are correct for timely communication.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="evaluation" className="mt-0 animate-in slide-in-from-left-10 duration-300">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-orbitron font-bold mb-4 text-primary">In-Game Rules & Evaluation</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-orbitron text-secondary mb-2">Match Instructions:</h4>
                            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
                              <li>Custom room details will be shared privately before the match.</li>
                              <li>Players must enter the room on time. Late entries will not be allowed.</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-orbitron text-secondary mb-2">Gameplay Rules:</h4>
                            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
                              <li>Strictly no hacking, teaming, or use of cheats/mods.</li>
                              <li>Using unfair advantages will result in an immediate ban.</li>
                              <li>Respect other players and follow Free Fire's Code of Conduct.</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-orbitron text-secondary mb-2">Post-Game Evaluation:</h4>
                            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
                              <li>Screenshot of the match history showing your kill count and result is mandatory.</li>
                              <li>Upload or send this screenshot within 4 hours of match end.</li>
                              <li>Your rewards are calculated based on this screenshot.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="rewards" className="mt-0 animate-in slide-in-from-left-10 duration-300">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-orbitron font-bold mb-4 text-primary">Reward System</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-orbitron text-secondary mb-2">Payout Breakdown:</h4>
                            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
                              <li>₹15 per kill.</li>
                              <li>₹40 bonus for Booyah (match victory).</li>
                              <li>Rewards will be summed and paid post-verification.</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-orbitron text-secondary mb-2">Reward Modes:</h4>
                            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
                              <li>Rewards are sent via UPI or Gift Cards based on your selection.</li>
                              <li>Gift cards must be redeemed immediately after receiving. Delays are not our responsibility.</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-orbitron text-secondary mb-2">Disqualification Clauses:</h4>
                            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
                              <li>Failure to send match screenshot = No rewards.</li>
                              <li>Misleading screenshots = Disqualification.</li>
                              <li>Abusive behavior or false claims = Ban from future tournaments.</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-orbitron text-secondary mb-2">Additional Notes:</h4>
                            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
                              <li>Duo and squad tournament reward structures will be revealed soon.</li>
                              <li>Check the <Link to="/faqs" className="text-secondary hover:text-secondary/80 transition-all duration-300">FAQ</Link> section or <Link to="/support" className="text-secondary hover:text-secondary/80 transition-all duration-300">contact support</Link> for payment delays or any other issues.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </motion.div>
            
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
                  Still confused? View FAQs
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
      </main>
      <Footer />
    </div>
  );
}