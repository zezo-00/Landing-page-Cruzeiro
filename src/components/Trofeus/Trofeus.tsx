import './Trofeus.css';

export const Trofeus = () => {
  // Lista de conquistas baseada no seu design do Figma
  const conquistas = [
    {
      id: '01',
      qtd: '2',
      nome: 'COPA\nLIBERTADORES',
      anos: '1976 — 1997',
      desc: 'Bicampeão da América, cravando o escudo do Cruzeiro no topo do continente e garantindo sua eternidade nas glórias sul-americanas.'
    },
    {
      id: '02',
      qtd: '4',
      nome: 'CAMPEONATO\nBRASILEIRO',
      anos: '1966 — 2003 — 2013 — 2014',
      desc: 'Tetracampeão nacional. A Taça Brasil de 66 contra o Santos de Pelé, e o tricampeonato do Brasileirão, destacando a Tríplice Coroa de 2003.'
    },
    {
      id: '03',
      qtd: '6',
      nome: 'COPA\nDO BRASIL',
      anos: '1993 — 1996 — 2000 — 2003 — 2017 — 2018',
      desc: 'O Rei de Copas. O maior campeão da história do torneio mais democrático do país, com finais épicas e reviravoltas inesquecíveis.'
    }
  ];

  return (
    <section id="trofeus" className="trofeus-section">
      <div className="section-header">
        <span className="section-subtitle">01. SALA DE TROFÉUS</span>
        <h2 className="section-title">GLÓRIAS <span className="gradient-trofeus">ETERNAS</span>
        </h2>
      </div>

      <div className="trofeus-list">
        {conquistas.map((item) => (
          <div className="trofeu-item" key={item.id}>
            <div className="trofeu-number">{item.id}</div>
            
            {/* Conteúdo da direita (Nome, quantidade, anos e texto) */}
            <div className="trofeu-content">
              
              <div className="trofeu-header">
                <span className="trofeu-qtd">{item.qtd}</span>
                <h3 className="trofeu-name">{item.nome}</h3>
              </div>

              <div className="trofeu-info">
                <span className="trofeu-years">{item.anos}</span>
                <p className="trofeu-desc">{item.desc}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};