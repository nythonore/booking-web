import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AccountLayout = () => {
	const { pathname } = useLocation();

	const customerMenu = [
		{
			label: 'Booking History',
			icon: 'bi bi-clock-history',
			path: '/account/booking/history',
		},
		{
			label: 'My Profile',
			icon: 'bi bi-person',
			path: '/account/profile',
		},
		{
			label: 'Change Password',
			icon: 'bi bi-lock',
			path: '/account/password/change',
		},
	];

	return (
		<div className='account-ly'>
			<Container fluid>
				<Row>
					<Col className='sidebar p-0'>
						<div className='container user-info text-center py-4'>
							<Image
								src='https://nythonore.me/nythonore.jpg'
								className='img-fluid avatar'
								alt='Honore Niyigegeka'
							/>

							<div className='mt-4'>
								<Badge className='bg-danger-1 px-2 color-white'>Customer</Badge>

								<p className='color-white font-sz-title font-wg-700 mt-2'>
									Honore Niyigeka
								</p>

								<p className='color-white font-sz-small'>
									Member Since Jan 2022
								</p>
							</div>
						</div>

						<div className='sidebar-menu mt-4'>
							<ul>
								{customerMenu.map((value, key) => (
									<li key={key}>
										<Link
											to={value.path}
											className={`d-flex align-items-center ${
												pathname.startsWith(value.path) ? `active` : ``
											}`}
										>
											<i className={value.icon}></i>
											<span>{value.label}</span>
										</Link>
									</li>
								))}

								<li>
									<Link to='#' className='d-flex align-items-center'>
										<i className='bi bi-box-arrow-right'></i>
										<span>Log Out</span>
									</Link>
								</li>

								<li>
									<Link to='/' className='d-flex align-items-center'>
										<i className='bi bi-arrow-left'></i>
										<span>Back To Site</span>
									</Link>
								</li>
							</ul>
						</div>
					</Col>

					<Col md={10} className='p-0'>
						<div className='body py-4'>
							<div className='container-fluid'>
								<div className='row'>
									<div className='col-md-12'>
										<Outlet />
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default AccountLayout;
