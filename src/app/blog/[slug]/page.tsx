import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { team } from '@/lib/data';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  const popularPosts = blogPosts.filter(p => p.isPopular && p.slug !== params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find((p) => p.id === post.imageId);
  const authorInfo = team.find(t => t.name === post.author);
  const authorImage = authorInfo ? PlaceHolderImages.find(p => p.id === authorInfo.imageId) : null;

  return (
    <div className="animate-fade-in">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <main className="lg:col-span-3">
            <article>
              <header className="mb-8">
                <h1 className="text-3xl md:text-5xl font-bold !font-headline leading-tight mb-4">{post.title}</h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                    {authorInfo && (
                        <div className="flex items-center gap-2">
                            {authorImage && (
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={authorImage.imageUrl} alt={authorInfo.name} data-ai-hint={authorImage.imageHint} />
                                    <AvatarFallback>{authorInfo.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                            )}
                            <span className="font-medium">{post.author}</span>
                        </div>
                    )}
                    <span>&bull;</span>
                    <time dateTime={post.date}>{post.date}</time>
                </div>
              </header>

              {image && (
                <div className="aspect-video relative w-full rounded-lg overflow-hidden mb-8 shadow-lg">
                  <Image
                    src={image.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={image.imageHint}
                  />
                </div>
              )}

              <div className="prose prose-lg dark:prose-invert max-w-none whitespace-pre-line">
                {post.content}
              </div>
            </article>
          </main>

          <aside className="lg:col-span-1 space-y-8 sticky top-24 h-fit">
            <div className="p-6 rounded-lg bg-secondary border">
              <h3 className="text-lg font-semibold mb-4">Search</h3>
              <div className="relative">
                <Input placeholder="Search articles..." className="pr-10" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            <div className="p-6 rounded-lg bg-secondary border">
              <h3 className="text-lg font-semibold mb-4">Popular Articles</h3>
              <ul className="space-y-4">
                {popularPosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="group">
                      <p className="font-semibold group-hover:text-primary transition-colors">{p.title}</p>
                      <p className="text-sm text-muted-foreground">{p.date}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
