<script>
import api from "../server/api";
import Pagination from "../components/Pagination/Pagination.vue";
import DataDropdown from "../components/DataDropdown/DataDropdown.vue";
export default {
  name: "Home",
  components: { Pagination, DataDropdown },
  data() {
    return {
      users: {
        page: 1,
        per_page: 1,
        total: 1,
        total_pages: 1,
        data: [],
      },
    };
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      const params = {
        page: this.users.page,
        per_page: this.users.per_page,
      };
      api.users(params).then((val) => {
        this.users = val;
      });
    },
  },
};
</script>

<template>
  <pre>{{ users }}</pre>

  <Pagination v-model="users" @get="get()" />

  <tab :tabs="['home', 'profile', 'setting']" v-if="false">
    <template #1>1</template>
    <template #2>2</template>
    <template #3>3</template>
  </tab>

  <DataDropdown type="user" all v-model="user" v-if="false"></DataDropdown>

  <button @click="$refs.modal.toggleModal()" v-if="false">toggle</button>

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
