import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

const PageHeader = ({ children, title }) => {
	return (
		<div className='page-header text-capitalize'>
			<Breadcrumb className='shadow-sm'>
				<Breadcrumb.Item as={Link} to='/'>
					<i className='bi bi-house mr-1'></i>
					Home
				</Breadcrumb.Item>

				<Breadcrumb.Item active>{title}</Breadcrumb.Item>
			</Breadcrumb>

			<div className='py-3 d-flex justify-content-between align-items-center'>
				<h2 className='font-sz-large font-wg-700 mb-3'>{title}</h2>

				<div>{children}</div>
			</div>
		</div>
	);
};

export default PageHeader;
