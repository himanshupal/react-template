import { useSelector } from "react-redux"

const Param = ({ match: { params } }) => {
	const count = useSelector((state) => state.counter)

	return (
		<div>
			{count}
			<br />
			{params?.id}
		</div>
	)
}

export default Param
