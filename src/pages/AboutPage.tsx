import React from 'react';
import { Button } from '@/components/ui/enhanced-button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Clock, 
  Users, 
  Award,
  Target,
  Eye,
  Heart,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Ahmed Al-Rashid',
      role: 'Founder & CEO',
      experience: '15+ years in logistics',
      bio: 'Passionate about revolutionizing the moving industry in UAE with customer-first approach.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Sarah Mohammed',
      role: 'Operations Director',
      experience: '12+ years operations',
      bio: 'Ensures every move is executed flawlessly with attention to detail and safety.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Omar Hassan',
      role: 'Fleet Manager',
      experience: '10+ years fleet management',
      bio: 'Manages our modern fleet of trucks ensuring reliability and efficiency.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Fatima Al-Zahra',
      role: 'Customer Success Manager',
      experience: '8+ years customer service',
      bio: 'Dedicated to ensuring exceptional customer experience and satisfaction.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const coreValues = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We deliver on our promises, every single time, with unwavering commitment to excellence.',
      progress: 98
    },
    {
      icon: Clock,
      title: 'Efficiency',
      description: 'Time is valuable. We optimize every process to deliver fast, efficient moving solutions.',
      progress: 96
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction drives everything we do. We listen, adapt, and exceed expectations.',
      progress: 99
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'We handle your belongings as if they were our own, with utmost care and respect.',
      progress: 97
    }
  ];

  const milestones = [
    { year: '2018', event: 'Company Founded', desc: 'Started with a vision to transform moving services in UAE' },
    { year: '2019', event: '500+ Happy Customers', desc: 'Reached our first major milestone with excellent reviews' },
    { year: '2020', event: 'Expanded Fleet', desc: 'Doubled our truck fleet to serve more customers efficiently' },
    { year: '2021', event: 'All Emirates Coverage', desc: 'Extended services to cover all seven emirates' },
    { year: '2022', event: '5000+ Moves Completed', desc: 'Became UAE\'s trusted moving partner' },
    { year: '2023', event: '24/7 Service Launch', desc: 'Introduced round-the-clock emergency moving services' },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      {/* Header Section */}
      <section className="py-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground animate-slide-up">
            🏢 About Us
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
            UAE's Leading Moving Company
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up">
            Since 2018, Super Quick Movers has been transforming the moving experience across 
            the UAE with professional service, modern equipment, and customer-focused solutions.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Badge className="mb-4 bg-accent text-accent-foreground">
                Our Story
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Revolutionizing Moving Services in the UAE
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2018 with a simple mission: make moving stress-free, efficient, and affordable 
                for everyone in the UAE. What started as a small team with big dreams has grown into the 
                region's most trusted moving partner.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8">
                We combine traditional values of care and reliability with modern technology and equipment, 
                ensuring every move is handled with precision and professionalism.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Successful Moves</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99%</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Professional Team</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">7</div>
                  <div className="text-sm text-muted-foreground">Emirates Covered</div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="p-8 gradient-subtle border-2 border-primary/20">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="gradient-primary rounded-lg p-3">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To provide exceptional moving and logistics services that exceed customer 
                        expectations while maintaining the highest standards of professionalism and care.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary rounded-lg p-3">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                      <p className="text-muted-foreground">
                        To become the Middle East's leading moving company, known for innovation, 
                        reliability, and customer satisfaction across all service offerings.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Drives Us Every Day
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core values guide our decisions and shape every interaction with our customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-hover transition-smooth animate-scale-in">
                <div className="gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {value.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Excellence</span>
                    <span className="font-semibold">{value.progress}%</span>
                  </div>
                  <Progress value={value.progress} className="h-2" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the People Behind Super Quick Movers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to making your moving experience exceptional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-hover transition-smooth animate-fade-in">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.role}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <Badge className="mb-3 bg-secondary text-secondary-foreground text-xs">
                    {member.experience}
                  </Badge>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Key Milestones
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A timeline of our growth and achievements since inception
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} animate-slide-up`}>
                  <Card className={`w-full max-w-md p-6 ${index % 2 === 0 ? 'mr-auto lg:mr-8' : 'ml-auto lg:ml-8'}`}>
                    <div className="flex items-center mb-4">
                      <div className="gradient-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                        <div className="text-sm text-muted-foreground">Milestone</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                    <p className="text-muted-foreground text-sm">{milestone.desc}</p>
                  </Card>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Recognition
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Awards & Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognition from industry leaders and satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Best Moving Company 2023',
                desc: 'Dubai Business Excellence Awards',
                year: '2023'
              },
              {
                icon: Star,
                title: 'Customer Choice Award',
                desc: 'UAE Service Excellence Recognition',
                year: '2022'
              },
              {
                icon: Shield,
                title: 'Quality Assurance Certified',
                desc: 'ISO 9001:2015 Quality Management',
                year: '2021'
              }
            ].map((award, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-hover transition-smooth animate-scale-in">
                <div className="gradient-secondary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <award.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                <p className="text-muted-foreground mb-4">{award.desc}</p>
                
                <Badge className="bg-primary text-primary-foreground">
                  {award.year}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Super Quick Movers for their relocation needs.
          </p>
          <Button 
            variant="secondary" 
            size="xl"
            onClick={() => window.open('https://wa.me/+971559615397', '_blank')}
          >
            Start Your Move Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;