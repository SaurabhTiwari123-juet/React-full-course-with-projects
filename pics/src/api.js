/** @format */

import axios from "axios";

const searchImages = async () => {
	const response = await axios.get("https://api.unsplash.com/search/photos", {
		headers: {
			Authorization: "Client-ID Vz62h4gWK2pxOAarHk7Pf-fgQxkIKchbJ-w71NkLjPM",
		},
		params: {
			query: "cars",
		},
	});
	console.log(response);
	return response;
};

export default searchImages;
