import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useLazyQuery, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import usePayload from '../../../../core/hooks/usePayload';
import {
	LIST_BLOG_ACTION,
	VIEW_BLOG_ACTION,
	CREATE_BLOG_ACTION,
	EDIT_BLOG_ACTION,
} from '../../../../domain/blog/action';
import { blogCategoryData } from '../../../../core/constant';
import PageHeader from '../../../components/account/PageHeader';
import Input from '../../../components/Input';
import DropZone from '../../../components/DropZone';

const BlogManageView = ({ type }) => {
	const { slug } = useParams();
	const [blogId, setBlogId] = useState(null);

	const navigate = useNavigate();

	const [handleChange, { payload, setPayload }] = usePayload({
		title: '',
		category: '',
		description: '',
		cover: '',
		content: '',
	});

	const [viewBlog, { loading: viewLoading }] = useLazyQuery(VIEW_BLOG_ACTION, {
		onCompleted: ({ viewBlog }) => {
			setPayload({
				title: viewBlog.title,
				category: viewBlog.category,
				description: viewBlog.description,
				cover: viewBlog.cover,
				content: viewBlog.content,
			});

			setBlogId(viewBlog.id);
		},
		onError: () => {
			navigate('/account/blog');
		},
	});

	const [createBlog, { loading: createLoading }] = useMutation(
		CREATE_BLOG_ACTION,
		{
			refetchQueries: [LIST_BLOG_ACTION],
			onCompleted: () => {
				toast.success('Blog Added');
				navigate('/account/blog');
			},
		}
	);

	const [editBlog, { loading: editLoading }] = useMutation(EDIT_BLOG_ACTION, {
		refetchQueries: [LIST_BLOG_ACTION],
		onCompleted: () => {
			toast.success('Blog Edited');
			navigate('/account/blog');
		},
	});

	useEffect(() => {
		if (type === 'edit') viewBlog({ variables: { slug } });
		// eslint-disable-next-line
	}, [slug]);

	const handleSubmit = e => {
		e.preventDefault();

		type === 'add' && createBlog({ variables: { payload } });
		type === 'edit' && editBlog({ variables: { id: blogId, payload } });
	};

	const loading = viewLoading || createLoading || editLoading;

	return (
		<>
			<PageHeader title={`${type} Blog`}>
				<Button
					as={Link}
					to={`/account/blog`}
					variant='secondary'
					className='px-5'
				>
					<i className='bi bi-arrow-left mr-2'></i>
					Go Back
				</Button>
			</PageHeader>

			<Form onSubmit={handleSubmit}>
				<div className='row'>
					<div className='col-md-6'>
						<div className='p-3 bg-white'>
							<Input
								type='text'
								label='Title'
								name='title'
								value={payload.title}
								onChange={handleChange}
								loading={loading}
							/>
							<Input
								type='select'
								label='Category'
								name='category'
								options={blogCategoryData}
								value={payload.category}
								onChange={handleChange}
								loading={loading}
							/>
							<Input
								type='text'
								label='Description'
								name='description'
								value={payload.description}
								onChange={handleChange}
								loading={loading}
							/>

							<div className='mb-3'>
								<Form.Label>Image cover</Form.Label>

								<DropZone
									value={payload.cover}
									onChange={value =>
										handleChange({ target: { name: 'cover', value: value[0] } })
									}
								/>
							</div>
						</div>
					</div>

					<div className='col-md-6'>
						<div className='p-3 bg-white'>
							<Input
								type='textarea'
								label='Content'
								height={480}
								name='content'
								value={payload.content}
								onChange={handleChange}
								loading={loading}
							/>
						</div>
					</div>
				</div>

				<div className='row my-4'>
					<div className='col-md-12'>
						<div className='p-3 bg-white'>
							<Button
								type='submit'
								className='bg-primary btn-block'
								disabled={loading}
							>
								{loading ? (
									<Spinner size='sm' animation='border'></Spinner>
								) : (
									'Save'
								)}
							</Button>
						</div>
					</div>
				</div>
			</Form>
		</>
	);
};

export default BlogManageView;
