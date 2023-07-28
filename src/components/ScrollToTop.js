
function ScrollToTop() {


	return (
		<button className='scroll-top-btn' onClick={() => window.scrollTo(0, 0)}>
			To the top <span aria-hidden='true'>↑</span>
		</button>
	);
}

export default ScrollToTop;
