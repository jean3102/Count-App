import { useState } from 'react';

export const useCount = (initialValue: number) => {
	const [value, setValue] = useState(initialValue);
	const [errorMsj, setErrorMsj] = useState('');

	const increment = () => {
		setErrorMsj('');
		setValue((prevValue) => prevValue + 1);
	};
	const decrement = () => {
		if (value < 1) return setErrorMsj('cannot decrement to negative numbers');
		setValue((preValue) => preValue - 1);
	};

	return { increment, decrement, value, errorMsj };
};
