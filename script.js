const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal button.close')

const modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  btnClose: document.querySelector('.modal button.close'),

  open() {
    modalWrapper.classList.add('open')
  },
  close() {
  modalWrapper.classList.remove('open')
  }
}

form.onsubmit = function(event) {
  event.preventDefault() /*cancela o carregando padrão do button submit dentro formulário) */
  
  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  modalMessage.innerText = message
  modal.open()
}

modalBtnClose.onclick = () => {
  modal.close()
}

function IMC(weight, height) {
  return (weight / ((height /100) **2)).toFixed(2)
}