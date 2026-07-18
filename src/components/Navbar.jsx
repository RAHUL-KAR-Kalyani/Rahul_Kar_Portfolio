import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		const fn = () => setScrolled(window.scrollY > 20);
		window.addEventListener('scroll', fn);
		return () => window.removeEventListener('scroll', fn);
	}, []);

	const links = [
		{ name: 'About', href: '#about' },
		{ name: 'Skills', href: '#skills' },
		{ name: 'Experience', href: '#experience' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Contact', href: '#contact' },
	];

	const navStyle = {
		position: 'fixed', top: 0, width: '100%', zIndex: 50,
		transition: 'all 0.3s',
		background: scrolled ? 'hsla(var(--background)/0.85)' : 'transparent',
		backdropFilter: scrolled ? 'blur(12px)' : 'none',
		borderBottom: scrolled ? '1px solid hsl(var(--border))' : 'none',
		padding: scrolled ? '12px 0' : '20px 0',
	};

	return (
		<header style={navStyle}>
			<div className="container" style={{ padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<a href="#" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '1.2rem', color: 'hsl(var(--foreground))', textDecoration: 'none' }}>
					RK<span style={{ color: 'hsl(var(--primary))' }}>.</span>
				</a>

				{/* Desktop nav */}
				<nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
					<ul style={{ display: 'flex', gap: '24px', listStyle: 'none' }}>
						{links.map(l => (
							<li key={l.name}>
								<a href={l.href} style={{ color: 'hsl(var(--muted-foreground))', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
									onMouseEnter={e => e.target.style.color = 'hsl(var(--primary))'}
									onMouseLeave={e => e.target.style.color = 'hsl(var(--muted-foreground))'}>
									{l.name}
								</a>
							</li>
						))}
					</ul>
					<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						style={{ background: 'none', border: '1px solid hsl(var(--border))', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', color: 'hsl(var(--foreground))', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						{theme === 'dark' ? '☀' : '🌙'}
					</button>
				</nav>

				{/* Mobile */}
				<div style={{ display: 'flex', gap: 8 }} className="mobile-nav">
					<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						style={{ background: 'none', border: '1px solid hsl(var(--border))', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', color: 'hsl(var(--foreground))', fontSize: '1rem' }}>
						{theme === 'dark' ? '☀' : '🌙'}
					</button>
					<button onClick={() => setMobileOpen(!mobileOpen)}
						style={{ background: 'none', border: '1px solid hsl(var(--border))', borderRadius: 8, width: 36, height: 36, cursor: 'pointer', color: 'hsl(var(--foreground))', fontSize: '1.2rem' }}>
						{mobileOpen ? '✕' : '☰'}
					</button>
				</div>
			</div>

			{mobileOpen && (
				<div style={{ background: 'hsl(var(--card))', borderBottom: '1px solid hsl(var(--border))', padding: '16px 24px' }}>
					{links.map(l => (
						<a key={l.name} href={l.href} onClick={() => setMobileOpen(false)}
							style={{ display: 'block', padding: '10px 0', color: 'hsl(var(--muted-foreground))', textDecoration: 'none', fontWeight: 500 }}>
							{l.name}
						</a>
					))}
				</div>
			)}

			<style>{`
          @media (min-width: 768px) { .mobile-nav { display: none !important; } }
          @media (max-width: 767px) { .desktop-nav { display: none !important; } }
        `}</style>
		</header>
	);
}
