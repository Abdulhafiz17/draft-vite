<script>
export default {
  name: "Tab",
  props: {
    tabs: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      active: 0,
      timeout: null,
    };
  },
  methods: {
    setActive(tab) {
      clearTimeout(this.timeout);
      this.active = -1;
      this.timeout = setTimeout(() => {
        this.active = tab;
      }, 100);
    },
  },
};
</script>

<template>
  <div class="v-tab-buttons">
    <button
      v-for="(item, index) in tabs"
      :key="item"
      :class="{ active: item == tabs[active] }"
      @click="setActive(index)"
    >
      {{ item }}
    </button>
  </div>
  <Transition name="v-tab" mode="out-in">
    <div class="v-tab-content" v-if="active + 1">
      <slot :name="active + 1"></slot>
    </div>
  </Transition>
</template>

<style scoped>
.v-tab-buttons {
  padding: 5px;
  width: max-content;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  border: thin solid rgb(100, 108, 255);
  border-radius: 10px;
}

button {
  flex: 1 1 auto;
  background: transparent;
  border-color: transparent;
  transition: box-shadow 0.5s;
}

button.active {
  box-shadow: 0 0 5px 0px gray;
}

.v-tab-content {
  margin-top: 5px;
  padding: 10px;
  width: 100%;
  border: thin solid rgb(100, 108, 255);
  border-radius: 10px;
}

.v-tab-enter-active {
  animation: toggleTab 0.3s;
}
.v-tab-leave-active {
  animation: toggleTab 0.3s reverse;
}

@keyframes toggleTab {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
