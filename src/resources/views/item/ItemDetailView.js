import { useParams } from 'react-router-dom';
import { Badge, Image } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { VIEW_ITEM_ACTION } from '../../../domain/item/action';

const ItemDetailView = () => {
	const { slug } = useParams();
	const { loading, error, data } = useQuery(VIEW_ITEM_ACTION, {
		variables: { slug },
	});

	return (
		<div className='trending-section'>
			<div className='container'>
				{loading || error ? null : (
					<div className='row'>
						<div className='col-md-9'>
							<div className='d-flex justify-content-between'>
								<div>
									<p className='font-sz-large font-wg-500'>
										{data.viewItem.title}
									</p>

									<p className='font-sz-normal color-grey-1 mt-2'>
										<i className='bi bi-geo-alt mr-2'></i>
										{`${data.viewItem.city}, ${data.viewItem.location}`}
									</p>
								</div>

								<div className='d-flex align-items-center'>
									<div className='mr-2'>
										<p className='font-sz-medium'>Not Rated</p>
										<p className='font-sz-normal color-primary'>
											from 0 reviews
										</p>
									</div>

									<div>
										<Badge className='bg-primary text-white font-sz-medium py-3'>
											0/5
										</Badge>
									</div>
								</div>
							</div>

							<div className='mt-4'>
								<Image
									src={data.viewItem.cover}
									alt={data.viewItem.title}
									className='img-fluid'
									width='100%'
								/>

								<div className='row px-2 mt-3'>
									{data.viewItem.gallery.map((value, key) => (
										<div key={key} className='col-md-2 px-2'>
											<Image
												src={value}
												alt={value}
												className='img-fluid'
												width='100%'
											/>
										</div>
									))}
								</div>
							</div>

							<div className='py-3'>
								<hr />
							</div>

							<div>
								<p className='color-primary font-sz-title font-wg-500 text-uppercase'>
									Description
								</p>

								<div
									className='mt-3 color-grey-1 font-sz-medium text-justify'
									dangerouslySetInnerHTML={{
										__html: data.viewItem.description,
									}}
								></div>
							</div>

							<div className='py-3'>
								<hr />
							</div>

							<div>
								<p className='color-primary font-sz-title font-wg-500 text-uppercase'>
									Highlight
								</p>

								<div className='mt-3 color-grey-1 font-sz-medium'>
									{data.viewItem.highlight
										.filter(v => v !== '')
										.map((value, key) => (
											<p key={key}>
												<i className='bi bi-circle color-primary mr-2'></i>
												{value}
											</p>
										))}
								</div>
							</div>

							<div className='py-3'>
								<hr />
							</div>

							<div>
								<p className='color-primary font-sz-title font-wg-500 text-uppercase'>
									Facilities
								</p>

								<div className='row mt-4'>
									{data.viewItem.other
										.filter(v => v !== '')
										.map((value, key) => (
											<div key={key} className='col-md-4'>
												<p className='mb-3'>
													<i className='bi bi-circle color-primary mr-2 font-sz-title'></i>
													{value}
												</p>
											</div>
										))}
								</div>
							</div>
						</div>

						<div className='col-md-3'>
							<div className='border d-flex align-items-center p-3'>
								<Image
									src='https://nythonore.me/nythonore.jpg'
									className='img-fluid mr-2 user_item_img'
								/>

								<div>
									<p className='font-sz-normal font-wg-500 color-dark'>
										Admin User
									</p>
									<p className='font-sz-small color-grey-1'>
										Member since May 2022
									</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ItemDetailView;
