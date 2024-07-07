import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

function CountButton({ type, setCount, locked }) {
	const handleClick = (event) => {
		setCount((prevCount) => {
			if (type === 'minus') {
				if (prevCount === 0) return 0;
				return prevCount - 1;
			}
			if (type === 'plus') {
				return prevCount + 1;
			}
		});

		event.currentTarget.blur();
	};
	return (
		<button
			disabled={locked}
			onClick={handleClick}
			className="flex-1 flex justify-center items-center cursor-pointer transition-all duration-[0.4s] hover:bg-lime-900 focus:bg-lime-900"
		>
			{type === 'minus' && (
				<MinusIcon className="text-lime-300 h-10 w-10" />
			)}
			{type === 'plus' && (
				<PlusIcon className="text-lime-300 h-10 w-10" />
			)}
		</button>
	);
}

export default CountButton;
