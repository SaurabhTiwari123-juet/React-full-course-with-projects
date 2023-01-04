/** @format */
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchImages from "./api";
import ImageList from "./components/ImageList";
function App() {
	const [images, setImages] = useState([]);

	const handleSubmit = async (term) => {
		// console.log("do a serach ", term);
		const result = await SearchImages(term);
		// console.log(result);
		setImages(result);
	};
	return (
		<div>
			<SearchBar onSubmit={handleSubmit} />
			<ImageList images={images} />
		</div>
	);
}

export default App;
