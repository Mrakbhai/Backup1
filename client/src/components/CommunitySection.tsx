import { motion } from 'framer-motion';
import { SiDiscord, SiInstagram, SiYoutube, SiWhatsapp } from 'react-icons/si';

export default function CommunitySection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  const socialTiles = [
    {
      title: "WhatsApp",
      description: "Join our WhatsApp group for instant updates and team coordination",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      icon: <SiWhatsapp className="text-2xl text-green-500" />,
      buttonText: "Join Group",
      buttonClass: "bg-green-600 hover:bg-green-700",
      link: "#"
    },
    {
      title: "Instagram",
      description: "Follow our Instagram for highlights, player spotlights, and behind-the-scenes content",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      icon: <SiInstagram className="text-2xl text-pink-500" />,
      buttonText: "Follow",
      buttonClass: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      link: "#"
    },
    {
      title: "YouTube",
      description: "Subscribe to our channel for match replays, tutorials, and tournament highlights",
      image: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      icon: <SiYoutube className="text-2xl text-red-600" />,
      buttonText: "Subscribe",
      buttonClass: "bg-red-600 hover:bg-red-700",
      link: "#"
    },
    {
      title: "Discord",
      description: "Join our Discord server to chat with other players, find teammates, and participate in community events",
      image: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      icon: <SiDiscord className="text-2xl text-indigo-500" />,
      buttonText: "Join Server",
      buttonClass: "bg-indigo-600 hover:bg-indigo-700",
      link: "#"
    }
  ];

    const backgroundStyle = {
        backgroundImage: 'url("https://w0.peakpx.com/wallpaper/104/473/HD-wallpaper-criminals-fire-juego.jpg")',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

  return (
    <section id="community" className="py-20 section-reveal" style={backgroundStyle}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-primary">COMMUNITY</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground opacity-90">
            Connect with fellow gamers and stay updated with the latest tournament news
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {socialTiles.map((tile, index) => (
            <motion.div
              key={index}
              className="social-tile bg-card rounded-lg overflow-hidden shadow-lg transition-all duration-300 border border-primary border-opacity-20 h-full"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={index}
            >
              <div className="relative h-48">
                <img src={tile.image} alt={`${tile.title} Community`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-orbitron font-bold text-foreground">{tile.title}</h3>
                  {tile.icon}
                </div>
                <p className="text-foreground opacity-80 mb-6">
                  {tile.description}
                </p>
                <a 
                  href={tile.link} 
                  className={`inline-block ${tile.buttonClass} text-white py-2 px-6 rounded font-rajdhani font-semibold transition-colors duration-300`}
                >
                  {tile.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-rajdhani text-foreground italic">
            "Discover the latest events in our radar here"
          </p>
        </div>
      </div>
    </section>
  );
}