import { useState } from 'react';
import { Link } from 'react-router-dom';
import addWord from '../assets/bookmark.png';

function FlashCardForm() {
	const [words, setWords] = useState(() => {
		const savedWords = localStorage.getItem('words');
		return savedWords ? JSON.parse(savedWords) : [];
	});

	const [newWord, setNewWord] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const handleInputChange = (e) => {
		setNewWord(e.target.value);
		setError('');
		setSuccess('');
	};

	const handleAddWord = (e) => {
		e.preventDefault();
		if (newWord.trim() !== '') {
			const updatedWords = [...words, newWord];
			setWords(updatedWords);
			setNewWord('');
			setError('');
			setSuccess('Word has been added successfully.');
			localStorage.setItem('words', JSON.stringify(updatedWords));
		} else {
			setError('Please enter a word.');
		}
	};

	return (
		<section className='add-word'>
			<h2>Add New Word</h2>
			<div>
				<form>
					<label htmlFor='newWord'>Put word down bellow:</label>

					<input
						id='newWord'
						type='text'
						placeholder='Type here'
						value={newWord}
						onChange={handleInputChange}
					/>

					<button className='btn-add' onClick={handleAddWord}>
						Add Word
					</button>

					<Link to={`/words/`}>Go to word list</Link>
					{error && <p className='error'>{error}</p>}
				</form>

				<img src={addWord} alt='' />
			</div>
			{success && <p className='success'>{success}</p>}
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
