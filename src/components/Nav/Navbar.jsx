import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

const Navbar = ({ setVisible }) => {
	const [time, setTime] = useState(`...`)

	useEffect(
		() => setInterval(() => setTime(`${new Date().toDateString()} ${new Date().toLocaleTimeString()}`), 1000),
		[]
	)

	return (
		<div className="fixed top-0 w-screen px-5 md:px-10 py-2.5 flex justify-between items-center bg-gray-700 bg-gradient-to-br text-gray-100">
			<div className="font-extrabold text-lg">
				<FontAwesomeIcon
					icon="bars"
					className="mr-5 cursor-pointer"
					onClick={() => setVisible((visible) => !visible)}
				/>
				Navbar
			</div>
			<div className="text-lg flex">
				<div
					className="px-3 hidden sm:block plex"
					onClick={() => window.document.execCommand(`copy`)}
					onCopy={(e) => {
						e.preventDefault()
						setTime(`...copied to clipboard`)
						if (e.clipboardData) e.clipboardData.setData("text/plain", e.currentTarget.innerText)
					}}
				>
					{time}
				</div>
				<div className="px-3 cursor-pointer">
					<FontAwesomeIcon icon="sign-out-alt" />
				</div>
			</div>
		</div>
	)
}

export default Navbar
