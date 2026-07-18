import { motion } from 'framer-motion';

const projects = [
	{
		title: 'TalentFlow - HRMS',
		description: 'A comprehensive Human Resource Management System with employee attendance tracking, leave management workflows, and role-based access control. Features automated attendance processing using node-cron and secure multi-role JWT authentication.',
		stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit'],
		github: 'https://github.com/RAHUL-KAR-Kalyani/TalentFlow-HRMS',
		live: 'https://talentflow-hrms.onrender.com/',
		accent: '#06b6d4',
	},
	{
		title: 'PixVault - Gallery & Album Manager',
		description: 'A scalable image management platform supporting album creation, image uploads, secure sharing, and media organization workflows. Integrates Cloudinary for optimized media storage with robust access control.',
		stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary'],
		github: 'https://github.com/RAHUL-KAR-Kalyani/Gallery-Management-System',
		live: 'https://gallery-management-system.onrender.com/',
		accent: '#6366f1',
	},
	{
		title: 'Inventory & Billing Dashboard',
		description: 'A full-featured inventory and billing platform with stock tracking, low-stock alert management, and responsive admin dashboards. Includes analytics visualization for sales and revenue monitoring, tested with Jest and Supertest.',
		stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js'],
		github: 'https://github.com/RAHUL-KAR-Kalyani/inventory-management-system',
		live: 'https://inventory-management-cu9u.onrender.com/',
		accent: '#10b981',
	},
	{
		title: 'Job Portal',
		description: 'A modern job portal platform with job posting, application tracking, role-based authentication, and responsive dashboards. Features advanced job search.',
		stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
		github: 'https://github.com/RAHUL-KAR-Kalyani/MernJobPortal',
		live: 'https://mernjobportal-frontend.onrender.com',
		accent: '#ed8a11',
	},
	{
		title: 'AI Content Generator',
		description: 'A modern AI-powered content generation platform with seamless integration, responsive design, and intuitive user interface. Features include real-time collaboration, customizable templates, and comprehensive analytics.',
		stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Hugging Face AI','GEMINI AI'],
		github: 'https://github.com/RAHUL-KAR-Kalyani/AI-Content-Generator',
		live: 'https://ai-content-generator.onrender.com/',
		accent: '#ed1195',
	},
];

export default function Projects() {
	return (
		<section id="projects" style={{ padding: '96px 0' }}>
			<div className="container" style={{ padding: '0 24px' }}>
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
					<h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 48, display: 'flex', alignItems: 'center', gap: 12 }}>
						<span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.1rem', color: 'hsl(var(--primary))' }}>05.</span> Projects
						<div style={{ flex: 1, maxWidth: 200, height: 1, background: 'hsl(var(--border))' }} />
					</h2>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
						{projects.map((p, i) => (
							<motion.div key={p.title}
								initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
								transition={{ duration: 0.55, delay: i * 0.15 }}
								style={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s' }}
								onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = p.accent + '60'; e.currentTarget.style.boxShadow = `0 20px 40px ${p.accent}15`; }}
								onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'hsl(var(--border))'; e.currentTarget.style.boxShadow = 'none'; }}>
								<div style={{ height: 4, background: p.accent }} />
								<div style={{ padding: 28, display: 'flex', flexDirection: 'column', flex: 1 }}>
									<h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 12 }}>{p.title}</h3>
									<p style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>{p.description}</p>
									<div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
										{p.stack.map(t => (
											<span key={t} style={{ padding: '3px 10px', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', borderRadius: 6, background: 'hsl(var(--muted))', border: '1px solid hsl(var(--border))', color: 'hsl(var(--muted-foreground))' }}>{t}</span>
										))}
									</div>
									<div style={{ display: 'flex', gap: 12 }}>
										<a href={p.github} target="_blank" rel="noreferrer"
											style={{ flex: 1, textAlign: 'center', padding: '10px 0', border: '1px solid hsl(var(--border))', borderRadius: 8, color: 'hsl(var(--foreground))', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600, transition: 'border-color 0.2s, color 0.2s' }}
											onMouseEnter={e => { e.target.style.borderColor = p.accent; e.target.style.color = p.accent; }}
											onMouseLeave={e => { e.target.style.borderColor = 'hsl(var(--border))'; e.target.style.color = 'hsl(var(--foreground))'; }}>
											GitHub
										</a>
										<a href={p.live} target="_blank" rel="noreferrer"
											style={{ flex: 1, textAlign: 'center', padding: '10px 0', background: p.accent, borderRadius: 8, color: '#fff', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}>
											Live Demo
										</a>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
