import { motion } from 'framer-motion';

export default function RulesSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <section 
      id="rules" 
      className="py-20 bg-card section-reveal" 
      style={{
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNzIUzkM7RlQ-Iqt15fAFmAdPQQbb9Jk6_w&usqp=CAU')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(10,10,10,0.5)"
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
        </div>
      </div>
    </section>
  );
}