import { DICTIONARY_BASE_URL } from '../config';

function fetcherDictionary(params = '') {
	return fetch(`${DICTIONARY_BASE_URL}${params}`).then((res) => res.json());
}
export default fetcherDictionary;
