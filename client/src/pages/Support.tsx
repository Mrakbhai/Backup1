import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SupportSection from '../components/sections/SupportSection';
import { Helmet } from "react-helmet";

export default function Support() {
  return (
    <>
      <Helmet>
        <title>Contact & Support - Pro Booyah League</title>
        <meta
          name="description"
          content="Need help or have questions? Reach out to our Pro Booyah League support team. We're here to assist you with tournament issues, registration, and rewards."
        />
        <link rel="canonical" href="https://booyah.dailybyte.xyz/support" />
        <meta
          name="keywords"
          content="FF Max support, Free Fire help, contact FF Max League, tournament support, customer service, Free Fire query"
        />
        <meta property="og:title" content="Contact & Support - Pro Booyah League" />
        <meta
          property="og:description"
          content="Need help with Pro Booyah League? Contact our team for support on rules, registration, or tournament issues."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://booyah.dailybyte.xyz/support" />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/1362394089378676847/1376225455266463896/Image.png?ex=68348d55&is=68333bd5&hm=a713cc89bb1ad34ca2f0b7e3dd640b2b4649a4d38dc7ca66a84f5087e00f7e28&"
        />
      </Helmet>
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 pt-16">
        <SupportSection />
      </main>
      <Footer />
    </div>
    </>
  );
}