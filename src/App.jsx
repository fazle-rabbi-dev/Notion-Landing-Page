import { useEffect } from "react";

import Header from "~/components/header/Header";
import Hero from "~/components/hero/Hero";
import Showcase from "~/components/showcase/Showcase";
import TeamUseCaseCarousel from "@/components/teamusecase/TeamUseCaseCarousel";
import Testimonials from "~/components/testimonials/Testimonials";
import SearchCapabilities from "~/components/search/SearchCapabilities";
import NotionProducts from "~/components/products/NotionProducts";
import Footer from "~/components/footer/Footer";

const App = () => {
	useEffect(() => {
		console.clear();

		console.log(
			"%c⚡ Welcome to Notion Landing Page Clone ⚡",
			"color: #ffffff; background: #000000; font-size:16px; padding:8px 12px; border-radius:8px;"
		);

		console.log("%c👨‍💻 Built by Rabbi | MERN Stack Developer", "color:#00bcd4; font-size:14px;");

		console.log(
			"%c💡 Tip: Stay curious, keep building!",
			"color:#4caf50; font-size:13px; font-style:italic;"
		);
	}, []);

	return (
		<>
			<Header />
			<main className="">
				<Hero />
				<Showcase />
				<TeamUseCaseCarousel />
				<Testimonials />
				<SearchCapabilities />
				<NotionProducts />
			</main>
			<Footer />
		</>
	);
};

export default App;
