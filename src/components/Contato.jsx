import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('telefone', formData.telefone);
      formDataToSend.append('mensagem', formData.mensagem);
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_next', window.location.origin + '/obrigado');
      formDataToSend.append('_subject', 'Novo contato do portfólio');

      const response = await fetch('https://formsubmit.co/0abf524fd7a7652976c723ab11ef2cce', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          telefone: '',
          mensagem: ''
        });
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="formulario" id="contato">
      <div className="interface">
        <h2 className="titulo">ENTRE EM <span>CONTATO.</span></h2>

        <form onSubmit={handleSubmit} aria-label="Formulário de contato">
          <label htmlFor="nome" className="sr-only">Nome completo</label>
          <input
            type="text"
            id="nome"
            name="name"
            placeholder="Nome completo"
            value={formData.name}
            onChange={handleInputChange}
            required
            aria-required="true"
            autoComplete="name"
          />

          <label htmlFor="email" className="sr-only">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-required="true"
            autoComplete="email"
          />

          <label htmlFor="telefone" className="sr-only">Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="Telefone (opcional)"
            value={formData.telefone}
            onChange={handleInputChange}
            autoComplete="tel"
          />

          <label htmlFor="mensagem" className="sr-only">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            placeholder="Sua mensagem"
            value={formData.mensagem}
            onChange={handleInputChange}
            required
            aria-required="true"
            rows="5"
          />

          <div className="btn-enviar">
            <button
              type="submit"
              disabled={isSubmitting}
              aria-label="Enviar formulário de contato"
            >
              {isSubmitting ? (
                <>
                  <div className="spinner"></div>
                  ENVIANDO...
                </>
              ) : (
                <>
                  <Send size={18} />
                  ENVIAR MENSAGEM
                </>
              )}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="form-status success">
              <CheckCircle size={20} />
              <span>Mensagem enviada com sucesso! Retornarei em breve.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form-status error">
              <AlertCircle size={20} />
              <span>Erro ao enviar mensagem. Tente novamente.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contato;
