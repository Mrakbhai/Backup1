import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Highlights() {
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Darken the image
    backgroundBlendMode: 'multiply',
  };


  return (
    <section id="about" className="py-20 section-reveal" style={backgroundStyle}>
      <div className="container mx-auto px-4">
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <img 
              src="https://news.ultimatebattle.in/wp-content/uploads/2022/01/Garena-Free-Fire-New.jpg" 
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