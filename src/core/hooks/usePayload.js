import { useState } from 'react';

const usePayload = (initialValue = {}) => {
	const [payload, setPayload] = useState(initialValue);

	const handleChange = ({ target: { name, value } }) =>
		setPayload(prevState => {
			return { ...prevState, [name]: value };
		});

	return [handleChange, { payload, setPayload }];
};

export default usePayload;
