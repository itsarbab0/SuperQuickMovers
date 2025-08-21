import React, { useState } from 'react';
import { Button } from '@/components/ui/enhanced-button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin,
  Instagram,
  Facebook,
  Clock,
  CheckCircle,
  Star
} from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const serviceAreas = [
    'Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 
    'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain',
    'Al Ain', 'Dubai Marina', 'Downtown Dubai',
    'Jumeirah', 'Business Bay', 'DIFC'
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      subtitle: 'Instant messaging',
      contact: '+971 55 961 5397',
      action: () => window.open('https://wa.me/+971559615397', '_blank'),
      primary: true
    },
    {
      icon: Phone,
      title: 'Phone Call',
      subtitle: 'Direct contact',
      contact: '+971 55 961 5397',
      action: () => window.open('tel:+971559615397'),
      primary: false
    },
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'Send us a message',
      contact: 'superquickmovers3@gmail.com',
      action: () => window.open('mailto:superquickmovers3@gmail.com'),
      primary: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      {/* Header Section */}
      <section className="py-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground animate-slide-up">
            📞 Get In Touch
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
            Contact Super Quick Movers
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up">
            Ready to move? Get instant quotes, schedule your service, or ask any questions. 
            We're here to make your moving experience smooth and stress-free.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className={`p-8 text-center hover:shadow-hover transition-smooth cursor-pointer animate-scale-in ${
                  method.primary ? 'border-primary shadow-glow' : ''
                }`}
                onClick={method.action}
              >
                <div className={`${method.primary ? 'gradient-primary' : 'bg-accent'} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                  <method.icon className={`h-8 w-8 ${method.primary ? 'text-white' : 'text-primary'}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground mb-4">{method.subtitle}</p>
                <p className="font-semibold text-primary">{method.contact}</p>
                
                {method.primary && (
                  <Badge className="mt-4 bg-secondary text-secondary-foreground">
                    Fastest Response
                  </Badge>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 animate-slide-up">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+971 55 961 5397"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your moving needs..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Business Info */}
            <div className="space-y-8 animate-slide-up">
              {/* Business Hours */}
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Business Hours</h3>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Thursday</span>
                    <span className="font-medium">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                </div>
                
                <Badge className="mt-4 bg-primary text-primary-foreground">
                  24/7 Available for Call - Emergency Service
                </Badge>
              </Card>

              {/* Location */}
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Our Location</h3>
                </div>
                
                <div className="text-muted-foreground mb-4">
                  <a 
                    href="https://maps.app.goo.gl/vx7Cuf28uxNyd7qB8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Our business location in Dubai, UAE.<br />
                    Click to view on Google Maps
                  </a>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://maps.app.goo.gl/vx7Cuf28uxNyd7qB8', '_blank')}
                >
                  View on Google Maps
                </Button>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => window.open('https://instagram.com', '_blank')}
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => window.open('https://facebook.com', '_blank')}
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="mt-4 flex items-center">
                  <Star className="h-5 w-5 text-secondary mr-2" />
                  <span className="text-sm text-muted-foreground">
                    Follow us for moving tips and special offers
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Service Coverage
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Areas We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide professional moving services across all major cities and areas in the UAE
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-fade-in">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="p-4 bg-background rounded-lg border hover:border-primary hover:shadow-elegant transition-smooth cursor-pointer text-center"
              >
                <span className="font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-muted-foreground">Visit our office or contact us for on-site consultations</p>
          </div>

          <Card className="overflow-hidden animate-scale-in">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-muted-foreground mb-4">
                  Google Maps integration would be embedded here
                </p>
                <Button 
                  variant="default"
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us now for an instant quote and let us handle your next move with care and professionalism.
          </p>
          <Button 
            variant="secondary" 
            size="xl"
            onClick={() => window.open('https://wa.me/+971559615397', '_blank')}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;