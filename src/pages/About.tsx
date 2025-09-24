import { useEffect } from 'react';
import { CheckCircle, Target, Eye, Award, Users, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import aboutImage from '@/assets/about-office.jpg';

const About = () => {
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

  const milestones = [
    { year: '2009', title: 'Company Founded', description: 'Established in Doha, Qatar with focus on fire protection' },
    { year: '2012', title: 'Major Expansion', description: 'Expanded services to include acoustic sealing solutions' },
    { year: '2016', title: 'Industry Recognition', description: 'Achieved ISO 9001 certification and Qatar safety standards' },
    { year: '2020', title: 'Technology Integration', description: 'Integrated cutting-edge fire protection technologies' },
    { year: '2024', title: 'Market Leadership', description: 'Leading provider of fire protection solutions in Qatar' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring the highest quality standards in fire protection and acoustic solutions.'
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'Our clients trust us to deliver consistent, dependable results that exceed expectations and ensure safety compliance.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We continuously invest in cutting-edge technologies and innovative solutions to stay ahead of industry requirements.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build lasting partnerships with our clients, working collaboratively to achieve their safety and construction goals.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Oxnard Trading & Contracting</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                For over 15 years, Oxnard Trading & Contracting has been Qatar's trusted partner in fire protection and acoustic solutions. We combine industry expertise with cutting-edge technology to deliver comprehensive safety systems that protect lives and property.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Based in Doha, Qatar, we serve clients across the region with high-performance passive fire protection systems, acoustic seals, and custom joinery solutions designed for the most demanding applications.
              </p>
              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-3xl font-bold gradient-text">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">99%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="fade-in-section lg:pl-8" style={{ animationDelay: '200ms' }}>
              <img 
                src={aboutImage} 
                alt="Oxnard Trading & Contracting Office"
                className="w-full h-96 object-cover rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="glass-card fade-in-section">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-brand-cyan mr-4" />
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide exceptional fire protection and acoustic sealing solutions that ensure the highest levels of safety and performance. We are committed to protecting lives, property, and investments through innovative products and expert services.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card fade-in-section" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-brand-blue mr-4" />
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading provider of fire protection and acoustic solutions in the Middle East, recognized for our innovation, quality, and unwavering commitment to safety excellence in every project we undertake.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Over 15 years of continuous growth, innovation, and excellence in fire protection services
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-brand-cyan to-brand-purple"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center mb-12 fade-in-section ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`} style={{ animationDelay: `${index * 200}ms` }}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12 text-left' : 'pr-12 text-right'}`}>
                    <Card className="glass-card hover-card">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Calendar className="h-5 w-5 text-brand-cyan mr-2" />
                          <span className="text-2xl font-bold gradient-text">{milestone.year}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full border-4 border-background"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-cyan to-brand-purple"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-20 pb-12 fade-in-section" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="absolute left-6 top-2 w-4 h-4 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full border-4 border-background"></div>
                  
                  <Card className="glass-card hover-card">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <Calendar className="h-5 w-5 text-brand-cyan mr-2" />
                        <span className="text-2xl font-bold gradient-text">{milestone.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass-card hover-card fade-in-section text-center" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Quality */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="gradient-text">Quality Assurance</span> & Certifications
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              We maintain the highest industry standards through rigorous quality control processes and internationally recognized certifications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'ISO 9001 Quality Management',
                'Qatar Civil Defence Approved',
                'Fire Protection Association Member',
                'Building Code Compliance Certified'
              ].map((cert, index) => (
                <Card key={index} className="glass-card hover-card fade-in-section" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-brand-cyan mx-auto mb-4" />
                    <p className="font-semibold">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;