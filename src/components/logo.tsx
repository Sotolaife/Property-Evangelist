import { cn } from '@/lib/utils';

const Logo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 130 130"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-10 w-auto', className)}
    {...props}
  >
    <defs>
      <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(42, 80%, 80%)', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M30,110 L30,20 L80,20 C100,20 110,30 110,50 C110,70 100,80 80,80 L50,80"
      stroke="currentColor"
      strokeWidth="12"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30,65 L70,65"
      stroke="url(#gold-gradient)"
      strokeWidth="12"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export default Logo;
