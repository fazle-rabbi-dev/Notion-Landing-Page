import clsx from "clsx";

const ClientStory = ({ story, isFirstRow }) => {
	const { href, company, logo, quote } = story;

	return (
		<a
			key={company}
			href={href}
			className={clsx("space-y-3 group", isFirstRow && "lg:pb-12")}>
			<img
				src={logo}
				alt={company}
				className="w-20"
			/>
			<p className="text-lg group-hover:text-blue-50">
				<span>{quote}</span>
				&nbsp;<span className=""> →</span>
			</p>
		</a>
	);
};

export default ClientStory;
