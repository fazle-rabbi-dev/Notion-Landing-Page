import HeroPicture from "./HeroPicture";
import HeroVideo from "./HeroVideo";
import TrustedCompanyLogos from "./TrustedCompanyLogos";

const HERO_COPY = {
	title: "The AI workspace that works for you.",
	subtitle:
		"One place where teams find every answer, automate the busywork, and get projects done.",
	cta: [
		{ label: "Get Notion free", href: "#", variant: "btn-blue" },
		{ label: "Request a demo", href: "#", variant: "btn-ghost" },
	],
};

const Hero = () => {
	return (
		<section className="hero-container pt-16 lg:pt-32">
			<div className="flex flex-col-reverse lg:flex-row lg:items-stretch lg:gap-8">
				{/* Left column */}
				<div className="flex-1 mt-20 lg:m-0">
					<div className="text-center lg:text-left">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide leading-[1.2]">
							{HERO_COPY.title}
						</h1>
						<h2 className="font-medium mt-6 mb-4 text-lg sm:text-xl lg:text-[23px] lg:max-w-sm">
							{HERO_COPY.subtitle}
						</h2>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-center lg:justify-start">
						{HERO_COPY.cta.map((btn) => (
							<a
								key={btn.label}
								href={btn.href}
								className={`btn-base ${btn.variant} py-3`}>
								{btn.label}
							</a>
						))}
					</div>
				</div>

				{/* Right Column */}
				<div className="flex-1 py-0 relative">
					<HeroPicture />
					<HeroVideo />
				</div>
			</div>

			<TrustedCompanyLogos />
		</section>
	);
};

export default Hero;
