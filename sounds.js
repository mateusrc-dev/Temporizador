export default function() { //observar que é um export default, ou seja, pode ser colocado qualquer nome no arquivo que for importado
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")//new cria um novo objeto com a função construtora (Audio())
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

  bgAudio.loop = true;   //para fazer a música ficar tocando sem parar, ou seja, vai ficar repetindo sempre quando acabar

  function pressButton() {
    buttonPressAudio.play(); //como um buttonPressAudio é um objeto, ele tem várias funcionalidades de um áudio, como play, pause
  }

  function timeEnd() {
    kitchenTimer.play();
  }
  
  return { pressButton, timeEnd, bgAudio }
}