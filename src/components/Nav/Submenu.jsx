import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Submenu = ({ menu }) => {
	const [selected, setSelected] = useState([])

	const onClick = (idx) =>
		selected.includes(idx) ? setSelected(selected.filter((x) => x !== idx)) : setSelected([...selected, idx])

	return menu.map((menuItem, idx) => (
		<div className="cursor-pointer quicksand" key={idx}>
			<div
				className="flex items-center px-5 py-1 text-gray-400 hover:text-gray-300 justify-between"
				onClick={() => onClick(idx)}
			>
				<FontAwesomeIcon
					icon={
						menuItem?.subMenu
							? selected.includes(idx)
								? ["far", "folder-open"]
								: ["far", "folder"]
							: ["far", "bookmark"]
					}
					className={menuItem?.subMenu ? "mr-2" : "ml-0.5 mr-2.5"}
				/>
				{menuItem.subMenu ? (
					<div className="flex-grow flex justify-between items-center">
						{menuItem.title}
						<FontAwesomeIcon icon={selected.includes(idx) ? ["far", "minus-square"] : ["far", "plus-square"]} />
					</div>
				) : (
					<Link to={menuItem.link} rel="preload" className="flex-grow">
						{menuItem.title}
					</Link>
				)}
			</div>
			{Array.isArray(menuItem.subMenu) && (
				<div className={`cursor-pointer ${selected.includes(idx) ? `block` : `hidden`}`}>
					{menuItem.subMenu.map((subItem, idx) => (
						<div key={idx} className="flex items-center text-gray-500 pl-11 py-1 hover:bg-gray-600 hover:text-gray-300">
							<FontAwesomeIcon icon={["fas", "angle-right"]} className="mr-2" />
							<Link to={subItem.link} rel="preload" className="flex-grow">
								{subItem.title}
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
	))
}

export default Submenu
