import React, { useState } from 'react'
import './styles.css';

import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowDownLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] =  useState("");

  const ongId = localStorage.getItem('ongId');
  const history = useHistory();
  async function handleNewIncident(e) {
    e.preventDefault();
    const data ={
      title,
      description,
      value,
    }

    try {
      api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })
      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar novo caso, tente novamente.')

    }
  }
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

        <form onSubmit={handleNewIncident}>
          <input type="text" 
            placeholder="Título do caso" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição" 
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input type="text" 
            placeholder="Valor em reais" 
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}