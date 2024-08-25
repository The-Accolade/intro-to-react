export const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const apiOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f3c1c25413msh760f1b33d45c794p170da4jsnab5c2ac02eb6',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const weatherApiURL = "https://api.openweathermap.org/data/2.5/";
export const weatherApiKey = "cbaa1d6d49f36724839e97e30acf7b4a"

// try {
// 	const response = await fetch(url, apiOptions);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// } 
