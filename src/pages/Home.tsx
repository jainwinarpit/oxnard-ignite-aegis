import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Wrench, Award, CheckCircle, Star, Users, Building, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-image.jpg';
import productsImage from '@/assets/fire-products.jpg';
import servicesImage from '@/assets/services-team.jpg';

const Home = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Our Products',
      description: 'Premium fire protection and acoustic seal solutions including glass joint seals, glazing seals, fire-rated glasses, and comprehensive fire stopping products.',
      image: productsImage,
      link: '/products'
    },
    {
      icon: Wrench,
      title: 'Our Services',
      description: 'Expert installation and consultation services from custom joinery seal solutions to advanced fire protection system planning and implementation.',
      image: servicesImage,
      link: '/services'
    },
    {
      icon: Award,
      title: 'Why Choose Us',
      description: 'Industry-leading expertise with cutting-edge fire protection technology, ensuring your projects meet the highest safety standards and building regulations.',
      image: heroImage,
      link: '/about'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Projects Completed' },
    { icon: Building, value: '15+', label: 'Years Experience' },
    { icon: Star, value: '99%', label: 'Client Satisfaction' },
    { icon: Clock, value: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      company: 'Qatar Construction Group',
      content: 'Outstanding fire protection solutions. Their expertise in passive fire systems helped us exceed safety compliance requirements.',
      rating: 5
    },
    {
      name: 'Sarah Mitchell',
      company: 'Doha Development Corp',
      content: 'Professional service from consultation to installation. Their acoustic sealing solutions transformed our building acoustics.',
      rating: 5
    },
    {
      name: 'Mohammad Hassan',
      company: 'Gulf Safety Solutions',
      content: 'Reliable partner for all our fire safety needs. Quality products and exceptional technical support throughout our projects.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/96 via-background/90 to-background/75" />
        </div>
        
        <div className="relative container-custom text-center lg:text-left">
          <div className="max-w-5xl mx-auto lg:mx-0">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 animate-fade-in">
              Welcome to{' '}
              <span className="gradient-text-vibrant block mt-2">
                Oxnard Trading & Contracting
              </span>
            </h1>
            <div className="space-y-3 mb-6 animate-slide-up [animation-delay:200ms]">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                High-Performance Passive Fire Protection & Acoustic Solutions
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl animate-slide-up [animation-delay:400ms] leading-relaxed">
              We provide high-performance passive fire protection and acoustic seals designed for the most demanding applications. Our products form a critical component of fire-resistant and smoke-containment systems, while delivering exceptional acoustic properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 animate-slide-up [animation-delay:600ms]">
              <Link to="/services">
                <Button variant="premium" size="xl" className="text-xl px-12 py-6 font-black">
                  Explore Our Services
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl" className="text-xl px-12 py-6 font-bold border-2 hover:shadow-glow">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding texture-bg-muted">
        <div className="container-custom">
          <div className="text-center mb-20 fade-in-section">
            <h2 className="font-heading text-4xl md:text-5xl font-black mb-6">
              Comprehensive <span className="gradient-text">Fire Protection Solutions</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From premium products to expert services, we deliver complete fire safety and acoustic solutions tailored to your project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <Card key={index} className="premium-card fade-in-section" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                      <feature.icon className="h-8 w-8 text-white icon-glow" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 relative z-10">
                  <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{feature.description}</p>
                  <Link to={feature.link}>
                    <Button variant="ghost" className="p-0 h-auto font-bold text-lg text-brand-cyan hover:text-brand-blue">
                      Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-texture opacity-30"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in-section" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-6 pulse-glow">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-3 font-heading">{stat.value}</div>
                <div className="text-white/90 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding texture-bg">
        <div className="container-custom">
          <div className="text-center mb-20 fade-in-section">
            <h2 className="font-heading text-4xl md:text-5xl font-black mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-2xl text-muted-foreground">
              Trusted by leading construction and development companies across Qatar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="premium-card fade-in-section" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-8 relative z-10">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-brand-orange text-brand-orange animate-bounce-in" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <p className="font-heading font-bold text-lg">{testimonial.name}</p>
                    <p className="text-brand-blue font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center fade-in-section">
            <h2 className="font-heading text-4xl md:text-5xl font-black mb-12">
              <span className="gradient-text">Quality Assurance</span> & Certifications
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              {['ISO 9001 Certified', 'Qatar Safety Standards', 'Fire Protection Association', 'Building Code Compliance'].map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 glass-card px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 animate-bounce-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <CheckCircle className="h-6 w-6 text-brand-green icon-glow" />
                  <span className="font-semibold text-lg">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-texture opacity-20"></div>
        <div className="container-custom text-center text-white relative z-10">
          <div className="max-w-4xl mx-auto fade-in-section">
            <h2 className="font-heading text-4xl md:text-5xl font-black mb-6">
              Ready to Enhance Your Fire Protection?
            </h2>
            <p className="text-2xl mb-12 opacity-95 leading-relaxed">
              Get in touch with our team today to discuss your project requirements and receive a comprehensive quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="xl" className="bg-white text-brand-blue hover:bg-white/90 font-black px-12 py-6 text-xl hover:scale-105 hover:shadow-glow transition-all duration-300">
                  Get Started Today
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="xl" className="border-2 border-white text-white hover:bg-white/10 px-12 py-6 text-xl font-bold hover:scale-105 transition-all duration-300">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;