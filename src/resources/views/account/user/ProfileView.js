import { Form, Button, Image } from 'react-bootstrap';
import PageHeader from '../../../components/account/PageHeader';
import Input from '../../../components/Input';

const ProfileView = () => {
	return (
		<>
			<PageHeader title='My Profile' />

			<div className='p-3 bg-white shadow-sm'>
				<Form>
					<div className='row'>
						<div className='col-md-6'>
							<p className='mb-4 font-sz-title font-wg-500'>
								Personal Information
							</p>

							<div className='row'>
								<div className='col-md-6'>
									<Input type='text' label='First Name' />
								</div>

								<div className='col-md-6'>
									<Input type='text' label='Last Name' />
								</div>
							</div>

							<Input type='text' label='Phone Number' />
							<Input type='text' label='Email Address' />

							<Input type='text' label='Address Line 1' />
							<Input type='text' label='Adderss Line 2' />

							<p className='my-4 font-sz-title font-wg-500'>
								Location Information
							</p>

							<Input type='text' label='City' />
							<Input type='text' label='State' />
							<Input type='text' label='Country' />
							<Input type='text' label='Zip Code' />

							<Button type='submit' className='bg-primary mt-4 px-5'>
								Save Changes
							</Button>
						</div>

						<div className='col-md-6'>
							<div className='py-3'>
								<Image
									src='https://nythonore.me/nythonore.jpg'
									className='img-fluid my-profile-img'
									alt='Honore'
								/>
							</div>
						</div>
					</div>
				</Form>
			</div>
		</>
	);
};

export default ProfileView;
