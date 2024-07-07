import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Modal from './assets/Modal/Modal';

function App() {
	const [count, setCount] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Interested in taking part in an event for Quantum Computing?
			</p>
			<button onClick={openModal}>Click Me!</button>
			<div className='space'></div>

			<p>Upcoming Events!</p>
			{modalOpen && (
				<div className={`modal-container ${modalOpen ? 'show' : ''}`}>
					<Modal closeModal={closeModal}>
						<h1>This is the event title</h1>
						<p>This is the event description</p>
					</Modal>
				</div>
			)}
		</>
	);
}

export default App;
