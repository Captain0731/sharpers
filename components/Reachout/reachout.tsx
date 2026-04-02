"use client";
import React, { useState } from "react";
import "./reachout.scss";

const Reachout = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form Submitted:", formData);
		alert("Thank you! Your message has been received.");
		setFormData({ name: "", email: "", subject: "", message: "" });
	};

	return (
		<section className="reachout" id="reachout">
			<div className="reachout__container">
				<div className="reachout__hero">
					<div className="reachout__hero-text">
						<h1 className="reachout__hero-title">Reach Out</h1>
						<p className="reachout__hero-desc">
							Have a question or want to collaborate? We'd love to hear from you.
							Send us a message and we'll get back to you as soon as possible.
						</p>
					</div>
				</div>

				<div className="reachout__content">
					<div className="reachout__info">
						<div className="reachout__info-card">
							<div className="reachout__info-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
							</div>
							<div className="reachout__info-details">
								<h3>Email Us</h3>
								<p>hello@varchas.com</p>
							</div>
						</div>

						<div className="reachout__info-card">
							<div className="reachout__info-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
							</div>
							<div className="reachout__info-details">
								<h3>Visit Us</h3>
								<p>Innovation Hub, Bangalore, India</p>
							</div>
						</div>

						<div className="reachout__info-card">
							<div className="reachout__info-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
							</div>
							<div className="reachout__info-details">
								<h3>Global Presence</h3>
								<p>Remote-first worldwide coverage</p>
							</div>
						</div>
					</div>

					<div className="reachout__form-wrap">
						<form className="reachout__form" onSubmit={handleSubmit}>
							<div className="reachout__form-group">
								<label htmlFor="name">Full Name</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Your Name"
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="reachout__form-group">
								<label htmlFor="email">Email Address</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="hello@example.com"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="reachout__form-group">
								<label htmlFor="subject">Subject</label>
								<input
									type="text"
									id="subject"
									name="subject"
									placeholder="How can we help?"
									value={formData.subject}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="reachout__form-group">
								<label htmlFor="message">Your Message</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									placeholder="Tell us more about your project..."
									value={formData.message}
									onChange={handleChange}
									required
								></textarea>
							</div>
							<button type="submit" className="reachout__form-submit">
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Reachout;
