import { Box } from "@mui/material"
import React, { useEffect } from "react"
import { canvas } from "./CanvasContainer"

function CanvasHeader({ objClicked }) {
	const objDetails = () => {
		if (canvas) {
			if (canvas.current) {
				if (canvas.current._activeObject) console.log("Selected object")
				else console.log("not selected object")
			} else console.log("Not canvas current")
		} else console.log("Not canvas")
		// if (canvas.getActiveObject()) {
		// 	const obj = canvas.current.getActiveObject()
		// 	console.log(obj.height)
		// 	return <>{obj.height}</>
		// }
	}

	useEffect(() => {
		objDetails()
	}, [])
	return (
		<>
			<Box sx={{ height: "3em", background: "#83c8e4" }}>{objDetails()}</Box>
		</>
	)
}

export default CanvasHeader
