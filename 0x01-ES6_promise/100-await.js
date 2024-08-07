/*
*asyncUploadUser - calls two functions.
*return an object with value returned by the two called functions
*/
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  return {
    photo,
    user,
  };
}
