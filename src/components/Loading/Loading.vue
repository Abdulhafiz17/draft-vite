<template>
  <Transition name="v-loading">
    <div id="page-loader" v-if="loading">
      <div id="loader"></div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "Loading",
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>

<style scoped>
#page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(3px);
  z-index: 10000;
  cursor: progress;
}

#loader {
  position: absolute;
  z-index: 1;
  width: 130px;
  height: 130px;
  border: 10px double rgb(0, 0, 0, 0.7);
  border-block: 10px solid rgb(0, 0, 0, 0.7);
  border-radius: 50%;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

.dark #loader {
  border: 10px double rgb(211, 211, 211, 0.5);
  border-block: 10px solid rgb(211, 211, 211, 0.5);
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.v-loading,
.v-loading #loader {
  transition: all 0.25s;
}

.v-loading-enter-from,
.v-loading-leave-to {
  opacity: 0;
}

.v-loading-enter-from #loader,
.v-loading-leave-to #loader {
  scale: 0;
}
</style>
