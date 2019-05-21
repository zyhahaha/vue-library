<template>
  <div class="footer">
    <home-menu :isShowMenu="isShowMenu" @changeMenuStateClose="isShowMenu = false"/>
    <ul @click="showMenu">
      <li>
        <img src="./images/note-pre.png" alt>
        <br>
        <p>笔记</p>
      </li>
      <li>
        <img src="./images/note-pre.png" alt>
        <br>
        <p>菜单</p>
      </li>
    </ul>
  </div>
</template>

<script>
import homeMenu from "./menu.vue";
export default {
  name: "homeFooter",
  components: {
    homeMenu
  },
  data: () => {
    return {
      isShowMenu: false
    };
  },
  methods: {
    showMenu() {
      this.isShowMenu = true;
    }
  }
};
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 0.6rem;
  width: 100%;
  background-color: #f5f5f5;
  box-shadow: 0 -2px 6px 0 rgba(0, 0, 0, 0.1);
}
.footer ul {
  display: flex;
}
.footer li {
  flex: 1;
  height: 100%;
  padding-top: 0.1rem;
  text-align: center;
}
.footer li img {
  width: 0.25rem;
  margin-bottom: -0.03rem;
}
.footer li p {
  display: inline-block;
  font-size: 0.12rem;
}
</style>

