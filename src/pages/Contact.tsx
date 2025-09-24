import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['Barwa Tower, C-ring road', 'Alsaad, Doha, Qatar'],
      link: 'https://maps.google.com/?q=Barwa+Tower+Doha+Qatar'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+974 7010 9662'],
      link: 'tel:+97470109662'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['sales@oxnardtc.com'],
      link: 'mailto:sales@oxnardtc.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Sunday - Thursday: 8:00 AM - 6:00 PM', 'Friday - Saturday: Closed'],
      link: null
    }
  ];

  const services = [
    'Custom Joinery Seal Solutions',
    'Industrial Fire Safety Consultation',
    'Advanced Fire Protection Systems',
    'Glass to Glass Joint Seals',
    'Fire Stopping Products',
    'Safety & Fire Rated Glasses'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto fade-in-section">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="gradient-text">Our Expert Team</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We would love to hear from you! Get in touch for any inquiries or to discuss your project needs. Our office is located in the heart of Qatar, ready to assist you with all your fire safety and joinery needs.
            </p>
            <p className="text-lg font-semibold gradient-text">
              Get in touch with our customer service for immediate assistance regarding our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-card hover-card fade-in-section text-center" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue mb-4">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {info.link && idx === 0 ? (
                          <a href={info.link} className="hover:text-brand-cyan transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in-section">
              <Card className="glass-card">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="+974 XXXX XXXX"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-1 resize-none"
                        placeholder="Please describe your project requirements, timeline, and any specific questions you have about our fire protection or joinery services..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="btn-hero w-full text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Services & Additional Info */}
            <div className="space-y-8 fade-in-section" style={{ animationDelay: '200ms' }}>
              <Card className="glass-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Our Services</h3>
                  <div className="space-y-3">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-brand-cyan flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-brand-cyan mb-2">Expert Consultation</h4>
                      <p className="text-muted-foreground text-sm">
                        Our experienced team provides comprehensive consultation to ensure your fire protection needs are met with the highest standards.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-blue mb-2">Quality Products</h4>
                      <p className="text-muted-foreground text-sm">
                        We supply only premium-grade fire protection and acoustic sealing products that meet international safety standards.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-purple mb-2">Professional Service</h4>
                      <p className="text-muted-foreground text-sm">
                        From initial consultation to project completion, we provide professional service and ongoing support for all your needs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit Our <span className="gradient-text">Office</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Doha, Qatar - easily accessible from all major areas
            </p>
          </div>

          <Card className="glass-card fade-in-section overflow-hidden">
            <div className="w-full h-96 bg-muted/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-brand-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Barwa Tower</h3>
                <p className="text-muted-foreground mb-4">C-ring road, Alsaad, Doha, Qatar</p>
                <a 
                  href="https://maps.google.com/?q=Barwa+Tower+Doha+Qatar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-hero">
                    View on Google Maps
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">
        <div className="container-custom text-center text-white">
          <div className="max-w-3xl mx-auto fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our team today and let us help you with your fire protection and acoustic sealing requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+97470109662">
                <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90 font-semibold px-8 py-6">
                  Call Us Now
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:sales@oxnardtc.com">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-6">
                  Send Email
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;