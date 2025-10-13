import { Map } from 'lucide-react';
import { cn } from '@/lib/utils';

type MapPlaceholderProps = {
  className?: string;
};

export default function MapPlaceholder({ className }: MapPlaceholderProps) {
  return (
    <div
      className={cn(
        'flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed bg-secondary',
        className
      )}
    >
      <div className="text-center text-muted-foreground">
        <Map className="mx-auto h-12 w-12" />
        <p className="mt-2 font-medium">Interactive Map</p>
        <p className="text-sm">Map integration will be displayed here.</p>
      </div>
    </div>
  );
}
