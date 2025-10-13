import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import MapPlaceholder from '@/components/map-placeholder';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ContactPage() {
  const contactImage = PlaceHolderImages.find((p) => p.id === 'contact-hero');
  const WhatsAppButton = () => (
    <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
        <a href="https://wa.me/15551234567?text=Hello!%20I'm%20interested%20in%20your%20real%20estate%20services." target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
            Chat on WhatsApp
        </a>
    </Button>
  );

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        {contactImage && (
          <Image
            src={contactImage.imageUrl}
            alt={contactImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={contactImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground p-4">
          <h1 className="text-4xl md:text-6xl font-bold !font-headline">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg">Let's find your next home, together.</p>
        </div>
      </section>

      {/* Contact Form and Details */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Have a question or want to book an inspection? Fill out the form below.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input type="text" placeholder="Your Name" className="h-12" required />
                  <Input type="email" placeholder="Your Email" className="h-12" required />
                </div>
                <Input type="text" placeholder="Property of Interest (Optional)" className="h-12" />
                <Textarea placeholder="Your Message" rows={6} required />
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </div>

            {/* Details */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-secondary border-none shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Our Office</h4>
                      <p className="text-muted-foreground">123 Luxury Lane, Beverly Hills, CA 90210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Email Us</h4>
                      <p className="text-muted-foreground">contact@propertyevangelist.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Call Us</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <WhatsAppButton />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <MapPlaceholder className="h-[50vh]" />
        </div>
      </section>
    </div>
  );
}
