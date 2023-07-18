import { useState } from 'react';
import { Link } from 'react-router-dom';
import addWord from '../assets/bookmark.png';
import Result from './result';

function FlashCardForm() {
	const [newWord, setNewWord] = useState('');

	const handleInputChange = (e) => {
		e.preventDefault();
		const inputValue = e.target.value.trim().toLowerCase();
		setNewWord(inputValue);
	};

	return (
		<section className='add-word'>
			<h2>Add New Word</h2>
			<div>
				<form>
					<label htmlFor='newWord'>Put word down below:</label>
					<input
						id='newWord'
						type='text'
						placeholder='Type here'
						value={newWord}
						onChange={handleInputChange}
					/>
					{newWord ? (
						<Link to={`/result/${newWord}`} className='btn-add'>
							Add Word
						</Link>
					) : (
						<button className='btn-add disabled' disabled>
							Add Word
						</button>
					)}
					<Link to='/words/'>Go to word list</Link>
				</form>
				<Result />
				<img src={addWord} alt='' />
			</div>
			<p>
				Join our community of language learners today and experience the power
				of flashcards in transforming your English proficiency. Explore our vast
				collection of flashcards, track your progress, and witness your language
				skills flourish.
			</p>
			<p>
				Start your language learning journey with us and open the doors to
				endless opportunities for personal growth, professional development, and
				cultural exchange.
			</p>
		</section>
	);
}

export default FlashCardForm;
