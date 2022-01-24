import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

const PageHeader = ({ title }) => {
	return (
		<div className='page-header'>
			<Breadcrumb className='shadow-sm'>
				<Breadcrumb.Item as={Link} to='/'>
					<i className='bi bi-house mr-1'></i>
					Home
				</Breadcrumb.Item>

				<Breadcrumb.Item active>{title}</Breadcrumb.Item>
			</Breadcrumb>

			<h2 className='font-sz-large font-wg-700 pt-3 pb-4'>{title}</h2>
		</div>
	);
};

export default PageHeader;
