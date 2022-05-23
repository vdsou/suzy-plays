<template>
  <div class="playlists">
    <div class="playlists-list">
      <h1 class="playlists-list-title">/{{ playlist }}</h1>
      <ul class="list-content">
        <li v-for="item in playlists[playlist]" :key="item.id">
          <div class="list-card">
            <div class="list-card-title">
              <h2 :class="item.title.length > 26 ? 'slide-to-left' : ''">
                {{ item.title }}
              </h2>
              <button type="button">
                <i><img src="../assets/trash-can.svg" alt="Deletar Ícone" /></i>
              </button>
            </div>
            <div class="list-card-content">
              <div class="list-card-icon">
                <img :src="item.image_url" alt="Ícone" />
              </div>
              <div class="list-card-info">
                <p>
                  Duração: <span>{{ item.duration }}</span>
                </p>
                <p>
                  Adicionado por: <span>{{ item.created_by }}</span>
                </p>
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
import api from "@/services/api";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "Playlists",
  setup() {
    const route = useRoute();
    const playlists = ref([]);
    const fecthPlaylists = () =>
      api.get("/playlists").then(({ data }) => (playlists.value = data));
    onMounted(fecthPlaylists);
    const playlist = route.params.command_name;
    return {
      playlists,
      playlist,
    };
  },
};
</script>

<style lang="scss" scoped>
@keyframes left-to-right {
  0% {
    justify-content: left;
  }
  50% {
    justify-content: center;
  }
  100% {
    justify-content: right;
  }
}
.playlists {
  .playlists-list {
    width: 45%;
    .playlists-list-title {
      margin: 3.5rem;
      text-align: center;
      text-transform: uppercase;
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
          box-shadow: 5px 5px 13px -8px #0a3d62;
          &:hover {
            box-shadow: 5px 5px 13px -8px #3c6382;
            transform: scale(1.03);
          }
          .list-card-title {
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: var(--white-color);
            width: 100%;
            height: 100%;
            & .slide-to-left {
              justify-content: left;
              align-items: center;
              text-overflow: clip;
              width: 80%;
              height: 100%;
              white-space: nowrap;
              overflow-x: clip;
              &:hover {
                animation-name: left-to-right;
                animation-duration: 1s;
              }
            }
            button {
              display: flex;
              background: none;
              cursor: pointer;
              &:hover {
                transform: scale(1.1);
              }
            }
            h2 {
              display: flex;
              width: 80%;
              color: var(--titles-color);
            }
          }
          .list-card-content {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 1rem 0;
            .list-card-icon {
              img {
                width: 5rem;
                height: 5rem;
                border-radius: 50%;
                object-fit: cover;
              }
            }
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
    padding: 1.5rem;
    width: 10rem;
    border-radius: 0.5rem;
    color: var(--text-links-color);
    font-weight: bold;
    font-size: 1.4rem;
    margin: 2rem 0;
  }
}
</style>
