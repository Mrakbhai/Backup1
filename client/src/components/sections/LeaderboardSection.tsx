import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define player data type
type PlayerData = {
  rank: number;
  name: string;
  matches: number;
  earnings: string;
  kills: number;
  booyahs: number;
}

export default function LeaderboardSection() {
  // Flag to show/hide the leaderboard (set to true to show "Coming Soon")
  const [isComingSoon, setIsComingSoon] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('revealed');
    }
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnihbHYJKKg_bAJHMGOjlzhRQWchXQc0EsTg&usqp=CAU")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'multiply',
  };

  // Mock player data (empty for now, will be filled later)
  const players: PlayerData[] = [
    { rank: 1, name: "Tornado", matches: 99, earnings: "₹4Cr", kills: 2547, booyahs: 856 },
    { rank: 2, name: "MrAKBhai", matches: 99, earnings: "₹4Cr", kills: 2659, booyahs: 856 },
    { rank: 3, name: "", matches: 0, earnings: "₹0", kills: 0, booyahs: 0 },
    { rank: 4, name: "", matches: 0, earnings: "₹0", kills: 0, booyahs: 0 },
    { rank: 5, name: "", matches: 0, earnings: "₹0", kills: 0, booyahs: 0 },
  ];

  // Function to get rank styling
  const getRankStyles = (rank: number) => {
  switch (rank) {
    case 1:
      return "text-yellow-400 font-extrabold text-2xl tracking-wide drop-shadow-md"; // Gold
    case 2:
      return "text-gray-300 font-bold text-xl tracking-wide"; // Silver
    case 3:
      return "text-yellow-700 font-semibold text-lg italic"; // Bronze
    default:
      return "text-foreground text-base"; // Default for 4th and 5th
  }
};

  return (
    <section id="leaderboard" className="py-20 section-reveal revealed" style={backgroundStyle} ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-primary">LEADER</span>{""}
            <span className="text-secondary">BOARD</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground opacity-90">
            Kings of the battlefield, check out the top performers in the Pro Booyah League
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <img 
              src="https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/27b1488da4b4e3ea559318f7e332ff20.jpg" 
              alt="Pro Gamer in Tournament" 
              className="rounded-lg shadow-2xl w-full transform transition-all duration-500 hover:scale-105"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/*<h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-6 text-primary">TOP PERFORMERS</h3>*/}

            {/* Leaderboard Table */}
            <div className="overflow-x-auto bg-background/20 backdrop-blur-sm rounded-lg border border-primary/30">
              <table className="w-full min-w-full table-auto">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="px-4 py-3 text-left text-secondary font-orbitron">Rank</th>
                    <th className="px-4 py-3 text-left text-secondary font-orbitron">Player Name</th>
                    <th className="px-4 py-3 text-left text-secondary font-orbitron">Matches</th>
                    <th className="px-4 py-3 text-left text-secondary font-orbitron">Earnings</th>
                    <th className="px-4 py-3 text-left text-secondary font-orbitron">Kills</th>
                    <th className="px-4 py-3 text-left text-secondary font-orbitron">Booyah</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player) => (
                    <tr key={player.rank} className="border-b border-primary/10 hover:bg-primary/5">
                      <td className={`px-4 py-3 ${getRankStyles(player.rank)}`}>{player.rank}</td>
                      <td className="px-4 py-3 text-foreground">{player.name}</td>
                      <td className="px-4 py-3 text-foreground">{player.matches}</td>
                      <td className="px-4 py-3 text-foreground">{player.earnings}</td>
                      <td className="px-4 py-3 text-foreground">{player.kills}</td>
                      <td className="px-4 py-3 text-foreground">{player.booyahs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Coming Soon Overlay */}
            {isComingSoon && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-sm rounded-lg">
                <div className="text-center">
                  <h3 className="text-3xl font-orbitron font-bold text-primary mb-2">COMING SOON</h3>
                  <p className="text-foreground/80">Leaderboard will be available after tournaments begin</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}