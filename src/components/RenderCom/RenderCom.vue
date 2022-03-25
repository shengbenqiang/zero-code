<script lang="ts">
import { defineComponent, h, inject, watch, ref, VNode } from "vue";
import "./RenderCom.css";
import { Component, RenderDate } from "@/untils/types";

export default defineComponent({
  name: "RenderCom",
  setup() {
    const RenderView: RenderDate = inject<RenderDate>(
      "RenderView",
      {} as RenderDate
    );
    const renderArr = ref<VNode[]>([]);

    watch(
      () => RenderView.renderComponents,
      (newRender) => {
        if (newRender.length > 0) {
          newRender.forEach((itemRender) => {
            renderArr.value.push(handleRender(itemRender));
          });
          console.log(...renderArr.value);
        }
      },
      { deep: true }
    );

    function handleRender(com: Component): VNode {
      return h(com.tag, { props: { ...com.props } }, ["按钮"]);
    }

    return () =>
      h(
        "div",
        {
          class: ["render-com"],
        },
        [...renderArr.value]
      );
  },
});
</script>
