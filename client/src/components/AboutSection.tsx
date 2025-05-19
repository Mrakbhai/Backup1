import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card section-reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-primary">ABOUT</span>{" "}
            <span className="text-secondary">THE TOURNAMENT</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground opacity-90">
            Join the most prestigious Free Fire tournament and compete against the best players from around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: <Trophy className="w-8 h-8" />,
              title: "PRIZE POOL",
              description: "Compete for a massive prize pool of $100,000, with the winner taking home $50,000 and the title of FF Max Pro Champion."
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "PARTICIPATION",
              description: "Join as a solo player, duo, or squad. Solo players will be matched with others to form balanced teams for the tournament."
            },
            {
              icon: <Calendar className="w-8 h-8" />,
              title: "SCHEDULE",
              description: "Qualifiers start June 15, with the main tournament running July 1-10. Grand Finals will be held live on July 15th."
            }
          ].map((card, index) => (
            <motion.div 
              key={index}
              className="bg-card bg-opacity-50 rounded-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-primary border-opacity-20"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={index}
            >
              <div className="text-primary text-3xl mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-4 text-foreground">{card.title}</h3>
              <p className="text-foreground opacity-80">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Tournament Highlights */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Pro Gamer in Tournament" 
              className="rounded-lg shadow-2xl w-full transform transition-all duration-500 hover:scale-105"
            />
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-6 text-primary">TOURNAMENT HIGHLIGHTS</h3>
            <ul className="space-y-4">
              {[
                "Live-streamed matches with professional commentators",
                "Custom maps and special game modes exclusive to the tournament",
                "Limited-edition in-game items for all participants",
                "Opportunity to be scouted by professional esports organizations",
                "Grand Finals event with audience and exclusive afterparty"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary mr-3 mt-1"><CheckCircle className="w-5 h-5" /></span>
                  <span className="text-foreground opacity-90">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="mt-8 bg-primary text-primary-foreground py-3 px-8 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 glow-btn">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
