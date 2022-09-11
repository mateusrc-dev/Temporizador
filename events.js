import { buttonPlay, buttonPause, buttonSet, buttonSoundOn, buttonSoundOff, buttonStop } from "./elements.js"
export default function({sound, timer, controls}) {
  buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown() //timer é um objeto que tem a toda a lógica de countdown 
    sound.pressButton() //buttonPress é uma função que usa a funcionalidade play no objeto que recebe o áudio (olhar arquivo sounds.js)
  }) 
  
  buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.pause()
    sound.pressButton()
  })
  
  buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.toggle('hide')
    buttonSoundOff.classList.toggle('hide')
    sound.bgAudio.pause() //bgAudio é um objeto que está sendo importado que tem funcionalidades como play, pause, pois é um objeto com áudio dentro
  })
  
  buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.toggle('hide')
    buttonSoundOff.classList.toggle('hide')
    sound.bgAudio.play() //bgAudio não é uma função, é um elemento que recebe um objeto (por causa de new), como é um elemento com um objeto dentro, tem funcionalidades como play
  })
  
  buttonSet.addEventListener('click', function() {
    let newMinutes = Number(prompt('Quantos minutos deseja?'))
    let newSeconds = Number(prompt('Quantos segundos deseja?'))
    if (newMinutes == 0 && newSeconds == 0) { //se apertar em cancelar duas vezes, o número será resetado
      timer.reset()
    } else {
    /*minutes = newMinutes*/ //observar que aqui está ocorrendo uma reatribuição de valores em minutes e seconds (com isso, quando for usado a função resetTimer() os valores serão resetados para esses valores)
    /*seconds = newSeconds*/
    timer.updateMinutes(newMinutes, newSeconds)} //atualizando segundos e minutos de acordo com os valores digitados no prompt usando a propriedade do objeto timer (lógica criada no arquivo timer)
  })
  
  buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset() 
    sound.pressButton()
  })
}