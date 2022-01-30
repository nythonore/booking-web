import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const Blog = ({ data }) => {
	return (
		<Link to={`/blog/${data.slug}`}>
			<div className='blog'>
				<Image src={data.cover} alt={data.title} className='img-fluid' />

				<div className='py-4 mt-2'>
					<p
						to={`/blog/${data.slug}`}
						className='cursor font-sz-title color-black font-wg-500'
					>
						{data.title}
					</p>
					<p className='font-sz-medium color-grey-1 mt-2 mb-4 text-justify'>
						{data.description}...
					</p>

					<p className='cursor font-sz-normal font-wg-500 color-danger-1 text-uppercase'>
						Read More
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Blog;
