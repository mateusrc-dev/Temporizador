//default export - podem ser criados nomes diferentes na exportação
/*import resetControls from "./controls.js"*/
//named export - os nomes exportados tem que ser exatos
import { Timer } from "./timer.js" //exportando a função timer que é uma função que retorna um objeto
import { Controls } from "./controls.js"
import { buttonPlay, buttonPause, buttonSet, buttonStop, minutesDisplay, secondsDisplay } from './elements.js'
import Sound from "./sounds.js"//aqui é um export default - pode colocar qualquer nome
import Events from "./events.js"//aqui é um export default - pode colocar qualquer nome

const sound = Sound() //usando factory - função que retorna objetos //não tem dependencias
const controls = Controls({buttonPlay, buttonPause, buttonSet, buttonStop}) //usando factory
const timer = Timer({minutesDisplay, secondsDisplay, resetControls: controls.reset/*aqui está sendo passado como valor a função reset no argumento resetControls*/}) //fazendo injeção de dependencias (importante colocar os mesmos nomes das dependencias) e colocando a função com as lógicas dentro de uma variável que poderá ser usada como um objeto que tem propriedades (as nossas lógicas) //usando factory
Events({sound, timer, controls}) //não precisa colocar em uma constante porque não vamos usar as propriedades de events aqui


