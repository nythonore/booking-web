import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Image, Spinner } from 'react-bootstrap';
import { useLazyQuery, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import usePayload from '../../../../core/hooks/usePayload';
import {
	LIST_ITEM_ACTION,
	VIEW_ITEM_ACTION,
	CREATE_ITEM_ACTION,
	EDIT_ITEM_ACTION,
} from '../../../../domain/item/action';
import { featuredData, cityData } from '../../../../core/constant';
import PageHeader from '../../../components/account/PageHeader';
import Input from '../../../components/Input';
import DropZone from '../../../components/DropZone';
import MultiInput from '../../../components/MultiInput';

const BookingManageView = ({ type }) => {
	const { category, slug } = useParams();
	const [itemId, setItemId] = useState(null);

	const navigate = useNavigate();

	const [handleChange, { payload, setPayload }] = usePayload({
		title: '',
		category: category.toUpperCase(),
		description: '',
		cover: '',
		price: 0,
		country: 'rwanda',
		city: '',
		location: '',
		featured: false,
		gallery: [],
		highlight: [''],
		other: [''],
		datetime: {
			start: null,
			end: null,
		},
	});

	const [viewItem, { loading: viewLoading }] = useLazyQuery(VIEW_ITEM_ACTION, {
		onCompleted: ({ viewItem }) => {
			setPayload({
				title: viewItem.title,
				category: viewItem.category,
				description: viewItem.description,
				cover: viewItem.cover,
				price: viewItem.price,
				country: viewItem.country,
				city: viewItem.city,
				location: viewItem.location,
				featured: viewItem.featured,
				gallery: viewItem.gallery,
				highlight: viewItem.highlight,
				other: viewItem.other,
				datetime: {
					start: viewItem.datetime.start,
					end: viewItem.datetime.end,
				},
			});

			setItemId(viewItem.id);
		},
		onError: () => {
			navigate(`/account/booking/${category}`);
		},
	});

	const [createItem, { loading: createLoading }] = useMutation(
		CREATE_ITEM_ACTION,
		{
			refetchQueries: [
				{
					query: LIST_ITEM_ACTION,
					variables: { category },
				},
			],
			onCompleted: () => {
				toast.success('Item Added');
				navigate(`/account/booking/${category}`);
			},
		}
	);

	const [editItem, { loading: editLoading }] = useMutation(EDIT_ITEM_ACTION, {
		refetchQueries: [
			{
				query: LIST_ITEM_ACTION,
				variables: { category },
			},
		],
		onCompleted: () => {
			toast.success('Item Edited');
			navigate(`/account/booking/${category}`);
		},
	});

	useEffect(() => {
		if (type === 'edit') viewItem({ variables: { slug } });
		// eslint-disable-next-line
	}, [slug]);

	const handleRemoveGallery = index => {
		const gallery = payload.gallery.filter(v => v !== index);
		handleChange({ target: { name: 'gallery', value: gallery } });
	};

	const handleSubmit = e => {
		e.preventDefault();

		const _payload = payload;
		_payload['price'] = Number(payload.price);

		type === 'add' && createItem({ variables: { payload: _payload } });

		type === 'edit' &&
			editItem({ variables: { id: itemId, payload: _payload } });
	};

	const loading = viewLoading || createLoading || editLoading;

	return (
		<>
			<PageHeader title={`${type} ${category}`}>
				<Button
					as={Link}
					to={`/account/booking/${category}`}
					variant='secondary'
					className='px-5'
				>
					<i className='bi bi-arrow-left mr-2'></i>
					Go Back
				</Button>
			</PageHeader>

			<Form onSubmit={handleSubmit}>
				<div className='row'>
					<div className='col-md-6'>
						<div className='p-3 bg-white'>
							<Input
								type='text'
								label='Title'
								name='title'
								value={payload.title}
								onChange={handleChange}
								loading={loading}
							/>

							<div className='mb-3'>
								<Form.Label>Image cover</Form.Label>

								<DropZone
									value={payload.cover}
									onChange={value =>
										handleChange({ target: { name: 'cover', value: value[0] } })
									}
								/>
							</div>

							{category !== 'hotel' && (
								<Input
									type='number'
									label='Price'
									name='price'
									value={payload.price}
									onChange={handleChange}
									loading={loading}
								/>
							)}

							<Input
								type='select'
								label='City'
								name='city'
								options={cityData}
								value={payload.city}
								onChange={handleChange}
								loading={loading}
							/>
							<Input
								type='text'
								label='Location'
								name='location'
								value={payload.location}
								onChange={handleChange}
								loading={loading}
							/>
							<Input
								type='select'
								label='Featured'
								name='featured'
								options={featuredData}
								value={payload.featured}
								onChange={handleChange}
								loading={loading}
							/>
						</div>
					</div>

					<div className='col-md-6'>
						<div className='p-3 bg-white'>
							<Input
								type='textarea'
								label='Description'
								height={480}
								name='description'
								value={payload.description}
								onChange={handleChange}
								loading={loading}
							/>
						</div>
					</div>
				</div>

				<div className='p-3 bg-white my-4'>
					<div className='row'>
						{payload.gallery.map((value, key) => (
							<div className='col-md-3 mb-4' key={key}>
								<div className='dropzone-container'>
									<Image src={value} alt={value} className='img-fluid' />

									<span
										className='gallery-remove-icon cursor d-flex justify-content-center align-items-center'
										onClick={() => handleRemoveGallery(value)}
									>
										<i className='bi bi-x'></i>
									</span>
								</div>
							</div>
						))}

						<div className='col-md-3 mb-4'>
							<DropZone
								multiple={true}
								onChange={value =>
									handleChange({
										target: {
											name: 'gallery',
											value: [...payload.gallery, ...value],
										},
									})
								}
							/>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-6'>
						<div className='p-3 bg-white'>
							<p className='font-sz-medium font-wg-500 mb-4'>Highlight</p>

							<MultiInput
								type='text'
								name='highlight'
								value={payload.highlight}
								onChange={handleChange}
								loading={loading}
							/>
						</div>
					</div>

					<div className='col-md-6'>
						<div className='p-3 bg-white'>
							<p className='font-sz-medium font-wg-500 mb-4'>Other</p>

							<MultiInput
								type='text'
								name='other'
								value={payload.other}
								onChange={handleChange}
								loading={loading}
							/>
						</div>
					</div>
				</div>

				{category === 'event' && (
					<div className='row my-4'>
						<div className='col-md-12'>
							<div className='p-3 bg-white'>
								<Input
									type='datetime'
									label='Start Date Time'
									name='datetime'
									value={payload.datetime.start}
									onChange={({ target: { name, value } }) =>
										handleChange({
											target: {
												name,
												value: { ...payload.datetime, start: value },
											},
										})
									}
									loading={loading}
								/>

								<Input
									type='datetime'
									label='End Date Time'
									name='datetime'
									value={payload.datetime.end}
									onChange={({ target: { name, value } }) =>
										handleChange({
											target: {
												name,
												value: { ...payload.datetime, end: value },
											},
										})
									}
									loading={loading}
								/>
							</div>
						</div>
					</div>
				)}

				<div className='row my-4'>
					<div className='col-md-12'>
						<div className='p-3 bg-white'>
							<Button
								type='submit'
								className='bg-primary btn-block'
								disabled={loading}
							>
								{loading ? (
									<Spinner size='sm' animation='border'></Spinner>
								) : (
									'Save'
								)}
							</Button>
						</div>
					</div>
				</div>
			</Form>
		</>
	);
};

export default BookingManageView;
