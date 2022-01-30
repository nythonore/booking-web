import { useState } from 'react';
import { Image, Spinner } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import cloudnary from '../../core/helpers/cloudnary';

const DropZone = ({ multiple = false, value = '', onChange = undefined }) => {
	const [loading, setLoading] = useState(false);

	const handleUpload = async files => {
		const _files = [];
		setLoading(true);

		for (let i = 0; i < files.length; i++) {
			const { secure_url } = await cloudnary(files[i]);
			secure_url && _files.push(secure_url);
		}

		setLoading(false);
		onChange(_files);
	};

	const { getRootProps, getInputProps } = useDropzone({
		onDrop: files => handleUpload(files),
		multiple,
	});

	return (
		<div {...getRootProps({ className: 'content' })}>
			<input {...getInputProps()} />

			<div className='dropzone-container bg-grey cursor d-flex align-items-center justify-content-center'>
				{loading ? (
					<div className='text-center'>
						<Spinner animation='border' size='lg'></Spinner>
					</div>
				) : value ? (
					<Image src={value} alt={value} className='img-fluid' />
				) : (
					<div className='text-center'>
						<i className='bi bi-cloud-plus'></i>
						<p className='mt-1'>Click To Select File</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default DropZone;
