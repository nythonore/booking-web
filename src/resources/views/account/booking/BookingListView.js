import { Link, useParams } from 'react-router-dom';
import { Table, Button, Badge, Image } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import {
	LIST_ITEM_ACTION,
	DELETE_ITEM_ACTION,
} from '../../../../domain/item/action';
import PageHeader from '../../../components/account/PageHeader';

const BookingListView = () => {
	const { category } = useParams();

	const { loading, error, data } = useQuery(LIST_ITEM_ACTION, {
		variables: { category },
	});

	const [deleteItem] = useMutation(DELETE_ITEM_ACTION, {
		refetchQueries: [{ query: LIST_ITEM_ACTION, variables: { category } }],
		onCompleted: () => toast.success('Item Deleted'),
	});

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
										City
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
								{loading ? (
									<tr>
										<td colSpan='8' className='text-center'>
											Loading ...
										</td>
									</tr>
								) : error || data.listItem.length < 1 ? (
									<tr>
										<td colSpan='8' className='text-center'>
											No data available
										</td>
									</tr>
								) : (
									data.listItem.map((data, key) => (
										<tr key={key}>
											<td className='text-center font-sz-normal font-wg-300 color-dark'>
												{key + 1}
											</td>
											<td className='font-sz-normal font-wg-300 color-dark'>
												<Image
													src={data.cover}
													alt={data.title}
													className='img-fluid'
													width='100%'
												/>
											</td>
											<td className='font-sz-normal font-wg-300 color-dark'>
												<Link
													to={`/${category}/${data.slug}`}
													className='color-primary font-wg-400'
												>
													{data.title}
												</Link>
											</td>
											<td className='font-sz-normal font-wg-300 color-dark'>
												{data.city}
											</td>
											<td className='font-sz-normal font-wg-300 color-dark'>
												{data.location}
											</td>
											<td className='font-sz-normal font-wg-300 color-dark'>
												{data.price} RWF
											</td>
											<td className='font-sz-normal font-wg-300 color-dark'>
												{data.featured ? 'Yes' : 'No'}
											</td>
											<td className='font-sz-normal font-wg-300 color-dark'>
												<Badge
													as={Link}
													variant='default'
													to={`/account/booking/${category}/edit/${data.slug}`}
													className='bg-secondary color-white d-block w-100 py-2 cursor'
												>
													<i className='bi bi-pencil-square mr-1'></i>
													Edit
												</Badge>

												<Badge
													variant='default'
													className='bg-danger color-white mt-2 d-block w-100 py-2 cursor'
													onClick={() =>
														deleteItem({ variables: { id: data.id } })
													}
												>
													<i className='bi bi-coin mr-1'></i>
													Delete
												</Badge>
											</td>
										</tr>
									))
								)}
							</tbody>
						</Table>
					</div>
				</div>
			</div>
		</>
	);
};

export default BookingListView;
