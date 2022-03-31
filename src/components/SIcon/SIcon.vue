<template>
  <i
    :class="['iconfont', icon]"
    :style="{
      fontSize: size + 'px',
    }"
    @click="handleIconClick"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@/assets/iconCss/iconfont.css";

export default defineComponent({
  name: "SIcon",
  props: {
    icon: {
      type: String,
      require: true,
    },
    size: {
      type: Number,
      default: 13,
    },
  },
  methods: {
    handleIconClick() {
      this.$emit("handleIconClick");
    },
  },
});
</script>
