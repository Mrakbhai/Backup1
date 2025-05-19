import { motion } from 'framer-motion';
import { UsersIcon, UserIcon, Users2Icon } from 'lucide-react';

export default function RegistrationSection() {
  const handleSoloRegistration = () => {
    window.open('https://forms.gle/nGSrDTdrKkgH1yH37', '_blank');
  };

  return (
    <section 
      id="register" 
      className="py-20 bg-card section-reveal" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1559300214-d9301317954f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto bg-card bg-opacity-80 p-8 md:p-12 rounded-lg border border-primary border-opacity-30 backdrop-blur-sm shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
              <span className="text-primary">JOIN</span>{" "}
              <span className="text-foreground">THE TOURNAMENT</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-foreground opacity-90">
              Choose how you want to participate in the FF Max Pro League and begin your journey to glory
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {/* Solo Registration Option */}
            <motion.div
              className="bg-background rounded-lg p-6 border border-primary border-opacity-30 flex flex-col items-center text-center hover:shadow-lg hover:border-primary transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-4">
                <UserIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-2">SOLO</h3>
              <p className="text-foreground opacity-80 mb-6">
                Register as an individual player and showcase your skills
              </p>
              <button 
                onClick={handleSoloRegistration}
                className="mt-auto bg-primary text-primary-foreground py-3 px-6 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 glow-btn w-full"
              >
                Register Solo
              </button>
            </motion.div>
            
            {/* Duo Registration Option (Coming Soon) */}
            <motion.div
              className="bg-background rounded-lg p-6 border border-muted border-opacity-30 flex flex-col items-center text-center opacity-70"
              whileHover={{ y: -2 }}
            >
              <div className="w-16 h-16 rounded-full bg-muted bg-opacity-10 flex items-center justify-center mb-4">
                <Users2Icon className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-2">DUO</h3>
              <p className="text-foreground opacity-80 mb-6">
                Team up with a friend and dominate the battlefield
              </p>
              <button 
                disabled
                className="mt-auto bg-muted text-muted-foreground py-3 px-6 rounded font-orbitron font-bold uppercase tracking-wider w-full cursor-not-allowed"
              >
                Coming Soon
              </button>
            </motion.div>
            
            {/* Squad Registration Option (Coming Soon) */}
            <motion.div
              className="bg-background rounded-lg p-6 border border-muted border-opacity-30 flex flex-col items-center text-center opacity-70"
              whileHover={{ y: -2 }}
            >
              <div className="w-16 h-16 rounded-full bg-muted bg-opacity-10 flex items-center justify-center mb-4">
                <UsersIcon className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-2">SQUAD</h3>
              <p className="text-foreground opacity-80 mb-6">
                Form a 4-player squad and compete for the championship
              </p>
              <button 
                disabled
                className="mt-auto bg-muted text-muted-foreground py-3 px-6 rounded font-orbitron font-bold uppercase tracking-wider w-full cursor-not-allowed"
              >
                Coming Soon
              </button>
            </motion.div>
          </div>
          
          <div className="mt-10 p-6 bg-background bg-opacity-40 rounded-lg border border-secondary border-opacity-20">
            <h4 className="text-lg font-orbitron font-bold mb-2 text-secondary">Registration Information</h4>
            <ul className="list-disc list-inside space-y-1 text-foreground opacity-90">
              <li>Registration closes on June 10, 2023 at 11:59 PM GMT</li>
              <li>You can register as a solo player now, with duo and squad options coming soon</li>
              <li>Solo players may be matched with other participants to form balanced teams</li>
              <li>All participants must be at least 16 years old to register</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
