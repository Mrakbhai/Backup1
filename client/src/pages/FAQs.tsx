import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../components/ui/accordion';
import { Helmet } from "react-helmet";

export default function FAQs() {
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
        <title>FF Max Pro League - Frequently Asked Questions</title>
        <meta
          name="description"
          content="Find answers to common questions about the FF Max Pro League, including registration, rewards, rules, and match details."
        />
        <link rel="canonical" href="https://booyah.dailybyte.xyz/faqs" />
        <meta
          name="keywords"
          content="Free Fire tournament FAQ, FF Max Pro League questions, registration help, prize info, match schedule, help center"
        />
        <meta
          property="og:title"
          content="FF Max Pro League - Frequently Asked Questions"
        />
        <meta
          property="og:description"
          content="Get clarity on how the FF Max Pro League works, what you can win, and how to participate effectively."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://booyah.dailybyte.xyz/faq" />
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
          id="faqs" 
          className="py-20 section-reveal revealed" 
          style={backgroundStyle}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
                <span className="text-primary">FREQUENTLY ASKED QUESTIONS</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground opacity-90">
                Find answers to the most common questions about Free Fire Pro Max League
              </p>
            </div>

            <motion.div 
              className="max-w-3xl mx-auto bg-background/80 backdrop-blur-sm rounded-lg p-8 border border-primary border-opacity-20"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border-b border-primary/30">
                  <AccordionTrigger className="text-lg font-orbitron text-secondary hover:text-secondary/90 py-4 no-underline hover:no-underline">
                    What is the Free Fire Pro Max League?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 max-h-[200px] overflow-y-auto custom-scrollbar">
                    <p className="pb-4">
                      The Free Fire Pro Max League is an online tournament platform where Free Fire players can compete in solo matches (duo and squad coming soon) for real cash rewards based on kills and victories.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-b border-primary/30">
                  <AccordionTrigger className="text-lg font-orbitron text-secondary hover:text-secondary/90 py-4 no-underline hover:no-underline">
                    What happens after I register?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 max-h-[200px] overflow-y-auto custom-scrollbar">
                    <p className="pb-4">
                      Your application will go into a pending/approval state. Our team will verify your payment and details. Once approved, you'll be notified via WhatsApp or email.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-b border-primary/30">
                  <AccordionTrigger className="text-lg font-orbitron text-secondary hover:text-secondary/90 py-4">
                    When are tournaments held?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 max-h-[200px] overflow-y-auto custom-scrollbar">
                    <p className="pb-4">
                      Tournaments are held whenever at least 10 participants are confirmed. We usually schedule them on Sundays, but dates may vary. You'll be notified in advance.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border-b border-primary/30">
                  <AccordionTrigger className="text-lg font-orbitron text-secondary hover:text-secondary/90 py-4">
                    How will I receive the room code?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 max-h-[200px] overflow-y-auto custom-scrollbar">
                    <p className="pb-4">
                      Once approved, you'll receive the custom room code privately via WhatsApp or email just before the match begins.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border-b border-primary/30">
                  <AccordionTrigger className="text-lg font-orbitron text-secondary hover:text-secondary/90 py-4">
                    How do you verify match performance?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 max-h-[200px] overflow-y-auto custom-scrollbar">
                    <p className="pb-4">
                      After the game, you must submit a screenshot of your match history showing kills and result. We also spectate whole gameplay. This helps us verify your rewards.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6" className="border-b border-primary/30">
                  <AccordionTrigger className="text-lg font-orbitron text-secondary hover:text-secondary/90 py-4">
                    Can I join multiple tournaments?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 max-h-[200px] overflow-y-auto custom-scrollbar">
                    <p className="pb-4">
                      Yes! You can join every tournament we host, as long as you register and pay the entry fee each time.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7" className="border-b border-primary/30">
                  <AccordionTrigger className="text-lg font-orbitron text-secondary hover:text-secondary/90 py-4">
                    How do I receive my reward?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 max-h-[200px] overflow-y-auto custom-scrollbar">
                    <p className="pb-4">
                      Rewards will be sent after we verify your results. We primarily use UPI or gift cards based on your chosen payment method.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-8" className="border-b border-primary/30">
                  <AccordionTrigger className="text-lg font-orbitron text-secondary hover:text-secondary/90 py-4">
                    What if my gift card doesn't work?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 max-h-[200px] overflow-y-auto custom-scrollbar">
                    <p className="pb-4">
                      You must redeem the gift card immediately upon receiving it. We are not responsible for gift cards that expire or are used after delay. Contact support within 24 hours if there's a genuine issue.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-9" className="border-b border-primary/30">
                  <AccordionTrigger className="text-lg font-orbitron text-secondary hover:text-secondary/90 py-4">
                    Can I pay offline?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 max-h-[200px] overflow-y-auto custom-scrollbar">
                    <p className="pb-4">
                      Yes, you can choose offline payment while registering. We will contact you for verification if needed.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-10" className="border-b border-primary/30">
                  <AccordionTrigger className="text-lg font-orbitron text-secondary hover:text-secondary/90 py-4">
                    What if I provide wrong information during registration?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 max-h-[200px] overflow-y-auto custom-scrollbar">
                    <p className="pb-4">
                      Incorrect details may lead to disqualification or rejection. Always double-check your UID and contact info before submitting.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-11" className="border-b border-primary/30">
                  <AccordionTrigger className="text-lg font-orbitron text-secondary hover:text-secondary/90 py-4">
                    Will there be duo and squad tournaments?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 max-h-[200px] overflow-y-auto custom-scrollbar">
                    <p className="pb-4">
                      Yes! Duo and Squad tournaments are coming soon. Stay updated by following our WhatsApp channel and website.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-12" className="border-b border-primary/30">
                  <AccordionTrigger className="text-lg font-orbitron text-secondary hover:text-secondary/90 py-4">
                    Where can I see the rules?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 max-h-[200px] overflow-y-auto custom-scrollbar">
                    <p className="pb-4">
                      Our rules are listed on the Rules & Regulations page and include:
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Registration process</li>
                        <li>Match conduct</li>
                        <li>Fair play policies</li>
                        <li>Reward system</li>
                      </ul>
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
            
            <div className="text-center mt-12">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link 
                  to="/support" 
                  className="inline-flex items-center text-xl font-orbitron font-bold text-secondary hover:text-secondary/80 transition-all duration-300"
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
                  DIDN'T FIND YOUR QUESTION? CONTACT US
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