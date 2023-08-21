import * as React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/MainPage/Home"
import Design from "./components/Canvas/Design"
import PageNotFound from "./components/PageNotFound"
import Login from "./components/authentication/Login"
import Signup from "./components/authentication/Signup"
import { useDispatch, useSelector } from "react-redux"



function App() {
	const user = localStorage.getItem("token")

	return (
		<Routes>
			<Route exact path="/">
				{user && <Route path="/" exact element={<Home />} />}
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route exact path="/Design" element={<Design />} />
				<Route path="/" element={<Navigate replace to="/login" />} />
				{/* <Route exact path="/following" element={<Following />} />
					<Route exact path="/answer" element={<Answer />} />
					<Route exact path="/events" element={<Events />} />
					<Route exact path="/topic/:id" element={<Topic />} /> */}
			</Route>
			{/* <Route exact path="/question" element={<AnswerPage />} />
				<Route exact path="/event/:id" element={<EventPage />} />
				<Route exact path="/question/:id" element={<AnswerPage />} /> */}
			{/* <Route exact path="/login" element={<Login />} /> */}
			{/* <Route exact path="/signup" element={<Signup />} />
				<Route exact path="/profile" element={<Profile />} />
				<Route exact path="/profile/edit" element={<ProfileEdit />} /> */}
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	)
}
export default App
