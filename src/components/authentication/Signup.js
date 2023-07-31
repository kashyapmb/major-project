import * as React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { Navigate, useNavigate } from "react-router-dom"
import { Typography } from "@mui/material"
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';


function Signup() {
	const navigate = useNavigate()
	return (
		<>
			<Box sx={{ background: "#aeaeae", height: "100vh" }}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						fontSize: "2rem",
						background: "#02ac56",
						padding: "0.5rem",
					}}
				>
					Signup Page!🔶
				</Box>
				<Box sx={{ padding: "2rem" }}>
					<Box>
						<FormControl>
							<InputLabel htmlFor="component-outlined">Name</InputLabel>
							<OutlinedInput
								id="component-outlined"
								label="Name"
							/>
						</FormControl>
						<TextField
							id="outlined-password-input"
							label="Email"
							type="email"
						/>
						<TextField
							id="outlined-password-input"
							label="Password"
							type="password"
						/>
						<TextField
							id="outlined-password-input"
							label="Confirm Password"
							type="password"
						/>
					</Box>
					<Button variant="outlined" onClick={() => navigate("/")}>
						Submit
					</Button>
					<Button variant="outlined" onClick={() => navigate("/")}>
						Skip
					</Button>
					<Typography
						onClick={() => navigate("/login")}
						sx={{ cursor: "pointer" }}
					>
						If u have an account then login!
					</Typography>
				</Box>
			</Box>
		</>
	)
}

export default Signup
