/** @format */
import SearchBar from "./components/SearchBar";

function App() {
	const handleSubmit = (term) => {
		console.log("do a serach ", term);
		// SearchImages(term);
	};
	return (
		<div>
			<SearchBar onSubmit={handleSubmit} />
		</div>
	);
}

export default App;
