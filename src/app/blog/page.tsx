import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function BlogPage() {
  const popularPosts = blogPosts.filter(p => p.isPopular);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-secondary py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold !font-headline">Our Blog</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Insights, trends, and inspiration from the world of luxury real estate.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => {
                  const image = PlaceHolderImages.find((p) => p.id === post.imageId);
                  return (
                    <Card key={post.slug} className="overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                      <Link href={`/blog/${post.slug}`}>
                        <div className="aspect-video relative">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={post.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                        </div>
                      </Link>
                      <CardContent className="p-6">
                        <p className="text-sm text-muted-foreground">{post.date} &bull; {post.author}</p>
                        <CardTitle className="mt-2 text-xl !font-headline leading-tight">
                          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                            {post.title}
                          </Link>
                        </CardTitle>
                        <p className="mt-4 text-muted-foreground text-sm">{post.excerpt}</p>
                        <Button asChild variant="link" className="px-0 mt-4">
                          <Link href={`/blog/${post.slug}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              <div className="p-6 rounded-lg bg-background border">
                <h3 className="text-lg font-semibold mb-4">Search</h3>
                <div className="relative">
                  <Input placeholder="Search articles..." className="pr-10" />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div className="p-6 rounded-lg bg-background border">
                <h3 className="text-lg font-semibold mb-4">Popular Articles</h3>
                <ul className="space-y-4">
                  {popularPosts.map((post) => (
                    <li key={post.slug}>
                      <Link href={`/blog/${post.slug}`} className="group">
                        <p className="font-semibold group-hover:text-primary transition-colors">{post.title}</p>
                        <p className="text-sm text-muted-foreground">{post.date}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
