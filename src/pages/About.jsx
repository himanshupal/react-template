import { Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../Store/actions"

import { useQuery, gql } from "@apollo/client"
import Loading from "../components/Loading"
import Error from "../components/Error"

const USERS = gql`
	query Users {
		user {
			ID
			name
		}
	}
`

const About = () => {
	const { called, loading, data, error } = useQuery(USERS, { variables: {} })

	if (loading) <Loading />
	if (error) <Error error={error} />

	const count = useSelector((state) => state.counter)
	const dispatch = useDispatch()

	return (
		<Fragment>
			<h1>{count}</h1>
			<button className="w-10 bg-gray-300 rounded-md px-2 mx-4" type="button" onClick={() => dispatch(increment(1))}>
				+
			</button>
			<button className="w-10 bg-gray-300 rounded-md px-2 mx-4" type="button" onClick={() => dispatch(decrement(1))}>
				-
			</button>

			<hr />

			{!called && <div className="text-black font-extrabold">Fetching users</div>}

			{data?.users?.map((x, idx) => (
				<div className="user__container" key={idx}>
					{x.ID} : {x.name}
				</div>
			))}
		</Fragment>
	)
}

export default About
