import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Input from './Input';

const MultiInput = ({
	type = 'text',
	name = '',
	required = true,
	value = [''],
	onChange = undefined,
	loading = false,
}) => {
	const [inputs, setInputs] = useState(value);

	useEffect(() => {
		setInputs(value);
	}, [value]);

	const handleAdd = () =>
		setInputs(prevState => {
			return [...prevState, ''];
		});

	const handleRemove = index =>
		onChange({
			target: { name, value: inputs.filter((_, key) => key !== index) },
		});

	const handleChange = (index, { target: { value } }) => {
		inputs[index] = value;
		onChange({ target: { name, value: inputs } });
	};

	return (
		<>
			{inputs.map((data, key) => (
				<div className='d-flex'>
					<div className='w-100'>
						<Input
							type={type}
							name={name}
							required={require}
							value={data}
							onChange={e => handleChange(key, e)}
							loading={loading}
						/>
					</div>

					<div>
						{inputs.length > key + 1 && (
							<Button
								type='button'
								className='bg-danger'
								onClick={() => handleRemove(key)}
								disabled={loading}
							>
								<i className='bi bi-x-lg'></i>
							</Button>
						)}

						{inputs.length === key + 1 && (
							<Button
								type='button'
								className='bg-primary'
								onClick={handleAdd}
								disabled={loading}
							>
								<i className='bi bi-plus-circle'></i>
							</Button>
						)}
					</div>
				</div>
			))}
		</>
	);
};

export default MultiInput;
