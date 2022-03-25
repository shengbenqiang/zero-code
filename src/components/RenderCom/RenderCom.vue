<script lang="ts">
import { defineComponent, h, inject, watch } from "vue";
import "./RenderCom.css";
import { RenderDate } from "@/untils/types";

export default defineComponent({
  name: "RenderCom",
  setup() {
    const RenderView: RenderDate = inject<RenderDate>(
      "RenderView",
      {} as RenderDate
    );

    watch(
      () => RenderView.renderComponents,
      (newRender) => {
        if (newRender.length > 0) {
          newRender.forEach((itemRender) => {
            console.log(itemRender);
          });
        }
      },
      { deep: true }
    );

    return () =>
      h(
        "div",
        {
          class: ["render-com"],
        },
        "渲染组件"
      );
  },
});
</script>
