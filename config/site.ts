export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Dislost Link Tree",
	description: "This is a website for link tree from me.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		// {
		// 	label: "About",
		// 	href: "/about",
		// },
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/AkbarRizkyR",
		twitter: "https://twitter.com/Akbarrizki0098",
		discord: "https://discord.gg/YkUFXmDjjY",
	},
};
