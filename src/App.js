import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/index';

import FlashCardForm from './pages/addword';
import Words from './pages/words';
import Aboutus from './pages/aboutus';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div id='app'>
			<Header id='site-header'>
				<h1>FlashCards</h1>
			</Header>

			<main>
				<Routes>
					<Route path={'/aboutus'} element={<Aboutus />} />
					<Route path={'/addword'} element={<FlashCardForm />} />
					<Route path={`/words/`} element={<Words />} />
					<Route path={`/words/list/:word`} element={<Words />} />
					<Route path={'/'} element={<HomePage />} />
				</Routes>
			</main>

			<Footer />
		</div>
	);
}

export default App;
