import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Nome é obrigatório.';
    if (!formData.email) newErrors.email = 'E-mail é obrigatório.';
    if (formData.email !== formData.confirmEmail) newErrors.confirmEmail = 'Os e-mails não coincidem.';

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!formData.password) newErrors.password = 'Senha é obrigatória.';
    else if (!passwordRegex.test(formData.password)) newErrors.password = 'A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número.';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('');
    if (validateForm()) {
      setSuccessMessage('Cadastro realizado com sucesso!');
    }
  };

  return (
    <div className="container">
      <h1 data-testid="form-title">Cadastro</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name" data-testid="label-name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            data-testid="input-name"
          />
          {errors.name && <span className="error" data-testid="error-name">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email" data-testid="label-email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            data-testid="input-email"
          />
          {errors.email && <span className="error" data-testid="error-email">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmEmail" data-testid="label-confirm-email">Confirmação de E-mail</label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
            data-testid="input-confirm-email"
          />
          {errors.confirmEmail && <span className="error" data-testid="error-confirm-email">{errors.confirmEmail}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password" data-testid="label-password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            data-testid="input-password"
          />
          {errors.password && <span className="error" data-testid="error-password">{errors.password}</span>}
        </div>

        <button type="submit" data-testid="submit-button">Cadastrar</button>
        {successMessage && <p className="success" data-testid="success-message">{successMessage}</p>}
      </form>
    </div>
  );
}

export default App;
