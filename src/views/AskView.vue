<template>
  <list-item></list-item>
  <!-- <div> -->
  <!-- <div v-for="ask in fetchedAsk" :key="ask.id">
      {{ ask.title }}
    </div> -->
  <!-- <p v-for="ask in fetchedAsk" :key="ask.id">
      <a :href="`item/${ask.id}`">{{ ask.title }}</a>
      <router-link :to="`item/${ask.id}`">{{ ask.title }}</router-link>
      <small>{{ ask.time_ago }}, {{ ask.user }}</small>
    </p> -->
  <!-- <ul class="ask-list">
      <li v-for="ask in fetchedAsk" :key="ask.id" class="post">
        <div>
          <p class="ask-title">
            <router-link :to="`item/${ask.id}`">{{ ask.title }}</router-link>
          </p>
          <small class="link-text">{{ ask.time_ago }}, {{ ask.user }}</small>
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
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // },
};
// import { mapGetters } from 'vuex';
// export default {
//   /* data() {
//     return {
//       asks: [],
//     };
//   }, */
//   computed: {
//     ...mapGetters(['fetchedAsk']),
//   },
//   created() {
//     this.$store.dispatch('FETCH_ASK');
//     /* fetchAskList()
//       .then((response) => (this.asks = response.data))
//       .catch((error) => console.log(error)); */
//   },
// };
</script>

<style lang="scss" scoped>
// .ask-list {
//   margin: 0;
//   padding: 0;

//   .ask-title {
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
