import Title from './Title';
import Count from './Count';
import ResetButton from './ResetButton';
import CountButtonsGroup from './CountButtonsGroup';
import CountButton from './CountButton';
import { useEffect, useState } from 'react';

function Card() {
	const [count, setCount] = useState(0);
	const locked = count === 5 ? true : false;
	console.log(`count => ${count}`);

	useEffect(() => {
		const handleKeydown = (event) => {
			if (event.code === 'Space') {
				// if (count === 5) {
				// 	setCount(5);
				// 	return;
				// }
				setCount((prevCount) => {
					if (prevCount === 5) return 5;
					return prevCount + 1;
				});
			}
		};
		window.addEventListener('keydown', handleKeydown);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	}, []);

	return (
		<div
			className={`bg-lime-400 w-[476px] h-[660px] rounded-xl shadow-gray-200xl flex flex-col items-center transition-all duration-[0.4s] ${
				locked && 'bg-lime-600'
			}`}
		>
			<Title locked={locked} />
			<Count count={count} />
			<ResetButton setCount={setCount} />
			<CountButtonsGroup>
				<CountButton type="minus" setCount={setCount} locked={locked} />
				<CountButton type="plus" setCount={setCount} locked={locked} />
			</CountButtonsGroup>
		</div>
	);
}

export default Card;
