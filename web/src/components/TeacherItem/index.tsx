import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/53359269?s=460&u=55ca830ff0de06136784f41d315a034a21074070&v=4" alt="Bivar" />
        <div>
          <strong>Bivar</strong>
          <span>Física</span>

          <p>
            Entusiasta das melhores tecnologias de Física Quantica.
            <br /><br />
            Apaixonado por Analisar as coisas as vibrações do universo.
          </p>
        </div>
      </header>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article >
  )
}

export default TeacherItem