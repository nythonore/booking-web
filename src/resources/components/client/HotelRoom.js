import { Form, Image, Button } from 'react-bootstrap';

const HotelRoom = () => {
	return (
		<>
			<div>
				{[1, 2, 3, 4].map((_, key) => (
					<div key={key} className='d-flex p-2 mb-3 border'>
						<div>
							<Image
								alt='Hotel Room'
								src='https://dtravela.com/uploads/0000/1/2021/01/26/single.jpg'
								className='img-fluid'
								width='250px'
							/>
						</div>

						<div className='w-100 px-4 d-flex justify-content-between align-items-center'>
							<div>
								<p className='font-sz-title font-wg-500 color-dark'>
									Single Room
								</p>

								<div className='d-flex font-sz-medium color-dark mt-3'>
									<p className='text-center mr-3'>
										<div className='border px-2 py-1 mb-2'>
											<i className='bi bi-distribute-horizontal font-sz-large'></i>
										</div>

										<span className='d-block'>x1</span>
									</p>

									<p className='text-center'>
										<div className='border px-2 py-1 mb-2'>
											<i className='bi bi-people font-sz-large'></i>
										</div>

										<span className='d-block'>x1</span>
									</p>
								</div>
							</div>

							<div className='text-right'>
								<p className='font-sz-title color-dark mb-2'>
									<span className='font-wg-500'>2,100 RWF</span>
									<span> / 30 Night</span>
								</p>

								<Form.Select className='form-control custom-select'>
									<option>0</option>

									{[1, 2, 3, 4, 5, 6].map((value, key) => (
										<option key={key} value={value}>{`${value} room (${
											value * 2100
										} RWF)`}</option>
									))}
								</Form.Select>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='d-flex justify-content-between py-3 border mt-4'>
				<div className='border-right w-50 px-4'>
					<p className='font-sz-title color-primary'>
						Total Room
						<span className='float-right'>2</span>
					</p>

					<p className='font-sz-title color-primary mt-2'>
						Service Fee <i className='bi bi-info-circle ml-1'></i>
						<span className='float-right'>0 RWF</span>
					</p>
				</div>

				<div className='text-right px-4'>
					<p className='font-sz-large color-dark mb-2'>
						<span>Total Price: </span>
						<span className='font-wg-500 color-danger'>21000 RWF</span>
					</p>

					<Button className='px-5 mt-2'>Book Now</Button>
				</div>
			</div>
		</>
	);
};

export default HotelRoom;
