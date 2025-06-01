import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { UsersIcon, UserIcon, Users2Icon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet";

export default function Register() {
  const [activeTab, setActiveTab] = useState('battle-royale');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('revealed');
    }
  }, []);

  const handleSoloRegistration = () => {
    window.open('https://forms.gle/nGSrDTdrKkgH1yH37', '_blank');
  };

  const backgroundStyle = {
    backgroundImage: "url('https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/79ea79e6133a1d43367b7e00cd77c6b8.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundBlendMode: "overlay"
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
     <>
      <Helmet>
        <title>Register - Free Fire Tournament</title>
        <meta name="description" content="Register now for the Booyah Free Fire tournament. Earn ₹15 per kill and ₹40 for Booyah. Limited slots available!" />
        <link rel="canonical" href="https://booyah.dailybyte.xyz/register" />
        <meta name="keywords" content="Free Fire tournament, Booyah registration, register Free Fire, earn per kill, solo Free Fire league, Free Fire India 2025" />
        <meta property="og:title" content="Register - Free Fire Tournament" />
        <meta property="og:description" content="Secure your entry in India's best Free Fire tournament. ₹15/kill + ₹40 Booyah." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://booyah.dailybyte.xyz/register" />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/1362394089378676847/1376225455266463896/Image.png?ex=68348d55&is=68333bd5&hm=a713cc89bb1ad34ca2f0b7e3dd640b2b4649a4d38dc7ca66a84f5087e00f7e28&" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 pt-16">
        <section 
          ref={sectionRef}
          id="register" 
          className="py-20 bg-card section-reveal revealed bg-fixed bg-cover bg-center bg-opacity-90" 
          style={backgroundStyle}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto bg-card bg-opacity-80 p-8 md:p-12 rounded-lg border border-primary border-opacity-30 backdrop-blur-sm shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
                  <span className="text-primary">JOIN</span>{" "}
                  <span className="text-foreground">THE TOURNAMENT</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-lg text-foreground opacity-90 mb-2">
                  Before you proceed, make sure you take a look at our{" "}
                  <Link to="/rules" className="text-secondary hover:text-secondary/80 transition-all underline">
                    rules and regulations
                  </Link>
                </p>
              </div>

              <Tabs
                defaultValue="battle-royale" 
                value={activeTab}
                onValueChange={handleTabChange}
                className="w-full mt-8"
              >
                <div className="overflow-x-auto">
                  <TabsList className="w-full min-w-[300px] grid grid-cols-2 mb-8 bg-background/30">
                    <TabsTrigger 
                      value="battle-royale" 
                      className={`py-3 font-orbitron text-sm md:text-base ${activeTab === 'battle-royale' ? 'text-secondary' : 'text-foreground/70'}`}
                    >
                      BATTLE ROYALE
                    </TabsTrigger>
                    <TabsTrigger 
                      value="clash-squad" 
                      className={`py-3 font-orbitron text-sm md:text-base ${activeTab === 'clash-squad' ? 'text-secondary' : 'text-foreground/70'}`}
                    >
                      CLASH SQUAD
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="battle-royale" className="mt-0 animate-in fade-in-50 duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {/* Solo Registration Option */}
                    <motion.div
                      className="bg-background rounded-lg p-6 border border-primary border-opacity-30 flex flex-col items-center text-center hover:shadow-lg hover:border-primary transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-4">
                        <UserIcon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-orbitron font-bold mb-2">SOLO</h3>
                      <p className="text-foreground opacity-80 mb-6">
                        Register as an individual player and showcase your skills
                      </p>
                      <button 
                        onClick={handleSoloRegistration}
                        className="mt-auto bg-primary text-primary-foreground py-3 px-6 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 glow-btn w-full"
                      >
                        Register Solo
                      </button>
                    </motion.div>

                    {/* Duo Registration Option (Coming Soon) */}
                    <motion.div
                      className="bg-background rounded-lg p-6 border border-muted border-opacity-30 flex flex-col items-center text-center opacity-70"
                      whileHover={{ y: -2 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-muted bg-opacity-10 flex items-center justify-center mb-4">
                        <Users2Icon className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-orbitron font-bold mb-2">DUO</h3>
                      <p className="text-foreground opacity-80 mb-6">
                        Team up with a friend and dominate the battlefield
                      </p>
                      <button 
                        disabled
                        className="mt-auto bg-muted text-muted-foreground py-3 px-6 rounded font-orbitron font-bold uppercase tracking-wider w-full cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    </motion.div>

                    {/* Squad Registration Option (Coming Soon) */}
                    <motion.div
                      className="bg-background rounded-lg p-6 border border-muted border-opacity-30 flex flex-col items-center text-center opacity-70"
                      whileHover={{ y: -2 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-muted bg-opacity-10 flex items-center justify-center mb-4">
                        <UsersIcon className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-orbitron font-bold mb-2">SQUAD</h3>
                      <p className="text-foreground opacity-80 mb-6">
                        Form a 4-player squad and compete for the championship
                      </p>
                      <button 
                        disabled
                        className="mt-auto bg-muted text-muted-foreground py-3 px-6 rounded font-orbitron font-bold uppercase tracking-wider w-full cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    </motion.div>
                  </div>
                </TabsContent>

                <TabsContent value="clash-squad" className="mt-0 animate-in fade-in-50 duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {/* Solo Registration Option (Coming Soon) */}
                    <motion.div
                      className="bg-background rounded-lg p-6 border border-muted border-opacity-30 flex flex-col items-center text-center opacity-70"
                      whileHover={{ y: -2 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-muted bg-opacity-10 flex items-center justify-center mb-4">
                        <UserIcon className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-orbitron font-bold mb-2">SOLO</h3>
                      <p className="text-foreground opacity-80 mb-6">
                        Register as an individual player for Clash Squad mode
                      </p>
                      <button 
                        disabled
                        className="mt-auto bg-muted text-muted-foreground py-3 px-6 rounded font-orbitron font-bold uppercase tracking-wider w-full cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    </motion.div>

                    {/* Duo Registration Option (Coming Soon) */}
                    <motion.div
                      className="bg-background rounded-lg p-6 border border-muted border-opacity-30 flex flex-col items-center text-center opacity-70"
                      whileHover={{ y: -2 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-muted bg-opacity-10 flex items-center justify-center mb-4">
                        <Users2Icon className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-orbitron font-bold mb-2">DUO</h3>
                      <p className="text-foreground opacity-80 mb-6">
                        Team up with a friend for Clash Squad matches
                      </p>
                      <button 
                        disabled
                        className="mt-auto bg-muted text-muted-foreground py-3 px-6 rounded font-orbitron font-bold uppercase tracking-wider w-full cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    </motion.div>

                    {/* Squad Registration Option (Coming Soon) */}
                    <motion.div
                      className="bg-background rounded-lg p-6 border border-muted border-opacity-30 flex flex-col items-center text-center opacity-70"
                      whileHover={{ y: -2 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-muted bg-opacity-10 flex items-center justify-center mb-4">
                        <UsersIcon className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-orbitron font-bold mb-2">SQUAD</h3>
                      <p className="text-foreground opacity-80 mb-6">
                        Form a 4-player squad for Clash Squad tournaments
                      </p>
                      <button 
                        disabled
                        className="mt-auto bg-muted text-muted-foreground py-3 px-6 rounded font-orbitron font-bold uppercase tracking-wider w-full cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    </motion.div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-10 p-6 bg-background bg-opacity-40 rounded-lg border border-secondary border-opacity-20">
                <h4 className="text-lg font-orbitron font-bold mb-2 text-secondary">Registration Information</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground opacity-90">
                  <li>Registration forms are open! Register Now</li>
                  <li>Entry fee: <span className="text-primary font-semibold">30 rupees</span> per participant</li>
                  <li>You can register as a solo player now, with duo and squad options coming soon</li>
                  <li>All participants must be at least 13 years old to register</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
     </>
  );
}