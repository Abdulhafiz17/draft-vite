<script>
import Loading from "./components/Loading/Loading.vue";
export default {
  name: "App",
  components: { Loading },
  data() {
    return {
      reloaded: sessionStorage.getItem("reloaded"),
    };
  },
  created() {
    if (this.reloaded) {
      sessionStorage.removeItem("reloaded");
    } else {
      sessionStorage.setItem("reloaded", "reloaded");
      location.reload(1);
    }
  },
};
</script>

<template>
  <Loading />
  <div class="d-flex gap-1">
    <router-link to="/">home</router-link>
    <router-link to="/contacts">contacts</router-link>
    <router-link to="/supply-counting">supply</router-link>
  </div>
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
