<template>
  <div class="item-component" @click="componentClick">
    {{ component.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from "vue";
import "./ItemComponent.css";
import { DesignDate, Component } from "@/untils/types";

export default defineComponent({
  name: "ItemComponent",
  props: {
    component: {
      type: Object as PropType<Component>,
      default: () => ({}),
      require: true,
    },
  },
  setup(props) {
    const DesignView: DesignDate = inject<DesignDate>(
      "DesignView",
      {} as DesignDate
    );
    const { getComponentAttributes } = DesignView;

    const componentClick = () => {
      getComponentAttributes(props.component);
    };

    return {
      componentClick,
    };
  },
});
</script>
