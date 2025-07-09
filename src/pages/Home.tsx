import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
             backgroundImage: `url('/hero-image.png')` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-primary/10 to-primary/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground mb-6 leading-tight"
          >
            Relax in Comfort.
            <br />
            <span className="font-medium">Stay with Us.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Boutique stays designed for calm. Experience understated luxury
            in the heart of tranquility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/booking"
              className="btn-premium bg-primary-foreground text-primary hover:shadow-gold px-10 py-4 text-lg"
            >
              Book a Stay
            </Link>
            <Link
              to="/rooms"
              className="btn-ghost border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-10 py-4 text-lg"
            >
              View Rooms
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">
              Why Choose Danso Plaza
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every detail crafted for your comfort and peace of mind
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Comfort",
                description: "Thoughtfully designed spaces with luxury amenities and elegant furnishings for the perfect stay."
              },
              {
                title: "Serene Location",
                description: "Nestled in a peaceful setting that offers tranquility while keeping you connected to local attractions."
              },
              {
                title: "Personal Service",
                description: "Attentive hospitality that anticipates your needs and ensures an exceptional experience."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full shadow-elegant hover:shadow-gold transition-all duration-300">
                  <h3 className="text-xl font-medium text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;