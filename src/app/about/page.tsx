import Image from 'next/image';
import Link from 'next/link';
import { Check, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { team } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const storyImage = PlaceHolderImages.find((p) => p.id === 'about-story');

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: 'Our Mission',
      description:
        'To help families and international expatriates find not just houses, but homes filled with warmth, comfort, and luxury—guided by integrity, innovation, and the golden standard of service.',
    },
    {
      icon: <Eye className="h-8 w-8 text-accent" />,
      title: 'Our Vision',
      description:
        'To become a leading real estate brand known for transforming dreams into lasting homes, shaping vibrant communities, and redefining excellence in property ownership.',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold !font-headline">About Property Evangelist</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            More than a realtor. We are architects of dreams and curators of comfort.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Property Evangelist was born from a simple yet powerful idea: that everyone deserves a home that inspires them. Frustrated by the transactional nature of the real estate industry, our founder set out to create a brand that puts people first.
              </p>
              <p className="mt-4 text-muted-foreground">
                We believe a home is the foundation for a life well-lived. It's a sanctuary of comfort, a canvas for memories, and a reflection of your aspirations. Our philosophy marries this belief with an unwavering commitment to luxury, quality, and impeccable service. We don't just sell properties; we build lasting relationships and help shape vibrant communities, one dream home at a time.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/listings">Explore Our Properties</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              {storyImage && (
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={storyImage.imageUrl}
                    alt={storyImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={storyImage.imageHint}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="flex items-start gap-6">
                <div>{value.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              The dedicated professionals behind our golden standard of service.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => {
              const memberImage = PlaceHolderImages.find((p) => p.id === member.imageId);
              return (
                <Card key={member.id} className="text-center transition-shadow duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    {memberImage && (
                      <Avatar className="w-32 h-32 mx-auto border-4 border-accent">
                        <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} />
                        <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                    )}
                    <h3 className="mt-6 text-xl font-bold">{member.name}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                    <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
