import { motion } from 'framer-motion';

export default function Education() {
	return (
		<section id="education" style={{ padding: '96px 0', background: 'hsl(var(--muted)/0.3)' }}>
			<div className="container" style={{ padding: '0 24px' }}>
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
					<h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 48, display: 'flex', alignItems: 'center', gap: 12 }}>
						<span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.1rem', color: 'hsl(var(--primary))' }}>04.</span> Education
						<div style={{ flex: 1, maxWidth: 200, height: 1, background: 'hsl(var(--border))' }} />
					</h2>
					{/* <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
						style={{ maxWidth: 560, background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 16, padding: 32 }}>
						<div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
							<div style={{ width: 56, height: 56, borderRadius: 14, background: 'hsl(var(--primary)/0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>🎓</div>
							<div>
								<h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 4 }}>Brainware University</h3>
								<p style={{ color: 'hsl(var(--primary))', fontWeight: 600, marginBottom: 16 }}>Master of Computer Application (MCA)</p>
								<div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
									<span style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>📅 Aug 2018 – Aug 2021</span>
									<span style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>🏅 CGPA: 7.38</span>
								</div>
							</div>
						</div>
					</motion.div> */}

					<div className="mt-8 flex gap-20 flex-col mx-auto md:flex-row md:justify-center md:items-start">
						<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
							style={{ maxWidth: 560, background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 16, padding: 32 }}>
							<div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
								<div style={{ width: 56, height: 56, borderRadius: 14, background: 'hsl(var(--primary)/0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>🎓</div>
								<div>
									<h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 4 }}>Brainware University</h3>
									<p style={{ color: 'hsl(var(--primary))', fontWeight: 600, marginBottom: 16 }}>Master of Computer Application (MCA)</p>
									<div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
										<span style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>📅 Aug 2018 - Aug 2021</span>
										<span style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>🏅 CGPA: 7.38</span>
									</div>
								</div>
							</div>
						</motion.div>
						<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
						style={{ maxWidth: 560, background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 16, padding: 32 }}>
						<div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
							<div style={{ width: 56, height: 56, borderRadius: 14, background: 'hsl(var(--primary)/0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>🎓</div>
							<div>
								<h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 4 }}>Kalyani University</h3>
								<p style={{ color: 'hsl(var(--primary))', fontWeight: 600, marginBottom: 16 }}>Bachelor of Commerce (B.Com)</p>
								<div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
									<span style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>📅 Aug 2018 - Aug 2021</span>
									<span style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>🏅 CGPA: 7.38</span>
								</div>
							</div>
						</div>
					</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
