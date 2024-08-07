// create a function that takes in a boolean param and returns a Promise

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'success' });
    } else {
      reject('The fake API is not working currently');
    }
  });
}

getFullResponseFromAPI(false)
.then((payload) => {
  console.log(payload);
})
.catch((error) => {
  console.error(error)
})
