import React from 'react'
import './styles.css';

import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowDownLeft } from 'react-icons/fi';

export default function register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="To be the hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os csos da sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowDownLeft size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="WhatsApp" />
          <div className="input-group">
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" style={{ width: 80 }} />
          </div>
        </form>
      </div>
    </div>
  )
}
