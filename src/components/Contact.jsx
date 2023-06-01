import React, { useRef, useState, lazy, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
const MapDubai = lazy(() => import('./MapDubai'));
import { lightTheme, darkTheme, useDarkMode } from '../contexts/theme-context';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	gap: 150px;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	@media only screen and (max-width: 768px) {
		justify-content: center;
	}
`;

const Title = styled.h1`
	font-weight: 200;
	color: ${(props) => props.$ContactTitleColor};
`;

const Form = styled.form`
	width: 500px;
	display: flex;
	flex-direction: column;
	gap: 25px;
	@media only screen and (max-width: 768px) {
		width: 320px;
	}
`;

const Input = styled.input`
	padding: 20px;
	background-color: #e8e6e6;
	border: none;
	border-radius: 5px;
`;

const TextArea = styled.textarea`
	padding: 20px;
	border: none;
	border-radius: 5px;
	background-color: #e8e6e6;
`;

const Button = styled.button`
	background-color: #222;
	color: white;
	border: none;
	font-weight: bold;
	cursor: pointer;
	border-radius: 5px;
	padding: 20px;
`;

const Right = styled.div`
	flex: 1;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

const Contact = () => {
	const { isDark } = useDarkMode();
	const ref = useRef();
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_kmcm19i',
				'template_g6tis0s',
				ref.current,
				'gJJw9oRmwKZw8k8YF',
			)
			.then(
				() => {
					setSuccess(true);
					ref.current.reset();
					setTimeout(() => {
						setSuccess(false);
					}, 4000);
				},
				() => {
					setSuccess(false);
					ref.current.reset();
				},
			);
	};
	return (
		<Section>
			<Container id='contact'>
				<Left>
					<Form
						ref={ref}
						onSubmit={handleSubmit}
					>
						<Title
							$ContactTitleColor={
								isDark
									? darkTheme.colors.ContactTitleColor
									: lightTheme.colors.ContactTitleColor
							}
						>
							Contact Me
						</Title>
						<Input
							placeholder='Name'
							name='name'
							autoComplete='on'
							style={
								isDark
									? { border: 'none' }
									: { border: '1px solid #000' }
							}
						/>
						<Input
							placeholder='Email'
							name='email'
							autoComplete='on'
							style={
								isDark
									? { border: 'none' }
									: { border: '1px solid #000' }
							}
						/>
						<TextArea
							placeholder='Write your message'
							name='message'
							rows={10}
							style={
								isDark
									? { border: 'none' }
									: { border: '1px solid #000' }
							}
						/>
						<Button type='submit'>Send</Button>
						{success &&
							"Your message has been sent. I'll get back to you soon :)"}
					</Form>
				</Left>
				<Right>
					<Suspense fallback={null}>
						<MapDubai />
					</Suspense>
				</Right>
			</Container>
		</Section>
	);
};

export default Contact;
