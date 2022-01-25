import { useState } from 'react';
import { Button, Table, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageHeader from '../../../components/account/PageHeader';

const BookingHistoryview = () => {
	const [tab, setTab] = useState('All Booking');

	const tabs = ['All Booking', 'Tours', 'Hotels', 'Cars', 'Events', 'Spaces'];
	return (
		<>
			<PageHeader title='Booking History' />

			<div className='p-3 bg-white'>
				<div className='row'>
					<div className='col-md-12'>
						{tabs.map((value, key) => (
							<Button
								key={key}
								variant='default'
								className={`px-5 mr-3 mb-2 font-wg-400 ${
									tab === value ? `bg-primary color-white` : `border`
								}`}
								onClick={() => setTab(value)}
							>
								{value}
							</Button>
						))}
					</div>

					<div className='col-md-12 mt-4'>
						<Table responsive bordered striped>
							<thead>
								<tr>
									<th className='text-center font-sz-medium font-wg-400 color-dark'>
										#
									</th>
									<th className='font-sz-medium font-wg-400 color-dark'>
										Order ID
									</th>
									<th className='font-sz-medium font-wg-400 color-dark'>
										Title
									</th>
									<th className='font-sz-medium font-wg-400 color-dark'>
										Order Date
									</th>
									<th className='font-sz-medium font-wg-400 color-dark'>
										Execution Time
									</th>
									<th className='font-sz-medium font-wg-400 color-dark'>
										Total
									</th>
									<th className='font-sz-medium font-wg-400 color-dark'>
										Paid
									</th>
									<th className='font-sz-medium font-wg-400 color-dark'>
										Remain
									</th>
									<th className='font-sz-medium font-wg-400 color-dark'>
										Status
									</th>
									<th></th>
								</tr>
							</thead>

							<tbody>
								{[1, 2, 3, 4, 5].map((_, key) => (
									<tr key={key}>
										<td className='text-center font-sz-normal font-wg-300 color-dark'>
											{key + 1}
										</td>
										<td className='font-sz-normal font-wg-300 color-dark'>
											123456
										</td>
										<td className='font-sz-normal font-wg-300 color-dark'>
											<Link to='/hotel/1' className='color-primary font-wg-400'>
												Urban by CityBlue
											</Link>
										</td>
										<td className='font-sz-normal font-wg-300 color-dark'>
											01/05/2022
										</td>
										<td className='font-sz-normal font-wg-300 color-dark'>
											Start date : 02/01/2022 <br />
											End date : 02/28/2022 <br />
											Duration : 27 nights
										</td>
										<td className='font-sz-normal font-wg-300 color-dark'>
											12000 RWF
										</td>
										<td className='font-sz-normal font-wg-300 color-dark'>
											6000 RWF
										</td>
										<td className='font-sz-normal font-wg-300 color-dark'>
											6000 RWF
										</td>
										<td className='font-sz-normal font-wg-300 color-dark'>
											Processing
										</td>
										<td className='font-sz-normal font-wg-300 color-dark'>
											<Badge
												variant='default'
												className='bg-secondary color-white d-block w-100 py-2 cursor'
											>
												<i className='bi bi-eye mr-1'></i>
												Details
											</Badge>

											<Badge
												variant='default'
												className='bg-success color-white mt-2 d-block w-100 py-2 cursor'
											>
												<i className='bi bi-coin mr-1'></i>
												Pay Now
											</Badge>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</div>
				</div>
			</div>
		</>
	);
};

export default BookingHistoryview;
