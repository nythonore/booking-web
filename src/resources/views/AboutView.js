const AboutView = () => {
	return (
		<div className='contact-section'>
			<div className='container'>
				<p className='font-sz-large font-wg-700'>About Us</p>
				<div className='mt-2'>
					<p className='title-line'></p>
				</div>

				<div className='mt-4'>
					<p className='font-sz-title color-grey-1 text-justify'>
						GoDiscover Africa ltd is a licensed tours company established in
						Kigali Rwanda and operating inbound and outbound tours within the
						region and Africa as a whole. We invite you to come join the
						exciting GoDiscover Africa adventure as we spread our wings across
						the continent of Africa with our professional tour operators who
						will guide you in discovering the mystery of the African continent,
						Explore our detailed packages and itineraries which lead you to
						pre-arranged adventures or request for customized adventures and we
						will develop one for you that meets all your requirements. Discover
						our beautiful continent by partnering with GoDiscover Africa- we
						will take you there in comfort and style.
					</p>

					<p className='font-wg-700 font-sz-title color-dark text-justify mt-4'>
						Our Vision
					</p>

					<p className='font-sz-title color-grey-1 text-justify mt-2'>
						To become a preferable and leading safaris company in east Africa by
						offering the best tours and travel and related activities at most
						competitive price and providing quality services.
					</p>

					<p className='font-wg-700 font-sz-title color-dark text-justify mt-4'>
						Our Mission
					</p>

					<ul className='mt-2'>
						{[
							'Providing customer satisfaction and extraordinary memories by offering quality service',
							'Enriching the live hoods of local community through offering employment opportunities and other social cooperative.',
						].map((value, key) => (
							<li
								key={key}
								className='font-sz-title color-grey-1 text-justify mt-2'
							>
								{value}
							</li>
						))}
					</ul>

					<p className='font-wg-700 font-sz-title color-dark text-justify mt-4'>
						Our Value
					</p>

					<ul className='mt-2'>
						{['Respect for all', 'Honest', 'Knowledge', 'Integrity'].map(
							(value, key) => (
								<li
									key={key}
									className='font-sz-title color-grey-1 text-justify mt-2'
								>
									{value}
								</li>
							)
						)}
					</ul>

					<p className='font-wg-700 font-sz-title color-dark text-justify mt-4'>
						Service Offered
					</p>

					<ul className='mt-2'>
						{[
							'Gorilla trekking',
							'Wildlife safaris',
							'Natural walk',
							'Agris tourism',
							'Pilgrimage tour',
							'Culture and historical tours',
							'Hiking',
						].map((value, key) => (
							<li
								key={key}
								className='font-sz-title color-grey-1 text-justify mt-2'
							>
								{value}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AboutView;
