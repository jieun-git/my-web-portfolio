import { profile } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 {profile.nameEn}. All rights reserved.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Built with Next.js · TypeScript · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
