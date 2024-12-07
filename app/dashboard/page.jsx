"use client";

export default function Dashboard() {
  return (
    /*<div className="dashboard-container">
      <aside className="sidebar">
        <h2>Minha Rede Social</h2>
        <nav>
          <ul>
            <li><a href="#">Feed</a></li>
            <li><a href="#">Mensagens</a></li>
            <li><a href="#">Notificações</a></li>
            <li><a href="#">Perfil</a></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <h1>Bem-vindo ao GoMove!</h1>
        </header>
        <section className="content">
          <p>Aqui é o início da maior comunidade de esportes do mundo!</p>
        </section>
      </main>
    </div>*/
    <div className="container">
      {/* Cabeçalho */}
      <header className="navbar">
        <div className="logo">GoMove</div>
        <input type="text" className="search-bar" placeholder="Pesquisar" />
        <div className="menu">
          <a href="#">Inicio</a>
          <a href="#">Perfil</a>
          <a href="#">Publicações</a>
          <a href="#">Mensagens</a>
          <a href="#">Notificações</a>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="main-content">
        {/* Barra Lateral Esquerda */}
        <aside className="sidebar-left">
          <div className="profile-card">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile Picture"
              className="profile-pic"
            />
            <h3>Nome do Usuario</h3>
            <p>Descrição</p>
            <div className="stats">
              <p>
                73 <span>Visualizações</span>
              </p>
              <p>
                35 <span>postagens</span>
              </p>
            </div>
          </div>
        </aside>

        {/* Feed */}
        <section className="feed">
          <div className="post">
            <h4>Nome do Grupo/comunidade</h4>
            <p>"Tema"</p>
            <p>
              Os esportes são atividades físicas e competitivas que promovem
              saúde, bem-estar e interação social. Eles podem ser praticados
              individualmente, como o tênis e o atletismo, ou em equipe, como o
              futebol e o basquete. Além de melhorar a condição física, os
              esportes desenvolvem habilidades como disciplina, trabalho em
              equipe e resiliência. São também uma forma de entretenimento,
              unindo pessoas ao redor do mundo por meio de competições locais,
              nacionais e internacionais. Praticar esportes contribui para uma
              vida mais ativa e equilibrada.
            </p>
            <div className="post-actions">
              <button className="color">
                Gostei (<span className="like-count">0</span>)
              </button>
              <button className="color">
                Comentar (<span className="comment-count">0</span>)
              </button>
              <button className="color">
                Compartilhar (<span className="share-count">0</span>)
              </button>
            </div>
          </div>
        </section>

        {/* Barra Lateral Direita */}
        <aside className="sidebar-right">
          <div className="news">
            <h4>Perfis e Comunidades</h4>
            <ul>
              <li>
                <a href="#">Seguindo perfis</a>
              </li>
              <br />
              <li>
                <a href="#">Seguindo grupos</a>
              </li>
              <br />
              <li>
                <a href="#">Outros Perfis de interesse</a>
              </li>
              <br />
              <li>
                <a href="#">Outras comunidades/grupos</a>
              </li>
              <br />
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}

  