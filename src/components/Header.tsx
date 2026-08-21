import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { useTheme } from '@/hooks/useTheme';
import { downloadCv } from '@/lib/downloadCv';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-navy-950/95 backdrop-blur-md shadow-lg shadow-navy-900/5 dark:shadow-navy-950/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto container-px">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavClick('home')}
            className="font-display text-lg sm:text-xl font-bold tracking-tight text-navy-900 dark:text-white"
          >
            {profile.name}
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="px-4 py-2 text-sm font-medium text-navy-600 dark:text-navy-200 hover:text-navy-900 dark:hover:text-white rounded-md hover:bg-navy-50 dark:hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-1 p-2 text-navy-600 dark:text-navy-200 hover:text-navy-900 dark:hover:text-white rounded-md hover:bg-navy-50 dark:hover:bg-white/10 transition-all"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={downloadCv}
              className="ml-1 inline-flex items-center gap-1.5 text-sm font-semibold bg-navy-900 text-white px-4 py-2 rounded-md hover:bg-navy-700 dark:bg-white dark:text-navy-900 dark:hover:bg-navy-100 transition-all duration-200"
            >
              <Download size={16} />
              CV
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="text-navy-700 dark:text-navy-200 p-2"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="text-navy-900 dark:text-white p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[28rem]' : 'max-h-0'
        } bg-white/98 dark:bg-navy-950/98 backdrop-blur-md`}
      >
        <nav className="flex flex-col container-px pb-6 gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-left py-3 text-sm font-medium text-navy-700 dark:text-navy-200 hover:text-navy-900 dark:hover:text-white transition-colors border-b border-navy-100 dark:border-navy-800 last:border-b-0"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              downloadCv();
            }}
            className="mt-3 inline-flex items-center justify-center gap-2 text-sm font-semibold bg-navy-900 text-white px-4 py-3 rounded-md dark:bg-white dark:text-navy-900"
          >
            <Download size={16} />
            Download CV
          </button>
        </nav>
      </div>
    </header>
  );
}
