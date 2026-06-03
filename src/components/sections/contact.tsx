'use client';

import { useState, type FormEvent } from 'react';
import { profile, certificate } from '@/data/portfolio';

export function ContactContent() {
  const [form, setForm] = useState({ name: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`포트폴리오 문의 — ${form.name}`);
    const body = encodeURIComponent(form.message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto w98-scroll p-4 space-y-4">
        <div className="text-sm">새로운 기회나 협업에 관심이 있으시다면 편하게 연락해 주세요.</div>

        {/* 연락처 */}
        <div>
          <table className="w-full text-sm">
            <tbody>
              <tr className="h-7">
                <td className="w-20 text-xs font-bold text-w98-dark">EMAIL</td>
                <td><a className="w98-link" href={`mailto:${profile.email}`}>{profile.email}</a></td>
              </tr>
              <tr className="h-7">
                <td className="text-xs font-bold text-w98-dark">PHONE</td>
                <td><a className="w98-link" href={`tel:${profile.phone}`}>{profile.phone}</a></td>
              </tr>
              <tr className="h-7">
                <td className="text-xs font-bold text-w98-dark">GITHUB</td>
                <td><a className="w98-link" href={profile.github} target="_blank" rel="noopener noreferrer">jieun-git</a></td>
              </tr>
              <tr className="h-7">
                <td className="text-xs font-bold text-w98-dark">BLOG</td>
                <td><a className="w98-link" href={profile.blog} target="_blank" rel="noopener noreferrer">Like a koala 🐨</a></td>
              </tr>
              <tr className="h-7">
                <td className="text-xs font-bold text-w98-dark">CERT</td>
                <td className="text-xs">{certificate.name} · {certificate.date}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w98-divider" />

        {/* 메시지 폼 */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="text-xs font-bold text-w98-dark border-b border-w98-dark/30 pb-1">{'// 메시지 보내기'}</div>
          <div>
            <div className="text-xs mb-1">이름</div>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="이름을 입력하세요"
              className="w98-input"
            />
          </div>
          <div>
            <div className="text-xs mb-1">메시지</div>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="메시지를 입력하세요"
              className="w98-textarea"
            />
          </div>
          <button type="submit" className="w98-btn px-6 py-1 text-sm w-full justify-center h-8">
            메일 클라이언트로 보내기
          </button>
        </form>
      </div>
    </div>
  );
}
