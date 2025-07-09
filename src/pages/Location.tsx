import { motion } from 'framer-motion';

const Location = () => {
  const landmarks = [
    {
      name: "City Center",
      distance: "5 minutes walk",
      description: "Shopping, dining, and entertainment hub"
    },
    {
      name: "Central Market",
      distance: "3 minutes walk",
      description: "Fresh local produce and traditional crafts"
    },
    {
      name: "Cultural Museum",
      distance: "10 minutes walk",
      description: "Rich history and local heritage exhibits"
    },
    {
      name: "Business District",
      distance: "15 minutes drive",
      description: "Corporate offices and conference centers"
    },
    {
      name: "Airport",
      distance: "45 minutes drive",
      description: "International and domestic flights"
    },
    {
      name: "Public Transport",
      distance: "2 minutes walk",
      description: "Bus station with city-wide connections"
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
            Our Location
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Find "Danso Plaza Guest House" on Google Maps or book a ride with Bolt for convenient transportation options.
          </motion.p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-elegant"
            >
              {/* Placeholder Map - Replace with actual Google Maps embed */}
              <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <p className="text-primary font-medium mb-2">East Legon Boundary RD ext</p>
                  <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
                </div>
              </div>
              
              {/* Map overlay for demonstration */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
            </motion.div>

            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-light text-primary mb-6">
                  Perfectly Located
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Danso Plaza is strategically located in the heart of the city, 
                  offering you the perfect balance between urban convenience and 
                  peaceful retreat. Everything you need is within walking distance.
                </p>
              </div>

              {/* Address Info */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-elegant">
                <h3 className="text-lg font-medium text-primary mb-4">Address & Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <div>
                      <p className="font-medium text-foreground">123 Plaza Street</p>
                      <p className="text-muted-foreground">Central District, Accra, Ghana</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <div>
                      <p className="font-medium text-foreground">Check-in: 3:00 PM</p>
                      <p className="text-muted-foreground">Check-out: 11:00 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 7c0-1.1-.9-2-2-2h-3v2h3v5h-3v3h1l2 3V7zM9 5H6c-1.1 0-2 .9-2 2v12l2-3h1V8h3V5z"/>
                    </svg>
                    <div>
                      <p className="font-medium text-foreground">Free Parking Available</p>
                      <p className="text-muted-foreground">Secure on-site parking for guests</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-primary mb-4">
              Nearby Attractions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the vibrant surroundings with easy access to key destinations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landmarks.map((landmark, index) => (
              <motion.div
                key={landmark.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 shadow-elegant hover:shadow-gold transition-all duration-300"
              >
                <h3 className="text-lg font-medium text-primary mb-2">
                  {landmark.name}
                </h3>
                <p className="text-gold font-medium text-sm mb-3">
                  {landmark.distance}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {landmark.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Here */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-light text-primary mb-6"
          >
            Getting Here
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <h3 className="font-medium text-primary mb-2">By Car</h3>
              <p className="text-sm text-muted-foreground">
                Free parking available. GPS coordinates provided upon booking.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              <h3 className="font-medium text-primary mb-2">Public Transport</h3>
              <p className="text-sm text-muted-foreground">
                Bus station 2 minutes walk. Multiple city routes available.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
              </div>
              <h3 className="font-medium text-primary mb-2">From Airport</h3>
              <p className="text-sm text-muted-foreground">
                45-minute drive. Taxi and ride-share services readily available.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Location;