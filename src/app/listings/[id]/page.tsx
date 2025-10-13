import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BedDouble, Bath, Square, MapPin, Check, Phone } from 'lucide-react';
import { properties } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import MapPlaceholder from '@/components/map-placeholder';

type PropertyDetailsPageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default function PropertyDetailsPage({ params }: PropertyDetailsPageProps) {
  const property = properties.find((p) => p.id === params.id);

  if (!property) {
    notFound();
  }

  const propertyImages = property.imageIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);
  
  const WhatsAppButton = () => (
    <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
        <a href={`https://wa.me/15551234567?text=I'm%20interested%20in%20the%20property:%20${encodeURIComponent(property.title)}`} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
            Inquire on WhatsApp
        </a>
    </Button>
  );

  return (
    <div className="animate-fade-in">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Carousel */}
            <Carousel className="w-full mb-8 rounded-lg overflow-hidden shadow-xl">
              <CarouselContent>
                {propertyImages.map((image, index) => (
                  <CarouselItem key={index}>
                    {image && (
                      <div className="aspect-video relative">
                        <Image
                          src={image.imageUrl}
                          alt={`${property.title} - Image ${index + 1}`}
                          fill
                          className="object-cover"
                          priority={index === 0}
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>

            {/* Property Header */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold !font-headline">{property.title}</h1>
              <p className="mt-2 flex items-center text-lg text-muted-foreground">
                <MapPin className="mr-2 h-5 w-5" />
                {property.location}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-lg mb-6">
              <div className="flex items-center gap-2">
                <BedDouble className="h-6 w-6 text-primary" />
                <span>{property.beds} Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-6 w-6 text-primary" />
                <span>{property.baths} Baths</span>
              </div>
              <div className="flex items-center gap-2">
                <Square className="h-6 w-6 text-primary" />
                <span>{property.area.toLocaleString()} sqft</span>
              </div>
            </div>
            
            <Separator className="my-8" />

            {/* Description */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="font-bold !font-headline text-2xl">Property Description</h2>
              <p>{property.description}</p>
            </div>

            <Separator className="my-8" />

            {/* Features */}
            <div>
                <h2 className="font-bold !font-headline text-2xl mb-4">Features & Amenities</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {property.features.map(feature => (
                        <li key={feature} className="flex items-center">
                            <Check className="h-5 w-5 text-green-500 mr-2" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            <Separator className="my-8" />
            
            {/* Map */}
            <div>
              <h2 className="font-bold !font-headline text-2xl mb-4">Location</h2>
              <MapPlaceholder />
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-xl">Property Inquiry</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="text-center">
                    <p className="text-sm text-muted-foreground">Price</p>
                    <p className="text-4xl font-bold text-primary">${property.price.toLocaleString()}</p>
                </div>
                <Button asChild size="lg" className="w-full">
                    <Link href="/contact">
                        <Phone className="mr-2 h-5 w-5" />
                        Book an Inspection
                    </Link>
                </Button>
                <WhatsAppButton />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
