<template>
  <list-item></list-item>
  <!-- <div> -->
  <!-- <div v-for="job in jobs" :key="job.id">
      {{ job.title }}
    </div> -->
  <!-- <p v-for="job in jobs" :key="job.id">
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p> -->
  <!-- <ul class="jobs-list">
      <li v-for="job in jobs" :key="job.id" class="post">
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <div>
          <p class="jobs-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">{{ job.time_ago }}, {{ job.domain }}</small>
        </div>
      </li>
    </ul> -->
  <!-- </div> -->
</template>

<script>
import ListItem from '../components/ListItem';
// import DataFetchingMixin from '../mixins/DataFetchingMixin';

export default {
  components: {
    ListItem,
  },
  // mixins: [DataFetchingMixin],
  // created() {
  //   this.$store.dispatch('FETCH_JOBS');
  // },
};
// import { mapGetters } from 'vuex';
// export default {
//   /* data() {
//     return {
//       jobs: [],
//     };
//   }, */
//   computed: {
//     ...mapGetters({
//       jobs: 'fetchedJobs',
//     }),
//   },
//   created() {
//     this.$store.dispatch('FETCH_JOBS');
//     /* fetchJobsList()
//       .then((response) => (this.jobs = response.data))
//       .catch((error) => console.log(error)); */
//   },
// };
</script>

<style lang="scss" scoped>
// .jobs-list {
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

//   .jobs-title {
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
