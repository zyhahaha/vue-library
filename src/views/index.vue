<template>
  <div class="list-page">
    <ul>
      <p>test</p>
      <li @click="$router.push('/address')">address</li>
      <li @click="$router.push('/menu')">menu</li>
      <li @click="$router.push('/menu')">menu</li>
      <li @click="$router.push('/menu')">menu</li>
    </ul>
    <ul>
      <p>test</p>
      <li @click="$router.push('/address')">address</li>
      <li @click="$router.push('/menu')">menu</li>
      <li @click="$router.push('/menu')">menu</li>
      <li @click="$router.push('/menu')">menu</li>
    </ul>
    <ul>
      <p>test</p>
      <li @click="$router.push('/address')">address</li>
      <li @click="$router.push('/menu')">menu</li>
      <li @click="$router.push('/menu')">menu</li>
      <li @click="$router.push('/menu')">menu</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {}
  },

  created() {

  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
  .list-page {
    height: 100%;
    background-color: #f5f5f5;
    font-size: 0.32rem;
    ul {
      // padding: 0.5rem;
      p{
        padding: 0.2rem 0rem;
        font-size: 0.36rem;
      }
      li{
        padding: 0.2rem 0rem;
        padding-left: 0.5rem;
        text-align: left;
        background-color: #fff;
      }
    }
  }
</style>
