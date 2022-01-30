import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Form, Button, Spinner } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import {
	AUTH_LOGIN_ACTION,
	CREATE_CUSTOMER_ACTION,
} from '../../../domain/user/action';
import usePayload from '../../../core/hooks/usePayload';
import Input from '../Input';

const AuthForm = ({ loginShow, setLoginShow }) => {
	const [signupShow, setSignupShow] = useState(false);

	const [handleChangeAuthLogin, { payload: authLoginPayload }] = usePayload({
		email: '',
		password: '',
	});

	const [handleChangeCreateCustomer, { payload: createCustomerPayload }] =
		usePayload({
			firstname: '',
			lastname: '',
			phone: '',
			email: '',
			password: '',
		});

	const [authLogin, { loading: authLoginLoading }] = useMutation(
		AUTH_LOGIN_ACTION,
		{
			onCompleted: ({ authLogin: { token } }) => {
				localStorage.setItem('token', token);
				window.location.reload();
			},
		}
	);

	const [createCustomer, { loading: createCustomerLoading }] = useMutation(
		CREATE_CUSTOMER_ACTION,
		{
			onCompleted: ({ createCustomer: { token } }) => {
				localStorage.setItem('token', token);
				window.location.reload();
			},
		}
	);

	const loading = authLoginLoading || createCustomerLoading;

	const handleNavigate = type => {
		if (loading) return;

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

	const handleSubmit = (e, type) => {
		e.preventDefault();

		if (type === 'login')
			authLogin({ variables: { payload: authLoginPayload } });

		if (type === 'register')
			createCustomer({ variables: { payload: createCustomerPayload } });
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

						<Form onSubmit={e => handleSubmit(e, 'login')}>
							<Input
								type='email'
								label='Email Address'
								name='email'
								value={authLoginPayload.email}
								onChange={handleChangeAuthLogin}
								loading={loading}
							/>

							<div>
								<Input
									type='password'
									label='Password'
									name='password'
									value={authLoginPayload.password}
									onChange={handleChangeAuthLogin}
									loading={loading}
								/>

								<p className='text-right mt-2'>
									<Link to='#' className='color-primary font-wg-500'>
										Forgot Password?
									</Link>
								</p>
							</div>

							<Button
								type='submit'
								className='btn-primary btn-block font-wg-500 font-sz-normal text-uppercase mt-4'
								disabled={loading}
							>
								{loading ? (
									<Spinner size='sm' animation='border'></Spinner>
								) : (
									'Log In'
								)}
							</Button>
						</Form>

						<p className='font-sz-medium text-center py-4'>
							Do not have an account?{' '}
							<span
								className='color-primary font-wg-500 cursor'
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

						<Form onSubmit={e => handleSubmit(e, 'register')}>
							<div className='row'>
								<div className='col-md-6'>
									<Input
										type='text'
										label='First Name'
										name='firstname'
										value={createCustomerPayload.firstname}
										onChange={handleChangeCreateCustomer}
										loading={loading}
									/>
								</div>

								<div className='col-md-6'>
									<Input
										type='text'
										label='Last Name'
										name='lastname'
										value={createCustomerPayload.lastname}
										onChange={handleChangeCreateCustomer}
										loading={loading}
									/>
								</div>
							</div>

							<Input
								type='number'
								label='Phone Number'
								name='phone'
								value={createCustomerPayload.phone}
								onChange={handleChangeCreateCustomer}
								loading={loading}
							/>

							<Input
								type='email'
								label='Email Address'
								name='email'
								value={createCustomerPayload.email}
								onChange={handleChangeCreateCustomer}
								loading={loading}
							/>

							<Input
								type='password'
								label='Password'
								name='password'
								value={createCustomerPayload.password}
								onChange={handleChangeCreateCustomer}
								loading={loading}
							/>

							<p className='mt-3'>
								<Form.Check
									type='checkbox'
									id='agree'
									label={
										<>
											<span>
												I have read and accept the{' '}
												<span className='color-primary font-wg-500 cursor'>
													Terms
												</span>{' '}
												and{' '}
												<span className='color-primary font-wg-500 cursor'>
													Privacy Policy
												</span>
											</span>
										</>
									}
								/>
							</p>

							<Button
								type='submit'
								className='bg-primary color-white btn-block font-wg-500 font-sz-normal text-uppercase mt-4'
								disabled={loading}
							>
								{loading ? (
									<Spinner size='sm' animation='border'></Spinner>
								) : (
									'Sign Up'
								)}
							</Button>
						</Form>

						<p className='font-sz-medium text-center color-dark py-4'>
							Already have an account?{' '}
							<span
								className='color-primary font-wg-500 cursor'
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
