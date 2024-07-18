<script>
import api from "../server/api";
import Pagination from "../components/Pagination/Pagination.vue";
import DataDropdown from "../components/DataDropdown/DataDropdown.vue";
export default {
  name: "Home",
  components: { Pagination, DataDropdown },
  data() {
    return {
      user: null,
      users: this.$util.storage("home-users") || {
        page: 1,
        per_page: 1,
        total: 1,
        total_pages: 1,
        data: [],
      },
    };
  },
  created() {
    navigator.vibrate([500]);
  },
  methods: {},
};
</script>

<template>
  <button @click="$refs.modal.toggleModal()">toggle</button>

  <modal ref="modal">
    <template #header>
      <h3>header</h3>
    </template>
    <template #body> body </template>
    <template #footer>
      <i>footer</i>
    </template>
  </modal>
</template>
