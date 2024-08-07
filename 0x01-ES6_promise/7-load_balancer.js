/*
 * Write and export a function named loadBalancer.
 * It should accept two arguments: chinaDownload (Promise) and USDownload (Promise).
 * The function should return the value from the promise that resolves first.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([
    chinaDownload,
    USDownload,
  ]);
}
