import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Shield, Flame, CheckCircle, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import servicesImage from '@/assets/services-team.jpg';
import fireImage from '@/assets/fire-products.jpg';
import heroImage from '@/assets/hero-image.jpg';

const Services = () => {
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

  const services = [
    {
      icon: Wrench,
      title: 'Custom Joinery Seal Solutions',
      description: 'Our joinery seal services provide beautifully crafted solutions, ensuring a perfect balance between functionality and aesthetics, tailored to meet your space requirements.',
      features: [
        'Precision-engineered acoustic sealing systems',
        'Custom design and fabrication services',
        'High-performance weatherproofing solutions',
        'Aesthetic integration with architectural design',
        'Long-lasting durability and performance'
      ],
      image: servicesImage,
      benefits: [
        'Enhanced acoustic performance',
        'Improved energy efficiency',
        'Weather resistance',
        'Custom aesthetic appeal'
      ]
    },
    {
      icon: Shield,
      title: 'Industrial Fire Safety',
      description: 'We provide expert industrial fire safety consultancy to help you build a robust and reliable fire protection plan. Our team works with you to identify potential risks.',
      features: [
        'Comprehensive fire risk assessment',
        'Safety compliance consultation',
        'Emergency evacuation planning',
        'Fire safety training programs',
        'Ongoing safety monitoring and maintenance'
      ],
      image: fireImage,
      benefits: [
        'Regulatory compliance',
        'Risk mitigation',
        'Staff safety training',
        'Emergency preparedness'
      ]
    },
    {
      icon: Flame,
      title: 'Advanced Fire Protection',
      description: 'We offer consultation and supply for cutting-edge solutions designed to detect, contain, and suppress fires quickly and effectively.',
      features: [
        'State-of-the-art fire detection systems',
        'Advanced suppression technology',
        'Integrated building management systems',
        '24/7 monitoring and support',
        'Preventive maintenance programs'
      ],
      image: heroImage,
      benefits: [
        'Early fire detection',
        'Rapid response systems',
        'Property protection',
        'Life safety assurance'
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We begin with a comprehensive assessment of your project requirements and safety objectives.'
    },
    {
      step: '02',
      title: 'Custom Design',
      description: 'Our experts develop tailored solutions that meet your specific needs and compliance requirements.'
    },
    {
      step: '03',
      title: 'Professional Installation',
      description: 'Our certified technicians ensure precise installation with minimal disruption to your operations.'
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'We provide continuous maintenance and support to ensure long-term performance and compliance.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto fade-in-section">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services – Tailored <span className="gradient-text">Fire Protection & Joinery Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore our comprehensive range of services tailored to enhance safety and quality in construction. Our team of experts is dedicated to delivering exceptional fire protection systems and finely crafted joinery tailored to your specific needs.
            </p>
            <Link to="/contact">
              <Button className="btn-hero text-lg px-8 py-6">
                Request Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          {services.map((service, index) => (
            <div key={index} className="mb-20 last:mb-0">
              <Card className="glass-card hover-card fade-in-section overflow-hidden" style={{ animationDelay: `${index * 200}ms` }}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <service.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  
                  <CardContent className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3 text-lg">Key Features:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-brand-cyan mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="font-semibold mb-3 text-lg">Benefits:</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link to="/contact">
                      <Button className="btn-hero">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Service Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring quality delivery from consultation to ongoing support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="glass-card hover-card fade-in-section text-center" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold gradient-text mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">Our Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Expert Team',
                description: 'Certified professionals with extensive experience in fire protection and safety systems'
              },
              {
                icon: Clock,
                title: '24/7 Support',
                description: 'Round-the-clock assistance and emergency response for all your fire safety needs'
              },
              {
                icon: CheckCircle,
                title: 'Quality Guaranteed',
                description: 'ISO certified processes ensuring the highest standards in all our service deliveries'
              },
              {
                icon: Users,
                title: 'Client-Focused',
                description: 'Personalized service approach tailored to meet your specific requirements and goals'
              }
            ].map((feature, index) => (
              <Card key={index} className="glass-card hover-card fade-in-section text-center" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">
        <div className="container-custom text-center text-white">
          <div className="max-w-3xl mx-auto fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Enhance Your Fire Safety?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our expert team today to discuss your fire protection and joinery requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90 font-semibold px-8 py-6">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-6">
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;