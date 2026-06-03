'use client';

interface StartMenuProps {
  onOpen: (id: string) => void;
  onClose: () => void;
}

const menuItems = [
  { id: 'about', icon: '👤', label: 'About', sub: '소개' },
  { id: 'experience', icon: '💼', label: 'Experience', sub: '경력' },
  { id: 'projects', icon: '📁', label: 'Projects', sub: '프로젝트' },
  { id: 'skills', icon: '⚙️', label: 'Skills', sub: '기술 스택' },
  { id: 'contact', icon: '✉️', label: 'Contact', sub: '연락처' },
];

const linkItems = [
  { icon: '📄', label: 'readme.txt', id: 'readme' },
  { icon: '</>', label: 'GitHub 방문', id: 'github' },
  { icon: '🌐', label: 'Blog 방문', id: 'blog' },
];

export function StartMenu({ onOpen, onClose }: StartMenuProps) {
  const handleClick = (id: string) => {
    if (id === 'github') {
      window.open('https://github.com/jieun-git', '_blank');
      onClose();
      return;
    }
    if (id === 'blog') {
      window.open('https://next-life-koala.tistory.com/', '_blank');
      onClose();
      return;
    }
    onOpen(id);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-[9099]" onClick={onClose} />
      <div className="w98-menu">
        <div className="w98-menu-sidebar">
          <span>Windows 95</span>
        </div>
        <div className="w98-menu-items">
          {menuItems.map((item) => (
            <div key={item.id} className="w98-menu-item" onClick={() => handleClick(item.id)}>
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
              <span className="text-w98-dark ml-1">— {item.sub}</span>
            </div>
          ))}
          <div className="w98-menu-divider" />
          {linkItems.map((item) => (
            <div key={item.id} className="w98-menu-item" onClick={() => handleClick(item.id)}>
              <span className="text-sm">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
