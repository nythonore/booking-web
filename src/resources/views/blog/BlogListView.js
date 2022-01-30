import { useQuery } from '@apollo/client';
import { LIST_BLOG_ACTION } from '../../../domain/blog/action';
import Blog from '../../components/client/Blog';

const BlogListView = () => {
	const { data } = useQuery(LIST_BLOG_ACTION);

	return (
		<div className='blog-section'>
			<div className='container'>
				<p className='font-sz-large font-wg-700'>Latest's Blog</p>
				<div className='mt-2'>
					<p className='title-line'></p>
				</div>

				<div className='row'>
					{data?.listBlog?.map((data, key) => (
						<div key={key} className='col-md-6 mt-5'>
							<Blog data={data} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default BlogListView;
