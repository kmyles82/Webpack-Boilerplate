//Named export
// export const add = (a, b) => a + b
const add = (a, b) => a + b
// export const name = 'Kerry'
const name = 'Kerry'

//Default export
const square = (x) => x * x
// export default square;

//exporting Named and Default together
export {add, name, square as default}