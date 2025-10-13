import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, CheckCircle, Shield, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PropertyCard from '@/components/property-card';
import { featuredProperties, testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-1');

  const whyChooseUs = [
    {
      icon: <Shield className="h-10 w-10 text-accent" />,
      title: 'Trust & Integrity',
      description: 'Our commitment to honesty and transparency ensures you are in safe hands.',
    },
    {
      icon: <Gem className="h-10 w-10 text-accent" />,
      title: 'Luxury & Comfort',
      description: 'We specialize in properties that offer unparalleled comfort and a premium lifestyle.',
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-accent" />,
      title: 'Golden Standard Service',
      description: 'Experience world-class service and guidance through every step of your journey.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold !font-headline tracking-tight leading-tight">
            Property Evangelist
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
            Quality, Comfort mixed with exclusivity and a touch of premium.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            <Link href="/listings">
              Find Your Dream Home <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Listings</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked properties that define luxury, comfort, and modern living.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/listings">
                View All Properties <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Property Evangelist?</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our mission is to help you find not just a house, but a home.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="text-center p-8 border-2 border-transparent hover:border-primary hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Stories of dreams transformed into lasting homes.
            </p>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full mt-12"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const testimonialImage = PlaceHolderImages.find(p => p.id === testimonial.imageId);
                return (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col justify-between">
                        <CardContent className="p-6">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < testimonial.rating ? 'text-accent fill-accent' : 'text-muted-foreground/50'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="mt-4 text-muted-foreground italic">
                            "{testimonial.quote}"
                          </p>
                        </CardContent>
                        <div className="flex items-center gap-4 p-6 pt-0 bg-muted/50 rounded-b-lg">
                          {testimonialImage && (
                             <Avatar>
                                <AvatarImage src={testimonialImage.imageUrl} alt={testimonial.name} data-ai-hint={testimonialImage.imageHint}/>
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                             </Avatar>
                          )}
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold !font-headline">Ready to Find Your Home?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            Let our experts guide you to the perfect property. Book an inspection or get in touch with us today.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Link href="/contact">
              Book an Inspection
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
