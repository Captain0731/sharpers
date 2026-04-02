"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import "./navbar.scss";

const NAV_LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'Shapers', href: '/shapers' },
	{ label: 'Attendees', href: '/attendees' },
	{ label: 'Gala Dinner', href: '/gala-dinner' },
];

const Navbar = () => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className={`site-navbar ${isMenuOpen ? 'site-navbar--open' : ''}`}>
			<div className="site-navbar__logo">
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
			<button
				type="button"
				className={`site-navbar__menu-toggle ${isMenuOpen ? 'site-navbar__menu-toggle--open' : ''}`}
				onClick={() => setIsMenuOpen((prev) => !prev)}
				aria-label="Toggle navigation menu"
				aria-expanded={isMenuOpen}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
			<ul className="site-navbar__links">
				{NAV_LINKS.map((link) => (
					<li key={link.href} className={pathname === link.href ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
			<div className="site-navbar__actions">
				<Link href="/reachout">
					<button className="site-navbar__btn site-navbar__btn--primary" onClick={() => setIsMenuOpen(false)}>Reach Out</button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
