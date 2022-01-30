import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

const ItemTour = ({ data }) => {
	return (
		<Link to={`/tour/${data.slug}`}>
			<div
				className='item cursor'
				style={{
					background: `url(${data.cover}) no-repeat`,
				}}
			>
				<div className='image d-flex flex-column justify-content-between flex-wrap'>
					<div>
						{data.featured && (
							<Badge variant='default' className='featured'>
								Featured
							</Badge>
						)}
					</div>

					<div className=''>
						<p className='text-white font-sz-medium'>From {data.price} RWF</p>
					</div>
				</div>
				<div className='p-3 border bg-white'>
					<p className='font-sz-medium color-grey-1'>
						<i className='bi bi-geo-alt mr-2'></i>
						{data.city}
					</p>

					<p className='font-sz-medium font-wg-500 mt-2'>{data.title}</p>

					<div className='mt-3'>
						<Badge className='bg-danger-1 p-2 text-white mr-2'>4.3/5</Badge>
						<span>3 Reviews</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ItemTour;
