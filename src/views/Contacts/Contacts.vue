<script>
import contacts from "./contacts.js";
export default {
  name: "Contacts",
  data() {
    return {
      contact: {
        name: "",
        source: "",
        numbers: [{ number: "", comment: "" }],
        description: "",
      },
      search: "",
    };
  },
  computed: {
    contacts() {
      return contacts
        .filter((item) => {
          return JSON.stringify(item)
            .toLowerCase()
            .match(this.search.toLowerCase());
        })
        .sort((a, b) => a - b);
    },
  },
  methods: {
    submit() {
      this.contacts.push(this.contact);
      this.contact = {
        name: "",
        source: "",
        numbers: [{ number: "", comment: "" }],
        description: "",
      };
    },
    result() {
      console.log(this.contacts);
    },
  },
};
</script>

<template>
  <h1>Contacts</h1>
  <div class="container" v-if="false">
    <form @submit.prevent="submit()">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="name"
          v-model="contact.name"
        />
        <input
          type="text"
          class="form-control"
          placeholder="source"
          v-model="contact.source"
        />
        <div class="input-group" v-for="item in contact.numbers" :key="item">
          <input
            type="tel"
            class="form-control"
            placeholder="phone"
            v-model="item.number"
          />
          <input
            type="text"
            class="form-control"
            placeholder="comment"
            v-model="item.comment"
          />
          <button
            class="input-group-append"
            @click="contact.numbers.push({ number: '', comment: '' })"
          >
            +
          </button>
        </div>
        <textarea
          class="form-control"
          placeholder="description"
          v-model="contact.description"
        ></textarea>
        <button>submit</button>
      </div>
    </form>
    <button @click="result()">result</button>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-12 mb-3">
        <input
          type="search"
          class="form-control"
          placeholder="search"
          v-model="search"
        />
      </div>
      <div
        class="col-lg-3 col-md-4 col-sm-6 mb-3"
        v-for="item in contacts"
        :key="item"
      >
        <div class="card h-100">
          <div class="card-body">
            <strong>{{ item.name }}</strong>
            <p v-if="item.source">{{ item.source }}</p>
            <p v-if="item.description">{{ item.description }}</p>
            <p class="d-flex gap-1" v-for="item1 in item.numbers" :key="item1">
              <a :href="`tel:${item1.number}`">{{ item1.number }}</a>
              <span v-if="item1.comment">{{ item1.comment }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
