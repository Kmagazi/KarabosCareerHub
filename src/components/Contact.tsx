import { useState, FormEvent } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  User,
  MessageSquare,
  Github,
  Linkedin,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { profile } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('submitting');
    const { error } = await supabase
      .from('contact_messages')
      .insert({ name: name.trim(), email: email.trim(), message: message.trim() });

    if (error) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setName('');
    setEmail('');
    setMessage('');
  };

  const CONTACT_ITEMS = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`,
    },
    { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
  ];

  const SOCIALS = [
    { icon: Github, label: 'GitHub', href: profile.github },
    { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
  ];

  return (
    <section id="contact" className="section-pad bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-navy-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-700/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto container-px">
        <div className="max-w-2xl mx-auto mb-14 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-3 justify-center">
            <span className="w-8 h-px bg-navy-600" />
            <p className="font-semibold tracking-wide uppercase text-xs sm:text-sm text-navy-300">
              Contact
            </p>
            <span className="w-8 h-px bg-navy-600" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-white">
            Let's work together
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-navy-300">
            Have an opportunity or a question? Send a message and I'll get back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="lg:col-span-2 space-y-4">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 hover:bg-white/10 transition-all duration-200">
                  <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon size={18} className="text-white" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-navy-300 text-sm">{label}</p>
                    <p className="text-white font-medium break-all">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}

            <div className="flex gap-3 pt-2">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 hover:bg-white/10 transition-all duration-200"
                >
                  <Icon size={20} className="text-white" />
                  <span className="text-white font-medium text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="sr-only">Your name</span>
                <div className="relative">
                  <User size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-300" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/30 transition-all"
                  />
                </div>
              </label>
              <label className="block">
                <span className="sr-only">Your email</span>
                <div className="relative">
                  <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-300" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/30 transition-all"
                  />
                </div>
              </label>
            </div>
            <label className="block">
              <span className="sr-only">Your message</span>
              <div className="relative">
                <MessageSquare size={17} className="absolute left-3.5 top-4 text-navy-300" />
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/30 transition-all resize-none"
                />
              </div>
            </label>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center gap-2 bg-white hover:bg-navy-100 disabled:opacity-60 disabled:cursor-not-allowed text-navy-900 font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Send size={18} />
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                <CheckCircle2 size={16} />
                Message sent — thank you! I'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 text-red-400 text-sm font-medium">
                <AlertCircle size={16} />
                Something went wrong sending your message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
