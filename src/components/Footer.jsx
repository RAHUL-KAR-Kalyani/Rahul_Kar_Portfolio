export default function Footer() {
	return (
		<footer style={{ padding: '40px 0', borderTop: '1px solid hsl(var(--border))' }}>
			<div className="container" style={{ padding: '0 24px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
				<p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>
					Designed &amp; Built by <strong style={{ color: 'hsl(var(--primary))' }}>Rahul Kar</strong> · &copy; {new Date().getFullYear()}
				</p>
				<div style={{ display: 'flex', gap: 24 }}>
					{[
						{ label: 'GitHub', href: 'https://github.com/RAHUL-KAR-Kalyani' },
						{ label: 'LinkedIn', href: 'https://linkedin.com/in/rahulkar26' },
						{ label: 'Email', href: 'mailto:rahulkar.996@gmail.com' },
					].map(({ label, href }) => (
						<a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
							style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', textDecoration: 'none', transition: 'color 0.2s' }}
							onMouseEnter={e => e.target.style.color = 'hsl(var(--primary))'}
							onMouseLeave={e => e.target.style.color = 'hsl(var(--muted-foreground))'}>
							{label}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
