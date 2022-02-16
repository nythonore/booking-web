import { Button } from 'react-bootstrap';
import Input from '../Input';

const SmallBook = ({ data: { price } }) => {
	return (
		<div className='border-top border-primary'>
			<div className='border-left border-right border-bottom'>
				<div className='px-3 py-4 d-flex align-items-center'>
					<p className='font-sz-small mr-2 text-muted'>From</p>
					<p className='font-sz-large'>35$</p>
				</div>

				<div>
					<p className='p-3 text-primary bg-grey text-center font-sz-normal font-wg-500'>
						BOOK
					</p>

					<div className='p-3'>
						<Input type='date' label='Start Date' />
						<Input type='date' label='End Date' />

						<Button
							variant='default'
							className='btn-block bg-primary font-wg-500 text-white'
						>
							Book Now
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SmallBook;
