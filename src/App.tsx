import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CountApp from './components/CountApp';

function App() {
	return (
		<>
			<div>
				<a
					href="https://vitejs.dev"
					target="_blank">
					<img
						src={viteLogo}
						className="logo"
						alt="Vite logo"
					/>
				</a>
				<a
					href="https://react.dev"
					target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Count App</h1>
			<CountApp count={0} />
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
