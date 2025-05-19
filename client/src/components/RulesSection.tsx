import { motion } from 'framer-motion';

export default function RulesSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      id="rules" 
      className="py-20 bg-card section-reveal" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(10,10,10,0.8)"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-primary">TOURNAMENT</span>{" "}
            <span className="text-secondary">RULES</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground opacity-90">
            Familiarize yourself with our comprehensive tournament rules and guidelines
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          <motion.div 
            className="bg-card bg-opacity-80 rounded-lg p-8 backdrop-blur-sm border border-primary border-opacity-20"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">GENERAL RULES</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-orbitron text-secondary mb-2">Team Composition</h4>
                <p className="text-foreground opacity-90">
                  Teams must consist of exactly 4 players, with an optional substitute. All players must be at least 16 years of age at the time of registration.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-orbitron text-secondary mb-2">Fair Play</h4>
                <p className="text-foreground opacity-90">
                  Any form of cheating, hacking, or exploiting game bugs will result in immediate disqualification. Tournaments will be monitored by our anti-cheat system.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-orbitron text-secondary mb-2">Match Schedule</h4>
                <p className="text-foreground opacity-90">
                  Teams must be ready to play at their scheduled time. A 10-minute grace period will be given, after which penalties or disqualification may occur.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-orbitron text-secondary mb-2">Device Requirements</h4>
                <p className="text-foreground opacity-90">
                  Players may use any mobile device or emulator for qualifiers. For the main tournament, only mobile devices are allowed, and emulators are prohibited.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-card bg-opacity-80 rounded-lg p-8 backdrop-blur-sm border border-primary border-opacity-20"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">SCORING SYSTEM</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-orbitron text-secondary mb-2">Placement Points</h4>
                <ul className="text-foreground opacity-90 space-y-2">
                  <li><span className="text-primary font-semibold">1st Place:</span> 20 points</li>
                  <li><span className="text-primary font-semibold">2nd Place:</span> 14 points</li>
                  <li><span className="text-primary font-semibold">3rd Place:</span> 10 points</li>
                  <li><span className="text-primary font-semibold">4th-5th Place:</span> 7 points</li>
                  <li><span className="text-primary font-semibold">6th-8th Place:</span> 4 points</li>
                  <li><span className="text-primary font-semibold">9th-12th Place:</span> 2 points</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-orbitron text-secondary mb-2">Kill Points</h4>
                <p className="text-foreground opacity-90">
                  Each elimination awards 1 point to the team. Bonus points for multi-kills:
                </p>
                <ul className="text-foreground opacity-90 space-y-2 mt-2">
                  <li><span className="text-primary font-semibold">3+ kills in a row:</span> +1 bonus point</li>
                  <li><span className="text-primary font-semibold">Team wipe:</span> +2 bonus points</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-orbitron text-secondary mb-2">Tiebreakers</h4>
                <p className="text-foreground opacity-90">
                  In case of a tie in total points, the following tiebreakers will be applied in order:
                </p>
                <ol className="text-foreground opacity-90 space-y-2 mt-2 list-decimal list-inside">
                  <li>Total number of Booyahs (1st place finishes)</li>
                  <li>Total elimination points</li>
                  <li>Highest single-match score</li>
                  <li>Head-to-head performance</li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-block bg-transparent border-2 border-secondary text-secondary py-3 px-8 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-secondary hover:bg-opacity-10 transition-all duration-300 glow-btn-cyan">
            Download Full Rulebook
          </a>
        </div>
      </div>
    </section>
  );
}
