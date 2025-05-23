import { motion } from 'framer-motion';

export default function Rewardex() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 0.7, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_CzR2GLHeUTZGU1PK0amwQm7peb1RyOy6eOu_tQdYhI_wefD8SL2i_G0&s=10")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section id="prizes" className="py-20 section-reveal" style={backgroundStyle}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mt-10">
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