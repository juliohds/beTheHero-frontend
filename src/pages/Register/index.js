import React, { useState } from 'react'
import './styles.css';

import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowDownLeft } from 'react-icons/fi';

import api from '../../services/api';

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");
  const history = useHistory();
  async function handleRegister(e){ 
    e.preventDefault();
    const data = {
      uf,
      email,
      city,
      name,
      whatsapp,
    };
    try {
      const response = api.post('/ongs', data);
      alert(`Seu ID de acesso: ${(await response).data.id}`);
      history.push('/')
    } catch (error) {
      alert(`Erro ao criar seu cadastro`)
    }
  }

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

        <form onSubmit={handleRegister}>
          <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Nome da ONG" />
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail" />
          <input value={whatsapp} onChange={e => setWhatsapp(e.target.value)} type="text" placeholder="WhatsApp" />
          <div className="input-group">
            <input value={city} onChange={e => setCity(e.target.value)} type="text" placeholder="Cidade" />
            <input value={uf} onChange={e => setUf(e.target.value)} type="text" placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
