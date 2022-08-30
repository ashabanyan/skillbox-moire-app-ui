<template>
  <main class="content container">
    <div class="content__top">
      <div class="content__row">
        <h1 class="content__title">Каталог</h1>
        <span class="content__info"> 152 товара </span>
      </div>
    </div>

    <div class="content__catalog">
      <ProductFilter />
      <ProductCatalog :products="allProducts" />
    </div>
  </main>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import ProductFilter from "@/components/ProductFilter.vue";
import ProductCatalog from "@/components/ProductCatalog.vue";
import { getAllProducts } from "@/api/products";
import { IProduct } from "@/types/products";

@Component({
  components: { ProductFilter, ProductCatalog },
})
export default class MainPage extends Vue {
  productsList: IProduct[] | null = null;
  async getProducts() {
    const productsData = await getAllProducts();
    this.productsList = productsData;
  }

  get allProducts() {
    return this.productsList ? this.productsList : null;
  }

  created() {
    this.getProducts();
  }
}
</script>
