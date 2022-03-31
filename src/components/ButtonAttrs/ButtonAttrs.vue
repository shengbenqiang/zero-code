<template>
  <div class="button-attrs">
    <div class="button-attrs-item-attr">
      <span>组件唯一 key：</span>
      <a-input v-model:value="uuid" disabled />
    </div>
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
    <div class="common-right-item-attr">
      <span>元素宽度：</span>
      <a-input
        v-model:value="formItemProps.span"
        type="number"
        :max="24"
        :min="2"
      />
    </div>
    <div class="common-right-item-attr">
      <span>按钮内容：</span>
      <a-input v-model:value="locateProps.content" />
    </div>
    <div class="button-attrs-item-attr">
      <span>按钮形状：</span>
      <a-select
        v-model:value="props.shape"
        class="button-attrs-item-attr-select"
      >
        <template v-for="itemShape in config.shape" :key="itemShape.key">
          <a-select-option :value="itemShape.value">
            {{ itemShape.key }}
          </a-select-option>
        </template>
      </a-select>
    </div>
    <div class="button-attrs-item-attr">
      <span>按钮大小：</span>
      <a-select
        v-model:value="props.size"
        class="button-attrs-item-attr-select"
      >
        <template v-for="itemSize in config.size" :key="itemSize.key">
          <a-select-option :value="itemSize.value">
            {{ itemSize.key }}
          </a-select-option>
        </template>
      </a-select>
    </div>
    <div class="button-attrs-item-attr">
      <span>按钮类型：</span>
      <a-select
        v-model:value="props.type"
        class="button-attrs-item-attr-select"
      >
        <template v-for="itemType in config.type" :key="itemType.key">
          <a-select-option :value="itemType.value">
            {{ itemType.key }}
          </a-select-option>
        </template>
      </a-select>
    </div>
    <div class="button-attrs-item-attr">
      <span>垂直方向：</span>
      <a-select
        v-model:value="locateProps.align"
        class="button-attrs-item-attr-select"
      >
        <template v-for="itemAlign in config.locateAlign" :key="itemAlign.key">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import "./ButtonAttrs.css";
import { DesignDate } from "@/untils/types";

export default defineComponent({
  name: "ButtonAttrs",
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
