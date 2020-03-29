import React from 'react'
import './styles.css';

import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowDownLeft } from 'react-icons/fi';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="To be the hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os csos da sua ONG.</p>

          <Link className="back-link" to="/profile">
            <FiArrowDownLeft size={16} color="#e02041" />
            Voltar para home
            </Link>
        </section>

        <form>
          <input type="text" placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input type="text" placeholder="Valor em reais" />
          <button className="button" type="button">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}