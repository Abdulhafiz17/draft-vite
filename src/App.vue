<script>
import Loading from "./components/Loading/Loading.vue";
export default {
  name: "App",
  components: { Loading },
};
</script>

<template>
  <Loading />
  <RouterView></RouterView>
</template>

<style scoped></style>
