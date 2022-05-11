<template>
  <div class="playlists">
    <div class="playlists-list">
      <h1 class="playlists-list-title">/CHICO</h1>
      <ul class="list-content">
        <li>
          <div class="list-card">
            <div class="list-card-title">
              <h2>SAOKO - ROSALÍA</h2>
              <button type="button">
                <i><img src="../assets/trash-can.svg" alt="Deletar Ícone" /></i>
              </button>
            </div>
            <div class="list-card-content">
              <div class="list-card-icon">
                <img src="../assets/content/card-icon.svg" alt="Ícone" />
              </div>
              <div class="list-card-info">
                <p>Duração: <span>02:17</span></p>
                <p>Adicionado por: <span>Chico de Loba</span></p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="list-card">
            <div class="list-card-title">
              <h2>SAOKO - ROSALÍA</h2>
              <button type="button">
                <i><img src="../assets/trash-can.svg" alt="Deletar Ícone" /></i>
              </button>
            </div>
            <div class="list-card-content">
              <div class="list-card-icon">
                <img src="../assets/content/card-icon.svg" alt="Ícone" />
              </div>
              <div class="list-card-info">
                <p>Duração: <span>02:17</span></p>
                <p>Adicionado por: <span>Chico de Loba</span></p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="list-card">
            <div class="list-card-title">
              <h2>SAOKO - ROSALÍA</h2>
              <button type="button">
                <i><img src="../assets/trash-can.svg" alt="Deletar Ícone" /></i>
              </button>
            </div>
            <div class="list-card-content">
              <div class="list-card-icon">
                <img src="../assets/content/card-icon.svg" alt="Ícone" />
              </div>
              <div class="list-card-info">
                <p>Duração: <span>02:17</span></p>
                <p>Adicionado por: <span>Chico de Loba</span></p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="list-card">
            <div class="list-card-title">
              <h2>SAOKO - ROSALÍA</h2>
              <button type="button">
                <i><img src="../assets/trash-can.svg" alt="Deletar Ícone" /></i>
              </button>
            </div>
            <div class="list-card-content">
              <div class="list-card-icon">
                <img src="../assets/content/card-icon.svg" alt="Ícone" />
              </div>
              <div class="list-card-info">
                <p>Duração: <span>02:17</span></p>
                <p>Adicionado por: <span>Chico de Loba</span></p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="list-card">
            <div class="list-card-title">
              <h2>SAOKO - ROSALÍA</h2>
              <button type="button">
                <i><img src="../assets/trash-can.svg" alt="Deletar Ícone" /></i>
              </button>
            </div>
            <div class="list-card-content">
              <div class="list-card-icon">
                <img src="../assets/content/card-icon.svg" alt="Ícone" />
              </div>
              <div class="list-card-info">
                <p>Duração: <span>02:17</span></p>
                <p>Adicionado por: <span>Chico de Loba</span></p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="list-card">
            <div class="list-card-title">
              <h2>SAOKO - ROSALÍA</h2>
              <button type="button">
                <i><img src="../assets/trash-can.svg" alt="Deletar Ícone" /></i>
              </button>
            </div>
            <div class="list-card-content">
              <div class="list-card-icon">
                <img src="../assets/content/card-icon.svg" alt="Ícone" />
              </div>
              <div class="list-card-info">
                <p>Duração: <span>02:17</span></p>
                <p>Adicionado por: <span>Chico de Loba</span></p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <button type="button" class="playlist-list-save-button">Salvar</button>
  </div>
</template>

<script>
export default {
  name: "Playlists",
};
</script>

<style lang="scss" scoped>
.playlists {
  .playlists-list {
    width: 45%;
    .playlists-list-title {
      margin: 3.5rem;
      text-align: center;
    }
    .list-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      li {
        margin: 1rem 0;
        .list-card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 25rem;
          height: 11rem;
          border-radius: 1rem;
          background: var(--blue--block-color);
          overflow: hidden;
          .list-card-title {
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: var(--white-color);
            width: 100%;
            height: 100%;
            button {
              display: flex;
              background: none;
              cursor: pointer;
            }
            h2 {
              color: var(--titles-color);
            }
          }
          .list-card-content {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 1rem 0;
            .list-card-info {
              p,
              span {
                color: #eae2e2;
                font-size: 1.2rem;
              }
              span {
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
  .playlist-list-save-button {
    background: var(--green-color-3);
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    color: var(--text-links-color);
    font-weight: bold;
    cursor: pointer;
    margin: 2rem 0;
  }
}
</style>
