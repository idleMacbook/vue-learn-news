<template>
  <div id="nav">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#nav {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;

  a {
    // font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #35495e;
      text-decoration: underline;
    }
  }
}
</style>
