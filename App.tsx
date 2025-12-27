
import React, { useState, useEffect } from 'react';
import { 
  Home, 
  LayoutGrid, 
  Sparkles, 
  Mail, 
  Github, 
  Twitter, 
  Instagram,
  Code2,
  Palette,
  Layers,
  Zap
} from 'lucide-react';
import { AppSection } from './types';
import Hero from './components/Hero';
import VisualBento from './components/VisualBento';
import GeminiMood from './components/GeminiMood';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case AppSection.HOME:
        return <Hero />;
      case AppSection.GALLERY:
        return <VisualBento />;
      case AppSection.INTERACT:
        return <GeminiMood />;
      case AppSection.CONTACT:
        return (
          <div className="min-h-screen flex items-center justify-center flex-col gap-12 pt-20">
            <div className="flex gap-8">
              {[Github, Twitter, Instagram, Mail].map((Icon, i) => (
                <button 
                  key={i}
                  className="p-6 rounded-full glass-panel hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-110"
                >
                  <Icon size={32} />
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 bg-[#050505]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${isScrolled ? 'opacity-50 hover:opacity-100' : 'opacity-100'}`}>
        <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-8">
          <button 
            onClick={() => setActiveSection(AppSection.HOME)}
            className={`transition-colors ${activeSection === AppSection.HOME ? 'text-blue-400' : 'text-zinc-500 hover:text-white'}`}
          >
            <Home size={20} />
          </button>
          <button 
            onClick={() => setActiveSection(AppSection.GALLERY)}
            className={`transition-colors ${activeSection === AppSection.GALLERY ? 'text-blue-400' : 'text-zinc-500 hover:text-white'}`}
          >
            <LayoutGrid size={20} />
          </button>
          <button 
            onClick={() => setActiveSection(AppSection.INTERACT)}
            className={`transition-colors ${activeSection === AppSection.INTERACT ? 'text-blue-400' : 'text-zinc-500 hover:text-white'}`}
          >
            <Sparkles size={20} />
          </button>
          <button 
            onClick={() => setActiveSection(AppSection.CONTACT)}
            className={`transition-colors ${activeSection === AppSection.CONTACT ? 'text-blue-400' : 'text-zinc-500 hover:text-white'}`}
          >
            <Mail size={20} />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6">
        {renderSection()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
