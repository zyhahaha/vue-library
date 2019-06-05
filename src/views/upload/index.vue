<template>
  <div class="update-info">
    <div style="padding-left: 0.2rem; background: #fff;">
      <div class="header">
        <p style="float: left;">头像</p>
        <div style="float: right;">
          <input
            style="opacity: 0; height: 100%; position: absolute;"
            onchange="upload(this.files)"
            type="file"
            name
            id="avatar-updata"
          >
          <img src="./images/default_head.png" class="header-logo">
          <img src="./images/arrow.png" class="arrow">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "upload",
  components: {},
  data: () => {
    return {};
  },
  methods: {
    showMenu() {}
  }
};
</script>

<style lang="less" scoped>
.update-info {
  height: 100vh;
  padding-top: 10px;
  background-color: #f5f5f5;
  font-size: 16px;
  z-index: 400;
}
.update-info .header {
  width: 100%;
  height: 88px;
  line-height: 88px;
  background: #fff;
  padding-right: 15px;
  position: relative;
}
.update-info .header .header-logo {
  width: 64px;
  height: 64px;
  border-radius: 4px;
  vertical-align: middle;
  margin-right: 10px;
}
.update-info .header .arrow {
  width: 8px;
  height: 13px;
  vertical-align: middle;
}

</style>

