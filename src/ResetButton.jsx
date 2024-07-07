import { ResetIcon } from '@radix-ui/react-icons';

function ResetButton({ setCount }) {
	return (
		<button
			onClick={(event) => {
				setCount(0);

				event.currentTarget.blur();
			}}
			className="cursor-pointer opacity-30 transition-all duration-[0.4s] hover:opacity-5 focus:opacity-5"
		>
			<ResetIcon className="h-10 w-10" />
		</button>
	);
}

export default ResetButton;
