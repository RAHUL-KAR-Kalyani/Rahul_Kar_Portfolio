import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const titles = ['Full Stack Developer', 'MERN Stack Engineer', 'React & Node.js Specialist', 'Web Application Developer', 'Security-Focused Developer',];
// const titles = ['Full Stack Developer', 'MERN Stack Engineer', 'React & Node.js Specialist', 'Software Engineer', 'Web Application Developer', 'Front-End Developer', 'Back-End Developer', 'UI/UX Enthusiast', 'Tech Innovator', 'Problem Solver', 'Code Artisan', 'Digital Creator', 'App Architect', 'Cloud Solutions Developer', 'Agile Practitioner', 'DevOps Advocate', 'Open Source Contributor', 'Performance Optimizer', 'Security-Focused Developer', 'Data-Driven Engineer'];

export default function Hero() {
	const [idx, setIdx] = useState(0);

	useEffect(() => {
		const t = setInterval(() => setIdx(p => (p + 1) % titles.length), 3000);
		return () => clearInterval(t);
	}, []);

	const s = {
		section: { minHeight: '100dvh', display: 'flex', alignItems: 'center', paddingTop: 80, position: 'relative', overflow: 'hidden' },
		bg: { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, hsl(var(--primary)/0.08) 0%, transparent 60%)', pointerEvents: 'none' },
		greeting: { fontFamily: 'JetBrains Mono, monospace', color: 'hsl(var(--primary))', fontSize: '0.95rem', letterSpacing: '0.1em', marginBottom: 16 },
		name: { fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 8 },
		titleWrap: { height: 'clamp(2.5rem, 6vw, 4rem)', display: 'flex', alignItems: 'center', marginBottom: 24, overflow: 'hidden' },
		title: { fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 700, color: 'hsl(var(--muted-foreground))', letterSpacing: '-0.02em' },
		tagline: { fontSize: '1.1rem', color: 'hsl(var(--muted-foreground))', maxWidth: 560, lineHeight: 1.7, marginBottom: 40 },
		btnRow: { display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 48 },
		btnPrimary: { padding: '14px 32px', background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: '1rem', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 },
		btnOutline: { padding: '14px 32px', background: 'transparent', color: 'hsl(var(--foreground))', border: '1px solid hsl(var(--border))', borderRadius: 8, fontWeight: 600, fontSize: '1rem', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 },
		socials: { display: 'flex', gap: 24 },
		socialLink: { color: 'hsl(var(--muted-foreground))', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' },
	};

	const titleStyle = {
		fontSize: 'clamp(1.5rem, 5vw, 3rem)',
		fontWeight: 'lighter',
		color: 'hsl(var(--muted-foreground))',
		letterSpacing: '-0.02em',
		fontFamily: "'Montserrat', sans-serif",
	};

	return (
		<section style={s.section}>
			<div style={s.bg} />
			<div className="container" style={{ padding: '0 24px', position: 'relative', zIndex: 1 }}>
				<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
					<p style={s.greeting}>Hi, my name is</p>
					<h1 style={s.name}>Rahul Kar.</h1>
					<div style={s.titleWrap}>
						<AnimatePresence mode="wait">
							<motion.h2 key={idx} style={titleStyle}
								initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.4 }}>
								{titles[idx]}
							</motion.h2>
						</AnimatePresence>
					</div>
					<p style={s.tagline}>Building scalable business applications with React, Node.js &amp; MongoDB. Turning complex problems into elegant, maintainable code.</p>
					<div style={s.btnRow}>
						<a href="#projects" style={s.btnPrimary}>View My Work →</a>
						<a href="/Rahul_Kar_Resume.pdf" download="Rahul_Kar_Resume.pdf" style={s.btnOutline}>Download CV</a>
					</div>
					<div style={s.socials}>
						{[
							{ label: 'GitHub', href: 'https://github.com/RAHUL-KAR-Kalyani' },
							{ label: 'LinkedIn', href: 'https://linkedin.com/in/rahulkar26' },
							{ label: 'Email', href: 'mailto:rahulkar.996@gmail.com' },
						].map(({ label, href }) => (
							<a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={s.socialLink}
								onMouseEnter={e => e.target.style.color = 'hsl(var(--primary))'}
								onMouseLeave={e => e.target.style.color = 'hsl(var(--muted-foreground))'}>
								{label}
							</a>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
