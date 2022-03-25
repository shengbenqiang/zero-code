import { Component } from "./types";

export const componentGeneralArr: Component[] = [
  {
    key: "ButtonAttrs",
    name: "按钮",
    tag: "a-button",
    content: "默认内容",
    props: {
      block: false,
      danger: false,
      disabled: false,
      shape: "default",
      size: "default",
      type: "default",
    },
    config: {
      shape: [
        {
          key: "default",
          value: "default",
        },
        {
          key: "circle",
          value: "circle",
        },
        {
          key: "round",
          value: "round",
        },
      ],
      size: [
        {
          key: "large",
          value: "large",
        },
        {
          key: "middle",
          value: "middle",
        },
        {
          key: "small",
          value: "small",
        },
      ],
      type: [
        {
          key: "primary",
          value: "primary",
        },
        {
          key: "ghost",
          value: "ghost",
        },
        {
          key: "dashed",
          value: "dashed",
        },
        {
          key: "link",
          value: "link",
        },
        {
          key: "text",
          value: "text",
        },
        {
          key: "default",
          value: "default",
        },
      ],
    },
  },
];

export const componentLayoutArr: Component[] = [
  {
    key: "GridRow",
    name: "栅格",
    tag: "a-row",
  },
  {
    key: "GridCol",
    name: "栅格",
    tag: "a-col",
  },
  {
    key: "Space",
    name: "间距",
    tag: "a-space",
  },
];

export const componentNavigationArr: Component[] = [
  {
    key: "Affix",
    name: "固钉",
    tag: "a-affix",
  },
  {
    key: "Breadcrumb",
    name: "面包屑",
    tag: "a-breadcrumb",
  },
  {
    key: "Dropdown",
    name: "下拉菜单",
    tag: "a-dropdown",
  },
  {
    key: "Menu",
    name: "导航菜单",
    tag: "a-menu",
  },
  {
    key: "PageHeader",
    name: "页头",
    tag: "a-page-header",
  },
  {
    key: "Pagination",
    name: "分页",
    tag: "a-pagination",
  },
  {
    key: "Steps",
    name: "步骤条",
    tag: "a-steps",
  },
];

export const componentDataEntryArr: Component[] = [
  {
    key: "AutoComplete",
    name: "自动完成",
    tag: "a-auto-complete",
  },
  {
    key: "Cascader",
    name: "级联选择",
    tag: "a-cascader",
  },
  {
    key: "Checkbox",
    name: "多选框",
    tag: "a-checkbox",
  },
  {
    key: "DatePicker",
    name: "日期选择框",
    tag: "a-date-picker",
  },
  {
    key: "FormModel",
    name: "日期选择框",
    tag: "a-form",
  },
  {
    key: "Input",
    name: "输入框",
    tag: "a-input",
  },
  {
    key: "InputNumber",
    name: "数字输入框",
    tag: "a-input-number",
  },
  {
    key: "Mentions",
    name: "提及",
    tag: "a-mentions",
  },
  {
    key: "Radio",
    name: "单选框",
    tag: "a-radio",
  },
  {
    key: "Rate",
    name: "评分",
    tag: "a-rate",
  },
  {
    key: "Select",
    name: "选择器",
    tag: "a-select",
  },
  {
    key: "Slider",
    name: "滑动输入条",
    tag: "a-slider",
  },
  {
    key: "Switch",
    name: "开关",
    tag: "a-switch",
  },
  {
    key: "TimePicker",
    name: "时间选择框",
    tag: "a-time-picker",
  },
  {
    key: "Transfer",
    name: "穿梭框",
    tag: "a-transfer",
  },
  {
    key: "TreeSelect",
    name: "树选择",
    tag: "a-tree-select",
  },
  {
    key: "Upload",
    name: "上传",
    tag: "a-upload",
  },
];

export const componentDataDisplayArr: Component[] = [
  {
    key: "Avatar",
    name: "头像",
    tag: "a-avatar",
  },
  {
    key: "Badge",
    name: "徽标数",
    tag: "a-badge",
  },
  {
    key: "Calendar",
    name: "日历",
    tag: "a-calendar",
  },
  {
    key: "Card",
    name: "卡片",
    tag: "a-card",
  },
  {
    key: "Carousel",
    name: "走马灯",
    tag: "a-carousel",
  },
  {
    key: "Collapse",
    name: "折叠面板",
    tag: "a-collapse",
  },
  {
    key: "Comment",
    name: "评论",
    tag: "a-comment",
  },
  {
    key: "Descriptions",
    name: "描述列表",
    tag: "a-descriptions",
  },
  {
    key: "Empty",
    name: "空状态",
    tag: "a-empty",
  },
  {
    key: "List",
    name: "列表",
    tag: "a-list",
  },
  {
    key: "Popover",
    name: "气泡卡片",
    tag: "a-popover",
  },
  {
    key: "Statistic",
    name: "统计数值",
    tag: "a-statistic",
  },
  {
    key: "Table",
    name: "表格",
    tag: "a-table",
  },
  {
    key: "Tabs",
    name: "标签页",
    tag: "a-tabs",
  },
  {
    key: "Tag",
    name: "标签",
    tag: "a-tag",
  },
  {
    key: "Timeline",
    name: "时间轴",
    tag: "a-timeline",
  },
  {
    key: "Tooltip",
    name: "文字提示",
    tag: "a-tooltip",
  },
  {
    key: "Tree",
    name: "树形控件",
    tag: "a-tree",
  },
];

export const componentFeedbackArr: Component[] = [
  {
    key: "Alter",
    name: "警告提示",
    tag: "a-alter",
  },
  {
    key: "Drawer",
    name: "抽屉",
    tag: "a-drawer",
  },
  {
    key: "Modal",
    name: "对话框",
    tag: "a-modal",
  },
  {
    key: "Popconfirm",
    name: "警告提示",
    tag: "a-popconfirm",
  },
  {
    key: "Progress",
    name: "进度条",
    tag: "a-progress",
  },
  {
    key: "Result",
    name: "结果",
    tag: "a-result",
  },
  {
    key: "Skeleton",
    name: "骨架屏",
    tag: "a-skeleton",
  },
];
