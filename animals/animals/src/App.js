/** @format */

function App() {
	const handleclick = () => {
		console.log("button was clicked");
	};
	return (
		<div>
			<button onClick={handleclick}>Add Animal</button>
		</div>
	);
}

export default App;
