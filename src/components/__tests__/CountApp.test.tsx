import { fireEvent, render, screen } from '@testing-library/react';
import CountApp from './CountApp';

describe('CountApp', () => {
	it('should display initial value', () => {
		render(<CountApp count={0} />);
		expect(screen.getByTestId('count').innerHTML).toBe('0');
	});

	it('should increment the value when clicking Increment', () => {
		render(<CountApp count={0} />);
		const incrementButton = screen.getByRole('button', { name: 'Increment' });
		expect(incrementButton).toBeInTheDocument();

		fireEvent.click(incrementButton);
		expect(screen.getByTestId('count').innerHTML).toBe('1');
	});

	it('should decrement the value when clicking Decrement', () => {
		render(<CountApp count={5} />);
		const decrementButton = screen.getByRole('button', { name: 'Decrement' });
		fireEvent.click(decrementButton);
		expect(screen.getByTestId('count').innerHTML).toBe('4');
	});

	it('Throw error when decrementing a number less than 1', () => {
		render(<CountApp count={0} />);
		const decrementButton = screen.getByRole('button', { name: 'Decrement' });
		const errorMsj = 'cannot decrement to negative numbers';
		fireEvent.click(decrementButton);

		expect(screen.getByText(errorMsj)).toBeInTheDocument();
	});
});
