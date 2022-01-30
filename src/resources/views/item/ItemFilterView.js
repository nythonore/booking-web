import { useParams } from 'react-router-dom';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import ItemCar from '../../components/item/ItemCar';
import ItemEvent from '../../components/item/ItemEvent';
import ItemHotel from '../../components/item/ItemHotel';
import ItemSpace from '../../components/item/ItemSpace';
import ItemTour from '../../components/item/ItemTour';

import { LIST_ITEM_ACTION } from '../../../domain/item/action';

const ItemFilterView = () => {
	const { category } = useParams();

	const { loading, data } = useQuery(LIST_ITEM_ACTION, {
		variables: { category },
	});

	const formInputClass = `mb-3 ${
		['hotel', 'space'].includes(category) ? 'col-md-3' : 'col-md-4'
	}`;

	return (
		<>
			<div className='explore-banner d-flex align-items-center'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='row'>
								<div className='col-md-12 title'>
									<h2 className='text-white'>Search for {category}</h2>
								</div>

								<div className='col-md-12 mt-4'>
									<div className='form px-4 pt-4 pb-2 bg-white shadow'>
										<div className='row py-2'>
											<div className={formInputClass}>
												<InputGroup>
													<InputGroup.Text className='color-primary'>
														<i className='bi bi-compass'></i>
													</InputGroup.Text>

													<FormControl placeholder='Where are you going?' />
												</InputGroup>
											</div>

											<div className={formInputClass}>
												<InputGroup>
													<InputGroup.Text className='color-primary'>
														<i className='bi bi-compass'></i>
													</InputGroup.Text>

													<FormControl placeholder='Check IN - Check OUT' />
												</InputGroup>
											</div>

											{(category === 'hotel' || category === 'space') && (
												<div className={formInputClass}>
													<InputGroup>
														<InputGroup.Text className='color-primary'>
															<i className='bi bi-calendar-date'></i>
														</InputGroup.Text>

														<FormControl placeholder='1 Adult - 0 Child' />
													</InputGroup>
												</div>
											)}

											<div className={formInputClass}>
												<Button className='bg-primary btn-block px-5'>
													<i className='bi bi-search mr-2'></i>
													<span className='text-uppercase'>Search</span>
												</Button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='trending-section'>
				<div className='container pt-5 mt-2'>
					<div className='row'>
						<div className='col-md-12'>
							<p className='font-sz-large font-wg-500'>
								{data?.listItem?.length ?? 0} {category} found
							</p>
						</div>
					</div>

					{loading ? null : (
						<div className='row mt-4'>
							{data.listItem.map((data, key) => (
								<div className='col-md-3 mb-4'>
									{category === 'hotel' && <ItemHotel key={key} data={data} />}
									{category === 'space' && <ItemSpace key={key} data={data} />}
									{category === 'tour' && <ItemTour key={key} data={data} />}
									{category === 'car' && <ItemCar key={key} data={data} />}
									{category === 'event' && <ItemEvent key={key} data={data} />}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default ItemFilterView;
