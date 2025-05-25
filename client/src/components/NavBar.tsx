import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useScrollThreshold } from '@/hooks/use-scroll';
import { scrollToElement } from '@/lib/utils';
import { useLocation, useRoute } from 'wouter';
import { Link } from 'wouter';
import { SiDiscord, SiInstagram, SiYoutube, SiWhatsapp } from 'react-icons/si';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollThreshold(50);
  const [location, setLocation] = useLocation();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('#mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const handleNavLinkClick = (id: string) => {
    setIsMenuOpen(false);
    setLocation(`/#${id}`);
  };

  const navigateToLearnMore = () => {
    setIsMenuOpen(false);
    window.location.href = '/learn-more';
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled && "bg-background shadow-md"
    )}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center z-10"
          onClick={(e) => { e.preventDefault(); handleNavLinkClick('home'); }}
        >
          <span className="text-primary font-orbitron text-xl md:text-2xl font-bold tracking-wider">
            FF MAX <span className="text-secondary">PRO LEAGUE</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {[
            { id: 'home', label: 'Home' },
            { id: 'register', label: 'Register' },
            { id: 'about', label: 'About' },
            { id: 'rules', label: 'Rules' },
            { id: 'prizes', label: 'Prizes' },
            { id: 'community', label: 'Community' },
            { id: 'support', label: 'Support' }
          ].map(item => (
            <a 
              href={location === '/' ? `#${item.id}` : `/?scrollTo=${item.id}`}
              className="nav-link text-foreground hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(item.id);
              }}
            >
              {item.label}
            </a>
          ))}

          <Link 
              href="/learn-more"
              className="nav-link text-foreground hover:text-secondary transition-colors duration-300"
            >
              Learn More
            </Link>

          <button 
            onClick={() => handleNavLinkClick('register')}
            className="bg-primary text-primary-foreground py-2 px-6 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 glow-btn"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button 
          id="mobile-menu-button"
          className="lg:hidden z-10 w-10 h-10 flex flex-col justify-center items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={cn(
            "block w-8 h-1 bg-foreground mb-2 transition-transform duration-300",
            isMenuOpen && "translate-y-3 rotate-45"
          )} />
          <span className={cn(
            "block w-8 h-1 bg-foreground mb-2 transition-opacity duration-300",
            isMenuOpen && "opacity-0"
          )} />
          <span className={cn(
            "block w-8 h-1 bg-foreground transition-transform duration-300",
            isMenuOpen && "-translate-y-3 -rotate-45"
          )} />
        </button>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={cn(
            "fixed top-0 right-0 bottom-0 w-3/4 bg-background bg-opacity-95 z-40 p-8 lg:hidden flex flex-col shadow-2xl transform transition-transform duration-500",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="mt-16 flex flex-col space-y-6">
            {[
              { id: 'home', label: 'Home', path: '/' },
              { id: 'register', label: 'Register', path: '/register' },
              { id: 'about', label: 'About', path: '/' },
              { id: 'rules', label: 'Rules', path: '/rules' },
              { id: 'prizes', label: 'Prizes', path: '/' },
              { id: 'community', label: 'Community', path: '/' },
              { id: 'support', label: 'Support', path: '/support' }
            ].map(item => (
              item.path === '/' ? (
                <a 
                  href={`#${item.id}`}
                  className="nav-link text-foreground hover:text-primary transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link 
                  href={item.path}
                  className="nav-link text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}


<Link
  href="/learn-more"
  className="text-xl font-orbitron text-foreground hover:text-secondary transition-colors duration-300 border-b border-muted pb-2"
>
  Learn More
</Link>

            <Link
              href="/register"
              className="mt-4 bg-primary text-primary-foreground py-3 px-6 rounded font-orbitron font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 glow-btn"
            >
              Join Now
            </Link>
          </div>

          <div className="mt-auto">
            <div className="flex items-center justify-start space-x-6 mt-8">
              <a href="#" className="text-foreground hover:text-primary text-2xl transition-colors duration-300">
                <SiDiscord />
              </a>
              <a href="#" className="text-foreground hover:text-primary text-2xl transition-colors duration-300">
                <SiInstagram />
              </a>
              <a href="https://youtube.com/@macrostrom?si=rtljS-G3zyMA-awv" className="text-foreground hover:text-primary text-2xl transition-colors duration-300">
                <SiYoutube />
              </a>
              <a href="https://whatsapp.com/channel/0029VbAc0D82v1IvjhgviA2x" className="text-foreground hover:text-primary text-2xl transition-colors duration-300">
                <SiWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}