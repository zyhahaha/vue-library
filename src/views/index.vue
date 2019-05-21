<template>
  <div class="list-page">
    <ul>
      <li @click="$router.push('/address')">address</li>
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
    font-size: 0.16rem;
    ul {
      padding: 0.5rem;
      li{
        padding-bottom: 0.2rem;
      }
    }
  }
</style>
