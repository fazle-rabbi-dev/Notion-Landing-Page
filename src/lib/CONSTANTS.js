export const MAIN_NAV_ITEMS = [
	{
		title: "Notion",
		isDropdown: true,
		dropdownContent: [
			{
				id: 1,
				heading: "Features",
				links: [
					{
						title: "Notion AI",
						description: "Build, write, automate",
						href: "#",
					},
					{
						title: "Docs",
						description: "Simple & powerful",
						href: "#",
					},
					{
						title: "Wikis",
						description: "Centralize your knowledge",
						href: "#",
					},
					{
						title: "Projects",
						description: "Manage any project",
						href: "#",
					},
				],
			},
			{
				id: 2,
				links: [
					{
						title: "Enterprise Search",
						isNew: true,
						description: "Find answers instantly",
						href: "#",
					},
					{
						title: "AI Meeting Notes",
						isNew: true,
						description: "Perfectly written by AI",
						href: "#",
					},
					{
						title: "Forms",
						description: "Responses and requests",
						href: "#",
					},
					{
						title: "Sites",
						description: "Publish anything, fast",
						href: "#",
					},
				],
			},
			{
				id: 3,
				heading: "Get started",
				links: [
					{
						title: "Browse marketplace",
						description: "Templates for everything",
						href: "#",
					},
					{
						title: "View integrations",
						description: "Connect your apps with Notion",
						href: "#",
					},
					{
						title: "Download web clipper",
						description: "Save from the web into Notion",
						href: "#",
					},
				],
			},
		],
	},
	{
		title: "Mail",
		href: "#",
	},
	{
		title: "Calendar",
		href: "#",
	},
	{
		title: "AI",
		href: "#",
	},
	{
		title: "Enterprise",
		href: "#",
	},
	{
		title: "Pricing",
		href: "#",
	},
	{
		title: "Explore",
		isDropdown: true,
		dropdownContent: [
			{
				id: 1,
				heading: "Teams",
				links: [
					{ title: "Eng & Product", href: "#" },
					{ title: "Design", href: "#" },
					{ title: "Marketing", href: "#" },
					{ title: "IT", href: "#" },
				],
			},
			{
				id: 2,
				heading: "Team size",
				links: [
					{ title: "Startups", href: "#" },
					{ title: "SMBs", href: "#" },
					{ title: "Enterprise", href: "#" },
					{ title: "Education", href: "#" },
				],
			},
			{
				id: 3,
				heading: "Learn",
				links: [
					{ title: "Help center", href: "#" },
					{ title: "Customer stories", href: "#" },
					{ title: "Blog", href: "#" },
					{ title: "Community", href: "#" },
				],
			},
			{
				id: 4,
				heading: "Build",
				links: [
					{ title: "API", href: "#" },
					{ title: "Templates", href: "#" },
					{ title: "Security", href: "#" },
					{ title: "Consultants", href: "#" },
				],
			},
		],
	},
	{
		title: "Request a demo",
		href: "#",
		isButton: true,
	},
];

export const TRUSTED_COMPANIES = [
	{
		name: "OpenAI",
		url: "https://images.ctfassets.net/spoqsaf9291f/jWkCPMAAj0Av69704DQoB/84499b606028b276e0bf94c238f07097/OpenAI-black-wordmark-cropped.png",
	},
	{
		name: "Figma",
		url: "https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/497492503acb3fa21bbd9dd1aec193c3/Figma-logo-color.svg",
	},
	{
		name: "Volvo",
		url: "https://images.ctfassets.net/spoqsaf9291f/4xtSoCGKxiZcTwsYPlBB5h/0fb7d4155e89ef5a852936099e014313/volvo.png",
	},
	{
		name: "Ramp",
		url: "https://images.ctfassets.net/spoqsaf9291f/4eiEZBWL5gEClwB1IHi18I/b9b86479965977121ceabd01f45567a7/ramp.png",
	},
	{
		name: "Cursor",
		url: "https://images.ctfassets.net/spoqsaf9291f/3CSWr4Z4uIvbfO7102KPY/bbd97c8edd0673853ac8dae2887a638d/cursor.png",
	},
	{
		name: "NVIDIA",
		url: "https://images.ctfassets.net/spoqsaf9291f/7FiQxfDAOyovrCIauqR2BC/f0150affe329526bd3773c07449e747b/NVIDIA-logo.png",
	},
];

export const SHOWCASE_ARTICLES = [
	{
		id: 1,
		icon: "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F2RmBatRiqNZT7mu44Qoifl%2F6a834087f3d0a018fa5b14a5bae00582%2Fai-meeting-notes-icon.png&w=96&q=75",
		title: "AI Meeting Notes",
		isNew: true,
		desc: "Perfect notes every time.",
		coverImg:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4zmmc2Sts2j750iWG4cz9C%2Ff9fc4a58dea5be6e42777a8637684765%2Fbento_1.en-US.png&w=3840&q=75",
		gif: "https://www.notion.com/front-static/nosey/bento/noseyWriting.gif",
		bgColor: "bg-rose-50",
		borderColor: "hover:border-rose-300",
		href: "https://www.notion.com/product/ai-meeting-notes",
	},
	{
		id: 2,
		icon: "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4Jnz1LdPqjujdW77jmtWTh%2Fa055aeb5baa46435d5db493456991bff%2Ficon_bento_search.png&w=96&q=75",
		title: "Enterprise Search",
		isNew: true,
		desc: "One search for everything.",
		coverImg:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F2ZvcfZ5FYoh5mWSzqBAoqI%2F0fc610cde8307c2707c679304bf55589%2F30222&w=3840&q=75",
		gif: "https://www.notion.com/front-static/nosey/bento/noseyWriting.gif",
		bgColor: "bg-sky-50",
		borderColor: "hover:border-blue-200",
		href: "https://www.notion.com/product/enterprise-search",
	},
	{
		id: 3,
		icon: "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F1vDd1Xq1bijUBXwf3p33RL%2F70cae92019d022cc26708127829459ae%2Ficon_bento_projects.png&w=96&q=75",
		title: "Projects",
		isNew: false,
		desc: "Keep every plan on track.",
		coverImg:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2FsBvJS45PQCJBRR1hfIZH6%2F89c2b8066e8e52ef45c433294d6d0af9%2Fbento_3.en-US.png&w=3840&q=75",
		coverImgSm:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4koJ8tLvPFOdNRQP3y7UG0%2Fde0cbd1c1fbc45788d26c9b5f9a4c34b%2Fbento_3_mobile.en-US.png&w=3840&q=75",
		gif: "https://www.notion.com/front-static/nosey/bento/noseyWriting.gif",
		bgColor: "bg-orange-100/75",
		borderColor: "hover:border-amber-300",
		href: "https://www.notion.com/product/projects",
	},
	{
		id: 4,
		icon: "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F3ZUI2YU0fvfX5iqzaO6vy5%2F116f6227f7a97a126cac46377c0b6ea2%2Ficon_bento_mail.png&w=96&q=75",
		title: "Notion Mail",
		isNew: true,
		desc: "The inbox that thinks like you.",
		coverImg:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F3WUVrdpc8WmnGJooDLXPR7%2F58a35d526f463c4a492a8119c1b652b8%2Fbento_4.en-US.png&w=3840&q=75",
		gif: "https://www.notion.com/front-static/nosey/bento/noseyWriting.gif",
		bgColor: "bg-gray-100",
		borderColor: "hover:border-gray-200",
		href: "https://www.notion.com/product/mail",
	},
	{
		id: 5,
		icon: "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F7x3FVMsVsqlTTYDAC8PEpD%2F3a305e02cf4577a6d7b2acf0b979bb66%2Ficon_bento_templates.png&w=96&q=75",
		title: "Business-in-a-box",
		isNew: false,
		desc: "Run your entire company.",
		coverImg:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4m5lpqe7uGKqVeCbxJTzs8%2Fe55e27db18bf03aa6b431f6797219894%2Fbento_5.en-US.png&w=3840&q=75",
		gif: "https://www.notion.com/front-static/nosey/bento/noseyWriting.gif",
		bgColor: "bg-sky-50",
		borderColor: "hover:border-teal-200",
		href: "templates/business-starter-kit",
	},
];

export const CAROUSEL_TABS = ["Product", "Engineering", "Design", "IT", "Marketing", "Startups"];

export const CAROUSEL_TAB_CONTENTS = [
	{
		title: "Product",
		imageSm:
			"https://images.ctfassets.net/spoqsaf9291f/1qg1xJT2WrTLhvT4y48Bee/de811cf8548b6041552721be3df5b767/product_mobile.en-US.png",
		imageLg:
			"https://images.ctfassets.net/spoqsaf9291f/5FOEEkHXxB4F3hQrZLWZ8G/19d5ecb4cbfc5922564e7ba1fca72a3f/product.en-US.png",
		bgColor: "bg-sky-50",
	},
	{
		title: "Engineering",
		imageSm:
			"https://images.ctfassets.net/spoqsaf9291f/63GeWhwARchHSKZOmlzNnz/bc6fa5bfe56f5695f2e221bbe76770b8/engineering_mobile.en-US.png",
		imageLg:
			"https://images.ctfassets.net/spoqsaf9291f/3uWfsJnlpCimdqcYJVszKt/1b0dbe85435e11fcc4ab85ab1e580603/engineering.en-US.png",
		bgColor: "bg-rose-50",
	},
	{
		title: "Design",
		imageSm:
			"https://images.ctfassets.net/spoqsaf9291f/6vZtvmpVrMu9iJSZzGay9u/b8fb6d9418a763c0cdd35a8f3b05b3b4/design_mobile.en-US.png",
		imageLg:
			"https://images.ctfassets.net/spoqsaf9291f/18gxMna3Gsoy0MXIciuwcm/4432a321b521d1f8dfc97732b7645562/design.en-US.png",
		bgColor: "bg-cyan-50",
	},
	{
		title: "IT",
		imageSm:
			"https://images.ctfassets.net/spoqsaf9291f/710fTKrV2CFME0yyRYOFzR/1b6c7c596971c3d14d13be0683afe459/it_mobile.en-US.png",
		imageLg:
			"https://images.ctfassets.net/spoqsaf9291f/N3cXw71SPLzvRZotzDIJK/cddf7d316085de46387b959f51becbed/it.en-US.png",
		bgColor: "bg-orange-50",
	},
	{
		title: "Marketing",
		imageSm:
			"https://images.ctfassets.net/spoqsaf9291f/1qHyW97ViAA4DxWWELKH0V/81ce6d8a9c6d465e3460660dae2e926f/marketing_mobile.en-US.png",
		imageLg:
			"https://images.ctfassets.net/spoqsaf9291f/dWYQIU4v89fvd22zsQxV6/265b9a5b053f7d34ccfdcb2ccadccc22/marketing.en-US.png",
		bgColor: "bg-amber-100",
	},
	{
		title: "Startups",
		imageSm:
			"https://images.ctfassets.net/spoqsaf9291f/7CNbqYZsZoBQz4QBfBsWj3/372e40566f0f48ba4735310e8918b98f/startups_mobile.en-US.png",
		imageLg:
			"https://images.ctfassets.net/spoqsaf9291f/4GoYEFFY5zHRGpaFGYkZCu/be1c22c526ccd7b0d486b6537d7151a8/startups.en-US.png",
		bgColor: "bg-gray-50",
	},
];

export const CLIENT_STORIES = [
	{
		company: "Toyota",
		logo: "https://images.ctfassets.net/spoqsaf9291f/1fJCIIjK31CRPMPj7Bp9Mu/a48f183d399e7483799401f44053e306/toyota.png",
		quote: "Streamlined workflows to reduce timelines by 3x.",
		href: "https://www.notion.com/customers/toyota",
	},
	{
		company: "Ramp",
		logo: "https://images.ctfassets.net/spoqsaf9291f/4eiEZBWL5gEClwB1IHi18I/b9b86479965977121ceabd01f45567a7/ramp.png",
		quote: "“With Notion, every person at Ramp has an AI assistant.”",
		href: "https://www.notion.com/customers/ramp",
	},
	{
		company: "Vercel",
		logo: "https://images.ctfassets.net/spoqsaf9291f/15en0a60cYTRxNO1QlHbdg/f09657a6b8287f1db0e628a048267e2c/vercel-logotype-light.svg",
		quote: "“Notion understands that you can solve a lot of problems with one tool.”",
		href: "https://www.notion.com/customers/vercel",
	},
	{
		company: "Match Group",
		logo: "https://images.ctfassets.net/spoqsaf9291f/2Z03v7BH2brwtBG2qdA5dp/d6cd228d2f7b6048edcec9f4d5bcce3c/match.png",
		quote: "“Notion has been the most powerful and impactful way to streamline our workflow.”",
		href: "https://www.notion.com/customers/match",
	},
	{
		company: "Deel",
		logo: "https://images.ctfassets.net/spoqsaf9291f/5sSU1RuGiuXiLOo6BTB6JT/459aa7c6824c18b7faaca2b0c3606d62/deel_2025.png",
		quote: "“Someone could join Deel and onboard themselves without ever speaking to anybody.”",
		href: "https://www.notion.com/customers/deel",
	},
	{
		company: "Planful",
		logo: "https://images.ctfassets.net/spoqsaf9291f/3pCaKcH2gCNdmeLdzdL66F/c6cd3b5670585d9feb298de532930d24/Planful_Logo.png",
		quote: "From six apps to one: Scaling faster with all teams running on Notion AI.",
		href: "https://www.notion.com/customers/planful",
	},
];

export const INTEGRATIONS = [
	{
		name: "Slack",
		icon_url:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2FCQcBQyH4Arrg3L89LGtJJ%2Fbe4d88d7b99690a8e32cec52ec9322dc%2Fslack-logo.png&w=48&q=75",
		status: "Available",
	},
	{
		name: "Google Drive",
		icon_url:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F2Kp35zgUoc6qKprOsvC0rm%2F5bb1391716e9f3549bab489646c0fff4%2Fgoogle-workspace-logo.png&w=48&q=75",
		status: "Available",
	},
	{
		name: "GitHub",
		icon_url:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4c6UQCtqP2VcaQ54geVmhE%2Fecb8a17172049803d0687a331738eb64%2Fgithub-logo.png&w=48&q=75",
		status: "Available",
	},
	{
		name: "Jira",
		icon_url:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F2QeSvVRbbTcryv22yuxJ4O%2F7a2f80d7e0c777b7d98f35e76bb241cf%2Fjira-logo.png&w=48&q=75",
		status: "Available",
	},
	{
		name: "MS Teams",
		icon_url:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4Peb2KsEz9ZP28FP5TQMhw%2F4b1eb7bf064929333034da4e2acaadb7%2Fms-teams-logo.png&w=48&q=75",
		status: "Available",
	},
	{
		name: "SharePoint",
		icon_url:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F1Y9wMruARnjBVnkdEPmoJd%2Fb98ddb2a235344031a05c3b6579fec40%2Fsharepoint-logo.png&w=48&q=75",
		status: "Available",
	},
	{
		name: "OneDrive",
		icon_url:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F3qLse95jc5JIgvNUbsyQq7%2F68eaf72b8bc66c93577a37cd5cdddd60%2Fonedrive-logo.png&w=48&q=75",
		status: "Available",
	},
	{
		name: "Gmail",
		icon_url:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F7uxYhi4B135cc5qjskpew1%2F85dd5b390939ec5d9f481b334dfaa433%2Fgmail-logo.png&w=48&q=75",
		status: "Available",
	},
	{
		name: "Linear",
		icon_url:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6sXzNcTANYabBBQaiCZMXR%2F678d3ad8374d4276da3fd8e95ae88234%2Flinear-logo.png&w=48&q=75",
		status: "Available",
	},
	{
		name: "Zendesk",
		icon_url:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4QFYcbryJVxPpMyp1lypRD%2Fb78f20fcf39037dd5792bae510a9b740%2Fzendesk-logo.png&w=48&q=75",
		status: "Coming soon",
	},
	{
		name: "Salesforce",
		icon_url:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6Kt86waxJxRwpIxAPorGyn%2F4ddbf37fecde60a2faf7ff9788ba00ac%2Fsalesforce-logo.png&w=48&q=75",
		status: "Coming soon",
	},
	{
		name: "Box",
		icon_url:
			"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6J63Bc8LtN8uIO1giCEyZN%2F4364add25c89df7f0912c64249a22ce4%2Fbox-logo.png&w=48&q=75",
		status: "Coming soon",
	},
];

export const PRODUCTS = [
	{
		title: "Notion Mail",
		desc: "The inbox that thinks like you.",
		icon: "NotionMail",
		href: "https://www.notion.com/product/mail/download",
		images: {
			srcSet:
				"https://www.notion.com/_next/image?url=%2Ffront-static%2Fdownloads%2Fmail%2Fen-US.png&w=384&q=75 1x, https://www.notion.com/_next/image?url=%2Ffront-static%2Fdownloads%2Fmail%2Fen-US.png&w=640&q=75 2x",
			src: "https://www.notion.com/_next/image?url=%2Ffront-static%2Fdownloads%2Fmail%2Fen-US.png&w=640&q=75",
		},
	},
	{
		title: "Notion Calendar",
		desc: "Time and work, together.",
		icon: "NotionCalender",
		href: "https://www.notion.com/product/calendar/download",
		images: {
			srcSet:
				"https://www.notion.com/_next/image?url=%2Ffront-static%2Fdownloads%2Fcalendar%2Fen-US.png&w=384&q=75 1x, https://www.notion.com/_next/image?url=%2Ffront-static%2Fdownloads%2Fcalendar%2Fen-US.png&w=640&q=75 2x",
			src: "https://www.notion.com/_next/image?url=%2Ffront-static%2Fdownloads%2Fcalendar%2Fen-US.png&w=640&q=75",
		},
	},
];
const PREFIX = "https://www.notion.com";

export const FOOTER_LINK_COLUMNS = [
	{
		title: "Company",
		links: [
			{ text: "About us", href: `${PREFIX}/about-us` },
			{ text: "Careers", href: `${PREFIX}/careers` },
			{ text: "Security", href: `${PREFIX}/security` },
			{ text: "Status", href: `${PREFIX}/status` },
			{ text: "Terms & privacy", href: `${PREFIX}/terms-and-privacy` },
			{ text: "Your privacy rights", href: `${PREFIX}/your-privacy-rights` },
		],
	},
	{
		title: "Download",
		links: [
			{ text: "iOS & Android", href: `${PREFIX}/ios-android` },
			{ text: "Mac & Windows", href: `${PREFIX}/mac-windows` },
			{ text: "Calendar", href: `${PREFIX}/calendar` },
			{ text: "Web Clipper", href: `${PREFIX}/web-clipper` },
		],
	},
	{
		title: "Resources",
		links: [
			{ text: "Help center", href: `${PREFIX}/help-center` },
			{ text: "Pricing", href: `${PREFIX}/pricing` },
			{ text: "Blog", href: `${PREFIX}/blog` },
			{ text: "Community", href: `${PREFIX}/community` },
			{ text: "Integrations", href: `${PREFIX}/integrations` },
			{ text: "Templates", href: `${PREFIX}/templates` },
			{ text: "Affiliates", href: `${PREFIX}/affiliates` },
		],
	},
	{
		title: "Notion for",
		isLastColumn: true,
		links: [
			{ text: "Enterprise", href: `${PREFIX}/for-enterprise` },
			{ text: "Small business", href: `${PREFIX}/for-small-business` },
			{ text: "Personal", href: `${PREFIX}/for-personal` },
			{ text: "Explore more →", href: `${PREFIX}/explore-more` },
		],
	},
];
