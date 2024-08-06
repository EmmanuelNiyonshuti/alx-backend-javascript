import { error } from "console";
import getFullResponseFromAPI from "./1-promise";


getFullResponseFromAPI(false)
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})
// console.log(getFullResponseFromAPI(true));
// console.log(getFullResponseFromAPI(false));
