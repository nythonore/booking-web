import { Link } from 'react-router-dom';
import { Button, Table, Badge, Image } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import {
	LIST_BLOG_ACTION,
	DELETE_BLOG_ACTION,
} from '../../../../domain/blog/action';
import PageHeader from '../../../components/account/PageHeader';

const BlogListView = () => {
	const { loading, error, data } = useQuery(LIST_BLOG_ACTION);

	const [deleteBlog] = useMutation(DELETE_BLOG_ACTION, {
		refetchQueries: [LIST_BLOG_ACTION],
		onCompleted: () => toast.success('Blog Deleted'),
	});

	return (
		<>
			<PageHeader title='Blog'>
				<Button
					as={Link}
					to='/account/blog/create'
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
										Description
									</th>
									<th className='font-sz-medium font-wg-400 color-dark'>
										Date Added
									</th>
									<th></th>
								</tr>
							</thead>

							<tbody>
								{loading ? (
									<tr>
										<td colSpan='7' className='text-center'>
											Loading ...
										</td>
									</tr>
								) : error || data.listBlog.length < 1 ? (
									<tr>
										<td colSpan='7' className='text-center'>
											No data available
										</td>
									</tr>
								) : (
									data.listBlog.map((data, key) => (
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
													to={`/blog/${data.slug}`}
													className='color-primary font-wg-400'
												>
													{data.title}
												</Link>
											</td>
											<td className='font-sz-normal font-wg-300 color-dark'>
												{data.category}
											</td>
											<td className='font-sz-normal font-wg-300 color-dark'>
												{data.description}
											</td>
											<td className='font-sz-normal font-wg-300 color-dark'>
												{data.createdAt}
											</td>
											<td className='font-sz-normal font-wg-300 color-dark'>
												<Badge
													as={Link}
													variant='default'
													to={`/account/blog/edit/${data.slug}`}
													className='bg-secondary color-white d-block w-100 py-2 cursor'
												>
													<i className='bi bi-pencil-square mr-1'></i>
													Edit
												</Badge>

												<Badge
													variant='default'
													className='bg-danger color-white mt-2 d-block w-100 py-2 cursor'
													onClick={() =>
														deleteBlog({ variables: { id: data.id } })
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

export default BlogListView;
