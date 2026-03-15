import './Lendas.css';

export const Lendas = () => {
  // Lista com os dados exatos do seu Figma
  const jogadores = [
    {
      id: '01',
      nome: 'TOSTÃO',
      gols: '242',
      anos: '1963 — 1972',
      desc: 'Eduardo Gonçalves de Andrade, o Tostão, é o maior artilheiro da história celeste. Gênio da bola, brilhou também na Seleção de 70. Sua inteligência e categoria marcaram uma era inesquecível.',
      img: '/assets/images/tostao_hd.jpeg'
    },
    {
      id: '02',
      nome: 'DIRCEU LOPES',
      gols: '228',
      anos: '1963 — 1977',
      desc: 'O Príncipe, camisa 10 clássico, fez história ao lado de Tostão. Fundamental no histórico título da Taça Brasil de 1966 sobre o Santos de Pelé, redefinindo o futebol de Minas no cenário nacional.',
      img: '/assets/images/dirceu_hd.jpeg'
    },
    {
      id: '03',
      nome: 'NIGINHO',
      gols: '207',
      anos: '1939 — 1947',
      desc: 'Ídolo da época do Palestra Itália, Niginho foi um goleador nato e tricampeão mineiro na década de 1940. Sua presença de área era implacável.',
      img: '/assets/images/niginho2.jpg'
    },
    {
      id: '04',
      nome: 'BENGALA',
      gols: '171',
      anos: '1925 — 1939',
      desc: 'Outro gigante do início do clube, Bengala deixou sua marca profunda na construção da grandeza cruzeirense nos gramados, sendo fundamental nas primeiras glórias.',
      img: '/assets/images/bengala.jpg'
    },
    {
      id: '05',
      nome: 'MARCELO RAMOS',
      gols: '162',
      anos: '1995 — 2003',
      desc: 'O Flecha Azul, herói das Copas do Brasil (1996 e 2003) e da Libertadores de 1997. Seu faro de gol decidiu campeonatos em finais épicas. Frio, preciso e mortal na pequena área.',
      img: '/assets/images/marceloramos.jpeg'
    }
  ];

  return (
    <section id="lendas" className="lendas-section">
      <div className="lendas-header">
        <span className="section-subtitle">02. GALERIA DE LENDAS</span>
        <h2 className="section-title">HERÓIS CELESTES</h2>
      </div>

      <div className="lendas-list">
        {jogadores.map((lenda) => (
          <div className="lenda-card" key={lenda.id}>
            
            {/* Número gigante que fica atrás de tudo */}
            <div className="lenda-bg-number">#{lenda.id}</div>
            
            <div className="lenda-image-wrapper">
              {/* Note que as imagens precisam ser salvas na pasta public/assets/images/ com esses nomes exatos */}
              <img src={lenda.img} alt={`Foto de ${lenda.nome}`} className="lenda-image" />
            </div>

            <div className="lenda-info">
              <span className="lenda-gols">GOLS TOTAIS: {lenda.gols}</span>
              <h3 className="lenda-nome">{lenda.nome}</h3>
              <span className="lenda-anos">{lenda.anos}</span>
              <p className="lenda-desc">{lenda.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};