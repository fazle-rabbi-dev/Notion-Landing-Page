import clsx from "clsx";

const CarouselTab = ({ tab, activeTab, changeActiveTab }) => {
	return (
		<button
			className={clsx(
				"px-3 py-[4px] rounded-full text-sm cursor-pointer hover:bg-black/5 hover:text-black",
				activeTab === tab.toLowerCase() ? "bg-black/10" : "text-white-70"
			)}
			onClick={() => changeActiveTab(tab)}
			key={tab}>
			{tab}
		</button>
	);
};

export default CarouselTab;
