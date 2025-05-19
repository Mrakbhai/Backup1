import { scrollToElement } from '@/lib/utils';
import { SiDiscord, SiInstagram, SiYoutube, SiTwitch } from 'react-icons/si';

export default function Footer() {
  const handleNavLinkClick = (id: string) => {
    scrollToElement(id);
  };

  return (
    <footer className="bg-background py-10 border-t border-primary border-opacity-20">
      <div className="container mx-auto px-4">
        {/* Sponsor Studios/League Logos */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center mb-2">
              <span className="text-primary font-orbitron text-lg font-bold">FF LEAGUES</span>
            </div>
            <span className="text-foreground opacity-60 text-xs">Official Partner</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center mb-2">
              <span className="text-secondary font-orbitron text-lg font-bold">XGAMING</span>
            </div>
            <span className="text-foreground opacity-60 text-xs">Tournament Host</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center mb-2">
              <span className="text-accent font-orbitron text-lg font-bold">PRO TECH</span>
            </div>
            <span className="text-foreground opacity-60 text-xs">Tech Sponsor</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center mb-2">
              <span className="text-primary font-orbitron text-lg font-bold">GFUEL</span>
            </div>
            <span className="text-foreground opacity-60 text-xs">Energy Sponsor</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-primary font-orbitron text-2xl font-bold tracking-wider">FF MAX <span className="text-secondary">PRO LEAGUE</span></span>
            </div>
            <p className="text-foreground opacity-80 mb-6 max-w-md">
              The ultimate Free Fire tournament experience bringing together the best players from around the world in an epic battle for glory and prizes.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors duration-300 text-xl">
                <SiDiscord />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors duration-300 text-xl">
                <SiInstagram />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors duration-300 text-xl">
                <SiYoutube />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors duration-300 text-xl">
                <SiTwitch />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-orbitron font-bold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About the League' },
                { id: 'register', label: 'Register' },
                { id: 'rules', label: 'Rules & Format' },
                { id: 'prizes', label: 'Prize Pool' },
                { id: 'community', label: 'Community' },
                { id: 'support', label: 'Support' }
              ].map(item => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className="text-foreground opacity-80 hover:text-primary transition-colors duration-300"
                    onClick={(e) => { e.preventDefault(); handleNavLinkClick(item.id); }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-orbitron font-bold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground opacity-80 hover:text-primary transition-colors duration-300">License Information</a></li>
              <li><a href="#" className="text-foreground opacity-80 hover:text-primary transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-foreground opacity-80 hover:text-primary transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground opacity-80 hover:text-primary transition-colors duration-300">Tournament Rules</a></li>
              <li><a href="#" className="text-foreground opacity-80 hover:text-primary transition-colors duration-300">Eligibility Requirements</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-foreground opacity-60 text-sm mb-2">
            &copy; {new Date().getFullYear()} FF Max Pro League. All rights reserved. Free Fire is a registered trademark of Garena.
          </p>
          <p className="text-foreground opacity-50 text-xs">
            This website is not affiliated with, endorsed by, or related to Garena or Free Fire. All game content, logos, and trademarks are the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
