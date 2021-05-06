import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import Submenu from "./Submenu"

const Sidebar = ({ visible, setVisible }) => {
	return (
		<nav
			className={`transition-all text-sm z-10 fixed top-0 w-64 h-screen bg-gray-800 ${visible ? `left-0` : `-left-64`}`}
		>
			<div className="relative overflow-y-auto" style={{ height: "calc(100% - 30px)" }}>
				<div className="flex items-center justify-between px-3 py-2.5">
					<Link
						to="/"
						rel="preload"
						title="Dashboard"
						className="text-lg text-gray-400 font-extrabold hover:text-gray-300"
					>
						Home
					</Link>
					<FontAwesomeIcon
						icon="times"
						onClick={() => setVisible((visible) => !visible)}
						className="text-gray-500 cursor-pointer hover:text-green-300"
					/>
				</div>

				<div className="border-t border-gray-600 p-5 flex items-center justify-between">
					<img className="h-11 w-11 object-cover rounded-md" src="/assets/image.png" alt="User picture" />
					<div className="flex flex-col text-gray-400 whitespace-nowrap w-40">
						<span className="text-lg overflow-ellipsis overflow-hidden">John Doe</span>
						<span className="overflow-ellipsis overflow-hidden text-gray-500">Administrator</span>
					</div>
				</div>

				<div className="border-t border-gray-600 py-3">
					<div className="text-gray-500 font-bold px-3 pb-2 belgrano text-base">General</div>

					<Submenu
						menu={[
							{
								title: "Home",
								link: "/",
							},
							{
								title: "About",
								link: "/about",
							},
						]}
					/>
				</div>

				<div className="border-t border-gray-600 py-3">
					<div className="text-gray-500 font-bold px-3 pb-2 belgrano text-base">General</div>

					<Submenu
						menu={[
							{
								title: "Links",
								subMenu: [
									{ title: "Home-1", link: "/" },
									{ title: "About-1", link: "/about" },
									{ title: "Class Simple", link: "/param" },
									{ title: "Class Param", link: "/param/arg" },
									{ title: "About-3", link: "/about" },
								],
							},
							{
								title: "Home",
								link: "/",
							},
						]}
					/>
				</div>
			</div>

			<div className="absolute w-full flex items-center bottom-0 justify-center border-t border-gray-600 cursor-pointer text-gray-200 bg-gray-800 hover:text-red-600 hover:bg-gray-300">
				Logout <FontAwesomeIcon icon="sign-out-alt" className="m-2" />
			</div>
		</nav>
	)
}

export default Sidebar
