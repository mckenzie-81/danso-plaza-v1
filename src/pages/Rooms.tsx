import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Suite",
      tagline: "Spacious elegance with garden views",
      price: "From ₵500",
      image: "/photo3.png",
      features: ["King bed", "Garden view", "Private balcony", "Workspace"]
    },
    {
      id: 2,
      name: "Premium King",
      tagline: "Modern luxury with city convenience",
      price: "From ₵500",
      image: "/photo4.png",
      features: ["King bed", "City view", "Mini bar", "Smart TV"]
    },
    {
      id: 3,
      name: "Classic Double",
      tagline: "Comfortable retreat for two",
      price: "From ₵800",
      image: "/photo5.png",
      features: ["Queen bed", "Cozy seating", "Work desk", "Free WiFi"]
    },
    {
      id: 4,
      name: " Standard Bedroom",
      tagline: "Perfect for friends or colleagues",
      price: "From ₵500",
      image: "/photo6.png",
      features: ["Twin beds", "Shared workspace", "Ensuite bath", "Air conditioning"]
    },
    {
      id: 5,
      name: "Executive Studio",
      tagline: "Business comfort with style",
      price: "From ₵1,200",
      image: "/photo11.png",
      features: ["King bed", "Living area", "Kitchenette", "Business center"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-light text-primary mb-6"
          >
            Our Rooms
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Choose from our thoughtfully designed accommodations, 
            each offering a unique blend of comfort and style.
          </motion.p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-500 group-hover:scale-[1.02]">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {room.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-primary mb-2">
                      {room.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {room.tagline}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {room.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-lg"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/booking"
                      className="w-full btn-premium text-center block"
                    >
                      Book Room
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-primary-foreground mb-6"
          >
            Ready to Experience Comfort?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto"
          >
            Book your perfect stay today and discover the tranquility
            that awaits at Danso Plaza.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/booking"
              className="btn-premium bg-primary-foreground text-primary hover:shadow-gold px-10 py-4 text-lg"
            >
              Book Your Stay
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;