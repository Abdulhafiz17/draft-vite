<script>
export default {
  name: "Pagination",
  props: {
    modelValue: {
      default: {
        page: 1,
        per_page: 1,
        total_pages: 1,
      },
    },
  },
  emits: ["update:modelValue", "get"],
  computed: {
    pagination() {
      return this.$props.modelValue;
    },
  },
  methods: {
    setValue(property, value) {
      let data = this.pagination;
      data[property] = value;
      this.$emit("update:modelValue", data);
      this.$emit("get");
    },
  },
};
</script>

<template>
  <div class="v-pagination">
    <button :disabled="pagination.page == 1" @click="setValue('page', 1)">
      &#171;
    </button>
    <button
      :disabled="pagination.page == 1"
      @click="setValue('page', pagination?.page - 1)"
    >
      &#8249;
    </button>
    <button class="active">{{ pagination?.page }}</button>
    <button
      :disabled="pagination.page == pagination.total_pages"
      @click="setValue('page', pagination?.page + 1)"
    >
      &#8250;
    </button>
    <button
      :disabled="pagination.page == pagination.total_pages"
      @click="setValue('page', pagination?.total_pages)"
    >
      &#187;
    </button>
    <select
      :value="pagination?.per_page"
      @change="setValue('per_page', $event.target.value)"
    >
      <option :value="10">10</option>
      <option :value="25">25</option>
      <option :value="50">50</option>
      <option :value="100">100</option>
    </select>
  </div>
</template>

<style scoped>
.v-pagination {
  width: 100%;
  display: flex;
  place-content: center;
  gap: 1px;
  border-radius: 10px;
}

.v-pagination button {
  padding: 5px 10px;
  border-radius: 0;
}
.v-pagination button:not(.active) {
  font-size: large;
}
.v-pagination > *:first-child {
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
}
.v-pagination > *:last-child {
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
}
</style>
