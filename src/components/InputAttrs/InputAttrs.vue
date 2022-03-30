<template>
  <div class="input-attrs-con">
    <CommonAttrName>
      <template #english>Input</template>
      <template #chinese>输入框</template>
    </CommonAttrName>
    <div class="common-right-all-attrs">
      <div class="common-right-item-attr">
        <span>组件唯一 key：</span>
        <a-input v-model:value="uuid" disabled />
      </div>
      <div class="common-right-item-attr">
        <span>禁用：</span>
        <a-switch
          v-model:checked="props.disabled"
          checked-children="是"
          un-checked-children="否"
        />
      </div>
      <div class="common-right-item-attr">
        <span>展示边框：</span>
        <a-switch
          v-model:checked="props.bordered"
          checked-children="是"
          un-checked-children="否"
        />
      </div>
      <div class="common-right-item-attr">
        <span>输入提示：</span>
        <a-input v-model:value="props.placeholder" />
      </div>
      <div class="common-right-item-attr">
        <span>最大长度：</span>
        <a-input v-model:value="props.maxlength" />
      </div>
      <div class="common-right-item-attr">
        <span>元素宽度：</span>
        <a-input
          v-model:value="formItemProps.span"
          type="number"
          :max="24"
          :min="4"
        />
      </div>
      <div class="common-right-item-attr">
        <span>标签内容：</span>
        <a-input v-model:value="formItemProps.label" />
      </div>
      <div class="common-right-item-attr">
        <span>标签字段：</span>
        <a-input v-model:value="formItemProps.name" />
      </div>
      <div class="button-attrs-item-attr">
        <span>垂直方向：</span>
        <a-select
          v-model:value="locateProps.align"
          class="button-attrs-item-attr-select"
        >
          <template
            v-for="itemAlign in config.locateAlign"
            :key="itemAlign.key"
          >
            <a-select-option :value="itemAlign.value">
              {{ itemAlign.key }}
            </a-select-option>
          </template>
        </a-select>
      </div>
      <div class="button-attrs-item-attr">
        <span>水平方向：</span>
        <a-select
          v-model:value="locateProps.justify"
          class="button-attrs-item-attr-select"
        >
          <template
            v-for="itemJustify in config.locateJustify"
            :key="itemJustify.key"
          >
            <a-select-option :value="itemJustify.value">
              {{ itemJustify.key }}
            </a-select-option>
          </template>
        </a-select>
      </div>
      <div class="common-right-item-attr">
        <span>输入框大小：</span>
        <a-select
          v-model:value="props.size"
          class="common-right-item-attr-select"
        >
          <template v-for="itemSize in config.size" :key="itemSize.key">
            <a-select-option :value="itemSize.value">
              {{ itemSize.key }}
            </a-select-option>
          </template>
        </a-select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import "./InputAttrs.css";
import "@/assets/commonCss/rightCom.css";
import CommonAttrName from "@/components/CommonAttrName/CommonAttrName.vue";
import { DesignDate } from "@/untils/types";

export default defineComponent({
  name: "InputAttrs",
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
      uuid: selectComponent.uuid,
      props: selectComponent.props,
      config: selectComponent.config,
      locateProps: selectComponent.locateProps,
      formItemProps: selectComponent.formItemProps,
    };
  },
});
</script>
