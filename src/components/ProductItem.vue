<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="currentItemUrl" alt="Название товара" />
    </a>

    <h3 class="catalog__title">
      <a href="#"> Кружевной бюстгалтер без косточек </a>
    </h3>

    <span class="catalog__price"> 3 690 ₽ </span>

    <ul class="colors colors--black">
      <li
        v-for="({ color, id }, index) in colorList"
        :key="index"
        class="colors__item"
      >
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            name="color-1"
            :value="id"
            v-model="currentColorId"
          />
          <span class="colors__value" :style="{ backgroundColor: color.code }">
          </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Watch } from "vue-property-decorator";
import Vue from "vue";
import { IProduct } from "@/types/products";
@Component({
  components: {},
})
export default class ProductItem extends Vue {
  @Prop(Object)
  product!: IProduct;

  currentColorId = 0;
  currentItemUrl = "";

  get colorList() {
    return this.product ? this.product.colors : [];
  }

  created() {
    const url = this.product.colors[0].gallery
      ? this.product.colors[0].gallery[0].file.url
      : "";
    this.currentItemUrl = url;
  }

  @Watch("currentColorId") changeImgUrl() {
    const currentColor = this.product.colors.find(
      (item) => item.id === this.currentColorId
    );
    if (!currentColor?.gallery) {
      this.currentItemUrl = "";
      return;
    }
    const fileUrl = currentColor?.gallery[0].file.url;
    this.currentItemUrl = fileUrl ?? "";
  }
}
</script>
