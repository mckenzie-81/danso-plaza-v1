import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
            <img
              src="/plaza-logo.png"
              alt="Danso Plaza Logo"
              className="h-8 w-auto"
            />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/booking"
              className="btn-premium text-sm px-6 py-2"
            >
              Book Stay
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 relative">
              <motion.span
                className="absolute block w-full h-0.5 bg-current transform transition-all duration-200"
                style={{
                  top: isOpen ? '50%' : '25%',
                  rotate: isOpen ? '45deg' : '0deg',
                  translateY: isOpen ? '-50%' : '0%',
                }}
              />
              <motion.span
                className="absolute block w-full h-0.5 bg-current transform transition-all duration-200"
                style={{
                  top: '50%',
                  translateY: '-50%',
                  opacity: isOpen ? 0 : 1,
                }}
              />
              <motion.span
                className="absolute block w-full h-0.5 bg-current transform transition-all duration-200"
                style={{
                  top: isOpen ? '50%' : '75%',
                  rotate: isOpen ? '-45deg' : '0deg',
                  translateY: isOpen ? '-50%' : '0%',
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/20"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium py-2 transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/booking"
                  onClick={() => setIsOpen(false)}
                  className="btn-premium text-sm px-6 py-3 mt-2 text-center"
                >
                  Book Stay
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;