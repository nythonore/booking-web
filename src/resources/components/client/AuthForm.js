import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Form, Button } from 'react-bootstrap';

const AuthForm = ({ loginShow, setLoginShow }) => {
	const [signupShow, setSignupShow] = useState(false);

	const handleNavigate = type => {
		if (type === 'signup') {
			setLoginShow(false);
			setSignupShow(true);
		}

		if (type === 'login') {
			setSignupShow(false);
			setLoginShow(true);
		}

		if (type === 'close') {
			setSignupShow(false);
			setLoginShow(false);
		}
	};

	return (
		<>
			<Modal centered show={loginShow} onHide={() => handleNavigate('close')}>
				<Modal.Body>
					<div className='px-3 auth-form'>
						<div className='d-flex justify-content-between py-4'>
							<h2 className='font-sz-large font-wg-500 color-dark'>Log In</h2>

							<span
								className='font-sz-large font-wg-500 color-dark cursor'
								onClick={() => handleNavigate('close')}
							>
								<i className='bi bi-x-lg'></i>
							</span>
						</div>

						<Form>
							<Form.Control type='email' placeholder='Email Address' />

							<div>
								<Form.Control
									type='password'
									placeholder='Password'
									className='mt-3'
								/>

								<p className='text-right mt-2'>
									<Link to='#' className='color-danger font-wg-500'>
										Forgot Password?
									</Link>
								</p>
							</div>

							<Button className='btn-primary btn-block font-wg-500 font-sz-normal text-uppercase mt-4'>
								Log in
							</Button>
						</Form>

						<p className='font-sz-medium text-center py-4'>
							Do not have an account?{' '}
							<span
								className='color-danger font-wg-500 cursor'
								onClick={() => handleNavigate('signup')}
							>
								Sign Up
							</span>
						</p>
					</div>
				</Modal.Body>
			</Modal>

			<Modal centered show={signupShow} onHide={() => handleNavigate('close')}>
				<Modal.Body>
					<div className='px-3 auth-form'>
						<div className='d-flex justify-content-between py-4'>
							<h2 className='font-sz-large font-wg-500 color-dark'>Sign Up</h2>

							<span
								className='font-sz-large font-wg-500 color-dark cursor'
								onClick={() => handleNavigate('close')}
							>
								<i className='bi bi-x-lg'></i>
							</span>
						</div>

						<Form>
							<div className='row'>
								<div className='col-md-6'>
									<Form.Control
										type='text'
										placeholder='First Name'
										className='mb-3'
									/>
								</div>

								<div className='col-md-6'>
									<Form.Control
										type='text'
										placeholder='Last Name'
										className='mb-3'
									/>
								</div>
							</div>

							<Form.Control type='text' placeholder='Phone Number' />
							<Form.Control
								type='text'
								placeholder='Email Address'
								className='mt-3'
							/>

							<Form.Control
								type='password'
								placeholder='Password'
								className='mt-3'
							/>

							<p className='mt-3'>
								<Form.Check
									type='checkbox'
									id='agree'
									label={
										<>
											<span>
												I have read and accept the{' '}
												<span className='color-danger font-wg-500 cursor'>
													Terms
												</span>{' '}
												and{' '}
												<span className='color-danger font-wg-500 cursor'>
													Privacy Policy
												</span>
											</span>
										</>
									}
								/>
							</p>

							<Button className='bg-primary color-white btn-block font-wg-500 font-sz-normal text-uppercase mt-4'>
								Sign up
							</Button>
						</Form>

						<p className='font-sz-medium text-center color-dark py-4'>
							Already have an account?{' '}
							<span
								className='color-danger font-wg-500 cursor'
								onClick={() => handleNavigate('login')}
							>
								Log In
							</span>
						</p>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default AuthForm;
