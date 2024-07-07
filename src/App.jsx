import Card from './Card';

function App() {
	return (
		<main className="w-full h-full flex flex-col justify-center items-center">
			<Card />
			<p className="text-stone-100 mt-4">
				Or just Press the <b className="capitalize">SPACEBAR</b> key on
				your keyboard
			</p>
		</main>
	);
}

export default App;
