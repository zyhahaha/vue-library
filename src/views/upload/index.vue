<template>
  <div class="update-info">
    <div class="header">
      <p style="float: left;">头像</p>
      <div style="float: right;">
        <input
          style="opacity: 0; height: 100%; position: absolute;"
          @change="upload($event)"
          type="file"
          name
          id="avatar-updata"
        >
        <img src="./images/default_head.png" class="header-logo">
        <img src="./images/arrow.png" class="arrow">
      </div>
    </div>
  </div>
</template>

<script>
import CutImg from "cut-img-filesize";
import axios from "axios";
export default {
  name: "upload",
  components: {},
  data: () => {
    return {};
  },
  created() {},
  methods: {
    upload(e) {
      let file = e.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      formData.append("name", "test");
      this.uploadService(formData);

      // let params = {
      //   file: file,
      //   max: 140
      // };
      // let cutImg = new CutImg();
      // cutImg.cut(params).then(res => {
      //   let avatarImgEl = document.getElementsByClassName('header-logo')[0];
      //   avatarImgEl.src = window.URL.createObjectURL(res);
      // });
    },
    uploadService(formData) {
      axios.post("/api/upload", formData).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="less" scoped>
.update-info {
  height: 100vh;
  padding-top: 10px;
  background-color: #f5f5f5;
  font-size: 16px;
}
.update-info .header {
  height: 88px;
  line-height: 88px;
  background: #fff;
  padding-left: 0.2rem;
  padding-right: 15px;
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

