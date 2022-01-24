import { Form } from 'react-bootstrap';

const Input = ({
	label = '',
	type = 'text',
	name = '',
	placeholder = '',
	required = true,
	value = '',
	onChange = undefined,
	loading = false,
}) => {
	return (
		<Form.Group className='mb-3'>
			<Form.Label>{label}</Form.Label>

			<Form.Control
				type={type}
				name={name}
				placeholder={placeholder ?? label}
				required={required}
				autoComplete='off'
				onChange={onChange}
				disabled={loading}
			/>
		</Form.Group>
	);
};

export default Input;
