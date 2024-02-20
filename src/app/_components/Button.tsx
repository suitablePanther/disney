const Button = ({ children }: { children: string }) => {
	return (
		<button
			type="button"
			className="capitalize bg-gradient-to-r from-main to-blue-900 text-lg font-semibold py-1 px-5 rounded-lg mr-3 md:mr-6"
		>
			{children}
		</button>
	);
};
export default Button;
