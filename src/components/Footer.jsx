import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
	return (
		<footer style={{ padding: '40px 0', borderTop: '1px solid hsl(var(--border))' }}>
			<div className="container" style={{ padding: '0 24px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
				<p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>
					Designed &amp; Built by <strong style={{ color: 'hsl(var(--primary))' }}>Rahul Kar</strong> · &copy; {new Date().getFullYear()}
				</p>
				<div style={{ display: 'flex', gap: 24 }}>
					{[
						{ name: "github", icon: faGithub, href: 'https://github.com/RAHUL-KAR-Kalyani', color: "#fff", },
						{ name: "linkedin", icon: faLinkedin, href: 'https://linkedin.com/in/rahulkar26', color: "#0A66C2" },
						{ name: "email", icon: faEnvelope, href: 'mailto:rahulkar.996@gmail.com', color: "#EA4335" },
					].map(({ name, icon, href, color }) => (
						<a key={name} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={name} title={name}
							style={{ color: "hsl(var(--muted-foreground))", fontSize: "20px", display: "flex", alignItems: "center", transition: "color 0.2s" }}
							onMouseEnter={(e) => e.currentTarget.style.color = color}
							onMouseLeave={(e) => e.currentTarget.style.color = "hsl(var(--muted-foreground))"}>
							<FontAwesomeIcon icon={icon} size='xl' />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
