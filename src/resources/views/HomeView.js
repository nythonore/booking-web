import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import Blog from '../components/client/Blog';
import Destination from '../components/client/Destination';
import Hero from '../components/client/Hero';
import ItemCar from '../components/item/ItemCar';
import ItemEvent from '../components/item/ItemEvent';
import ItemHotel from '../components/item/ItemHotel';
import ItemSpace from '../components/item/ItemSpace';
import ItemTour from '../components/item/ItemTour';

import { LIST_ITEM_ACTION } from '../../domain/item/action';
import { LIST_BLOG_ACTION } from '../../domain/blog/action';

const HomeView = () => {
	const [category, setCategory] = useState('Tour');
	const buttons = ['Tour', 'Hotel', 'Car', 'Event', 'Space'];

	const { data: itemData } = useQuery(LIST_ITEM_ACTION, {
		variables: { category: category.toLowerCase() },
	});

	const { data: blogData } = useQuery(LIST_BLOG_ACTION);

	return (
		<>
			<Hero />

			<div className='destination-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<p className='text-center font-sz-large font-wg-700'>
								Top Packages
							</p>
							<div className='d-flex justify-content-center mt-2'>
								<p className='title-line'></p>
							</div>
						</div>
					</div>

					<div className='row mt-5'>
						<div className='col-md-6 mb-4'>
							<Destination
								data={{
									title: 'Akagera',
									cover:
										'https://res.cloudinary.com/elab/image/upload/v1645003543/godiscoverafrica/assets/images/psgjzrphtwpnanjb93sv.jpg',
								}}
							/>
						</div>

						<div className='col-md-6 mb-4'>
							<Destination
								data={{
									title: 'Museums',
									cover:
										'https://res.cloudinary.com/elab/image/upload/v1645003541/godiscoverafrica/assets/images/lzntivfto2aquz718lp4.jpg',
								}}
							/>
						</div>

						<div className='col-md-4 mb-4'>
							<Destination
								data={{
									title: 'Gorillas',
									cover:
										'https://res.cloudinary.com/elab/image/upload/v1645003541/godiscoverafrica/assets/images/o0thmaxxtqadisrjpuqg.jpg',
								}}
							/>
						</div>

						<div className='col-md-4 mb-4'>
							<Destination
								data={{
									title: 'Lake Kivu',
									cover:
										'https://res.cloudinary.com/elab/image/upload/v1645003541/godiscoverafrica/assets/images/smkmyz7bupkgctmrgixq.jpg',
								}}
							/>
						</div>

						<div className='col-md-4 mb-4'>
							<Destination
								data={{
									title: 'Kibeho',
									cover:
										'https://res.cloudinary.com/elab/image/upload/v1645003542/godiscoverafrica/assets/images/kiicn8lucrvjtpi5apd4.jpg',
								}}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className='trending-section bg-grey'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<p className='text-center font-sz-large font-wg-700'>
								Top Trending
							</p>
							<div className='d-flex justify-content-center mt-2'>
								<p className='title-line'></p>
							</div>
						</div>
					</div>

					<div className='row justify-content-center category mt-5'>
						<div className='col-md-12 text-center'>
							{buttons.map((value, key) => (
								<Button
									key={key}
									variant='default'
									className={`${
										value === category ? `bg-primary text-white` : `text-dark`
									} px-4`}
									onClick={() => setCategory(value)}
								>
									{`${value}s`}
								</Button>
							))}
						</div>
					</div>

					<div className='row mt-5'>
						{itemData?.listItem?.map((data, key) => (
							<div key={key} className='col-md-3 mb-4'>
								{category === 'Hotel' && <ItemHotel data={data} />}
								{category === 'Space' && <ItemSpace data={data} />}
								{category === 'Tour' && <ItemTour data={data} />}
								{category === 'Car' && <ItemCar data={data} />}
								{category === 'Event' && <ItemEvent data={data} />}
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='why-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<p className='text-center font-sz-large font-wg-700'>
								Why Choose
							</p>
							<div className='d-flex justify-content-center mt-2'>
								<p className='title-line'></p>
							</div>
						</div>
					</div>

					<div className='row mt-5'>
						<div className='col-md-4 text-center mb-4'>
							<i className='bi bi-tag color-danger-1'></i>
							<p className='mt-4 font-sz-title font-wg-500'>
								Competitive Pricing
							</p>
							<p className='mt-2 font-sz-medium color-grey-1'>
								With 500+ suppliers and the purchasing power of 300 million
								members, mytravel.com can save you more!
							</p>
						</div>

						<div className='col-md-4 text-center mb-4'>
							<i className='bi bi-award color-danger-1'></i>
							<p className='mt-4 font-sz-title font-wg-500'>
								Award-Winning Service
							</p>
							<p className='mt-2 font-sz-medium color-grey-1'>
								Travel worry-free knowing that we're here if you needus, 24
								hours a day
							</p>
						</div>

						<div className='col-md-4 text-center mb-4'>
							<i className='bi bi-globe color-danger-1'></i>
							<p className='mt-4 font-sz-title font-wg-500'>
								Worldwide Coverage
							</p>
							<p className='mt-2 font-sz-medium color-grey-1'>
								Over 1,200,000 hotels in more than 200 countries and regions &
								flights to over 5,000 cities
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='blog-section bg-white'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<p className='text-center font-sz-large font-wg-700'>
								Today's Blog
							</p>
							<div className='d-flex justify-content-center mt-2'>
								<p className='title-line'></p>
							</div>
						</div>
					</div>

					<div className='row mt-5'>
						{blogData?.listBlog?.map((data, key) => (
							<div key={key} className='col-md-4'>
								<Blog data={data} />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeView;
