import fetcherDictionary from '../api/fetcher';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

function Result() {
	const { word } = useParams();

	const { data } = useSWR(word, fetcherDictionary);
	const newResult = data?.[0]?.word;
	const [wordExists, setWordExists] = useState('');

	useEffect(() => {
		if (newResult) {
			const storedWords = JSON.parse(localStorage.getItem('words') || '[]');
			if (!storedWords.includes(newResult)) {
				storedWords.push(newResult);
				localStorage.setItem('words', JSON.stringify(storedWords));
			} else {
				setWordExists('You have already added this word broo!');
			}
		}
	}, [newResult]);

	useEffect(() => {
		const storedWords = JSON.parse(localStorage.getItem('words') || '[]');
		if (storedWords.includes(word)) {
			setWordExists('You have already added this word broo!');
		} else {
			setWordExists('');
		}
	}, [word]);

	return (
		<>
			{newResult ? (
				<p className='results'>Lastly added word: {newResult}</p>
			) : (
				<p className='results'> {data?.message}</p>
			)}
			{wordExists && <p className='results'>{wordExists}</p>}
		</>
	);
}

export default Result;
