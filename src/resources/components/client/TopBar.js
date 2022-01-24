import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';

const TopBar = () => {
	const [loginShow, setLoginShow] = useState(false);

	return (
		<>
			<div className='topbar device-md-hide bg-primary py-3'>
				<div className='container'>
					<div className='d-flex justify-content-between'>
						<div className='d-flex'>
							<div>
								<a
									href='https://google.com'
									target='_blank'
									rel='noreferrer'
									className='mr-2 text-white font-sz-normal font-wg-400'
								>
									<i className='bi bi-facebook'></i>
								</a>

								<a
									href='https://google.com'
									target='_blank'
									rel='noreferrer'
									className='mr-2 text-white font-sz-normal font-wg-400'
								>
									<i className='bi bi-instagram'></i>
								</a>

								<a
									href='https://google.com'
									target='_blank'
									rel='noreferrer'
									className='text-white font-sz-normal font-wg-400'
								>
									<i className='bi bi-twitter'></i>
								</a>
							</div>

							<span className='px-3 text-white'>|</span>

							<a
								href='mailto:info@godiscover@.rw'
								className='text-white font-sz-normal font-wg-400'
							>
								info@godiscoverafrica.rw
							</a>
						</div>

						<div>
							<Link
								to='#'
								className='text-white d-flex align-items-center'
								onClick={() => setLoginShow(true)}
							>
								<i className='bi bi-person mr-1 font-sz-large'></i>
								<span className='font-sz-normal font-wg-400'>
									Sign In or Register
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<AuthForm loginShow={loginShow} setLoginShow={setLoginShow} />
		</>
	);
};

export default TopBar;
