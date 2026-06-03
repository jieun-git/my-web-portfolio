'use client';

import { useState, type FormEvent } from 'react';
import { Mail, Phone, Github, BookOpen, Award, Send } from 'lucide-react';
import { SectionTitle } from '@/components/common/section-title';
import { AnimatedSection } from '@/components/common/animated-section';
import { Button } from '@/components/ui/button';
import { profile, certificate } from '@/data/portfolio';

const contactItems = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'PHONE',
    value: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: Github,
    label: 'GITHUB',
    value: 'jieun-git',
    href: profile.github,
    external: true,
  },
  {
    icon: BookOpen,
    label: 'BLOG',
    value: 'Like a koala 🐨',
    href: profile.blog,
    external: true,
  },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`포트폴리오 문의 — ${formData.name}`);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24" aria-labelledby="contact-title">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionTitle index="05" title="Contact" />
        </AnimatedSection>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* 연락처 카드 */}
          <AnimatedSection delay={100}>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                새로운 기회나 협업에 관심이 있으시다면 편하게 연락해 주세요.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 hover:border-teal/40 hover:bg-card/80 transition-all"
                    >
                      <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded border border-border bg-background group-hover:border-teal/40 group-hover:text-teal transition-all">
                        <Icon size={14} className="text-muted-foreground group-hover:text-teal transition-colors" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground/60 mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm text-foreground group-hover:text-teal transition-colors break-all">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* 자격증 */}
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded border border-teal/30 bg-teal/5">
                  <Award size={14} className="text-teal" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground/60 mb-0.5">
                    CERTIFICATE
                  </p>
                  <p className="text-sm text-foreground">
                    {certificate.name}{' '}
                    <span className="text-muted-foreground text-xs">
                      · {certificate.issuer} · {certificate.date}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 메시지 폼 */}
          <AnimatedSection delay={200}>
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-border bg-card p-6 space-y-4"
              aria-label="문의 폼"
            >
              <h3 className="font-mono text-sm text-teal tracking-wide">{'// 메시지 보내기'}</h3>

              <div className="space-y-3">
                <label className="block">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground/60 uppercase mb-1.5 block">
                    이름
                  </span>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="홍길동"
                    className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-teal/50 focus:outline-none focus:ring-1 focus:ring-teal/30 transition-colors"
                  />
                </label>

                <label className="block">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground/60 uppercase mb-1.5 block">
                    메시지
                  </span>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="안녕하세요, 협업 제안이 있어 연락드립니다..."
                    className="w-full resize-none rounded border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-teal/50 focus:outline-none focus:ring-1 focus:ring-teal/30 transition-colors"
                  />
                </label>
              </div>

              <Button type="submit" className="w-full gap-2">
                <Send size={14} />
                메일 클라이언트로 보내기
              </Button>

              <p className="text-center font-mono text-[10px] text-muted-foreground/40">
                클릭 시 메일 앱이 열립니다
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
