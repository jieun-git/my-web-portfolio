'use client';

import { useState } from 'react';
import { StartMenu } from './start-menu';

interface TaskbarWindow {
  id: string;
  title: string;
  icon: string;
  isMinimized: boolean;
}

interface TaskbarProps {
  windows: TaskbarWindow[];
  activeId: string | null;
  onWindowClick: (id: string) => void;
  onOpenWindow: (id: string) => void;
}

export function Taskbar({ windows, activeId, onWindowClick, onOpenWindow }: TaskbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const now = new Date();
  const time = now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

  return (
    <>
      {menuOpen && (
        <StartMenu onOpen={onOpenWindow} onClose={() => setMenuOpen(false)} />
      )}
      <div className="w98-taskbar">
        <button
          className={`w98-start-btn ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="text-base">🪟</span>
          <span>시작</span>
        </button>
        <div className="w-px h-6 bg-w98-dark mx-1" />
        <div className="flex gap-1 flex-1 overflow-hidden">
          {windows.map((w) => (
            <button
              key={w.id}
              className={`w98-taskbar-btn ${activeId === w.id && !w.isMinimized ? 'active' : ''}`}
              onClick={() => onWindowClick(w.id)}
            >
              <span className="text-sm flex-shrink-0">{w.icon}</span>
              <span className="truncate">{w.title}</span>
            </button>
          ))}
        </div>
        <div className="w98-statusbar-panel text-xs px-3 h-6 flex items-center ml-auto">
          {time}
        </div>
      </div>
    </>
  );
}
