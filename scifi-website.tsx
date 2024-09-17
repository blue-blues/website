import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SciFiWebsite = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-blue-300 min-h-screen font-mono">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Hero />
            <Synopsis />
            <Characters />
            <CallToAction />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

const LoadingScreen = () => (
  <div className="flex items-center justify-center h-screen">
    <motion.div
      className="text-4xl"
      animate={{
        opacity: [0, 1, 0],
        transition: { duration: 2, repeat: Infinity },
      }}
    >
      Initializing...
    </motion.div>
  </div>
);

const Header = () => (
  <header className="bg-gray-900 p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <motion.div
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        NEBULA ODYSSEY
      </motion.div>
      <motion.ul
        className="flex space-x-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <li><a href="#synopsis" className="hover:text-blue-500">Synopsis</a></li>
        <li><a href="#characters" className="hover:text-blue-500">Characters</a></li>
        <li><a href="#cta" className="hover:text-blue-500">Join the Mission</a></li>
      </motion.ul>
    </nav>
  </header>
);

const Hero = () => (
  <section className="text-center py-20">
    <motion.h1
      className="text-6xl font-bold mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      NEBULA ODYSSEY
    </motion.h1>
    <motion.p
      className="text-xl mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      A journey beyond the stars awaits
    </motion.p>
    <motion.button
      className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Embark Now
    </motion.button>
  </section>
);

const Synopsis = () => (
  <section id="synopsis" className="mb-20">
    <h2 className="text-3xl font-bold mb-4">Synopsis</h2>
    <motion.p
      className="text-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      In the year 2185, humanity faces its greatest challenge yet. As Earth's resources dwindle, a team of elite explorers embarks on a perilous journey through an unstable wormhole. Their mission: to find a new home for humanity in a distant galaxy. But as they venture deeper into the unknown, they discover that they're not alone in the universe—and not everything is as it seems.
    </motion.p>
  </section>
);

const Characters = () => (
  <section id="characters" className="mb-20">
    <h2 className="text-3xl font-bold mb-4">Characters</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <CharacterCard name="Captain Aria Chen" role="Mission Commander" />
      <CharacterCard name="Dr. Zephyr Kane" role="Xenobiologist" />
      <CharacterCard name="Lex Novak" role="AI Specialist" />
    </div>
  </section>
);

const CharacterCard = ({ name, role }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p>{role}</p>
  </motion.div>
);

const CallToAction = () => (
  <section id="cta" className="text-center py-20">
    <motion.h2
      className="text-4xl font-bold mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Join the Mission
    </motion.h2>
    <motion.p
      className="text-xl mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Are you ready to explore the unknown?
    </motion.p>
    <motion.button
      className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Sign Up for Updates
    </motion.button>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-center p-4">
    <p>&copy; 2185 Nebula Odyssey. All rights reserved across the galaxy.</p>
  </footer>
);

export default SciFiWebsite;
