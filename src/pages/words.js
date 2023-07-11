import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import List from './list';

function Words() {
	const [words, setWords] = useState(() => {
		const savedWords = localStorage.getItem('words');
		return savedWords ? JSON.parse(savedWords) : [];
	});

	useEffect(() => {
		localStorage.setItem('words', JSON.stringify(words));
	}, [words]);

	const [flip, setFlip] = useState(null);

	const toggleCardFlip = (index) => {
		if (flip === index) {
			setFlip(null);
		} else {
			setFlip(index);
		}
	};

	if (words.length === 0) {
		return (
			<section>
				<h2>Words List</h2>
				<p>No words found. </p>
				<Link to={'/addword'}>Add word</Link>
			</section>
		);
	}

	return (
		<section>
			<h2>Words List</h2>
			<div className='flashCards'>
				{words.map((word, index) => (
					<article
						className={`flashcard ${flip === index ? 'flipped' : ''}`}
						key={index}>
						<h3>{word}</h3>
						<div className={`hidden ${flip === index ? 'show' : ''}`}>
							<List></List>
						</div>
						{flip !== index ? <p className='question-mark'>?</p> : null}
						<Link
							to={`/words/list/${word}`}
							onClick={() => toggleCardFlip(index)}>
							flip
						</Link>
					</article>
				))}
			</div>
		</section>
	);
}

export default Words;
