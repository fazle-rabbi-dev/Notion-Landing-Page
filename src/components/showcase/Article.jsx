import clsx from "clsx";

import GifBadge from "./GifBadge";
import ArticleMedia from "./ArticleMedia";
import ArticleHeader from "./ArticleHeader";

const Article = ({ article }) => {
	const { icon, title, isNew, desc, coverImg, coverImgSm, gif, bgColor, borderColor, href } =
		article;

	const isProject = title === "Projects";

	return (
		<article
			className={clsx(
				"relative rounded-xl group border-[1.5px] border-transparent overflow-hidden",
				bgColor,
				borderColor,
				isProject && "lg:col-span-2"
			)}>
			{/* Content Wrapper */}
			<div className={clsx(isProject && "lg:h-[270px] lg:flex")}>
				<ArticleHeader
					title={title}
					icon={icon}
					isNew={isNew}
					desc={desc}
					isProject={isProject}
				/>
				<ArticleMedia
					coverImg={coverImg}
					coverImgSm={coverImgSm}
					isProject={isProject}
				/>
			</div>

			{/* Fancy Gif Badge */}
			<GifBadge
				gif={gif}
				isProject={isProject}
			/>

			{/* Clickable overlay link */}
			<a
				href={href}
				className="absolute inset-0 z-10"
			/>
		</article>
	);
};

export default Article;

/* ---------------------- Sub Components ---------------------- */

// import { ArrowRight } from "lucide-react";
// import clsx from "clsx";

// const Article = ({ article }) => {
// 	const { icon, title, isNew, desc, coverImg, coverImgSm, gif, bgColor, borderColor, href } =
// 		article;
// 	const isProjectArticle = title === "Projects";

// 	return (
// 		<article
// 			className={clsx(
// 				"relative rounded-xl group border-[1.5px] border-transparent",
// 				bgColor,
// 				borderColor,
// 				isProjectArticle && "lg:col-span-2"
// 			)}>
// 			{/* Content Wrapper */}
// 			<div className={clsx(isProjectArticle && "lg:h-[270px] lg:flex")}>
// 				<header className="w-[40%] p-5">
// 					<div className="flex items-center gap-2">
// 						<img
// 							src={icon}
// 							alt={title}
// 							className="w-[30px] h-[30px] "
// 							loading="lazy"
// 						/>
// 						<span className="font-medium text-sm">{title}</span>
// 						{isNew && (
// 							<span className="bg-white text-white-70 text-sm rounded-full px-2">New</span>
// 						)}
// 					</div>
// 					<div
// 						className={clsx(
// 							"flex items-center justify-between",
// 							isProjectArticle && "lg:h-full lg:pb-5 lg:flex-col lg:items-start"
// 						)}>
// 						<h2 className="text-2xl tracking-tight font-medium">{desc}</h2>
// 						<div className="p-1 bg-white rounded-full">
// 							<ArrowRight size={16} />
// 						</div>
// 					</div>
// 				</header>

// 				<div
// 					className={clsx(
// 						"flex-1 mt-4 ps-2 pb-[1.8px] overflow-hidden self-end",
// 						isProjectArticle ? "lg:max-h-[240px]" : "sm:max-h-[400px] lg:max-h-[350px]"
// 					)}>
// 					<picture>
// 						<source
// 							srcSet={coverImgSm || ""}
// 							src={coverImgSm}
// 							media="(max-width: 959px)"
// 						/>
// 						<img
// 							src={coverImg}
// 							alt="Homepage Bento 3"
// 							className={
// 								isProjectArticle ? "object-contain object-bottom h-full" : "md:object-cover"
// 							}
// 							loading="lazy"
// 							decoding="async"
// 						/>
// 					</picture>
// 				</div>
// 			</div>

// 			{/* Fancy Gif Badge */}
// 			{isProjectArticle && (
// 				<div className="hidden lg:block absolute right-[57%] bottom-4">
// 					<img
// 						src={gif}
// 						alt="Noise Gif"
// 						className="opacity-0 translate-x-4 w-16 rounded-full shadow-black/30 shadow-sm transition-all duration-200 ease-linear group-hover:opacity-100 group-hover:translate-x-0"
// 					/>
// 				</div>
// 			)}

// 			<div className={clsx("absolute right-4 bottom-4", isProjectArticle && "lg:hidden")}>
// 				<img
// 					src={gif}
// 					alt="Noise Gif"
// 					className="opacity-0 translate-y-3 w-16 rounded-full shadow-black/30 shadow-sm transition-all duration-200 ease-linear group-hover:opacity-100 group-hover:translate-y-0"
// 				/>
// 			</div>

// 			{/* Clickable overlay link */}
// 			<a
// 				href={href}
// 				className="absolute inset-0 z-10"></a>
// 		</article>
// 	);
// };

// export default Article;
