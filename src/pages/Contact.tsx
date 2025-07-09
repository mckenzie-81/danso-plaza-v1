import { motion } from 'framer-motion';

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      title: "Call Us",
      description: "Speak directly with our team",
      value: "+233 24 317 2789",
      action: "tel:+233243172789"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: "Email Us",
      description: "Get detailed information",
      value: "hello@dansoplaza.com",
      action: "mailto:hello@dansoplaza.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
        </svg>
      ),
      title: "WhatsApp",
      description: "Quick chat support",
      value: "+233 24 317 2789",
      action: "https://wa.me/+233243172789"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
        </svg>
      ),
      title: "Instagram",
      description: "Follow our updates",
      value: "@dansoplaza",
      action: "https://instagram.com/dansoplaza"
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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We're here to help make your stay perfect. 
            Reach out with any questions or special requests.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : undefined}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border border-border rounded-3xl p-8 text-center shadow-elegant hover:shadow-gold transition-all duration-300 group-hover:scale-105 h-full">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-300">
                    <div className="text-primary-foreground group-hover:text-gold-foreground">
                      {method.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium text-primary mb-3 group-hover:text-gold transition-colors duration-300">
                    {method.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {method.description}
                  </p>
                  
                  <p className="text-primary font-medium group-hover:text-gold transition-colors duration-300">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 bg-primary">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light text-primary-foreground mb-6">
                Let's Make Your Stay Memorable
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                At Danso Plaza, every guest matters. Whether you need assistance 
                with bookings, have special dietary requirements, or want 
                recommendations for local attractions, our dedicated team is 
                ready to help.
              </p>
              <p className="text-primary-foreground/80 text-sm">
                We typically respond within 2 hours during business hours 
                (8 AM - 10 PM WAT) and within 12 hours outside business hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8"
            >
              <h3 className="text-xl font-medium text-primary-foreground mb-6">
                Quick Contact Info
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary-foreground/70 mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-primary-foreground font-medium">Address</p>
                    <p className="text-primary-foreground/80 text-sm">123 Plaza Street, Central District</p>
                    <p className="text-primary-foreground/80 text-sm">Accra, Ghana</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary-foreground/70 mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-primary-foreground font-medium">Hours</p>
                    <p className="text-primary-foreground/80 text-sm">Front Desk: 24/7</p>
                    <p className="text-primary-foreground/80 text-sm">Check-in: 3:00 PM | Check-out: 11:00 AM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary-foreground/70 mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 7c0-1.1-.9-2-2-2h-3v2h3v5h-3v3h1l2 3V7zM9 5H6c-1.1 0-2 .9-2 2v12l2-3h1V8h3V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-primary-foreground font-medium">Services</p>
                    <p className="text-primary-foreground/80 text-sm">Free WiFi, Parking, Concierge</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium text-primary mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-muted-foreground mb-6">
              For urgent matters or emergencies, please call us directly
            </p>
            <a
              href="tel:+23320123456"
              className="btn-premium inline-flex items-center gap-2 px-8 py-3"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call +233 24 317 2789
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;