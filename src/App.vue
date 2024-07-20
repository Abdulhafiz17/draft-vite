<script>
import Loading from "./components/Loading/Loading.vue";
export default {
  name: "App",
  components: { Loading },
  created() {
    window.addEventListener("vite:preloadError", (event) => {
      window.location.reload(); // for example, refresh the page
    });
  },
};
</script>

<template>
  <Loading />
  <h1>Hi</h1>
  <RouterView v-slot="{ route, Component }">
    <Transition name="v-router" mode="out-in">
      <div :key="route">
        <component :is="Component" />
      </div>
    </Transition>
  </RouterView>
</template>

<style scoped>
.v-router-enter-from,
.v-router-leave-to {
  opacity: 0;
}

.v-router-enter-active,
.v-router-leave-active {
  transition: opacity 0.15s;
}
</style>
