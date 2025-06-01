import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet";

export default function Privacy() {
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
  <title>Pro Booyah League - Privacy Policy</title>
  <meta
    name="description"
    content="Read our Privacy Policy to understand how we handle user data during tournament participation."
  />
  <meta
    name="keywords"
    content="FF Max Privacy, data policy, user privacy Free Fire, FF tournament privacy, esports data protection"
  />
  <meta property="og:title" content="Pro Booyah League - Privacy Policy" />
  <meta
    property="og:description"
    content="Our commitment to your privacy in Pro Booyah League. Learn what data we collect and how we use it."
  />
  <link rel="canonical" href="https://booyah.dailybyte.xyz/privacy" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://booyah.dailybyte.xyz/privacy" />
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
          id="privacy" 
          className="py-20 section-reveal revealed" 
          style={backgroundStyle}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
                <span className="text-primary">PRIVACY POLICY</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground opacity-90">
                How we collect, use, and protect your information
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
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">1. Data Collection</h3>
                  <p className="text-foreground/90">
                    We collect the following personal data:
                  </p>
                  <ul className="list-disc list-inside text-foreground/90 space-y-2 mt-2 ml-4">
                    <li>Name, Free Fire UID & In-Game Name</li>
                    <li>UPI ID or payment method details (for verification only)</li>
                    <li>Email and WhatsApp number</li>
                    <li>Game profile screenshot</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">2. Use of Data</h3>
                  <p className="text-foreground/90">
                    Your data is used for:
                  </p>
                  <ul className="list-disc list-inside text-foreground/90 space-y-2 mt-2 ml-4">
                    <li>Verifying your registration and payment</li>
                    <li>Contacting you with tournament updates</li>
                    <li>Distributing rewards</li>
                    <li>Improving our service</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">3. Data Storage</h3>
                  <p className="text-foreground/90">
                    All collected data is securely stored using Google Firebase and Google Forms. We do not sell or share your information with third parties.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">4. Communication</h3>
                  <p className="text-foreground/90">
                    You agree to receive WhatsApp and/or email notifications regarding tournament announcements, rules, and room codes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">5. Cookies & Logs</h3>
                  <p className="text-foreground/90">
                    Our site may use cookies or logging tools to improve your experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-primary">6. Third-Party Services</h3>
                  <p className="text-foreground/90">
                    We may use services such as Firebase or Google Forms that have their own privacy policies. You can refer to their terms separately.
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
                  Terms of Service
                </Link>
                <Link 
                  to="/license" 
                  className="inline-flex items-center text-xl font-orbitron font-bold text-secondary hover:text-secondary/80 transition-all duration-300"
                >
                  License Information
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