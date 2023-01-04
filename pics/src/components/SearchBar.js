/** @format */
import { useState } from "react";

function SearchBar({ onSubmit }) {
	const [term, setTerm] = useState("");

	const handleformsubmit = (event) => {
		event.preventDefault();

		onSubmit(term);
	};

	const handleChange = (event) => {
		setTerm(event.target.value);
	};
	return (
		<div>
			<form onClick={handleformsubmit}>
				<input value={term} onChange={handleChange} />
			</form>

			{/* <button onClick={handleformsubmit}>Click me</button> */}
		</div>
	);
}

export default SearchBar;
//new app
