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
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        
        <div className="relative container-custom text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Welcome to{' '}
              <span className="gradient-text">
                Oxnard Trading & Contracting
              </span>
            </h1>
            <div className="space-y-2 mb-4 animate-slide-up [animation-delay:200ms]">
              <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground">
                High-Performance Passive Fire Protection & Acoustic Solutions
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl animate-slide-up [animation-delay:400ms]">
              We provide high-performance passive fire protection and acoustic seals designed for the most demanding applications. Our products form a critical component of fire-resistant and smoke-containment systems, while delivering exceptional acoustic properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:600ms]">
              <Link to="/services">
                <Button className="btn-hero text-lg px-8 py-6">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:bg-muted">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive <span className="gradient-text">Fire Protection Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From premium products to expert services, we deliver complete fire safety and acoustic solutions tailored to your project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-card glass-card fade-in-section" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{feature.description}</p>
                  <Link to={feature.link}>
                    <Button variant="ghost" className="p-0 h-auto font-semibold text-brand-cyan hover:text-brand-blue">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in-section" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by leading construction and development companies across Qatar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card hover-card fade-in-section" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="gradient-text">Quality Assurance</span> & Certifications
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['ISO 9001 Certified', 'Qatar Safety Standards', 'Fire Protection Association', 'Building Code Compliance'].map((cert, index) => (
                <div key={index} className="flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-brand-cyan" />
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">
        <div className="container-custom text-center text-white">
          <div className="max-w-3xl mx-auto fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Enhance Your Fire Protection?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with our team today to discuss your project requirements and receive a comprehensive quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90 font-semibold px-8 py-6">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-6">
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