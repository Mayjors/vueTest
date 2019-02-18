<script>
export default {
  name: 'Login',
  data () {
    return {
      name: '',
      pwd: '',
      error: ''
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    isLogin: function () {
      this.$http.get('http://localhost:8080/users?username=' + this.name + '&password=' + this.pwd).then((response) => {
        // 这里在isLogin方法中先判断一下后台返回的是否为空值
        // 这里是一个难点, Vue与Vue-Resource结合使用
        if (response.body != null & response.body.length > 0) {
          this.$store.commit('isLogin', response.body[0])
          this.name = ''
          this.pwd = ''
          this.$router.push({ path: 'main' })
        } else {
          alert('请输入正确的用户名和密码！！！')
          this.name = ''
          this.pwd = ''
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
