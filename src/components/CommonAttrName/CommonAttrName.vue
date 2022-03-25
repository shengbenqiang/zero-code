<template>
  <div class="common-attr-name">
    <span class="common-attr-name-english">
      <slot name="english" />
    </span>
    <span class="common-attr-name-chinese">
      <slot name="chinese" />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./CommonAttrName.css";

export default defineComponent({
  name: "CommonAttrName",
});
</script>
