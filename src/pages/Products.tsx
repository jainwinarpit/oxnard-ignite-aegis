import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Eye, Zap, Hand, DoorOpen, Flame, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import productsImage from '@/assets/fire-products.jpg';

const Products = () => {
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

  const products = [
    {
      icon: Shield,
      title: 'Glass to Glass Joint Seals',
      description: 'High-performance sealing solutions for glass-to-glass connections, providing excellent fire resistance and acoustic insulation for modern architectural applications.',
      features: ['Fire-resistant up to 120 minutes', 'Excellent acoustic properties', 'Weather-resistant design', 'Easy installation'],
      category: 'Fire Protection',
      image: productsImage
    },
    {
      icon: Eye,
      title: 'Glazing Seals',
      description: 'Premium glazing seals designed to provide superior weatherproofing and thermal insulation while maintaining aesthetic appeal in commercial and residential buildings.',
      features: ['Superior weatherproofing', 'Thermal insulation', 'UV resistance', 'Long-lasting durability'],
      category: 'Sealing Solutions',
      image: productsImage
    },
    {
      icon: Shield,
      title: 'Safety & Fire Rated Glasses',
      description: 'Certified fire-rated glass solutions offering maximum protection without compromising visibility, suitable for various commercial and industrial applications.',
      features: ['Fire rating up to 180 minutes', 'Impact resistant', 'Clear visibility', 'Safety certified'],
      category: 'Fire Protection',
      image: productsImage
    },
    {
      icon: Lock,
      title: 'Ironmongery Protection',
      description: 'Specialized protective solutions for door hardware and ironmongery, ensuring fire safety compliance while maintaining functionality and security.',
      features: ['Hardware protection', 'Fire compliance', 'Security maintenance', 'Easy retrofitting'],
      category: 'Protection Systems',
      image: productsImage
    },
    {
      icon: Hand,
      title: 'Finger Guard',
      description: 'Safety finger guard systems designed to prevent injuries around doors and windows while maintaining fire safety standards in high-traffic areas.',
      features: ['Injury prevention', 'Fire safety compliant', 'High-traffic durability', 'Easy maintenance'],
      category: 'Safety Systems',
      image: productsImage
    },
    {
      icon: DoorOpen,
      title: 'Threshold Plates',
      description: 'Robust threshold plate systems providing smooth transitions and fire-resistant barriers at doorways and openings in commercial and industrial buildings.',
      features: ['Smooth transitions', 'Fire-resistant barriers', 'Heavy-duty construction', 'Slip-resistant surface'],
      category: 'Access Solutions',
      image: productsImage
    },
    {
      icon: Flame,
      title: 'Fire Stopping Products',
      description: 'Comprehensive range of fire stopping materials and systems designed to seal penetrations and joints, preventing fire and smoke spread throughout buildings.',
      features: ['Complete fire stopping', 'Smoke containment', 'Multiple applications', 'Code compliant'],
      category: 'Fire Protection',
      image: productsImage
    }
  ];

  const categories = ['All Products', 'Fire Protection', 'Sealing Solutions', 'Protection Systems', 'Safety Systems', 'Access Solutions'];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto fade-in-section">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products – Trusted <span className="gradient-text">Fire Protection & Acoustic Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover our comprehensive range of high-performance fire protection and acoustic sealing products, designed to meet the most demanding safety and performance requirements in modern construction.
            </p>
            <Link to="/contact">
              <Button className="btn-hero text-lg px-8 py-6">
                Request Product Information
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Product <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Browse our products by category to find the perfect solution for your project
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16 fade-in-section">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`px-6 py-2 text-sm font-medium cursor-pointer transition-all duration-200 hover:scale-105 ${
                  index === 0 
                    ? 'bg-gradient-to-r from-brand-cyan to-brand-blue text-white border-0' 
                    : 'hover:bg-muted'
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover-card glass-card fade-in-section" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-brand-cyan to-brand-blue text-white border-0">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <product.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link to="/contact" className="flex-1">
                      <Button variant="outline" className="w-full hover:bg-muted">
                        Get Quote
                      </Button>
                    </Link>
                    <Button className="btn-hero px-4">
                      <Zap className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our <span className="gradient-text">Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry-leading performance, reliability, and compliance in every product we supply
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Fire Safety Certified',
                description: 'All products meet international fire safety standards and building codes'
              },
              {
                icon: Award,
                title: 'Premium Quality',
                description: 'High-grade materials ensuring long-lasting performance and reliability'
              },
              {
                icon: Zap,
                title: 'Easy Installation',
                description: 'Designed for straightforward installation with comprehensive support'
              },
              {
                icon: Eye,
                title: 'Aesthetic Appeal',
                description: 'Seamless integration with modern architectural designs and finishes'
              }
            ].map((benefit, index) => (
              <Card key={index} className="glass-card hover-card fade-in-section text-center" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Technical <span className="gradient-text">Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our products are engineered to meet and exceed industry standards, providing reliable performance in the most demanding environments. Each product undergoes rigorous testing to ensure compliance with international fire safety and building codes.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Fire resistance ratings up to 180 minutes',
                  'Acoustic performance ratings available',
                  'Weather and UV resistance tested',
                  'Thermal performance certification',
                  'Structural integrity validation'
                ].map((spec, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full"></div>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="btn-hero">
                  Request Technical Data
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="fade-in-section lg:pl-8" style={{ animationDelay: '200ms' }}>
              <img 
                src={productsImage} 
                alt="Technical Excellence"
                className="w-full h-96 object-cover rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">
        <div className="container-custom text-center text-white">
          <div className="max-w-3xl mx-auto fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our expert team is ready to help you select the perfect fire protection and sealing solutions for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90 font-semibold px-8 py-6">
                  Contact Our Experts
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

export default Products;