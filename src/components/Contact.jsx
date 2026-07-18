import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

export default function Contact() {
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const { register, handleSubmit, reset, formState: { errors } } = useForm();

	const onSubmit = () => {
		setLoading(true);
		setTimeout(() => { setLoading(false); setSubmitted(true); reset(); }, 1200);
	};

	const inputStyle = (hasError) => ({
		width: '100%', padding: '12px 16px', borderRadius: 8, fontSize: '0.95rem',
		background: 'hsl(var(--background))', color: 'hsl(var(--foreground))',
		border: `1px solid ${hasError ? 'hsl(var(--destructive))' : 'hsl(var(--border))'}`,
		outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box',
	});

	return (
		<section id="contact" style={{ padding: '96px 0', background: 'hsl(var(--muted)/0.3)' }}>
			<div className="container" style={{ padding: '0 24px' }}>
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
					<h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
						<span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.1rem', color: 'hsl(var(--primary))' }}>06.</span> Get In Touch
						<div style={{ flex: 1, maxWidth: 200, height: 1, background: 'hsl(var(--border))' }} />
					</h2>
					<p style={{ color: 'hsl(var(--muted-foreground))', fontSize: '1.1rem', marginBottom: 48, maxWidth: 500 }}>
						Whether you have a project in mind, a job opportunity, or just want to say hello — my inbox is always open.
					</p>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 48, alignItems: 'start' }}>
						{/* Info */}
						<div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
							{[
								{ icon: '✉️', label: 'Email', value: 'rahulkar.996@gmail.com', href: 'mailto:rahulkar.996@gmail.com' },
								{ icon: '📞', label: 'Phone', value: '+91 6290626683', href: 'tel:+916290626683' },
								{ icon: '📍', label: 'Location', value: 'Kolkata, West Bengal, India', href: null },
							].map(({ icon, label, value, href }) => (
								<div key={label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
									<div style={{ width: 44, height: 44, borderRadius: 10, background: 'hsl(var(--primary)/0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>{icon}</div>
									<div>
										<p style={{ fontWeight: 600, marginBottom: 2 }}>{label}</p>
										{href ? <a href={href} style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', textDecoration: 'none' }}>{value}</a>
											: <p style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))' }}>{value}</p>}
									</div>
								</div>
							))}
						</div>
						{/* Form */}
						{submitted ? (
							<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
								style={{ textAlign: 'center', padding: '64px 32px', border: '1px solid hsl(var(--primary)/0.2)', borderRadius: 16, background: 'hsl(var(--primary)/0.05)' }}>
								<div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
								<h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>Message Sent!</h3>
								<p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: 24 }}>Thanks for reaching out. I'll get back to you soon.</p>
								<button onClick={() => setSubmitted(false)}
									style={{ padding: '10px 24px', border: '1px solid hsl(var(--primary)/0.3)', borderRadius: 8, background: 'transparent', color: 'hsl(var(--primary))', cursor: 'pointer', fontWeight: 600 }}>
									Send another message
								</button>
							</motion.div>
						) : (
							<form onSubmit={handleSubmit(onSubmit)} style={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 16, padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
								<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
									<div>
										<label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: 6 }}>Name</label>
										<input placeholder="Your name" style={inputStyle(errors.name)} {...register('name', { required: 'Required' })} />
										{errors.name && <p style={{ color: 'hsl(var(--destructive))', fontSize: '0.75rem', marginTop: 4 }}>{errors.name.message}</p>}
									</div>
									<div>
										<label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: 6 }}>Email</label>
										<input type="email" placeholder="your@email.com" style={inputStyle(errors.email)} {...register('email', { required: 'Required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })} />
										{errors.email && <p style={{ color: 'hsl(var(--destructive))', fontSize: '0.75rem', marginTop: 4 }}>{errors.email.message}</p>}
									</div>
								</div>
								<div>
									<label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: 6 }}>Subject</label>
									<input placeholder="What's this about?" style={inputStyle(errors.subject)} {...register('subject', { required: 'Required' })} />
									{errors.subject && <p style={{ color: 'hsl(var(--destructive))', fontSize: '0.75rem', marginTop: 4 }}>{errors.subject.message}</p>}
								</div>
								<div>
									<label style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', marginBottom: 6 }}>Message</label>
									<textarea rows={5} placeholder="Tell me about your project or opportunity..." style={{ ...inputStyle(errors.message), resize: 'vertical' }} {...register('message', { required: 'Required' })} />
									{errors.message && <p style={{ color: 'hsl(var(--destructive))', fontSize: '0.75rem', marginTop: 4 }}>{errors.message.message}</p>}
								</div>
								<button type="submit" disabled={loading}
									style={{ padding: '14px', background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
									{loading ? 'Sending...' : 'Send Message'}
								</button>
							</form>
						)}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
