import { motion } from 'framer-motion';

export default function Scoringsys() {
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
        backgroundImage: "url('https://news.ultimatebattle.in/wp-content/uploads/2022/01/Garena-Free-Fire-New.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(10,10,10,0.8)"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
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
      </div>
    
    </section>
  );
}