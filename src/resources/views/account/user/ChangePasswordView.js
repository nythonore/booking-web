import { Form, Button } from 'react-bootstrap';
import PageHeader from '../../../components/account/PageHeader';
import Input from '../../../components/Input';

const ChangePasswordView = () => {
	return (
		<>
			<PageHeader title='Change Password' />

			<div className='p-3 bg-white shadow-sm'>
				<div className='row'>
					<div className='col-md-6'>
						<Form>
							<Input type='password' label='Current Password' />
							<Input type='password' label='New Password' />
							<Input type='password' label='New Password Again' />

							<Button type='submit' className='bg-primary mt-4 px-5'>
								Change Password
							</Button>
						</Form>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChangePasswordView;
