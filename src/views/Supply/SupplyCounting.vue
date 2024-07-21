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
      products: this.$util.storage("products") || [],
      expense: {
        name: "",
        price: null,
      },
      expenses: this.$util.storage("expenses") || [],
    };
  },
  computed: {
    sum_price_products() {
      return this.products.reduce(
        (sum, current) => sum + current.price * current.quantity,
        0
      );
    },
    sum_price_expenses() {
      return this.expenses.reduce((sum, current) => sum + current.price, 0);
    },
  },
  methods: {
    saveData() {
      this.$util.storage("products", this.products);
      this.$util.storage("expenses", this.expenses);
    },
    addProduct(product) {
      this.products.push(product);
      this.saveData();
      this.product = {
        name: "",
        price: null,
        quantity: null,
      };
    },
    removeProduct(index) {
      this.products.splice(index, 1);
      this.saveData();
    },
    addExpense(expense) {
      this.expenses.push(expense);
      this.saveData();
      this.expense = {
        name: "",
        price: null,
      };
    },
    removeExpense(index) {
      this.expenses.splice(index, 1);
      this.saveData();
    },
    countPrice() {
      this.products.forEach((item, i) => {
        const sum = item.price * item.quantity;
        const percent_of_sum_products = (sum * 100) / this.sum_price_products;
        const expense_for_products =
          (this.sum_price_expenses / 100) * percent_of_sum_products;
        item.expense_for_product = expense_for_products / item.quantity;

        if (i == this.products.length - 1) this.$refs.productsModal.openModal();
      });
    },
  },
};
</script>

<template>
  <h1>Ta'minot tan narxi hisoblash</h1>
  <button @click="countPrice()">Hisoblash</button>
  <Tab :tabs="[`Mahsulotlar`, `Chiqimlar`]">
    <template #1>
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
              <div class="col-3" :currency="$util.currency(product.price)">
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
            <div class="col-md-4">
              <h4>
                {{ `Jami summa: ${$util.currency(sum_price_products)} so'm` }}
              </h4>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="table-responsive" style="max-height: 70vh">
            <table>
              <thead>
                <tr>
                  <th>Mahsulot</th>
                  <th>Narx</th>
                  <th>Miqdor</th>
                  <th>Summa</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in products" :key="i">
                  <td>{{ item.name }}</td>
                  <td>{{ $util.currency(item.price) }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>{{ $util.currency(item.price * item.quantity) }}</td>
                  <td>
                    <button @click="removeProduct(i)">x</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>
    <template #2>
      <div class="row gap-3">
        <div class="col-md-12">
          <form @submit.prevent="addExpense(expense)">
            <div class="row">
              <div class="col-5">
                <input
                  type="text"
                  class="form-control"
                  placeholder="chiqim"
                  required
                  v-model="expense.name"
                />
              </div>
              <div class="col-5" :currency="$util.currency(expense.price)">
                <input
                  type="number"
                  min="0"
                  step="any"
                  class="form-control"
                  placeholder="summa"
                  required
                  v-model="expense.price"
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
            <div class="col-md-4">
              <h4>
                {{ `Jami summa: ${$util.currency(sum_price_expenses)} so'm` }}
              </h4>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="table-responsive" style="max-height: 70vh">
            <table>
              <thead>
                <tr>
                  <th>Chiqim</th>
                  <th>Summa</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in expenses" :key="i">
                  <td>{{ item.name }}</td>
                  <td>{{ $util.currency(item.price) }}</td>
                  <td>
                    <button @click="removeExpense(i)">x</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>
  </Tab>

  <Modal ref="productsModal" size="lg">
    <template #header>
      <h4>Mahsulotlarga qo'yilgan chiqim narxi</h4>
    </template>
    <template #body>
      <table>
        <thead>
          <tr>
            <th>Mahsulot</th>
            <th>Narx</th>
            <th>Chiqim uchun ustama</th>
            <th>Miqdor</th>
            <th>Summa</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in products" :key="i">
            <td>{{ item.name }}</td>
            <td>{{ $util.currency(item.price) }}</td>
            <td>{{ $util.currency(item.expense_for_product) }}</td>
            <td>{{ item.quantity }}</td>
            <td>
              {{
                $util.currency(
                  (item.price + item.expense_for_product) * item.quantity
                )
              }}
            </td>
            <td>
              <button @click="removeProduct(i)">x</button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </Modal>
</template>
