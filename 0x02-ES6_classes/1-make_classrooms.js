/**
 * initializeRooms - creates three ClassRoom objects.
 *
 * @return: an array of three ClassRoom objects.
*/

import ClassRoom from './0-classroom';

export default function initializeRooms() {
//   return new Array(new ClassRoom(19),
  // new ClassRoom(20),
  // new ClassRoom(34));
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);
  const newArray = [room1, room2, room3];
  return newArray;
}
