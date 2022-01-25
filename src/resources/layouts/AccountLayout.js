import { useEffect } from 'react';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AccountLayout = () => {
	const { pathname } = useLocation();

	const role = 'admin';

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const menu = [
		{
			label: 'Dashboard',
			icon: 'bi bi-house',
			path: '/account/dashboard',
			role: ['client', 'admin'],
		},
		{
			label: 'Booking History',
			icon: 'bi bi-clock-history',
			path: '/account/booking/history',
			role: ['customer', 'admin'],
		},
		{
			label: 'Tours',
			icon: 'bi bi-geo',
			path: '/account/booking/tour',
			role: ['admin'],
		},
		{
			label: 'Hotels',
			icon: 'bi bi-house',
			path: '/account/booking/hotel',
			role: ['admin'],
		},
		{
			label: 'Cars',
			icon: 'bi bi-inboxes',
			path: '/account/booking/car',
			role: ['admin'],
		},
		{
			label: 'Events',
			icon: 'bi bi-calendar-event',
			path: '/account/booking/event',
			role: ['admin'],
		},
		{
			label: 'Spaces',
			icon: 'bi bi-person-workspace',
			path: '/account/booking/space',
			role: ['admin'],
		},
		{
			label: 'Blog',
			icon: 'bi bi-newspaper',
			path: '/account/blog',
			role: ['admin'],
		},
		{
			label: 'Customers',
			icon: 'bi bi-people',
			path: '/account/customer',
			role: ['admin'],
		},
		{
			label: 'Mail List',
			icon: 'bi bi-envelope',
			path: '/account/maillist',
			role: ['admin'],
		},
		{
			label: 'My Profile',
			icon: 'bi bi-person',
			path: '/account/profile',
			role: ['customer', 'admin'],
		},
		{
			label: 'Change Password',
			icon: 'bi bi-lock',
			path: '/account/password/change',
			role: ['customer', 'admin'],
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
								{menu
									.filter(v => v.role.includes(role))
									.map((value, key) => (
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
