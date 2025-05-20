import { motion } from 'framer-motion';
import { Skull, Crown, Zap } from 'lucide-react';

export default function PrizesSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/eca997db8be14cf1f096225ffc905697.jpg")',
    backgroundSize: 'cover',
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
                    ₹10
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
                    ₹10
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

          {/* Reward Example */}
          <motion.div 
            className="bg-card bg-opacity-80 rounded-lg p-8 border border-primary border-opacity-30 mt-16 w-full max-w-4xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-orbitron font-bold mb-4 text-foreground text-center">REWARDS EXAMPLE</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-muted pb-2">
                  <span className="text-foreground opacity-90">Entry Fee</span>
                  <span className="text-primary font-bold">₹30</span>
                </div>
                <div className="flex justify-between items-center border-b border-muted pb-2">
                  <span className="text-foreground opacity-90">5 Eliminations</span>
                  <span className="text-primary font-bold">₹50</span>
                </div>
                <div className="flex justify-between items-center border-b border-muted pb-2">
                  <span className="text-foreground opacity-90">1 Booyah</span>
                  <span className="text-primary font-bold">₹10</span>
                </div>
                <div className="flex justify-between items-center font-orbitron pt-2">
                  <span className="text-foreground font-bold">Total Earnings</span>
                  <span className="text-secondary font-bold text-xl">₹60</span>
                </div>
              </div>

              <div className="bg-background bg-opacity-40 p-4 rounded-lg">
                <p className="text-foreground opacity-90">
                  With a ₹30 entry fee, you can earn ₹10 for each elimination and an additional ₹10 bonus for achieving Booyah (victory). In this example, a player with 5 kills and 1 victory would earn ₹60 total!
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-16 text-center max-w-2xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="text-xl font-orbitron font-bold mb-4 text-secondary">PERFORMANCE-BASED REWARDS</h4>
            <p className="text-foreground opacity-90 mb-8">
              Our reward system encourages both strategic play and aggressive gameplay. The more eliminations you get and victories you secure, the higher your earnings will be!
            </p>

            <a href="#register" className="inline-block bg-primary text-primary-foreground py-3 px-8 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 glow-btn">
              Join Tournament
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}