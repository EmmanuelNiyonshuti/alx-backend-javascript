/**
 * handleProfileSignup - calls signUpUser and uploadPhoto
 * and returns an array wuth their results when all promises are settled.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The file name of the photo to upload.
 * @returns {Promise<Array<{status: string, value: any}>>} A promise that resolves to an array
 * of objects with the status and result of each promise.
 */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  return Promise.allSettled([promise1, promise2])
    .then((results) => results.map((result) => {
      if (result.status === 'fulfilled') {
        return { status: result.status, value: result.value };
      }
      return { status: result.status, value: result.reason };
    }));
}
