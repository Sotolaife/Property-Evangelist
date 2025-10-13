import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function TestimonialsPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-secondary py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold !font-headline">Client Testimonials</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Hear from families and individuals who found their dream homes with us.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => {
              const testimonialImage = PlaceHolderImages.find(p => p.id === testimonial.imageId);
              return (
                <Card key={testimonial.id} className="flex flex-col justify-between shadow-lg transition-shadow duration-300 hover:shadow-xl">
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
                          <AvatarImage src={testimonialImage.imageUrl} alt={testimonial.name} data-ai-hint={testimonialImage.imageHint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                       </Avatar>
                    )}
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
