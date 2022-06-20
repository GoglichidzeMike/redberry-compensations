import image from '../../assets/images/image.png';

const Content = () => {
	return (
		<div className='text-white main-section-left max-w-660 mr-0 lg:mr-100'>
			<h1 className='text-4-5xl leading-12 font-bold mb-5 mt-5 lg:mt-0'>
				Quam Tristique Condimentum
			</h1>
			<p className='text-lg leading-7'>
				Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
				lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis
				parturient montes, nascetur ridiculus mus.{' '}
				<span className='text-metal-red'>Curabitur blandit</span> tempus
				porttitor. Integer posuere erat a ante venenatis dapibus posuere velit
				aliquet. Vestibulum id ligula porta felis euismod semper.
			</p>
			<div className='flex flex-col md:flex-row mt-10 mb-5 justify-between'>
				<div className='lg:max-w-sm'>
					<h2 className='text-3-5xl leading-8-5 mb-5'>
						Fringilla Euismod Adipiscing Ipsum
					</h2>
					<p className='text-lg leading-7'>
						Cum sociis natoque penatibus et magnis dis parturient montes,
						nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean
						lacinia bibendum nulla sed.
					</p>
				</div>
				<div className='w-60 mt-5 lg:mt-0 mx-auto lg:mx-0'>
					<img src={image} alt='Main page' className='w-full rounded-4' />
				</div>
			</div>
			<div className='list'>
				<ul className='text-lg leading-7-5'>
					<li className='flex items-center'>
						<div className='w-4 h-1 mr-2 red-gradient'></div>
						<span>Tellus Ullamcorper Inceptos</span>
					</li>
					<li className='flex items-center'>
						<div className='w-4 h-1 mr-2 red-gradient'></div>
						<span>Magna Condimentum</span>
					</li>
					<ul className='ml-8'>
						<li className='flex items-center'>
							<div className='w-3 h-1 mr-2 light-gradient'></div>
							<span>Mattis Tristique</span>
						</li>
						<li className='flex items-center'>
							<div className='w-3 h-1 mr-2 light-gradient'></div>
							<span>Pharetra Pellentesque Dapibus</span>
						</li>
					</ul>
					<li className='flex items-center'>
						<div className='w-4 h-1 mr-2 red-gradient'></div>
						<span>Aenean Inceptos</span>
					</li>
					<li className='flex items-center'>
						<div className='w-4 h-1 mr-2 red-gradient'></div>
						<span>Parturient Bibendum</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Content;
