import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./footer.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__grid">
					{/* Brand Column */}
					<div className="footer__column footer__column--brand">
						<div className="footer__logo">
							<Link href="/" aria-label="Go to home page">
								<Image
									src="/images/logo.png"
									alt="Varchas logo"
									width={120}
									height={48}
									sizes="(max-width: 768px) 140px, 220px"
									className="site-navbar__logo-image"
									priority
								/>
							</Link>
						</div>
						<p className="footer__description">
							Empowering individuals to shape the future with innovation,
							creativity, and collaboration. Join our journey to excellence.
						</p>
						<div className="footer__socials">
							<Link href="#" className="footer__social-link">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
							</Link>
							<Link href="#" className="footer__social-link">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
							</Link>
							<Link href="#" className="footer__social-link">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
							</Link>
						</div>
					</div>

					{/* Navigation Column */}
					<div className="footer__column">
						<h3 className="footer__title">Platform</h3>
						<ul className="footer__links">
							<li><Link href="/">Home</Link></li>
							<li><Link href="/projects">Projects</Link></li>
							<li><Link href="/shapers">Shapers</Link></li>
							<li><Link href="/attendees">Attendees</Link></li>
							<li><Link href="/gala-dinner">Gala Dinner</Link></li>
						</ul>
					</div>

					{/* Resources Column */}
					<div className="footer__column">
						<h3 className="footer__title">Support</h3>
						<ul className="footer__links">
							<li><Link href="#">Help Center</Link></li>
							<li><Link href="#">Terms of Service</Link></li>
							<li><Link href="#">Privacy Policy</Link></li>
							<li><Link href="/reachout">Reach Out</Link></li>
						</ul>
					</div>

					{/* Newsletter Column */}
					<div className="footer__column footer__column--newsletter">
						<h3 className="footer__title">Newsletter</h3>
						<p className="footer__newsletter-desc">
							Stay updated with our latest news and events directly in your inbox.
						</p>
						<form className="footer__form">
							<div className="footer__form-group">
								<input type="email" placeholder="Your Email" required className="footer__input" />
								<button type="submit" className="footer__submit">Join</button>
							</div>
						</form>
					</div>
				</div>

				<div className="footer__bottom">
					<Image
						src="/images/logo.png"
						alt="Varchas logo"
						width={240}
						height={96}
						className="footer__watermark-logo"
					/>

				</div>
			</div>
		</footer>
	);
};

export default Footer;
