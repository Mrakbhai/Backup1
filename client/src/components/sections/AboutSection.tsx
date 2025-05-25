import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar } from 'lucide-react';

export default function AboutSection() {
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
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVPVPbGxKXkICbKdPcUtQxOFTsMbUcMvNMHlSjL44Kh1FfwRXD0BPnTrr&s=10")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'multiply',
  };


  return (
    <section ref={sectionRef} id="about" className="py-20 section-reveal revealed" style={backgroundStyle}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-primary">ABOUT</span>{" "}
            <span className="text-secondary">THE TOURNAMENT</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground opacity-90">
            <Link href="/register" className="text-link">Join</Link> the most prestigious Free Fire tournament and compete for honors, glory, and money.
          </p>
        </div>

        {/* Added Featured Image Section */}
        <div className="mb-16">
          <motion.div
            className="overflow-hidden rounded-lg shadow-2xl border border-primary/20 max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <img 
              src="https://news.ultimatebattle.in/wp-content/uploads/2022/01/Garena-Free-Fire-New.jpg" 
              alt="Free Fire Tournament Action" 
              className="w-full h-auto object-cover transform transition-all duration-1000 hover:scale-105"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: <Trophy className="w-8 h-8" />,
              title: "PRIZE POOL",
              description: "Register and compete to win 15 rupees per kill you do and win additional 40 rupees for booyah."
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "PARTICIPATION",
              description: "Join as a solo player or form a team with friends. The more players, the more exciting the competition!"
            },
            {
              icon: <Calendar className="w-8 h-8" />,
              title: "SCHEDULE",
              description: <>Join our <a href="https://whatsapp.com/channel/0029VbAc0D82v1IvjhgviA2x" className="text-link hover:underline">WhatsApp channel</a> for match schedules. Matches will be held on Sundays.</>
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
      </div>
    </section>
  );
}