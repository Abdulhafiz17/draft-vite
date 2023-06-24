<script>
import api from "../../server/api";
export default {
  name: "DataDropdown",
  props: {
    modelValue: null,
    type: String,
    all: Boolean,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      id: Date.now(),
      users: [],
    };
  },
  created() {
    api.users().then((val) => {
      this.users = val.data;
    });
  },
};
</script>

<template>
  <dropdown :id="type + id">
    <button toggle>{{ modelValue?.first_name || "select" }}</button>
    <template #menu>
      <ul class="list">
        <li v-if="all" @click="$emit('update:modelValue', null)">
          {{ "all" }}
        </li>
        <li
          v-for="item in users"
          :key="item"
          @click="$emit('update:modelValue', item)"
        >
          {{ item.first_name }}
        </li>
      </ul>
    </template>
  </dropdown>
</template>
