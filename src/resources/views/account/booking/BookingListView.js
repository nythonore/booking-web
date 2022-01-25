import { Link, useParams } from 'react-router-dom';
import { Table, Button, Badge, Image } from 'react-bootstrap';
import PageHeader from '../../../components/account/PageHeader';

const BookingListView = () => {
	const { category } = useParams();

	return (
		<>
			<PageHeader title={`${category}s`}>
				<Button
					as={Link}
					to={`/account/booking/${category}/create`}
					variant='secondary'
					className='px-5'
				>
					<i className='bi bi-plus-circle mr-2'></i>
					Add New
				</Button>
			</PageHeader>

			<div className='p-3 bg-white'>
				<div className='row'>
					<div className='col-md-12'>
						<Table responsive bordered striped>
							<thead>
								<tr>
									<th className='text-center font-sz-medium font-wg-400 color-dark'>
										#
									</th>
									<th
										className='text-center font-sz-medium font-wg-400 color-dark'
										style={{ width: '8%' }}
									></th>
									<th className='font-sz-medium font-wg-400 color-dark'>
										Title
									</th>
									<th className='font-sz-medium font-wg-400 color-dark'>
										Category
									</th>
									<th className='font-sz-medium font-wg-400 color-dark'>
										Location
									</th>
									<th className='font-sz-medium font-wg-400 color-dark'>
										Price
									</th>
									<th className='font-sz-medium font-wg-400 color-dark'>
										Featured
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
											<Image
												src='https://i.pinimg.com/originals/c7/05/82/c70582ace59a21310b39b838b19ef5e6.jpg'
												alt='Title'
												className='img-fluid'
												width='100%'
											/>
										</td>
										<td className='font-sz-normal font-wg-300 color-dark'>
											<Link to='/hotel/1' className='color-primary font-wg-400'>
												Urban by City Blue
											</Link>
										</td>
										<td className='font-sz-normal font-wg-300 color-dark'>
											Wildlife and Culture
										</td>
										<td className='font-sz-normal font-wg-300 color-dark'>
											Nyungwe
										</td>
										<td className='font-sz-normal font-wg-300 color-dark'>
											12000 RWF
										</td>
										<td className='font-sz-normal font-wg-300 color-dark'>
											Yes
										</td>
										<td className='font-sz-normal font-wg-300 color-dark'>
											<Badge
												as={Link}
												variant='default'
												to={`/account/booking/${category}/edit/1`}
												className='bg-secondary color-white d-block w-100 py-2 cursor'
											>
												<i className='bi bi-pencil-square mr-1'></i>
												Edit
											</Badge>

											<Badge
												variant='default'
												className='bg-danger color-white mt-2 d-block w-100 py-2 cursor'
											>
												<i className='bi bi-coin mr-1'></i>
												Delete
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

export default BookingListView;
