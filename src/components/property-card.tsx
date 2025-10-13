import Image from 'next/image';
import Link from 'next/link';
import { BedDouble, Bath, Square, MapPin } from 'lucide-react';
import type { Property } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type PropertyCardProps = {
  property: Property;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  const image = PlaceHolderImages.find((p) => p.id === property.imageIds[0]);

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <CardHeader className="p-0 relative">
        <Link href={`/listings/${property.id}`}>
          <div className="aspect-[4/3] w-full relative">
            {image && (
              <Image
                src={image.imageUrl}
                alt={property.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={image.imageHint}
              />
            )}
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary/90 backdrop-blur-sm">{property.type}</Badge>
            </div>
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow p-6">
        <CardTitle className="text-xl !font-headline leading-tight">
          <Link href={`/listings/${property.id}`} className="hover:text-primary transition-colors">
            {property.title}
          </Link>
        </CardTitle>
        <p className="mt-2 flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" />
          {property.location}
        </p>
        <div className="mt-4 flex-grow">
          <p className="text-2xl font-bold text-primary">
            ${property.price.toLocaleString()}
          </p>
        </div>
      </CardContent>
      <CardFooter className="bg-secondary/50 p-4 flex justify-around text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <BedDouble className="h-5 w-5 text-primary" />
          <span>{property.beds} Beds</span>
        </div>
        <div className="flex items-center gap-2">
          <Bath className="h-5 w-5 text-primary" />
          <span>{property.baths} Baths</span>
        </div>
        <div className="flex items-center gap-2">
          <Square className="h-5 w-5 text-primary" />
          <span>{property.area.toLocaleString()} sqft</span>
        </div>
      </CardFooter>
    </Card>
  );
}
