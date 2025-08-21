import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/enhanced-button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Package, Home, Star, ArrowRight, CheckCircle, Clock, Users, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-truck.jpg';
import furnitureIcon from '@/assets/furniture-delivery.jpg';
import packageIcon from '@/assets/package-moving.jpg';
import storageIcon from '@/assets/storage-solutions.jpg';
const CounterBox = ({
  end,
  label
}: {
  end: number;
  label: string;
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev < end) {
          return prev + Math.ceil((end - prev) / 10);
        }
        return end;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [end]);
  return <div className="text-center animate-slide-up">
      <div className="text-4xl font-bold text-primary mb-2">{count}+</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>;
};
const ServiceCard = ({
  image,
  title,
  description,
  features
}: {
  image: string;
  title: string;
  description: string;
  features: string[];
}) => {
  return <Card className="group overflow-hidden hover:shadow-hover transition-smooth animate-scale-in">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-110 transition-smooth" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => <li key={index} className="flex items-center text-sm">
              <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              {feature}
            </li>)}
        </ul>
      </div>
    </Card>;
};
const HomePage = () => {
  const services = [{
    image: furnitureIcon,
    title: 'Furniture Delivery',
    description: 'Professional furniture moving and delivery services across UAE',
    features: ['Safe furniture handling', 'Assembly & disassembly', 'Protective wrapping', 'Same-day delivery']
  }, {
    image: packageIcon,
    title: 'Package Moving',
    description: 'Secure package transportation for businesses and individuals',
    features: ['Express delivery', 'Package tracking', 'Fragile item care', 'Bulk discounts']
  }, {
    image: storageIcon,
    title: 'Storage Solutions',
    description: 'Flexible storage options for temporary and long-term needs',
    features: ['Climate controlled', '24/7 security', 'Easy access', 'Flexible terms']
  }];
  return <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Professional moving services in UAE" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-secondary text-secondary-foreground animate-slide-up">
              🚚 UAE's Trusted Moving Partner
            </Badge>
            
            <h1 className="text-4xl font-bold mb-6 animate-slide-up text-neutral-300 md:text-5xl">Super Quick Movers</h1>
            
            <p className="text-xl text-white/90 mb-8 animate-slide-up">
              Professional truck rental and moving services across Dubai, Abu Dhabi, 
              and all Emirates. Fast, reliable, and affordable solutions for your 
              furniture delivery and relocation needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <Button variant="secondary" size="xl" onClick={() => window.open('https://wa.me/+971559615397', '_blank')}>
                Get Instant Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterBox end={1500} label="Happy Customers" />
            <CounterBox end={250} label="Daily Services" />
            <CounterBox end={15} label="Cities Covered" />
            <CounterBox end={99} label="Success Rate %" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What We Do Best
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From furniture delivery to complete relocations, we provide comprehensive 
              moving solutions tailored to your needs across the UAE.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => <ServiceCard key={index} {...service} />)}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Badge className="mb-4 bg-primary text-primary-foreground">
                Professional Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How We Handle Your Move
              </h2>
              
              <div className="space-y-6">
                {[{
                icon: Package,
                title: 'Packing & Preparation',
                desc: 'Professional packing with quality materials to ensure safety'
              }, {
                icon: Truck,
                title: 'Loading & Transport',
                desc: 'Careful loading and secure transportation with modern vehicles'
              }, {
                icon: Home,
                title: 'Delivery & Setup',
                desc: 'Safe unloading and placement exactly where you need it'
              }].map((step, index) => <div key={index} className="flex items-start space-x-4">
                    <div className="gradient-primary rounded-lg p-3 flex-shrink-0">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              {[{
              icon: Clock,
              label: '24/7 Service',
              desc: 'Available anytime'
            }, {
              icon: Shield,
              label: 'Insured',
              desc: 'Fully protected'
            }, {
              icon: Users,
              label: 'Expert Team',
              desc: 'Trained professionals'
            }, {
              icon: Star,
              label: 'Top Rated',
              desc: '5-star reviews'
            }].map((feature, index) => <Card key={index} className="p-6 text-center hover:shadow-hover transition-smooth">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{feature.label}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-slide-up">
            Ready to Move? Get Started Today!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Contact us for a free quote and experience the UAE's most reliable moving service.
          </p>
          <Button variant="secondary" size="xl" onClick={() => window.open('https://wa.me/+971559615397', '_blank')} className="animate-slide-up">
            Get Free Quote Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>;
};
export default HomePage;