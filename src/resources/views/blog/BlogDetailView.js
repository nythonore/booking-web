import { Image, Badge } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { VIEW_BLOG_ACTION } from '../../../domain/blog/action';
import { useParams } from 'react-router-dom';

const BlogDetailView = () => {
	const { slug } = useParams();

	const { loading, data } = useQuery(VIEW_BLOG_ACTION, { variables: { slug } });

	return (
		<div className='blog-section'>
			<div className='container'>
				<div className='row'>
					{loading ? null : (
						<div className='col-md-10 color-dark'>
							<Image
								src={data.viewBlog.cover}
								alt={data.viewBlog.title}
								width='100%'
								className='img-fluid'
							/>

							<p className='font-sz-large font-wg-500 mt-4'>
								{data.viewBlog.title}
							</p>
							<p className='font-sz-medium mt-2'>
								{data.viewBlog.createdAt} -{' '}
								<span className='color-primary'>{data.viewBlog.category}</span>
							</p>

							<div
								className='mt-4 color-grey-1 font-sz-medium text-justify'
								dangerouslySetInnerHTML={{ __html: data.viewBlog.content }}
							></div>

							<div className='mt-5'>
								<span className='color-dark py-2 font-sz-medium mr-3'>
									Share:
								</span>

								<Badge
									variant='default'
									className='cursor bg-danger-1 text-white px-4 py-2 font-sz-normal mr-2'
								>
									<i className='bi bi-facebook'></i>
								</Badge>

								<Badge
									variant='default'
									className='cursor bg-danger-1 text-white px-4 py-2 font-sz-normal mr-2'
								>
									<i className='bi bi-instagram'></i>
								</Badge>

								<Badge
									variant='default'
									className='cursor bg-danger-1 text-white px-4 py-2 font-sz-normal'
								>
									<i className='bi bi-twitter'></i>
								</Badge>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default BlogDetailView;
