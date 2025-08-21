import React from 'react';
import { Button } from '@/components/ui/enhanced-button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Truck, 
  Package, 
  Home, 
  Warehouse,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import furnitureIcon from '@/assets/furniture-delivery.jpg';
import packageIcon from '@/assets/package-moving.jpg';
import storageIcon from '@/assets/storage-solutions.jpg';

const ServiceBlock = ({ 
  image, 
  icon: Icon,
  title, 
  description, 
  features,
  price
}: { 
  image: string;
  icon: any;
  title: string;
  description: string;
  features: string[];
  price: string;
}) => {
  return (
    <Card className="group overflow-hidden hover:shadow-hover transition-smooth animate-scale-in">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center text-white mb-2">
            <Icon className="h-6 w-6 mr-2" />
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
          <Badge className="bg-secondary text-secondary-foreground">
            Starting from {price}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-muted-foreground mb-6 text-lg">{description}</p>
        
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button 
          variant="default" 
          className="w-full group-hover:bg-primary-dark transition-smooth"
          onClick={() => window.open('https://wa.me/+971559615397', '_blank')}
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

const ServicesPage = () => {
  const services = [
    {
      image: furnitureIcon,
      icon: Home,
      title: 'Furniture Delivery & Setup',
      description: 'Complete furniture moving service including disassembly, transportation, and reassembly at your new location.',
      price: 'AED 150',
      features: [
        'Professional furniture disassembly and reassembly',
        'Protective wrapping and padding for all items',
        'Specialized equipment for heavy furniture',
        'Same-day delivery available in Dubai and Abu Dhabi',
        'Insurance coverage up to AED 50,000',
        'Experienced team with 5+ years expertise'
      ]
    },
    {
      image: packageIcon,
      icon: Package,
      title: 'Package & Box Moving',
      description: 'Secure and efficient package transportation for businesses and individuals with real-time tracking.',
      price: 'AED 75',
      features: [
        'Express delivery within 2-4 hours',
        'Real-time package tracking via WhatsApp',
        'Fragile items handling with special care',
        'Bulk package discounts for businesses',
        'Temperature-controlled transport available',
        'Proof of delivery with digital signature'
      ]
    },
    {
      image: storageIcon,
      icon: Warehouse,
      title: 'Flexible Storage Solutions',
      description: 'Climate-controlled storage facilities with 24/7 security and flexible rental terms.',
      price: 'AED 200/month',
      features: [
        'Climate-controlled storage units',
        '24/7 CCTV surveillance and security',
        'Easy access with extended hours',
        'Flexible monthly or yearly contracts',
        'Free initial consultation and pickup',
        'Various unit sizes from 5x5 to 10x20 feet'
      ]
    },
    {
      image: furnitureIcon,
      icon: Truck,
      title: 'Complete Home Relocation',
      description: 'Full-service home moving including packing, loading, transportation, and unpacking services.',
      price: 'AED 500',
      features: [
        'Complete packing service with quality materials',
        'Professional loading and unloading team',
        'Transportation with GPS tracking',
        'Unpacking and placement service',
        'Comprehensive insurance coverage',
        'Post-move cleanup and debris removal'
      ]
    },
    {
      image: packageIcon,
      icon: Shield,
      title: 'Commercial Moving Services',
      description: 'Specialized business relocation services with minimal downtime and professional handling.',
      price: 'Custom Quote',
      features: [
        'Office furniture and equipment moving',
        'IT equipment specialized handling',
        'Minimal business downtime guarantee',
        'Weekend and after-hours service',
        'Document and file secure transport',
        'Project management and coordination'
      ]
    },
    {
      image: storageIcon,
      icon: Clock,
      title: 'Emergency Moving Services',
      description: '24/7 emergency moving services for urgent relocations and time-sensitive deliveries.',
      price: 'AED 300',
      features: [
        '24/7 emergency response team',
        'Same-day service guarantee',
        'Urgent delivery within 1-2 hours',
        'Emergency packing supplies provided',
        'Priority scheduling and routing',
        'Expedited insurance processing'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What areas do you serve in the UAE?',
      answer: 'We provide services across all seven emirates including Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, Ras Al Khaimah, and Umm Al Quwain. We also serve major cities and suburban areas within these emirates.'
    },
    {
      question: 'How do you calculate moving costs?',
      answer: 'Our pricing is based on several factors including distance, size of the move, services required (packing, storage, etc.), and timing. We provide transparent, upfront quotes with no hidden fees. Contact us for a free detailed estimate.'
    },
    {
      question: 'Do you provide packing materials?',
      answer: 'Yes, we supply all necessary packing materials including boxes, bubble wrap, packing paper, tape, and protective covers. All materials are included in our full-service packages, or available separately for DIY moves.'
    },
    {
      question: 'Is my furniture and belongings insured during the move?',
      answer: 'Absolutely. All moves are covered by comprehensive insurance. We offer basic coverage included in our service, plus optional additional coverage for high-value items. Claims are processed quickly and fairly.'
    },
    {
      question: 'How far in advance should I book your services?',
      answer: 'We recommend booking at least 48-72 hours in advance for regular moves. However, we also offer same-day and emergency services when available. Peak seasons (summer months) may require earlier booking.'
    },
    {
      question: 'Do you offer storage solutions?',
      answer: 'Yes, we provide both short-term and long-term storage solutions in our secure, climate-controlled facilities. Storage units are available in various sizes with flexible rental terms and 24/7 access.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit/debit cards, bank transfers, and online payments. Payment is typically due upon completion of services, though we can arrange alternative payment schedules for large commercial moves.'
    },
    {
      question: 'Can you handle fragile and valuable items?',
      answer: 'Absolutely. Our team is specially trained in handling fragile items, antiques, artwork, and electronics. We use specialized packing materials and techniques, plus offer additional insurance for high-value items.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      {/* Header Section */}
      <section className="py-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground animate-slide-up">
            🚚 Professional Services
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
            Our Moving Services
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up">
            Comprehensive moving and logistics solutions across the UAE. From furniture delivery 
            to complete relocations, we handle every aspect of your move with professionalism and care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceBlock key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, straightforward process designed for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Get Quote', 
                desc: 'Contact us via WhatsApp or phone for instant quote',
                icon: Package 
              },
              { 
                step: '02', 
                title: 'Schedule', 
                desc: 'Choose your preferred date and time slot',
                icon: Clock 
              },
              { 
                step: '03', 
                title: 'We Move', 
                desc: 'Professional team handles your move efficiently',
                icon: Truck 
              },
              { 
                step: '04', 
                title: 'Complete', 
                desc: 'Delivery completed and payment processed',
                icon: CheckCircle 
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-hover transition-smooth animate-slide-up">
                <div className="gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-sm text-primary font-semibold mb-2">
                  STEP {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 animate-fade-in">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary transition-smooth">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every move is unique. Contact us to discuss your specific requirements 
            and get a personalized quote.
          </p>
          <Button 
            variant="secondary" 
            size="xl"
            onClick={() => window.open('https://wa.me/+971559615397', '_blank')}
          >
            Get Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;