import { motion } from 'framer-motion';
import { RectangleEllipsis, Headset, Clock, MessageSquare } from 'lucide-react';

export default function faqs() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 0.7, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };
  const contactInfo = [
    {
      icon: <RectangleEllipsis className="w-5 h-5" />,
      info: "support@ffmaxproleague.com"
    },
    {
      icon: <Headset className="w-5 h-5" />,
      info: "Discord: FFMaxSupport#1234"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      info: "Support Hours: 24/7 during tournament days\n9 AM - 9 PM GMT on regular days"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      info: "Live chat available on our Discord server"
    }
  ];

  const backgroundStyle = {
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXrlw0Uce9jPaGAmZMh5BG6vdll09kqk0BLrJzHExjkWCeLR9UX4llRXd&s=10")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Adjust the overlay opacity as needed
    backgroundBlendMode: 'overlay',
  };

  return (
    <section id="support" className="py-20 section-reveal" style={backgroundStyle}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          <div>
            <motion.div 
              className="bg-background rounded-lg p-8 border border-primary border-opacity-20"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">CONTACT INFO</h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1 w-5">{item.icon}</span>
                    <span className="text-foreground whitespace-pre-line">{item.info}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}