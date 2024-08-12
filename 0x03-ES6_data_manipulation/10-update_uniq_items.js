/**
 * updateUniqueItems - returns an updated map
 *                  for all items with initial quantity at 1.
 * @param {Map} map
 * @return: an updated map.
 */

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }
  for (const i of map.keys()) {
    if (map.get(i) === 1) {
      map.set(i, 100);
    }
  }
  return map;
}
