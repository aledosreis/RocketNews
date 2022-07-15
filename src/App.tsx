import rocketNewsLogo from './assets/rocketnews-logo.svg'
import sendIcon from './assets/send-icon.svg'
import arrowRight from './assets/arrow-right.svg'
import readNews from './assets/image.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="form-panel">
        <img className="logo" src={rocketNewsLogo} alt="RocketNews logo" />
        <div className="info">
          <h1>atualize ideias e informações em 5 minutos.</h1>
          <strong>
            tudo que você precisa saber para começar seu dia bem e informado
          </strong>
          <p>
            noticias sobre o universo Rocketseat, e tudo o que precisa para
            começar o dia melhor. perfeito para se preparar para codar ☕
          </p>
        </div>
        <div className="form">
          <p>Insira seu e-mail:</p>
          <div className="input">
            <div id="input-start" />
            <input type="email" id="email" placeholder="email@dominio.com" />
            <button type="submit">
              <img src={sendIcon} alt="Enviar" />
            </button>
          </div>
        </div>
        <a href="##" id="read-first">
          deixe-me ler primeiro{' '}
          <img src={arrowRight} alt="Seta para a direita" />
        </a>
      </div>
      <div className="image-panel">
        <img src={readNews} alt="homem lendo noticias no computador" />
      </div>
    </div>
  )
}

export default App
