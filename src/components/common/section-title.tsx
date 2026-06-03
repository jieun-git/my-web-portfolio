import { cn } from '@/lib/utils';

interface SectionTitleProps {
  index: string;
  title: string;
  className?: string;
}

export function SectionTitle({ index, title, className }: SectionTitleProps) {
  return (
    <div className={cn('mb-12 flex items-center gap-4', className)}>
      <span className="font-mono text-xs text-teal opacity-60">{index}</span>
      <div className="h-px flex-1 max-w-8 bg-teal/30" />
      <h2 className="font-mono text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
