import axios from 'axios';

const Cloudnary = async file => {
	const url = process.env.REACT_APP_CLOUDNARY_URL;

	const formData = new FormData();

	formData.append('upload_preset', process.env.REACT_APP_CLOUDNARY_PRESET);
	formData.append('file', file);
	formData.append('folder', 'godiscoverafrica');

	return await axios
		.post(url, formData)
		.then(({ data }) => {
			return data;
		})
		.catch(error => {
			console.error(error);
			return { secure_url: null };
		});
};

export default Cloudnary;
