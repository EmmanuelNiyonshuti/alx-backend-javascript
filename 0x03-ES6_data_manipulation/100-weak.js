/**
 * WeakMap to store the count of API calls for each endpoint.
 * @type {WeakMap<object, number>}
 */

export const weakMap = new WeakMap();

/**
 * Queries an API endpoint and tracks the number of calls.
 * Throws an error if the endpoint is called 5 or more times.
 *
 * @param {object} endpoint - The API endpoint object.
 * @throws {Error} Throws an error if the endpoint is called 5 or more times.
 */

export function queryAPI(endpoint) {
  /*
  if (!weakMap.get(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);
  }
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
  */
  let count = weakMap.get(endpoint) || 0;
  count += 1;
  weakMap.set(endpoint, count);
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
