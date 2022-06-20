import Content from './components/Home/Content';
import Calculator from './components/Home/Calculator';

function App() {
	return (
		<div className='flex items-center min-h-screen body-bg min-w-screen font-sora p-2 lg:p-0'>
			<div className='flex flex-col lg:flex-row items-center 2xl:items-start justify-between mx-auto main-section max-w-1080'>
				<Content />
				<Calculator />
			</div>
		</div>
	);
}

export default App;
