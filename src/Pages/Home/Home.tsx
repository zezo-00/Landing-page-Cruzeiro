import './Home.css';
import { Trofeus } from '../../components/Trofeus/Trofeus';
import { Lendas } from '../../components/Lendas/Lendas';

export const Home = () => {
  return (
    <div className="page-wrapper">
      
      <div className="hero-bg-container">
        <header className="cruzeiro-header">
          <div className="brand">
            <h2>CRUZEIRO</h2>
            <span>ACERVO HISTÓRICO</span>
          </div>
          
          <nav className="header-nav">
            <a href="#trofeus">01. SALA DE TROFÉUS</a>
            <a href="#lendas">02. GALERIA DE LENDAS</a>
          </nav>
          
          <div className="header-year">
            EST. 1921
          </div>
        </header>

        <main className="hero-section">
          <div className="hero-content">
            <span className="expo-tag">EXPOSIÇÃO VIRTUAL</span>
            <h1 className="hero-title">
              A IMAGEM<br /><span className="gradient-highlight">RESPLANDECE</span>
            </h1>
            <p className="hero-description">
              Nascido Palestra Itália em 1921. Moldado pela paixão de milhões, o 
              Cruzeiro Esporte Clube construiu um legado monumental de vitórias 
              continentais, nacionais e estaduais. Uma jornada pela história do 
              Maior de Minas.
            </p>
          </div>
        </main>
      </div>

      {/* Trofeus feito como footer */}
      <Trofeus />

<div className="section-divider"></div>

            {/* Lendas feito como footer tambem */}

      <Lendas />

    </div>
  );
};