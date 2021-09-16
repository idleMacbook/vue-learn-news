import bus from '../utils/bus';

export default {
  // 재사용할 컴포넌트 옵션
  /* created() {
    bus.$emit('start:spinner');

    // setTimeout(() => {
    this.$store
      .dispatch('FETCH_LIST', this.$route.name)
      .then(() => bus.$emit('end:spinner'))
      .catch((error) => console.log(error));
    // }, 1000);
  }, */
  mounted() {
    bus.$emit('end:spinner');
  },
};

// HOC
// export default function functionName() {
//   return {

//   }
// }
