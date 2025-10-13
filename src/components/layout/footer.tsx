import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from 'lucide-react';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const quickLinks = [
    { href: '/listings', label: 'Listings' },
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#' },
    { icon: <Twitter className="h-5 w-5" />, href: '#' },
    { icon: <Instagram className="h-5 w-5" />, href: '#' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-12" />
              <span className="text-xl font-bold font-headline">Property Evangelist</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in finding homes filled with warmth, comfort, and luxury.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">contact@propertyevangelist.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((social, index) => (
                <Button key={index} asChild variant="outline" size="icon" className="bg-transparent">
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Property Evangelist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
