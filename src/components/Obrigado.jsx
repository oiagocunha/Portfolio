import React from 'react';

const Obrigado = () => {
  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="obrigado-page" style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'var(--background-color)',
      color: 'var(--text-color)'
    }}>
      <div className="interface">
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <div className="agradecimento">
            <h1 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '1rem',
              color: 'var(--text-color)'
            }}>
              Você entrou em contato comigo! <span style={{ color: 'var(--primary-color)' }}>Obrigado!</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.2rem', 
              marginBottom: '1rem',
              lineHeight: '1.6'
            }}>
              Em breve entrarei em contato com você.
            </p>
            
            <p style={{ 
              fontSize: '1.1rem', 
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Enquanto isso, que tal voltar para a página inicial?
            </p>
            
            <div className="btn-agradecimento">
              <button 
                onClick={goBack}
                style={{
                  padding: '15px 30px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0px 0px 15px var(--button-hover-shadow)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Obrigado;
