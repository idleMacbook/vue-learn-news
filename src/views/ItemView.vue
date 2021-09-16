<template>
  <div>
    <!-- <div v-for="item in fetchedItem" :key="item.id">
      <p>{{ item }}</p>
    </div> -->
    <!-- <p>{{ fetchedItem.title }}</p>
    <p>{{ fetchedItem.content }}</p> -->
    <section>
      <user-profile :info="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time">
          {{ 'Posted ' + fetchedItem.time_ago }}
        </template>
      </user-profile>
      <!-- <div class="user-container">
        <div><i class="fas fa-user"></i></div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">{{ fetchedItem.time_ago }}</div>
        </div>
      </div> -->
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const Itemid = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', Itemid);
  },
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
