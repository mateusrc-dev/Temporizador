import Sound from "./sounds.js"
//usando factory -> uma função que retorna um objeto 
export function Timer({minutesDisplay, secondsDisplay, resetControls}) { //colocando as dependâncias (esses parâmetros trazem dados que estão em outros arquivos que dados desse arquivo dependem, como variáveis) - colocando dependencias dentro de um objeto - desestruturando um objeto diretamente nos parâmetros
  let pauseTime //essas variáveis vieram pra cá porque elas não são usadas no index.js
  let minutes = Number(minutesDisplay.innerHTML) //quando apertar stop os valores retornarão aos mesmos que estão no html ou aos valores digitados no prompt
  let seconds = Number(secondsDisplay.innerHTML)
  
  function reset() { //função para resetar o tempo (o tempo retornará ou para o valor do html ou para o valor dos prompts) -  //observar que essa função não pega argumentos, minutes e seconds dentro dela vai considerar o escopo geral
  updateDisplay(minutes, seconds) //como não está sendo passado nenhum parametro, minutes e seconds está sendo pego do escopo geral
  clearTimeout(pauseTime)
}

function updateDisplay(minutes, seconds) { //esses minutes e seconds não é o mesmo minutes e seconds do escopo geral
  minutesDisplay.innerHTML = String(minutes).padStart(2, "0") /*no lugar do innerHTML podemos usar o textContent também*/
  secondsDisplay.innerHTML = String(seconds).padStart(2, "0")  //pad é para fazer um preenchimento de dados e start significa início - na função padStart colocamos dois argumentos, primeiro: quantos dados serão preenchidos, segundo: qual será o dado inicial
}

function countdown() { //colocando setTimeout em uma variável - vai ser colocado na variável um identificador numérico (função setTimeout retorna um number)
  pauseTime = setTimeout(function() { //nessa função coloca-se dois argumentos, uma função callback como primeiro argumento, e um tempo (em milissegundos) como segundo argumento - a a função callback será executada no tempo especificado 
    let seconds = Number(secondsDisplay.innerHTML) //perceber que está sendo criado variáveis novas, diferentes de minutes e seconds do escopo geral
    let minutes = Number(minutesDisplay.innerHTML)
    if (minutes <= 0 && seconds <= 0) { //se o minutes for igual a 0 não continua a execução da função para não subtrair
      resetControls() //resetando os controles, o parâmetro resetControls recebeu como valor controls.reset (função para resetar que está no arquivo controls.js)
      reset() //para os valores retornarem ao valor de minutes e seconds do escopo geral (valor do html ou do prompt)
      Sound().timeEnd() //Sounds é uma função que retorna objetos (factory) - por isso podemos colocar timeEnd, que é um objeto que está sendo retornado pela função
      return //quando a função encontra um retorno ela para de executar - vai parar de executar quando minutes e seconds for igual a 0
    }
  
    if (seconds <= 0) { //se os segundos estiverem igual ou menor que 0, os segundos será atualizado para 60
      seconds = 60
      minutes-- //se caso os seconds estiverem em 0 será subtraido 1 de minutes
    }
    updateDisplay(minutes, seconds - 1) //subtraindo 1 do valor de seconds a cada 1000 milissegundos - entender que esses minutes e seconds são referentes as variáveis criadas dentro desse escopo
    countdown() //fazendo a função rodar novamente para que os segundos sejam contados os segundoss - recurssão: uma função chamando ela mesma
  }, 1000)
}
function updateMinutes(newMinutes, newSeconds) {
    minutes = newMinutes; //aqui está sendo reatribuido um novo valor do prompt para as variáveis de escopo geral minutes e seconds
    seconds = newSeconds;
    updateDisplay(minutes, seconds);
}
function pause() {
  clearTimeout(pauseTime) //para pausar a função - pauseTime recebeu um identificador numerico que identifica a função, essa função será parada quando o botão Pause for apertado pela função clearTimeout
}
  return { countdown, reset, updateDisplay, updateMinutes, pause } //retornando um objeto - elas podem ser usadas como propriedades para onde forem importadas, como em index no countdown e reset - importante colocar o mesmo nome das funções
}
/*o retorno da função acima é como se fosse:
export { Timer }*/