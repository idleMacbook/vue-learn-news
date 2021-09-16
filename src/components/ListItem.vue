<template>
  <div>
    <ul class="item-list">
      <li v-for="item in listItems" :key="item.id" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="item-title">
            <template v-if="item.domain">
              <a :href="item.url">{{ item.title }}</a>
            </template>
            <template v-else>
              <router-link :to="`item/${item.id}`">{{
                item.title
              }}</router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }}by
            <router-link
              v-if="item.user"
              :to="`/user/${item.user}`"
              class="link-text"
              >{{ item.user }}</router-link
            >
            <a v-else :href="item.url">{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    //...mapGetters(['fetchedNews', 'fetchedJobs', 'fetchedAsk']),
    listItems() {
      return this.$store.state.list;
      // const routeName = this.$route.name;

      // if (routeName === 'news') {
      //   return this.$store.state.news;
      // } else if (routeName === 'jobs') {
      //   return this.$store.state.jobs;
      // } else if (routeName === 'ask') {
      //   return this.$store.state.ask;
      // } else {
      //   return null;
      // }
    },
  },
  // created() {
  //   const routeName = this.$route.name;

  //   if (routeName === 'news') {
  //     this.$store.dispatch('FETCH_NEWS');
  //   } else if (routeName === 'jobs') {
  //     this.$store.dispatch('FETCH_JOBS');
  //   } else if (routeName === 'ask') {
  //     this.$store.dispatch('FETCH_ASK');
  //   }
  // },
};
</script>

<style lang="scss" scoped>
.item-list {
  margin: 0;
  padding: 0;

  .points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #41b883;
  }

  .item-title {
    margin: 0;
  }

  .link-text {
    color: #828282;
  }

  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
}
</style>
