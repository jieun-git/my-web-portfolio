'use client';

import { useState, useCallback } from 'react';
import { Win98Window } from '@/components/win98/window';
import { Taskbar } from '@/components/win98/taskbar';
import { ReadmeContent } from '@/components/sections/hero';
import { AboutContent } from '@/components/sections/about';
import { ExperienceContent } from '@/components/sections/experience';
import { ProjectsFolderContent, ProjectDetailContent } from '@/components/sections/projects';
import { SkillsContent } from '@/components/sections/skills';
import { ContactContent } from '@/components/sections/contact';
import { projects } from '@/data/portfolio';

type WindowId = 'readme' | 'about' | 'experience' | 'projects' | 'skills' | 'contact' | string;

interface WinState {
  id: WindowId;
  isOpen: boolean;
  isMinimized: boolean;
  position: { x: number; y: number };
  zIndex: number;
}

const WINDOW_CONFIGS: Record<string, { title: string; icon: string; size: { width: number; height: number }; statusLeft?: string; statusRight?: string }> = {
  readme:     { title: '환영합니다 - 메모장', icon: '📝', size: { width: 480, height: 300 }, statusLeft: 'Ln 1, Col 1', statusRight: 'readme.txt' },
  about:      { title: 'About - 안지은',     icon: '👤', size: { width: 460, height: 420 }, statusLeft: '준비됨', statusRight: 'about.exe' },
  experience: { title: 'Career - 경력',      icon: '💼', size: { width: 460, height: 380 }, statusLeft: '준비됨', statusRight: '2 항목' },
  projects:   { title: 'Projects',           icon: '📁', size: { width: 480, height: 340 }, statusLeft: `${projects.length} 개체`, statusRight: '더블클릭하여 열기' },
  skills:     { title: 'Skills - 기술 스택', icon: '⚙️', size: { width: 480, height: 380 }, statusLeft: '준비됨', statusRight: '6 분류' },
  contact:    { title: 'Contact - 연락처',   icon: '✉️', size: { width: 440, height: 420 }, statusLeft: '준비됨', statusRight: 'contact.exe' },
};

const DESKTOP_ICONS = [
  { id: 'about',      icon: '👤', label: 'About\n안지은' },
  { id: 'experience', icon: '💼', label: 'Career' },
  { id: 'projects',   icon: '📁', label: 'Projects' },
  { id: 'skills',     icon: '⚙️', label: 'Skills' },
  { id: 'contact',    icon: '✉️', label: 'Contact' },
  { id: 'readme',     icon: '📄', label: 'readme.txt' },
];

const INITIAL_POSITIONS: Record<string, { x: number; y: number }> = {
  readme:     { x: 300, y: 50 },
  about:      { x: 340, y: 70 },
  experience: { x: 380, y: 60 },
  projects:   { x: 320, y: 55 },
  skills:     { x: 360, y: 65 },
  contact:    { x: 400, y: 75 },
};

const initialWindows: WinState[] = [
  ...Object.keys(WINDOW_CONFIGS).map((id, i) => ({
    id,
    isOpen: id === 'readme',
    isMinimized: false,
    position: INITIAL_POSITIONS[id] ?? { x: 300 + i * 20, y: 60 + i * 20 },
    zIndex: id === 'readme' ? 100 : 10 + i,
  })),
];

let zCounter = 200;

export default function Desktop() {
  const [windows, setWindows] = useState<WinState[]>(initialWindows);
  const [activeId, setActiveId] = useState<WindowId>('readme');
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const bringToFront = useCallback((id: WindowId) => {
    zCounter += 1;
    setActiveId(id);
    setWindows((prev) => prev.map((w) => w.id === id ? { ...w, zIndex: zCounter } : w));
  }, []);

  const openWindow = useCallback((id: WindowId) => {
    const exists = initialWindows.some((w) => w.id === id);
    zCounter += 1;
    if (exists) {
      setWindows((prev) =>
        prev.map((w) =>
          w.id === id ? { ...w, isOpen: true, isMinimized: false, zIndex: zCounter } : w
        )
      );
    } else {
      // 프로젝트 상세 윈도우 (id = 'project-xxx')
      const projectId = id.replace('project-', '');
      const project = projects.find((p) => p.id === projectId);
      if (!project) return;
      setWindows((prev) => [
        ...prev,
        {
          id,
          isOpen: true,
          isMinimized: false,
          position: { x: 160 + (prev.length % 4) * 20, y: 40 + (prev.length % 4) * 20 },
          zIndex: zCounter,
        },
      ]);
    }
    setActiveId(id);
  }, []);

  const closeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => prev.map((w) => w.id === id ? { ...w, isOpen: false } : w));
    if (activeId === id) setActiveId('');
  }, [activeId]);

  const minimizeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => prev.map((w) => w.id === id ? { ...w, isMinimized: true } : w));
    if (activeId === id) setActiveId('');
  }, [activeId]);

  const updatePosition = useCallback((id: WindowId, pos: { x: number; y: number }) => {
    setWindows((prev) => prev.map((w) => w.id === id ? { ...w, position: pos } : w));
  }, []);

  const handleTaskbarClick = (id: WindowId) => {
    const win = windows.find((w) => w.id === id);
    if (!win) return;
    if (win.isMinimized) {
      zCounter += 1;
      setWindows((prev) => prev.map((w) => w.id === id ? { ...w, isMinimized: false, zIndex: zCounter } : w));
      setActiveId(id);
    } else if (activeId === id) {
      setWindows((prev) => prev.map((w) => w.id === id ? { ...w, isMinimized: true } : w));
      setActiveId('');
    } else {
      bringToFront(id);
    }
  };

  const openWindows = windows.filter((w) => w.isOpen);

  const getWindowConfig = (id: string) => {
    if (id.startsWith('project-')) {
      const projectId = id.replace('project-', '');
      const project = projects.find((p) => p.id === projectId);
      return {
        title: `${project?.name ?? ''} - Projects`,
        icon: '📄',
        size: { width: 660, height: 580 },
        statusLeft: '준비됨',
        statusRight: project?.id,
      };
    }
    return WINDOW_CONFIGS[id];
  };

  const renderContent = (id: WindowId) => {
    if (id === 'readme')     return <ReadmeContent />;
    if (id === 'about')      return <AboutContent />;
    if (id === 'experience') return <ExperienceContent />;
    if (id === 'projects')   return <ProjectsFolderContent onOpenProject={(pid) => openWindow(`project-${pid}`)} />;
    if (id === 'skills')     return <SkillsContent />;
    if (id === 'contact')    return <ContactContent />;
    if (id.startsWith('project-')) {
      const project = projects.find((p) => p.id === id.replace('project-', ''));
      return project ? <ProjectDetailContent project={project} /> : null;
    }
    return null;
  };

  return (
    <div
      className="fixed inset-0 overflow-hidden bg-w98-desktop"
      onClick={() => setSelectedIcon(null)}
    >
      {/* Windows 98 배경 로고 */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ zIndex: 1 }}
      >
        <div className="flex flex-col items-center" style={{ marginBottom: '36px' }}>
          <svg viewBox="0 0 155 148" width="175" height="167" aria-hidden="true">
            {/* 산개 픽셀 - 왼쪽 상단 (빨강) */}
            <rect x="2"  y="44" width="5" height="6" fill="#c4706a"/>
            <rect x="1"  y="54" width="5" height="5" fill="#c4706a"/>
            <rect x="3"  y="64" width="4" height="5" fill="#c4706a"/>
            <rect x="2"  y="73" width="4" height="5" fill="#c4706a"/>
            {/* 산개 픽셀 - 왼쪽 하단 (파랑) */}
            <rect x="2"  y="98"  width="5" height="6" fill="#4d70b0"/>
            <rect x="1"  y="108" width="5" height="5" fill="#4d70b0"/>
            <rect x="3"  y="118" width="4" height="5" fill="#4d70b0"/>
            <rect x="2"  y="127" width="4" height="5" fill="#4d70b0"/>
            {/* 산개 픽셀 - 위쪽 (빨강) */}
            <rect x="18" y="24" width="6" height="4" fill="#c4706a"/>
            <rect x="28" y="20" width="6" height="4" fill="#c4706a"/>
            <rect x="40" y="17" width="6" height="4" fill="#c4706a"/>
            {/* 산개 픽셀 - 위쪽 (초록) */}
            <rect x="80"  y="10" width="6" height="4" fill="#7ab57a"/>
            <rect x="94"  y="6"  width="6" height="4" fill="#7ab57a"/>
            <rect x="108" y="3"  width="6" height="4" fill="#7ab57a"/>
            <rect x="122" y="1"  width="6" height="4" fill="#7ab57a"/>
            {/* 메인 사분면 */}
            <polygon points="10,42 68,26 68,80 10,92"     fill="#c4706a"/>
            <polygon points="74,23 146,5 146,63 74,78"    fill="#7ab57a"/>
            <polygon points="10,97 68,84 68,138 10,150"   fill="#4d70b0"/>
            <polygon points="74,82 146,67 146,127 74,145" fill="#c9aa44"/>
          </svg>
          <div
            className="text-black"
            style={{ fontFamily: 'Arial, sans-serif', fontSize: '50px', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.01em', marginTop: '4px' }}
          >
            Jieun Ahn
          </div>
        </div>
      </div>

      {/* 바탕화면 아이콘 */}
      <div className="absolute left-2 top-4 flex flex-col gap-2 z-10">
        {DESKTOP_ICONS.map((icon) => (
          <div
            key={icon.id}
            className={`w98-desktop-icon ${selectedIcon === icon.id ? 'selected' : ''}`}
            onClick={(e) => { e.stopPropagation(); setSelectedIcon(icon.id); }}
            onDoubleClick={(e) => { e.stopPropagation(); openWindow(icon.id); }}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openWindow(icon.id)}
          >
            <span className="text-4xl">{icon.icon}</span>
            <span className="w98-desktop-icon-label whitespace-pre-line">{icon.label}</span>
          </div>
        ))}
      </div>

      {/* 윈도우들 */}
      {openWindows.map((win) => {
        const cfg = getWindowConfig(win.id);
        if (!cfg) return null;
        return (
          <Win98Window
            key={win.id}
            id={win.id}
            title={cfg.title}
            icon={cfg.icon}
            isActive={activeId === win.id}
            isMinimized={win.isMinimized}
            position={win.position}
            size={cfg.size}
            zIndex={win.zIndex}
            onClose={() => closeWindow(win.id)}
            onMinimize={() => minimizeWindow(win.id)}
            onFocus={() => bringToFront(win.id)}
            onPositionChange={(pos) => updatePosition(win.id, pos)}
            statusLeft={cfg.statusLeft}
            statusRight={cfg.statusRight}
          >
            {renderContent(win.id)}
          </Win98Window>
        );
      })}

      {/* 태스크바 */}
      <Taskbar
        windows={openWindows.map((w) => {
          const cfg = getWindowConfig(w.id);
          return { id: w.id, title: cfg?.title ?? w.id, icon: cfg?.icon ?? '🪟', isMinimized: w.isMinimized };
        })}
        activeId={activeId}
        onWindowClick={handleTaskbarClick}
        onOpenWindow={openWindow}
      />
    </div>
  );
}
