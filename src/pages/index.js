import homepageImage from '../assets/homepage.png';
import { Link } from 'react-router-dom';

function HomePage() {
	return (
		<section className='home-page'>
			<div>
				<h2>Welcome to Flashcards!</h2>
				<p>
					Immerse yourself in a vast collection of flashcards tailored to your
					interests and needs. Each flashcard presents a word, audio, synonym,
					or definition, along with its explanation. Don't wait any longer and
					create your own, ensuring a personalized learning journey.
				</p>

				<Link to={'/addword'}>Add word</Link>
			</div>

			<img src={homepageImage} alt='' />
		</section>
	);
}

export default HomePage;
