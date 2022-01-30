import { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import jwtDecode from 'jwt-decode';

const AccountLayout = () => {
	const token = localStorage.getItem('token');
	const user = token ? jwtDecode(token) : { role: null };

	const { pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);

		if (!token) navigate('/');
		// eslint-disable-next-line
	}, [pathname]);

	const handleLogout = () => {
		localStorage.clear();
		window.location.href = '/';
	};

	const menu = [
		{
			label: 'Dashboard',
			icon: 'bi bi-house',
			path: '/account/dashboard',
			role: ['CLIENT', 'ADMINSUPER'],
		},
		{
			label: 'Booking History',
			icon: 'bi bi-clock-history',
			path: '/account/booking/history',
			role: ['CLIENT', 'ADMINSUPER'],
		},
		{
			label: 'Tours',
			icon: 'bi bi-geo',
			path: '/account/booking/tour',
			role: ['ADMINSUPER'],
		},
		{
			label: 'Hotels',
			icon: 'bi bi-house',
			path: '/account/booking/hotel',
			role: ['ADMINSUPER'],
		},
		{
			label: 'Cars',
			icon: 'bi bi-inboxes',
			path: '/account/booking/car',
			role: ['ADMINSUPER'],
		},
		{
			label: 'Events',
			icon: 'bi bi-calendar-event',
			path: '/account/booking/event',
			role: ['ADMINSUPER'],
		},
		{
			label: 'Spaces',
			icon: 'bi bi-person-workspace',
			path: '/account/booking/space',
			role: ['ADMINSUPER'],
		},
		{
			label: 'Blog',
			icon: 'bi bi-newspaper',
			path: '/account/blog',
			role: ['ADMINSUPER'],
		},
		{
			label: 'Customers',
			icon: 'bi bi-people',
			path: '/account/customer',
			role: ['ADMINSUPER'],
		},
		{
			label: 'Mail List',
			icon: 'bi bi-envelope',
			path: '/account/maillist',
			role: ['ADMINSUPER'],
		},
		{
			label: 'My Profile',
			icon: 'bi bi-person',
			path: '/account/profile',
			role: ['CLIENT'],
		},
		{
			label: 'Change Password',
			icon: 'bi bi-lock',
			path: '/account/password/change',
			role: ['CLIENT'],
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
									.filter(v => v.role.includes(user.role))
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
									<Link
										to='#'
										className='d-flex align-items-center'
										onClick={handleLogout}
									>
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
