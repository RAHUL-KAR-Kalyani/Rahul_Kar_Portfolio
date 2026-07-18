import { motion } from 'framer-motion';

const jobs = [
	{
		title: 'Freelance Full Stack Developer', company: 'Self-Employed', location: 'Remote', period: '2022 – Present',
		points: [
			'Built and deployed full-stack MERN applications focused on business workflows, dashboard systems, and secure authentication.',
			'Developed scalable frontend and backend modules while strengthening expertise in REST APIs, Redux Toolkit, and MongoDB.',
			'Worked on independent product development, application architecture, and workflow automation projects.',
		],
	},
	{
		title: 'Frontend Developer – Intern', company: 'Kashmiri Geeks Pvt. Ltd.', location: 'Remote – India', period: 'July 2021 – Jan 2022',
		points: [
			'Developed responsive frontend features using React.js, JavaScript, and Redux.',
			'Integrated REST APIs and implemented modular UI components for scalable development.',
			'Collaborated with backend developers and designers to deliver responsive user experiences.',
		],
	},
	{
		title: 'Customer Support Executive', company: 'Fusion BPO Services', location: 'Remote – India', period: 'Feb 2023 – Nov 2023',
		points: ['Managed high-volume customer issue resolution and strengthened problem-solving skills.'],
	},
];

export default function Experience() {
	return (
		<section id="experience" style={{ padding: '96px 0' }}>
			<div className="container" style={{ padding: '0 24px' }}>
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
					<h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 48, display: 'flex', alignItems: 'center', gap: 12 }}>
						<span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.1rem', color: 'hsl(var(--primary))' }}>03.</span> Experience
						<div style={{ flex: 1, maxWidth: 200, height: 1, background: 'hsl(var(--border))' }} />
					</h2>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
						{jobs.map((job, i) => (
							<motion.div key={job.title}
								initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								style={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 16, padding: 32, transition: 'border-color 0.2s, box-shadow 0.2s' }}
								onMouseEnter={e => { e.currentTarget.style.borderColor = 'hsl(var(--primary)/0.4)'; e.currentTarget.style.boxShadow = '0 8px 30px hsl(var(--primary)/0.08)'; }}
								onMouseLeave={e => { e.currentTarget.style.borderColor = 'hsl(var(--border))'; e.currentTarget.style.boxShadow = 'none'; }}>
								<div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
									<div>
										<h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: 4 }}>{job.title}</h3>
										<p style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>{job.company}</p>
									</div>
									<div style={{ textAlign: 'right' }}>
										<p style={{ fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', background: 'hsl(var(--muted))', padding: '4px 12px', borderRadius: 99, marginBottom: 4 }}>{job.period}</p>
										<p style={{ fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))' }}>{job.location}</p>
									</div>
								</div>
								<ul style={{ listStyle: 'none' }}>
									{job.points.map((pt, j) => (
										<li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 10, color: 'hsl(var(--muted-foreground))', fontSize: '0.95rem', lineHeight: 1.7 }}>
											<span style={{ marginTop: 10, width: 6, height: 6, borderRadius: '50%', background: 'hsl(var(--primary))', flexShrink: 0 }} />
											{pt}
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
