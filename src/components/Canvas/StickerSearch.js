// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const StickerSearch = ({ onStickerClick }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [stickerResults, setStickerResults] = useState([]);

//   const apiKey = "_UwYEejio5XHUZmm9MYYpQ"; // Replace with your API key

//   const handleSearch = () => {
//     if (searchQuery) {
//       console.log("Calling API..."); // Log that the API is being called
//       axios
//         .get(https://api.stickerapi.io/v2/stickers/search?q=${searchQuery}, {
//           headers: {
//             "Content-Type": "application/json",
//             "x-api-key": apiKey,
//           },
//         })
//         .then((response) => {
//           console.log("API response:", response.data); // Log the API response
//           setStickerResults(response.data.stickers || []);
//         })
//         .catch((error) => {
//           console.error("Error fetching stickers:", error);
//         });
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for stickers"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <div>
//         {stickerResults.map((sticker) => (
//           <img
//             key={sticker.id}
//             src={sticker.url}
//             alt={sticker.name}
//             onClick={() => onStickerClick(sticker.url)}
//             style={{ cursor: "pointer" }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StickerSearch;

import React, { useState, useEffect } from "react"
import axios from "axios"

const StickerSearch = ({ onStickerClick }) => {
	const [searchQuery, setSearchQuery] = useState("")
	const [stickerResults, setStickerResults] = useState([])

	const apiKey = "dyIk8mNt2VTRbKKLpqfoAA" // Replace with your API key

	const handleSearch = () => {
		if (searchQuery) {
			console.log("Calling API...")
			axios
				.get(`https://api.stickerapi.io/v2/stickers/search?q=${searchQuery}`, {
					headers: {
						"Content-Type": "application/json",
						"x-api-key": apiKey,
					},
				})
				.then((response) => {
					console.log("API response:", response.data)
					setStickerResults(response.data.data || [])
				})
				.catch((error) => {
					console.error("Error fetching stickers:", error)
				})
		}
	}

	return (
		<div>
			<input
				type="text"
				placeholder="Search for stickers"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<button onClick={handleSearch}>Search</button>
			<div>
				{stickerResults.map((sticker) => (
					<img
						key={sticker.id}
						src={sticker.url || "https://example.com/placeholder.png"} // Use a placeholder image URL
						alt={sticker.name}
						onClick={() => onStickerClick(sticker.url)}
						style={{ cursor: "pointer" }}
					/>
				))}
			</div>
		</div>
	)
}

export default StickerSearch
