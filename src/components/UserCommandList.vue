<template>
  <div class="home-content">
    <div class="commands-box">
      <ul class="commands-box-list" v-for="command in commands" :key="command.id">
        <li>
          <div class="command">
            <span>{{command.command_name}}</span>
            <i>
              <button type="button">
                <img src="../assets/trash-can.svg" alt="" />
              </button>
            </i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";
import { onMounted, ref } from "vue";
export default {
  name: "UserCommandList",
  setup() {
    const commands = ref([]);
    const fetchCommands = () => api.get("/commands").then(({ data }) => commands.value = data);
    onMounted(fetchCommands);
    return{
      commands
    }
  },
};
</script>

<style lang="scss" scoped>
.home-content {
  width: 48rem;
  padding-left: 4rem;
  .commands-box {
    margin: 4rem 0;
    height: 25.4rem;
    overflow-y: auto;
  }
  .commands-box ul {
    text-transform: uppercase;
  }
  .commands-box ul li {
    background: var(--green-color-1);
    margin-bottom: 2rem;
    height: 3.5rem;
    width: 40rem;
    border-radius: 0.5rem;
    .command {
      padding: 0 1.3rem 0 2.3rem;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      span {
        color: var(--text-links-color);
        font-weight: bold;
        font-size: 1.8rem;
      }
      button {
        background: none;
        cursor: pointer;
        display: flex;
      }
    }
  }
}
</style>
