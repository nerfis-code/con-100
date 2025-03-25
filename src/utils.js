export function generateIdNumber() {
  return Math.floor(Math.random() * 1000000000).toString(16)
}