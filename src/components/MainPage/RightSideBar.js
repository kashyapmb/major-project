import React from "react"
import { Box } from "@mui/material"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import Projects from "./Projects"
import Templates from "./Templates"
import TrendingFeed from "./TrendingFeed"
import Trash from "./Trash"
import SavedPost from "./SavedPost"
import HomeSelection from "./HomeSelection"



function RightSideBar({ selectNum }) {
	return (
		<>
			{selectNum === 0 && <HomeSelection />}
			{selectNum === 1 && <Projects />}
			{selectNum === 2 && <Templates />}
			{selectNum === 3 && <TrendingFeed />}
			{selectNum === 4 && <SavedPost />}
			{selectNum === 5 && <Trash />}
		</>
	)
}

export default RightSideBar
