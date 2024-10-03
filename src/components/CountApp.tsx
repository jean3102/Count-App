import { useCount } from '../hooks/useCount';
interface CountAppProps {
	count: number;
}

function CountApp({ count }: CountAppProps) {
	const { increment, decrement, value, errorMsj } = useCount(count);
	return (
		<>
			<section className="card">
				<button onClick={decrement}>Decrement</button>
				<button onClick={increment}>Increment</button>
				<p data-testid="count">{value}</p>
				<p>{errorMsj}</p>
			</section>
		</>
	);
}

export default CountApp;
