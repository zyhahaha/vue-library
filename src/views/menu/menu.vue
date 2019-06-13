<template>
  <div class="menuWrap" :class="{'showMenuWrap': isShowMenu}">
    <div class="menu" :class="{'showMenu': isShowMenu}">
      <div class="band_card">
        <a to="/avatar">
          <p class="avatar_wrap">
            <img src alt>
          </p>
        </a>
        <p class="nickname">Y & M</p>
        <!-- <p class="summary">999天99小时99分99秒</p> -->
        <p class="summary">{{date}}</p>
      </div>
      <div class="item_wrap">
        <ul>
          <li>
            <img src="{noticeImg}" alt>
            <span>我的消息</span>
          </li>
          <li>
            <img src="{collectImg}" alt>
            <span>我的收藏</span>
          </li>
          <li>
            <img src="{collectImg}" alt>
            <span>love</span>
          </li>
          <li>
            <img src="{collectImg}" alt>
            <span>love-air-balloon</span>
          </li>
        </ul>
      </div>
    </div>
    <div
      @click="$emit('changeMenuStateClose')"
      class="menu-drawer-overlay"
      :class="{'show': isShowMenu}"
    ></div>
  </div>
</template>

<script>
import testMixin from '@/mixin/test.mixin.js';
export default {
  name: "homeMenu",
  components: {},
  mixins: [testMixin],
  props: {
    isShowMenu: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      date: ""
    };
  },
  created() {
    var together = new Date();
    together.setFullYear(2018, 3, 18);
    together.setHours(18);
    together.setMinutes(30);
    together.setSeconds(0);
    together.setMilliseconds(0);
    this.timeElapse(together);
  },
  methods: {
    changeMenuStateClose() {},
    timeElapse(dateTim) {
      var current = Date();
      var seconds = (Date.parse(current) - Date.parse(dateTim)) / 1000;
      var days = Math.floor(seconds / (3600 * 24));
      seconds = seconds % (3600 * 24);
      var hours = Math.floor(seconds / 3600);
      if (hours < 10) {
        hours = "0" + hours;
      }
      seconds = seconds % 3600;
      var minutes = Math.floor(seconds / 60);
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      seconds = seconds % 60;
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      var result =
        "第" + days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
      this.date = result;
      console.log(result);
    }
  }
};
</script>

<style lang="less" scoped>
.menuWrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
  &.showMenuWrap {
    z-index: 100;
  }
}

.menu-drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(125, 125, 125, 0.5);
  display: none;
  z-index: -1;
  &.show {
    display: block;
  }
}
.menu {
  transform: translateX(-130%);
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
  will-change: transform;

  width: 75%;
  height: 100%;
  background-color: #fff;
  &.showMenu {
    transform: translateX(0%);
  }
  .band_card {
    padding: 0.15rem 0px;
    background-color: #303fa2;
    text-align: center;
    color: #fff;
    p {
      // display: inline-block;
    }
    .avatar_wrap {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 0.5rem;
      background-color: #fff;
    }
    .nickname {
      margin: 0.12rem 0rem 0.1rem;
      font-size: 0.11rem;
      font-weight: bold;
    }
    .summary {
      font-size: 0.11rem;
    }
  }
  // item_wrap
  .item_wrap {
    li {
      padding: 0.12rem 0.2rem;
      font-size: 0.14rem;
      border-bottom: 0.01rem solid #ccc;
      img {
        width: 0.24rem;
        margin-right: 0.24rem;
        vertical-align: middle;
      }
    }
  }
}
</style>

