import { useState } from 'react';
import fetcherDictionary from '../api/fetcher';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';

function List() {
	const { word } = useParams();
	let { data } = useSWR(word, fetcherDictionary);

	const [isPlaying, setIsPlaying] = useState(false);

	const handleButtonClick = () => {
		setIsPlaying(true);
	};

	const { phonetic, phonetics, meanings } = data?.[0] || {};
	const audioPath = phonetics?.[0]?.audio;
	const meaning = meanings?.[0]?.definitions?.[0]?.definition;
	const synonyms = meanings?.[0]?.synonyms?.slice(0, 3)?.join('/ ');

	return (
		<ul key={word}>
			<li>{phonetic}</li>
			<li className='play-audio' onClick={handleButtonClick}>
				Play Audio
			</li>
			{isPlaying && (
				<audio src={audioPath} onEnded={() => setIsPlaying(false)} autoPlay />
			)}
			<li>noun</li>
			<li>{meaning}</li>
			<li>{synonyms}</li>
		</ul>
	);
}

export default List;
