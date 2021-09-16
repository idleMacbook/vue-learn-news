<template>
  <div>
    <user-profile :info="fetchedUser">
      <div slot="username">
        {{ fetchedUser.id }}
      </div>
      <span slot="time">
        {{ 'Joined ' + fetchedUser.created }}
      </span>
      <span slot="karma">
        {{ fetchedUser.karma }}
      </span>
    </user-profile>
    <!-- <p>{{ fetchedUser.id }}</p>
    <p>{{ fetchedUser.karma }}</p>
    <p>{{ fetchedUser.about }}</p>
    <p>{{ fetchedUser.created }}</p> -->
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
    ...mapGetters(['fetchedUser']),
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
};
</script>

<style></style>
