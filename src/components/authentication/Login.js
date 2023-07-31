import * as React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { Navigate, useNavigate } from "react-router-dom"
import { Typography } from "@mui/material"

export default function Login() {
	const navigate = useNavigate()
	return (
		<>
			<Box sx={{ background: "#aeaeae", height: "100vh" }}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						fontSize: "2rem",
						background: "#2563eb",
						padding: "0.5rem",
					}}
				>
					Login First!🔶
				</Box>
				<Box sx={{ padding: "2rem" }}>
					<Box>
						<TextField
							id="outlined-password-input"
							label="Email"
							type="email"
							autoComplete="current-email"
						/>
						<TextField
							id="outlined-password-input"
							label="Password"
							type="password"
							autoComplete="current-password"
						/>
					</Box>
					<Button variant="outlined" onClick={() => navigate("/")}>
						Submit
					</Button>
					<Button variant="outlined" onClick={() => navigate("/")}>
						Skip
					</Button>
					<Typography
						onClick={() => navigate("/signup")}
						sx={{ cursor: "pointer" }}
					>
						Don't have any account! Create Now!
					</Typography>
				</Box>
			</Box>
		</>
	)
}
