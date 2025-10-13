import { properties } from '@/lib/data';
import PropertyCard from '@/components/property-card';
import MapPlaceholder from '@/components/map-placeholder';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';

export default function ListingsPage() {
  const locations = [...new Set(properties.map(p => p.location))];
  const types = [...new Set(properties.map(p => p.type))];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-secondary py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold !font-headline">Our Properties</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Discover a curated collection of homes that blend quality, comfort, and exclusivity.
          </p>
        </div>
      </section>

      {/* Filters & Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Filter Bar */}
          <div className="mb-8 p-4 rounded-lg bg-background border shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        {locations.map(loc => <SelectItem key={loc} value={loc}>{loc}</SelectItem>)}
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                         <SelectItem value="all">All Types</SelectItem>
                        {types.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                    </SelectContent>
                </Select>
                 <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Price Range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Any Price</SelectItem>
                        <SelectItem value="<1m">Under $1,000,000</SelectItem>
                        <SelectItem value="1m-2m">$1,000,000 - $2,000,000</SelectItem>
                        <SelectItem value="2m-4m">$2,000,000 - $4,000,000</SelectItem>
                        <SelectItem value=">4m">Over $4,000,000</SelectItem>
                    </SelectContent>
                </Select>
                <Button className="w-full">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Apply Filters
                </Button>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Map Section */}
          <div className="mt-16 lg:mt-24">
             <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold">Property Locations</h2>
                <p className="mt-2 text-lg text-muted-foreground">
                    Explore our listings on the map.
                </p>
             </div>
             <MapPlaceholder className="h-[60vh]" />
          </div>
        </div>
      </section>
    </div>
  );
}
