import {
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from "@mui/material"
import Grid from "@mui/material/Grid"

import { BsFiles } from "react-icons/bs"
import { BsLightningCharge } from "react-icons/bs"
import { BsTrash3 } from "react-icons/bs"
import { RiProfileLine } from "react-icons/ri"

import React, { useState } from "react"
import LeftSideBar from "./LeftSideBar"
import RightSideBar from "./RightSideBar"

function Home() {
	const [selectNum, setSelectNum] = useState(0)
	function increment(newNumber) {
		console.log(newNumber)
		setSelectNum(newNumber)
	}
	React.useEffect(() => {}, [selectNum])
	return (
		<>
			<Grid container component="div" sx={{ height: "100%" }}>
				<Grid item xs={2.5}>
					<Box>
						<LeftSideBar selectNum={selectNum} increment={increment} />
					</Box>
				</Grid>
				<Grid item xs={9.5}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							background: "#00457e",
							paddingRight:'0.8rem',
							paddingY: "0.7rem",
						}}
					>
						<Box>Kashyap</Box>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Typography
								component={"img"}
								src="/images/crystal.jpg"
								href="/"
								width={"2rem"}
								sx={{
									border: "0.15rem solid white",
									cursor: "pointer",
									marginRight: "0.7rem",
									textAlign: "center",
									display: "flex",
									alignItems: "center",
									userSelect: "none",
									borderRadius: "50%",
								}}
							/>
						</Box>
					</Box>
					<RightSideBar selectNum={selectNum} />
				</Grid>
			</Grid>

			{/* <Box
				sx={{
					display: "flex",
					alignItems: "center",
					paddingY: "0.25rem",
					paddingX: "1.4rem",
					borderRadius: "1.3rem 0rem 0rem 1.3rem",
					color: "white",
					":hover": {
						background: "#fff",
						transition: "0.3s",
						cursor: "pointer",
						color: "black",
					},
				}}
			>
				<BsTrash3 />
				<Typography
					component="div"
					sx={{ margin: "0.5rem", letterSpacing: "0.05rem" }}
				>
					Trash
				</Typography>
			</Box> */}
		</>
	)
}

export default Home
