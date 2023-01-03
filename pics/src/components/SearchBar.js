/** @format */

function SearchBar({ onSubmit }) {
	const handleformsubmit = (event) => {
		event.preventDefault();

		onSubmit("cars");
	};
	return (
		<div>
			<form onClick={handleformsubmit}>
				<input />
			</form>

			{/* <button onClick={handleformsubmit}>Click me</button> */}
		</div>
	);
}

export default SearchBar;
//new app
