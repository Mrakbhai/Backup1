import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SupportSection from '../components/sections/SupportSection';

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 pt-16">
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}
