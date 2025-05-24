import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function TermsOfService() {
  const sectionRef = useRef<HTMLElement>(null);
  
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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 pt-16">
        <section 
          ref={sectionRef}
          id="terms" 
          className="py-20 section-reveal revealed" 
          style={backgroundStyle}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
                <span className="text-primary">TERMS OF SERVICE</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground opacity-90">
                Please read these terms carefully before participating in our tournaments
              </p>
            </div>

            <motion.div 
              className="max-w-3xl mx-auto bg-background/80 backdrop-blur-sm rounded-lg p-8 border border-primary border-opacity-20"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">1. Acceptance of Terms</h3>
                  <p className="text-foreground/90">
                    By registering on the Free Fire Pro Max League website and participating in our tournaments, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">2. Eligibility</h3>
                  <p className="text-foreground/90">
                    Participation is open to all Free Fire players who meet the <Link to="/eligibility" className="text-secondary hover:text-secondary/80 transition-all duration-300">eligibility requirements</Link>.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">3. Registration & Approval</h3>
                  <p className="text-foreground/90">
                    To join a tournament, you must fill out the registration form and pay the entry fee. Approval is based on verification of your details and payment proof.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">4. Game Rules</h3>
                  <p className="text-foreground/90">
                    All matches must be played fairly and according to the in-game rules. Use of hacks, third-party software, or abusive behavior may result in disqualification.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">5. Rewards</h3>
                  <p className="text-foreground/90">
                    Players are rewarded based on their in-game performance (kills, Booyah). Reward distribution is done after verifying match stats shared via screenshot.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">6. Changes to Tournaments</h3>
                  <p className="text-foreground/90">
                    We reserve the right to modify, postpone, or cancel any tournament at our discretion due to unforeseen issues or lack of participants.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">7. Limitation of Liability</h3>
                  <p className="text-foreground/90">
                    We are not affiliated with Garena or Free Fire. We do not guarantee constant availability or error-free performance of this website or tournament services.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">8. Contact</h3>
                  <p className="text-foreground/90">
                    For support or concerns, please <Link to="/support" className="text-secondary hover:text-secondary/80 transition-all duration-300">contact us</Link> via WhatsApp or email listed on the Contact Us page.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <div className="text-center mt-12">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link 
                  to="/privacy" 
                  className="inline-flex items-center text-xl font-orbitron font-bold text-secondary hover:text-secondary/80 transition-all duration-300 mr-8"
                >
                  Privacy Policy
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
                <Link 
                  to="/eligibility" 
                  className="inline-flex items-center text-xl font-orbitron font-bold text-secondary hover:text-secondary/80 transition-all duration-300"
                >
                  Eligibility Requirements
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