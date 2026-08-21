import { profile, education, certifications, experience, skillGroups } from '@/data/portfolio';

function buildCvHtml(): string {
  const skillsHtml = skillGroups
    .map(
      (g) =>
        `<p><strong>${g.title}:</strong> ${g.skills.join(', ')}</p>`
    )
    .join('');

  const expHtml = experience
    .map(
      (e) =>
        `<p><strong>${e.role}</strong> — ${e.organisation} (${e.period})<br/>${e.highlights
          .map((h) => `• ${h}`)
          .join('<br/>')}</p>`
    )
    .join('');

  const eduHtml = education
    .map(
      (e) =>
        `<p><strong>${e.title}</strong> — ${e.institution} (${e.period})</p>`
    )
    .join('');

  const certHtml = certifications
    .map((c) => `<p><strong>${c.title}</strong> — ${c.issuer}</p>`)
    .join('');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${profile.name} — CV</title>
<style>
  body { font-family: Georgia, 'Times New Roman', serif; color: #15263f; max-width: 780px; margin: 40px auto; padding: 0 24px; line-height: 1.5; }
  h1 { font-size: 28px; margin: 0 0 4px; }
  h2 { font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #15263f; padding-bottom: 4px; margin: 28px 0 12px; }
  .headline { font-size: 15px; color: #3a5575; margin: 0 0 4px; }
  .contact { font-size: 13px; color: #56708f; margin: 0 0 4px; }
  p { margin: 0 0 8px; font-size: 13px; }
</style>
</head>
<body>
  <h1>${profile.name}</h1>
  <p class="headline">${profile.headline}</p>
  <p class="contact">${profile.email} | ${profile.phone} | ${profile.location}</p>

  <h2>Profile</h2>
  ${profile.about.map((p) => `<p>${p}</p>`).join('')}

  <h2>Skills</h2>
  ${skillsHtml}

  <h2>Work Experience</h2>
  ${expHtml}

  <h2>Education</h2>
  ${eduHtml}

  <h2>Certifications</h2>
  ${certHtml}
</body>
</html>`;
}

export function downloadCv() {
  const html = buildCvHtml();
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${profile.name.replace(/\s+/g, '_')}_CV.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
