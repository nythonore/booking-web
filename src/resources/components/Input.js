import moment from 'moment';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import Datetime from 'react-datetime';
import { Editor } from '@tinymce/tinymce-react';
import Cloudnary from '../../core/helpers/cloudnary';

const FormInput = ({
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
			{label && <Form.Label>{label}</Form.Label>}

			<Form.Control
				type={type}
				name={name}
				placeholder={placeholder ?? label}
				required={required}
				autoComplete='off'
				value={value}
				onChange={onChange}
				disabled={loading}
			/>
		</Form.Group>
	);
};

const SelectInput = ({
	label,
	name,
	options,
	value = '',
	onChange,
	loading,
}) => {
	return (
		<Form.Group className='mb-3'>
			{label && <Form.Label>{label}</Form.Label>}

			<Select
				options={options}
				value={options.filter(v => v.value === value)[0] ?? {}}
				onChange={({ value }) => onChange({ target: { name, value } })}
				isDisabled={loading}
			/>
		</Form.Group>
	);
};

const DateInput = ({ label, name, value, onChange, loading, timeFormat }) => {
	const handleChange = date => {
		onChange({
			target: {
				name,
				value: moment(date).format('YYYY-MM-DD HH:mm'),
			},
		});
	};

	return (
		<Form.Group className='mb-3'>
			<Datetime
				timeFormat={timeFormat}
				closeOnSelect={true}
				onChange={handleChange}
				renderInput={(props, openCalendar) => (
					<>
						{label && <Form.Label className='font-wg-6'>{label}</Form.Label>}

						<Form.Control
							required
							type='text'
							value={value}
							disabled={loading}
							placeholder='YYYY-MM-DD'
							onFocus={!loading && openCalendar}
						/>
					</>
				)}
			/>
		</Form.Group>
	);
};

const TextArea = ({ label, height = 300, name, value, onChange, loading }) => {
	return (
		<Form.Group className='mb-3'>
			{label && <Form.Label>{label}</Form.Label>}

			<Editor
				apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
				value={value}
				init={{
					height,
					menubar: false,
					plugins: [
						'advlist autolink lists link image charmap print preview anchor',
						'searchreplace visualblocks code fullscreen',
						'insertdatetime media table paste code help wordcount',
					],
					toolbar:
						'undo redo | formatselect | ' +
						'bold italic backcolor | alignleft aligncenter ' +
						'alignright alignjustify | bullist numlist outdent indent | ' +
						'image | removeformat | help',
					images_upload_handler: async function (blobInfo, success) {
						const { secure_url } = await Cloudnary(blobInfo.blob());
						return secure_url ? success(secure_url) : null;
					},
				}}
				disabled={loading}
				onEditorChange={content =>
					onChange({ target: { name, value: content } })
				}
			/>
		</Form.Group>
	);
};

const Input = ({ type = 'text', ...rest }) => {
	if (
		type === 'text' ||
		type === 'email' ||
		type === 'number' ||
		type === 'password'
	)
		return <FormInput type={type} {...rest} />;

	if (type === 'select') return <SelectInput {...rest} />;
	if (type === 'textarea') return <TextArea {...rest} />;
	if (type === 'date') return <DateInput timeFormat={false} {...rest} />;
	if (type === 'datetime') return <DateInput {...rest} />;

	return null;
};

export default Input;
