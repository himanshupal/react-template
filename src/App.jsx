import { lazy, Suspense, useState } from "react"
import { Route, BrowserRouter, Switch } from "react-router-dom"

import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

import { createStore } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"

import ErrorBoundary from "./components/Catch"

import Sidebar from "./components/Nav/Sidebar"
import Navbar from "./components/Nav/Navbar"

const Home = lazy(async () => await import("./pages/Home"))
const About = lazy(async () => await import("./pages/About"))

import Loading from "./components/Loading"
import NotFound from "./pages/NotFound"

import Param from "./pages/Param"

import rootReducer from "./Store/CombinedReducer"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

const enhancers = composeWithDevTools({ trace: true })
const store = createStore(rootReducer, enhancers())

const client = new ApolloClient({ uri: process.env.SNOWPACK_PUBLIC_SERVER_URI, cache: new InMemoryCache() })

library.add(fas, far)

const App = () => {
	const [visible, setVisible] = useState(false)

	return (
		<ErrorBoundary>
			<Provider store={store}>
				<ApolloProvider client={client}>
					<BrowserRouter>
						<Sidebar setVisible={setVisible} visible={visible} />
						<Navbar setVisible={setVisible} />
						<Suspense fallback={<Loading />}>
							<main className="mt-12" onClick={() => setVisible(false)}>
								<Switch>
									<Route exact path="/" component={Home} />
									<Route exact path="/about" component={About} />
									<Route exact path="/param/:id?" component={Param} />
									<Route component={NotFound} />
								</Switch>
							</main>
						</Suspense>
					</BrowserRouter>
				</ApolloProvider>
			</Provider>
		</ErrorBoundary>
	)
}

export default App
