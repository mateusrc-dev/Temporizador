export function Controls({buttonPlay, buttonPause, buttonSet, buttonStop}) {
function play() {
  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
}
function pause() {
  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
}  
function reset() { //função para resetar os botões de controle
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
}

  return { reset, play, pause }
}
/*
// export default
export default resetControls*/