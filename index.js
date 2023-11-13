import { getQuestion } from './readline.js'

const [question, close] = getQuestion()

let input = await question('Please input a number')
console.log(`The number is: ${input}.`)

close()