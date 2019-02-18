<template>
    <div>
      <hi>Hello Main!</hi>
      <section v-show="user">
        <p>欢迎{{user.username}}</p>
      </section>
    </div>
</template>

<script>
export default {
  name: 'Main',
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>

</style>
