function Title({ locked }) {
	return (
		<h1 className="text-3xl opacity-[0.6] uppercase tracking-[1px] w-[200px] text-center leading-[0.9] font-medium mt-[60px]">
			{locked ? (
				<span>
					Limit! Buy <b>Pro</b> for &gt;5
				</span>
			) : (
				'Fancy Counter'
			)}
		</h1>
	);
}

export default Title;
