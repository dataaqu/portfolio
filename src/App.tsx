
import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Hero from './hero';

function App() {
  const [loading, setLoading] = useState(true);
  const [showHero, setShowHero] = useState(false);

  const handleLoaderComplete = () => {
    console.log('Loader completed!');
    // Add a small delay before starting hero transition
    setTimeout(() => {
      setLoading(false);
      // Trigger hero entrance after loader fades out
      setTimeout(() => {
        setShowHero(true);
      }, 300);
    }, 500);
  };

  const handleHeroContentReady = () => {
    console.log('Hero content ready!');
  };

  // Add a manual skip option for testing
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === ' ' && loading) { // Press spacebar to skip
        console.log('Manual skip triggered');
        handleLoaderComplete();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [loading]);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Loader - Shows first with fade out transition */}
      {loading && (
        <div className={`fixed inset-0 z-50 transition-opacity duration-1000 ${loading ? 'opacity-100' : 'opacity-0'}`}>
          <Loader onComplete={handleLoaderComplete} />
        </div>
      )}
      
      {/* Main Content - Shows after loader with smooth entrance */}
      {!loading && (
        <div className={`transition-all duration-1000 transform ${
          showHero 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}>
          {/* Hero Section - Primary content */}
          <div className={`transition-all duration-1200 delay-300 ${
            showHero 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-12'
          }`}>
            <Hero onContentReady={handleHeroContentReady} />
          </div>
          
          {/* Placeholder for additional components */}
          {/* You can add more components here */}
          
        </div>
      )}
      
   
    </div>
  );
}

export default App;
