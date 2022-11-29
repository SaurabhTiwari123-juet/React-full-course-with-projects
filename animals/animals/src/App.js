/** @format */
// array destructing
//function makearray()
//return [1, 2, 34, 4];
// const [firstelement,secondelement] =makearray();
import { useState } from "react";
import AnimalShow from "./AnimalShow";
function getrandomanimal() {
	const animals = ["bird", "cat", "cow", "dog", "alligator", "horse"];
	return animals[Math.floor(Math.random() * animals.length)];
}
function App() {
	// const [count, setCount] = useState(0);
	const [animals, setAnimals] = useState([]);

	const handleclick = () => {
		setAnimals([...animals, getrandomanimal()]);

		// console.log("button was clicked");
		// const renderedAnimals =animals.map((animal,index) => {
		//   return <AnimalShow type ={animal} key={index}/>
		// };
	};
	return (
		<div>
			<button onClick={handleclick}>Add Animal</button>
		</div>
	);
}

export default App;
