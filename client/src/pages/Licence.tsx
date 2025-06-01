import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet";

export default function License() {
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
  <title>Pro Booyah League - License Information</title>
  <meta
    name="description"
    content="View licensing and attribution information for assets used in Pro Booyah League."
  />
  <meta
    name="keywords"
    content="FF Max license, open source credits, asset license info, tournament copyright"
  />
  <meta property="og:title" content="Pro Booyah League - License Information" />
  <meta
    property="og:description"
    content="Details about licenses and attributions for third-party assets used on this site."
  />
  <link rel="canonical" href="https://booyah.dailybyte.xyz/license" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://booyah.dailybyte.xyz/license" />
  <meta
    property="og:image"
    content="https://cdn.discordapp.com/attachments/1362394089378676847/1376225455266463896/Image.png?ex=68348d55&is=68333bd5&hm=a713cc89bb1ad34ca2f0b7e3dd640b2b4649a4d38dc7ca66a84f5087e00f7e28&"
  />
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
          id="license" 
          className="py-20 section-reveal revealed" 
          style={backgroundStyle}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
                <span className="text-primary">LICENSE INFORMATION</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground opacity-90">
                Intellectual property and usage rights information
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
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">Free Fire Content</h3>
                  <p className="text-foreground/90">
                    We do not claim ownership of any intellectual property belonging to Garena Free Fire.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">Use of Content</h3>
                  <p className="text-foreground/90">
                    We use promotional material (videos and images) only from Free Fire's official YouTube channel or site, with request for permission submitted.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">Firebase</h3>
                  <p className="text-foreground/90">
                    This platform uses Firebase services under the terms of Firebase's license agreement. For more, visit firebase.google.com/terms
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">Disclaimer</h3>
                  <p className="text-foreground/90">
                    This site and its tournaments are not endorsed or sponsored by Garena or any of its affiliates.
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
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2 rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms" 
                  className="inline-flex items-center text-xl font-orbitron font-bold text-secondary hover:text-secondary/80 transition-all duration-300"
                >
                  Terms of Service
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