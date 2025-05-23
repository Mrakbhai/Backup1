import { motion } from 'framer-motion';
import { Skull, Crown, Zap } from 'lucide-react';

export default function PrizesSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://i.pinimg.com/736x/d7/81/88/d7818834ac267e98441eb2c5d47e34d7.jpg")',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section id="prizes" className="py-20 section-reveal" style={backgroundStyle}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-primary">REWARDS</span>{" "}
            <span className="text-secondary">SYSTEM</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground opacity-90">
            Earn rewards based on your performance with our performance-based prize structure
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            {/* Entry Fee */}
            <motion.div 
              className="transform md:translate-y-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative bg-card rounded-lg overflow-hidden border-2 border-accent shadow-xl transition-transform duration-300 hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 text-center py-2 bg-accent text-accent-foreground font-orbitron font-bold">
                  ENTRY FEE
                </div>
                <div className="p-6 pt-14 text-center">
                  <div className="text-5xl text-accent font-orbitron font-bold">
                    ₹30
                  </div>
                  <div className="text-foreground opacity-90 mt-3">
                    Per participant to enter the tournament
                  </div>
                  <div className="mt-4">
                    <Zap className="h-10 w-10 text-accent mx-auto" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Kill Reward */}
            <motion.div 
              className="z-10"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative bg-card rounded-lg overflow-hidden border-2 border-primary shadow-2xl transition-transform duration-300 hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 text-center py-3 bg-primary text-primary-foreground font-orbitron font-bold text-lg">
                  KILL REWARD
                </div>
                <div className="p-8 pt-16 text-center">
                  <div className="text-6xl text-primary font-orbitron font-bold">
                    ₹15
                  </div>
                  <div className="text-foreground opacity-90 mt-3">
                    Per elimination during matches
                  </div>
                  <div className="mt-4">
                    <Skull className="h-12 w-12 text-primary mx-auto" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Booyah Bonus */}
            <motion.div 
              className="transform md:translate-y-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative bg-card rounded-lg overflow-hidden border-2 border-secondary shadow-xl transition-transform duration-300 hover:-translate-y-2">
                <div className="absolute top-0 left-0 right-0 text-center py-2 bg-secondary text-secondary-foreground font-orbitron font-bold">
                  BOOYAH BONUS
                </div>
                <div className="p-6 pt-14 text-center">
                  <div className="text-5xl text-secondary font-orbitron font-bold">
                    ₹40
                  </div>
                  <div className="text-foreground opacity-90 mt-3">
                    Extra reward for winning a match
                  </div>
                  <div className="mt-4">
                    <Crown className="h-10 w-10 text-secondary mx-auto" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}