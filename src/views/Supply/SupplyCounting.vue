<script>
export default {
  name: "SupplyCounting",
  data() {
    return {
      product: {
        name: "",
        price: null,
        quantity: null,
      },
      products: [],
    };
  },
  methods: {
    addProduct(product) {
      this.products.push(product);
      this.product = {
        name: "",
        price: null,
        quantity: null,
      };
    },
  },
};
</script>

<template>
  <div class="row gap-3">
    <div class="col-md-12">
      <form @submit.prevent="addProduct(product)">
        <div class="row">
          <div class="col-5">
            <input
              type="text"
              class="form-control"
              placeholder="mahsulot"
              required
              v-model="product.name"
            />
          </div>
          <div class="col-3">
            <input
              type="number"
              min="0"
              step="any"
              class="form-control"
              placeholder="narx"
              required
              v-model="product.price"
            />
          </div>
          <div class="col-2">
            <input
              type="number"
              min="0"
              step="any"
              class="form-control"
              placeholder="miqdor"
              required
              v-model="product.quantity"
            />
          </div>
          <div class="col-2">
            <button class="w-100">qo'shish</button>
          </div>
        </div>
      </form>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-md-6">
          <div class="table-responsive" style="max-height: 70vh">
            <table>
              <thead>
                <tr>
                  <th>Mahsulot</th>
                  <th>Narx</th>
                  <th>Miqdor</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in products" :key="i">
                  <td>{{ item.name }}</td>
                  <td>{{ item.price }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>
                    <button @click="products.splice(i, 1)">x</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-6"></div>
      </div>
    </div>
  </div>
</template>
