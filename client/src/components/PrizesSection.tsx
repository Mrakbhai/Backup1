import { motion } from 'framer-motion';
import { Crown, Award, Medal } from 'lucide-react';

export default function PrizesSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="prizes" className="py-20 bg-gradient-to-b from-background to-card section-reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-primary">PRIZE</span>{" "}
            <span className="text-secondary">POOL</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground opacity-90">
            Battle for glory and a share of our massive $100,000 prize pool
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            {/* Second Place */}
            <motion.div 
              className="transform md:translate-y-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative bg-card rounded-lg overflow-hidden border-2 border-accent shadow-xl transition-transform duration-300 hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 text-center py-2 bg-accent text-accent-foreground font-orbitron font-bold">
                  2ND PLACE
                </div>
                <div className="p-6 pt-14 text-center">
                  <div className="text-5xl text-accent font-orbitron font-bold">
                    $25,000
                  </div>
                  <div className="text-foreground opacity-90 mt-3">
                    + Special Edition In-Game Items
                  </div>
                  <div className="mt-4">
                    <Medal className="h-10 w-10 text-accent mx-auto" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* First Place */}
            <motion.div 
              className="z-10"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative bg-card rounded-lg overflow-hidden border-2 border-primary shadow-2xl transition-transform duration-300 hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 text-center py-3 bg-primary text-primary-foreground font-orbitron font-bold text-lg">
                  1ST PLACE
                </div>
                <div className="p-8 pt-16 text-center">
                  <div className="text-6xl text-primary font-orbitron font-bold">
                    $50,000
                  </div>
                  <div className="text-foreground opacity-90 mt-3">
                    + Championship Trophy + Exclusive Skins
                  </div>
                  <div className="mt-4">
                    <Crown className="h-12 w-12 text-primary mx-auto" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Third Place */}
            <motion.div 
              className="transform md:translate-y-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative bg-card rounded-lg overflow-hidden border-2 border-secondary shadow-xl transition-transform duration-300 hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 text-center py-2 bg-secondary text-secondary-foreground font-orbitron font-bold">
                  3RD PLACE
                </div>
                <div className="p-6 pt-14 text-center">
                  <div className="text-5xl text-secondary font-orbitron font-bold">
                    $15,000
                  </div>
                  <div className="text-foreground opacity-90 mt-3">
                    + Limited Edition Equipment
                  </div>
                  <div className="mt-4">
                    <Award className="h-10 w-10 text-secondary mx-auto" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Additional Prizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 w-full max-w-4xl">
            <motion.div 
              className="bg-card bg-opacity-70 rounded-lg p-6 border border-primary border-opacity-30"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-xl font-orbitron font-bold mb-4 text-foreground">4TH - 8TH PLACE</h3>
              <div className="text-2xl text-primary font-orbitron font-bold mb-2">
                $2,000
              </div>
              <p className="text-foreground opacity-80">
                Each team receives cash prize plus exclusive in-game weapon skins
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card bg-opacity-70 rounded-lg p-6 border border-primary border-opacity-30"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-xl font-orbitron font-bold mb-4 text-foreground">MVP AWARD</h3>
              <div className="text-2xl text-primary font-orbitron font-bold mb-2">
                $5,000
              </div>
              <p className="text-foreground opacity-80">
                Outstanding player with highest eliminations and damage dealt
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-16 text-center max-w-2xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="text-xl font-orbitron font-bold mb-4 text-secondary">BONUS PRIZES</h4>
            <p className="text-foreground opacity-90 mb-8">
              All registered players will receive exclusive FF Max Pro League commemorative items, including character skins, weapon skins, and emotes that will never be available again.
            </p>
            
            <a href="#register" className="inline-block bg-primary text-primary-foreground py-3 px-8 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 glow-btn">
              Register Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
