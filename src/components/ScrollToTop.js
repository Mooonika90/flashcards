import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<span className='scroll-top-btn' onClick={() => window.scrollTo(0, 0)}>
			To the top <span aria-hidden='true'>↑</span>
		</span>
	);
}

export default ScrollToTop;
