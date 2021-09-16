<template>
  <list-item></list-item>
  <!-- <div> -->
  <!-- <div v-for="item in fetchedNews" :key="item.id">
      {{ item.title }}
    </div> -->
  <!-- <p v-for="item in fetchedNews" :key="item.id">
      <a :href="item.url">{{ item.title }}</a>
      <small>
        {{ item.time_ago }} by
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p> -->

  <!-- <a :href="item.url">{{ item.title }}</a>
    <small>{{ item.time_ago }}</small>
    <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link> -->
  <!-- <ul class="news-list">
      <li v-for="item in fetchedNews" :key="item.id" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <a :href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">
            by
            <router-link :to="`/user/${item.user}`" class="link-text">{{
              item.user
            }}</router-link>
          </small>
        </div>
      </li>
    </ul> -->
  <!-- </div> -->
</template>

<script>
import ListItem from '../components/ListItem';
import DataFetchingMixin from '../mixins/DataFetchingMixin';

export default {
  components: {
    ListItem,
  },
  mixins: [DataFetchingMixin],
  //   created() {
  //     bus.$emit('start:spinner');

  //     this.$store
  //       .dispatch('FETCH_NEWS')
  //       .then(() => {
  //         console.log('fetched');
  //         bus.$emit('end:spinner');
  //       })
  //       .catch((error) => console.log(error));
  //   },
  // };
  // import { mapGetters } from 'vuex';

  // export default {
  //   /* data() {
  //     return {
  //       news: [],
  //     };
  //   }, */
  //   computed: {
  //     /* ...mapState({
  //       news: (state) => state.news,
  //     }), */
  //     ...mapGetters(['fetchedNews']),
  //   },
  //   created() {
  //     this.$store.dispatch('FETCH_NEWS');
  //     /* fetchNewsList()
  //       .then((response) => (this.news = response.data))
  //       .catch((error) => console.log(error)); */
  //   },
};
</script>

<style lang="scss" scoped>
// .news-list {
//   margin: 0;
//   padding: 0;

//   .points {
//     width: 80px;
//     height: 60px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #41b883;
//   }

//   .news-title {
//     margin: 0;
//   }

//   .link-text {
//     color: #828282;
//   }

//   .post {
//     list-style: none;
//     display: flex;
//     align-items: center;
//     border-bottom: 1px solid #eee;
//   }
// }
</style>
