<template>
  <div class="home-content">
    <div class="commands-box">
      <ul class="commands-box-list">
        <li>
          <div class="command">
            <span>chico</span>
            <i>
              <button type="button">
                <img src="../assets/trash-can.svg" alt="" />
              </button>
            </i>
          </div>
        </li>
        <li>
          <div class="command">
            <span>light feed</span>
            <i>
              <button type="button">
                <img src="../assets/trash-can.svg" alt="" />
              </button>
            </i>
          </div>
        </li>
        <li>
          <div class="command">
            <span>helena</span>
            <i>
              <button type="button">
                <img src="../assets/trash-can.svg" alt="" />
              </button>
            </i>
          </div>
        </li>
        <li>
          <div class="command">
            <span>rock pesado</span>
            <i>
              <button type="button">
                <img src="../assets/trash-can.svg" alt="" />
              </button>
            </i>
          </div>
        </li>
        <li>
          <div class="command">
            <span>kpop</span>
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
export default {
  name: "UserCommandList",
};
</script>

<style scoped>
.home-content {
  width: 48rem;
  padding-left: 4rem;
}
.home-content .commands-box {
  margin: 4rem 0;
  height: 25.4rem;
  overflow-y: auto;
}
.home-content .commands-box ul {
  text-transform: uppercase;
}
.home-content .commands-box ul li {
  background: var(--green-color-1);
  margin-bottom: 2rem;
  height: 3.5rem;
  width: 40rem;
  border-radius: 0.5rem;
}
.home-content .commands-box ul li .command {
  padding: 0 1.3rem 0 2.3rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.home-content .commands-box ul li .command span {
  color: var(--text-links-color);
  font-weight: bold;
  font-size: 1.8rem;
}
.home-content .commands-box ul li .command button {
  background: none;
  cursor: pointer;
  display: flex;
}
</style>
