/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
	mount: {
		public: "/",
		src: "/dist",
	},
	routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
	plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-babel", "@snowpack/plugin-postcss", "@snowpack/plugin-dotenv"],
	packageOptions: {
		knownEntrypoints: ["react", "react-dom"],
	},
	devOptions: {
		port: 3000,
		output: "stream",
	},
	buildOptions: {
		clean: true,
	},
	optimize: {
		bundle: true,
		minify: true,
		splitting: true,
		treeshake: true,
	},
}
