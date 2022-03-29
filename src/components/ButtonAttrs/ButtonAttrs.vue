<template>
  <div class="button-attrs">
    <CommonAttrName>
      <template #english>Button</template>
      <template #chinese>按钮</template>
    </CommonAttrName>
    <div class="button-attrs-room">
      <div class="button-attrs-item-attr">
        <span>禁用：</span>
        <a-switch
          v-model:checked="props.disabled"
          checked-children="是"
          un-checked-children="否"
        />
      </div>
      <div class="button-attrs-item-attr">
        <span>父级宽度：</span>
        <a-switch
          v-model:checked="props.block"
          checked-children="是"
          un-checked-children="否"
        />
      </div>
      <div class="button-attrs-item-attr">
        <span>危险按钮：</span>
        <a-switch
          v-model:checked="props.danger"
          checked-children="是"
          un-checked-children="否"
        />
      </div>
      <div class="button-attrs-item-attr">
        <span>按钮形状：</span>
        <a-select
          v-model:value="props.shape"
          class="button-attrs-item-attr-select"
        >
          <a-select-option
            v-for="itemShape in config.shape"
            :key="itemShape.key"
            :value="itemShape.value"
          >
            {{ itemShape.value }}
          </a-select-option>
        </a-select>
      </div>
      <div class="button-attrs-item-attr">
        <span>按钮大小：</span>
        <a-select
          v-model:value="props.size"
          class="button-attrs-item-attr-select"
        >
          <a-select-option
            v-for="itemSize in config.size"
            :key="itemSize.key"
            :value="itemSize.value"
          >
            {{ itemSize.value }}
          </a-select-option>
        </a-select>
      </div>
      <div class="button-attrs-item-attr">
        <span>按钮类型：</span>
        <a-select
          v-model:value="props.type"
          class="button-attrs-item-attr-select"
        >
          <a-select-option
            v-for="itemType in config.type"
            :key="itemType.key"
            :value="itemType.value"
          >
            {{ itemType.value }}
          </a-select-option>
        </a-select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import "./ButtonAttrs.css";
import CommonAttrName from "@/components/CommonAttrName/CommonAttrName.vue";
import { DesignDate } from "@/untils/types";

export default defineComponent({
  name: "ButtonAttrs",
  components: {
    CommonAttrName,
  },
  setup() {
    const DesignView: DesignDate = inject<DesignDate>(
      "DesignView",
      {} as DesignDate
    );
    const { selectComponent } = DesignView;

    return {
      props: selectComponent.props,
      config: selectComponent.config,
    };
  },
});
</script>
