<template>
  <div class="right-com-attrs">
    <component v-if="selectComponent" :is="selectComponent.key" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import "./RightComAttrs.css";
import AlterAttrs from "@/components/AlterAttrs/AlterAttrs.vue";
import InputAttrs from "@/components/InputAttrs/InputAttrs.vue";
import ButtonAttrs from "@/components/ButtonAttrs/ButtonAttrs.vue";
import { DesignDate } from "@/untils/types";

export default defineComponent({
  name: "RightComAttrs",
  components: {
    InputAttrs,
    AlterAttrs,
    ButtonAttrs,
  },
  setup() {
    let DesignView: DesignDate = inject<DesignDate>(
      "DesignView",
      {} as DesignDate
    );
    const { selectComponent } = DesignView;

    return {
      selectComponent,
    };
  },
});
</script>
