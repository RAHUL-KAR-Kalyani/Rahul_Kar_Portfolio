import { motion } from 'framer-motion';

export default function About() {
	const s = {
		section: { padding: '96px 0', position: 'relative' },
		heading: { fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 48, display: 'flex', alignItems: 'center', gap: 12 },
		num: { fontFamily: 'JetBrains Mono, monospace', fontSize: '1.1rem', color: 'hsl(var(--primary))', marginRight: 4 },
		line: { flex: 1, maxWidth: 200, height: 1, background: 'hsl(var(--border))' },
		grid: { display: 'grid', gridTemplateColumns: '1fr', gap: 48 },
		bio: { fontSize: '1.1rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.8, marginBottom: 20 },
		card: { background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 16, padding: 32 },
		factRow: { display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 24 },
		icon: { width: 44, height: 44, borderRadius: 10, background: 'hsl(var(--primary)/0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 },
		factTitle: { fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: 4 },
		factSub: { fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' },
	};

	const facts = [
		{ icon: '🎓', title: 'Education', sub: 'Master of Computer Application (MCA)' },
		{ icon: '💼', title: 'Experience', sub: '2+ Years Freelance & Agency' },
		{ icon: '📍', title: 'Location', sub: 'Kolkata, West Bengal, India' },
	];

	return (
		<section id="about" style={s.section}>
			<div className="container" style={{ padding: '0 24px' }}>
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5 }}>
					<h2 style={s.heading}><span style={s.num}>01.</span> About Me <div style={s.line} /></h2>
					<div style={{ ...s.grid, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
						<div>
							<p style={s.bio}>Hello! I'm Rahul, a passionate Full Stack Developer who enjoys building things that live on the internet. My interest in web development started with the realization that writing code is like solving puzzles — but with the added benefit of creating tools people can actually use.</p>
							<p style={s.bio}>Fast-forward to today, and I've had the privilege of building software for varied workflows as a freelance developer, architecting everything from HRMS platforms to inventory dashboards with the MERN stack.</p>
						</div>
						<div>
							<div style={s.card}>
								<h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 24 }}>Quick Facts</h3>
								{facts.map(f => (
									<div key={f.title} style={s.factRow}>
										<div style={s.icon}>{f.icon}</div>
										<div><p style={s.factTitle}>{f.title}</p><p style={s.factSub}>{f.sub}</p></div>
									</div>
								))}
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
