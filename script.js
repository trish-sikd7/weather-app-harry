const url = 'https://forecast9.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f781426faamsh0ab56da1705c1e0p161b8djsn12294842fea6',
		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}