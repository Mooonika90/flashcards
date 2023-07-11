import aboutUs from '../assets/about-us.png';

function Aboutus() {
	return (
		<section className='aboutus'>
			<h2>about us </h2>
			<article>
				<div>
					<h3>
						At our company, we are passionate about language learning and
						empowering individuals to reach their full potential in English.
					</h3>
					<p>
						We understand that learning a new language can be challenging, but
						we firmly believe that with the right tools and resources, anyone
						can achieve fluency. Start exploring our flashcards today and unlock
						your full potential in English!
					</p>
				</div>

				<img src={aboutUs} alt='' />
			</article>

			<ul>
				<li>
					<span>Who we are:</span> English Flashcards was founded by a team of
					dedicated language enthusiasts who recognized the need for effective
					and accessible language learning tools.
				</li>
				<li>
					<span> Our Mission:</span> Our mission is to empower learners
					worldwide by providing them with comprehensive and user-friendly
					flashcards that enhance their English language skills.
				</li>
				<li>
					<span> Accessibility:</span> English Flashcards can be accessed
					anytime, anywhere, through our user-friendly website or mobile app.
				</li>
			</ul>

			<p className='contactus'>
				<span>Contact us:</span> +48 500 333 222
			</p>
		</section>
	);
}

export default Aboutus;
