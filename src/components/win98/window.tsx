'use client';

import { useRef, useEffect, type ReactNode } from 'react';

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

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragRef.current) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      onPositionChange({
        x: dragRef.current.origX + dx,
        y: dragRef.current.origY + dy,
      });
    };
    const onUp = () => { dragRef.current = null; };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
  }, [onPositionChange]);

  if (isMinimized) return null;

  const handleTitleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    onFocus();
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: position.x,
      origY: position.y,
    };
  };

  return (
    <div
      className="w98-window"
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        zIndex,
      }}
      onMouseDown={onFocus}
    >
      {/* 타이틀바 */}
      <div
        className={`w98-titlebar ${isActive ? '' : 'w98-titlebar-inactive'}`}
        onMouseDown={handleTitleMouseDown}
        onDoubleClick={(e) => e.preventDefault()}
      >
        <div className="flex items-center gap-1 min-w-0 flex-1">
          {icon && <span className="text-sm leading-none flex-shrink-0">{icon}</span>}
          <span className="truncate text-xs">{title}</span>
        </div>
        <div className="flex gap-[2px] flex-shrink-0">
          <button className="w98-close-btn" onMouseDown={(e) => e.stopPropagation()} onClick={onMinimize} title="최소화">_</button>
          <button className="w98-close-btn" onMouseDown={(e) => e.stopPropagation()} onClick={onClose} title="닫기">✕</button>
        </div>
      </div>

      {/* 본문 */}
      <div style={{ height: size.height, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
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
