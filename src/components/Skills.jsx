import { motion } from 'framer-motion';

const groups = [
	{ category: 'Frontend & UI', color: '#06b6d4', skills: ['React.js', 'Redux Toolkit', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Framer Motion', 'ShadCN UI'] },
	{ category: 'Backend', color: '#6366f1', skills: ['Node.js', 'Express.js', 'REST APIs','RBAC', 'MVC Architecture', 'Middleware Design', 'JWT Authentication'] },
	{ category: 'Database & Security', color: '#10b981', skills: ['MongoDB', 'SQL', 'Zod Validation', 'bcrypt', 'Error Handling', 'Secure API Design'] },
	{ category: 'Tools & DevOps', color: '#f59e0b', skills: ['Git / GitHub', 'Postman', 'Jest', 'Supertest', 'Render', 'Netlify', 'CI/CD', 'Vite'] },
];

export default function Skills() {
	return (
		<section id="skills" style={{ padding: '96px 0', background: 'hsl(var(--muted)/0.3)' }}>
			<div className="container" style={{ padding: '0 24px' }}>
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
					<h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 48, display: 'flex', alignItems: 'center', gap: 12 }}>
						<span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.1rem', color: 'hsl(var(--primary))' }}>02.</span> Skills
						<div style={{ flex: 1, maxWidth: 200, height: 1, background: 'hsl(var(--border))' }} />
					</h2>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
						{groups.map((g, gi) => (
							<motion.div key={g.category}
								initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
								transition={{ duration: 0.5, delay: gi * 0.1 }}
								style={{ border: `1px solid ${g.color}40`, borderRadius: 16, padding: 24, background: `${g.color}10` }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
									<span style={{ width: 10, height: 10, borderRadius: '50%', background: g.color, display: 'inline-block' }} />
									<h3 style={{ fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em' }}>{g.category}</h3>
								</div>
								<div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
									{g.skills.map(sk => (
										<span key={sk} style={{ padding: '4px 12px', fontSize: '0.8rem', fontWeight: 500, borderRadius: 99, background: 'hsl(var(--background)/0.7)', border: '1px solid hsl(var(--border)/0.5)', color: 'hsl(var(--foreground)/0.8)' }}>
											{sk}
										</span>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
