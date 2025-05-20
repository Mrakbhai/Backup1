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
        backgroundImage: "url('https://news.ultimatebattle.in/wp-content/uploads/2022/01/Garena-Free-Fire-New.jpg",
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
                <h4 className="text-lg font-orbitron text-secondary mb-2">Participation Options</h4>
                <p className="text-foreground opacity-90">
                  Players can participate as solo contestants. All participants must be at least 11 years of age at the time of registration. Duo and squad options will be available soon.
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
                  Teams must be ready to play at given scheduled time. A 15-minute grace period will be given, after which penalties or disqualification may occur.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-orbitron text-secondary mb-2">Device Requirements</h4>
                <p className="text-foreground opacity-90">
                  Players are allowed to use any mobile device or emulator for tournaments. However, using multiple accounts or devices is restricted.
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
                <h4 className="text-lg font-orbitron text-secondary mb-2">Rewards & Prizes</h4>
                <ul className="text-foreground opacity-90 space-y-2">
                  <li><span className="text-primary font-semibold">Entry Fee:</span> ₹30 per participant</li>
                  <li><span className="text-primary font-semibold">Kill Reward:</span> ₹10 per elimination</li>
                  <li><span className="text-primary font-semibold">Booyah Bonus:</span> ₹10 additional for winning a match</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-orbitron text-secondary mb-2">Match Format</h4>
                <p className="text-foreground opacity-90">
                  Tournament will be conducted in standard Free Fire battle royale format:
                </p>
                <ul className="text-foreground opacity-90 space-y-2 mt-2">
                  <li><span className="text-primary font-semibold">Match Duration:</span> Approximately 20 minutes per game</li>
                  <li><span className="text-primary font-semibold">Map Rotation:</span> Bermuda, Kalahari, and Purgatory</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-orbitron text-secondary mb-2">Tournament Structure</h4>
                <p className="text-foreground opacity-90">
                  The tournament will be conducted in multiple stages:
                </p>
                <ol className="text-foreground opacity-90 space-y-2 mt-2 list-decimal list-inside">
                  <li>Registration Open: Players can register themeselves to compete in the tournament</li>
                  <li>Approval And Schedule: Organisers will approve players and then dates will be announced</li>
                  <li>Match and Evaluation: Matches will be held and organisers will evaluate the reward</li>
                  <li>Reward: Rewards will be given based on players performance</li>
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
