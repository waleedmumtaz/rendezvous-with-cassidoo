/* 

Issue #313 of rendezvous with cassidoo

Interview question of the week

You have a faulty keyboard. Whenever you type a vowel on it (a,e,i,o,u,y), it reverses the string that you have written, instead of typing the character. Typing other characters works as expected. Given a string, return what will be on the screen after typing with your faulty keyboard.

Example:

> faultyKeeb('string')
> 'rtsng'

> faultyKeeb('hello world!')
> 'w hllrld!'

*/

// Solution starts here

const faultyKeeb = (userInput) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  const userInputCharacters = userInput.split('')

  let nonReversedCharacters = []
  let reversedCharacters = []

  userInputCharacters.forEach((character) => {
    if (!vowels.includes(character)) {
      nonReversedCharacters.push(character)
    } else {
      reversedCharacters = nonReversedCharacters.reverse()
    }
  })

  console.log(reversedCharacters.join(''))
}

faultyKeeb('string')
faultyKeeb('hello world!')
