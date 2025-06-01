import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet";

export default function Eligibility() {
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
    <>
      <Helmet>
  <title>Pro Booyah League - Eligibility Criteria</title>
  <meta
    name="description"
    content="Check the eligibility criteria for joining the Pro Booyah League. Age, region, and account requirements explained."
  />
  <meta
    name="keywords"
    content="FF Max eligibility, who can join FF tournament, Free Fire player rules, esports age limit, eligibility for rewards"
  />
  <meta property="og:title" content="Pro Booyah League - Eligibility Criteria" />
  <meta
    property="og:description"
    content="Make sure you meet all criteria before registering for the tournament."
  />
  <link rel="canonical" href="https://booyah.dailybyte.xyz/eligibility" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://booyah.dailybyte.xyz/eligibility" />
  <meta
    property="og:image"
    content="https://cdn.discordapp.com/attachments/1362394089378676847/1376225455266463896/Image.png?ex=68348d55&is=68333bd5&hm=a713cc89bb1ad34ca2f0b7e3dd640b2b4649a4d38dc7ca66a84f5087e00f7e28&"
  />
</Helmet>
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 pt-16">
        <section 
          ref={sectionRef}
          id="eligibility" 
          className="py-20 section-reveal revealed" 
          style={backgroundStyle}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
                <span className="text-primary">ELIGIBILITY REQUIREMENTS</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground opacity-90">
                Who can participate in Free Fire Pro Max League tournaments
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
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">1. Age</h3>
                  <p className="text-foreground/90">
                    Participants must be 13 years or older. Players under 18 must have parental consent.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">2. Account Requirements</h3>
                  <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
                    <li>A valid Free Fire account (level 25+ preferred)</li>
                    <li>Proper in-game name and UID provided</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">3. Device</h3>
                  <p className="text-foreground/90">
                    Players can use mobile or emulator. Emulator players must clearly mention it during registration.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">4. Behavior</h3>
                  <p className="text-foreground/90">
                    Toxic behavior, cheating, teaming, or use of third-party tools is strictly prohibited and may lead to permanent bans.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">5. Screenshot Submission</h3>
                  <p className="text-foreground/90">
                    Participants must submit clear screenshots of the post-match stats from the match history after the tournament to validate rewards.
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
                  to="/terms" 
                  className="text-link"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2 rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Terms of Service
                </Link>
                <Link 
                  to="/rules" 
                  className="inline-flex items-center text-xl font-orbitron font-bold text-secondary hover:text-secondary/80 transition-all duration-300"
                >
                  Tournament Rules
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
    </>
  );
}