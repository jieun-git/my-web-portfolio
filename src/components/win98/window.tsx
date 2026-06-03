'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';

const TASKBAR_H = 36;

interface Win98WindowProps {
  id: string;
  title: string;
  icon?: string;
  isActive: boolean;
  isMinimized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  onPositionChange: (pos: { x: number; y: number }) => void;
  statusLeft?: string;
  statusRight?: string;
  children: ReactNode;
  noStatusBar?: boolean;
}

export function Win98Window({
  title,
  icon,
  isActive,
  isMinimized,
  position,
  size,
  zIndex,
  onClose,
  onMinimize,
  onFocus,
  onPositionChange,
  statusLeft = '준비됨',
  statusRight,
  children,
  noStatusBar,
}: Win98WindowProps) {
  const dragRef = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null);
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragRef.current || isMaximized) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      const newX = dragRef.current.origX + dx;
      const newY = dragRef.current.origY + dy;

      // 창이 화면 밖으로 벗어나지 않도록 클램핑
      const clampedX = Math.max(0, Math.min(newX, window.innerWidth - size.width));
      const clampedY = Math.max(0, Math.min(newY, window.innerHeight - TASKBAR_H - 28));

      onPositionChange({ x: clampedX, y: clampedY });
    };
    const onUp = () => { dragRef.current = null; };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
  }, [onPositionChange, isMaximized, size.width]);

  if (isMinimized) return null;

  const handleTitleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0 || isMaximized) return;
    e.preventDefault();
    onFocus();
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: position.x,
      origY: position.y,
    };
  };

  const toggleMaximize = () => {
    setIsMaximized((prev) => !prev);
    onFocus();
  };

  const windowStyle = isMaximized
    ? {
        left: 0,
        top: 0,
        width: '100vw' as const,
        height: `calc(100vh - ${TASKBAR_H}px)`,
        display: 'flex',
        flexDirection: 'column' as const,
        zIndex,
      }
    : {
        left: position.x,
        top: position.y,
        width: size.width,
        zIndex,
      };

  const contentStyle = isMaximized
    ? { flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' as const, minHeight: 0 }
    : { height: size.height, overflow: 'hidden', display: 'flex', flexDirection: 'column' as const };

  return (
    <div
      className="w98-window"
      style={windowStyle}
      onMouseDown={onFocus}
    >
      {/* 타이틀바 */}
      <div
        className={`w98-titlebar ${isActive ? '' : 'w98-titlebar-inactive'}`}
        onMouseDown={handleTitleMouseDown}
        onDoubleClick={toggleMaximize}
      >
        <div className="flex items-center gap-1 min-w-0 flex-1">
          {icon && <span className="text-sm leading-none flex-shrink-0">{icon}</span>}
          <span className="truncate text-xs">{title}</span>
        </div>
        <div className="flex gap-[2px] flex-shrink-0">
          <button className="w98-close-btn" onMouseDown={(e) => e.stopPropagation()} onClick={onMinimize} title="최소화">_</button>
          <button className="w98-close-btn" onMouseDown={(e) => e.stopPropagation()} onClick={toggleMaximize} title={isMaximized ? '이전 크기로' : '최대화'}>
            {isMaximized ? '❐' : '□'}
          </button>
          <button className="w98-close-btn" onMouseDown={(e) => e.stopPropagation()} onClick={onClose} title="닫기">✕</button>
        </div>
      </div>

      {/* 본문 */}
      <div style={contentStyle}>
        {children}
      </div>

      {/* 상태바 */}
      {!noStatusBar && (
        <div className="w98-statusbar">
          <span className="w98-statusbar-panel flex-1">{statusLeft}</span>
          {statusRight && <span className="w98-statusbar-panel">{statusRight}</span>}
        </div>
      )}
    </div>
  );
}
