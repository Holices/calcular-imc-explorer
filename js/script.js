import {Modal} from './modal.js'
import {AlertError} from  "./alert-error.js"
import {calculateIMC, notANumber} from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = function(event) {
  event.preventDefault() /*cancela o carregando padrão do button submit dentro formulário) */
  
  const weight = inputWeight.value
  const height = inputHeight.value
  const weightOrRightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrRightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}