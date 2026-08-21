import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { profile } from '@/data/portfolio';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-navy-800 pt-14 pb-8">
      <div className="max-w-6xl mx-auto container-px">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="font-display text-lg font-bold text-white mb-3">{profile.name}</p>
            <p className="text-navy-300 text-sm leading-relaxed max-w-xs">
              {profile.headline} dedicated to keeping offices, tenders, and teams running smoothly.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-navy-200 hover:bg-white hover:text-navy-900 transition-all"
              >
                <Github size={17} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-navy-200 hover:bg-white hover:text-navy-900 transition-all"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-bold text-white uppercase tracking-wide mb-4">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-navy-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold text-white uppercase tracking-wide mb-4">
              Get in touch
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-navy-300 hover:text-white transition-colors break-all"
                >
                  <Mail size={15} className="flex-shrink-0" /> {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
                  className="flex items-center gap-2 text-navy-300 hover:text-white transition-colors"
                >
                  <Phone size={15} className="flex-shrink-0" /> {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-navy-300">
                <MapPin size={15} className="flex-shrink-0" /> {profile.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-navy-400 text-sm">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-navy-400 text-sm">{profile.headline}</p>
        </div>
      </div>
    </footer>
  );
}
