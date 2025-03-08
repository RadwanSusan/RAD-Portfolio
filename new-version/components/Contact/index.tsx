// components\Contact\index.tsx
'use client';
import React, { useRef, useState, lazy, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import { useTheme } from '@/contexts/theme-context';
import styles from './styles.module.css';
const MapDubai = lazy(() => import('../MapDubai'));
const Contact: React.FC = () => {
	const { isDark } = useTheme();
	const formRef = useRef<HTMLFormElement>(null);
	const [success, setSuccess] = useState<boolean | null>(null);
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!formRef.current) return;
		emailjs
			.sendForm(
				'service_kmcm19i',
				'template_g6tis0s',
				formRef.current,
				'gJJw9oRmwKZw8k8YF',
			)
			.then(
				() => {
					setSuccess(true);
					if (formRef.current) formRef.current.reset();
					setTimeout(() => {
						setSuccess(false);
					}, 4000);
				},
				() => {
					setSuccess(false);
					if (formRef.current) formRef.current.reset();
				},
			);
	};
	return (
		<section className={styles.section}>
			<div
				className={styles.container}
				id='contact'>
				<div className={styles.left}>
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className={styles.form}>
						<h1 className={styles.title}>Contact Me</h1>
						<input
							className={styles.input}
							placeholder='Name'
							name='name'
							autoComplete='on'
							style={
								isDark
									? { border: 'none' }
									: { border: '1px solid #000' }
							}
						/>
						<input
							className={styles.input}
							placeholder='Email'
							name='email'
							autoComplete='on'
							style={
								isDark
									? { border: 'none' }
									: { border: '1px solid #000' }
							}
						/>
						<textarea
							className={styles.textArea}
							placeholder='Write your message'
							name='message'
							rows={10}
							style={
								isDark
									? { border: 'none' }
									: { border: '1px solid #000' }
							}
						/>
						<button
							className={styles.button}
							type='submit'>
							Send
						</button>
						{success && (
							<p className={styles.successMessage}>
								Your message has been sent. I&apos;ll get back to you
								soon :)
							</p>
						)}
					</form>
				</div>
				<div className={styles.right}>
					<Suspense fallback={null}>
						<MapDubai />
					</Suspense>
				</div>
			</div>
		</section>
	);
};
export default Contact;
