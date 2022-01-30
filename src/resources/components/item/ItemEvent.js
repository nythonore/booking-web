import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import moment from 'moment';

const ItemEvent = ({ data }) => {
	return (
		<Link to={`/event/${data.slug}`}>
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

					<div></div>
				</div>

				<div className='p-3 border bg-white'>
					<p className='font-sz-medium color-grey-1'>
						<i className='bi bi-geo-alt mr-2'></i>
						{data.city}
					</p>

					<p className='font-sz-medium font-wg-500 mt-2'>{data.title}</p>

					<div className='mt-3'>
						<span className='color-danger-1 py-2 mr-2'>4.3/5 Very Good</span>
						<span>3 Reviews</span>

						<p className='font-sz-medium mt-2'>
							Start Time: {moment(data.datetime.start).format('MMM, Do HH:mm')}
						</p>
					</div>

					<span className='py-1'>
						<hr />
					</span>

					<div className='d-flex justify-content-between'>
						<p className='font-sz-medium'>
							{moment
								.duration(
									moment(data.datetime.end).diff(moment(data.datetime.start))
								)
								.asHours()}
							H
						</p>

						<p className='font-sz-medium'>From {data.price} RWF</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ItemEvent;
