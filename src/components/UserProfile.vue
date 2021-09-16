<template>
  <div class="user-container">
    <div><i class="fas fa-user"></i></div>
    <div class="user-description">
      <div>
        <slot name="username"></slot>
      </div>
      <div class="time">
        <slot name="time"></slot>
        <slot name="karma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {};
      },
      required: true,
    },
  },
  // computed: {
  //   ...mapGetters(['fetchedUser']),
  //   userInfo() {
  //     return this.$store.state.user;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;

  .fa-user {
    font-size: 2.5rem;
  }
}
.user-description {
  padding: 8px;

  .time {
    font-size: 0.7rem;
  }
}
</style>
