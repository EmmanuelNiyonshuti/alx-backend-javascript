import getFullResponseFromAPI from "./1-promise";

// console.log(getFullResponseFromAPI(true));
// console.log(getFullResponseFromAPI(false));

getFullResponseFromAPI(false)
	.then((result) =>
	{
		console.log(result);
	})
	.catch((error) =>
	{
		console.log(error.message);
	})

/*async function handleAPI() {
	try {
		const res = await getFullResponseFromAPI(false);
		console.log("success:", res);
	}catch(err) {
		console.error("error:", err);
	}
}
handleAPI();
*/

