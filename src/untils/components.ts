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
  {
    key: "Icon",
    name: "图标",
  },
];

export const componentLayoutArr: Component[] = [
  {
    key: "Grid",
    name: "栅格",
  },
  {
    key: "Layout",
    name: "布局",
  },
  {
    key: "Space",
    name: "间距",
  },
];

export const componentNavigationArr: Component[] = [
  {
    key: "Affix",
    name: "固钉",
  },
  {
    key: "Breadcrumb",
    name: "面包屑",
  },
  {
    key: "Dropdown",
    name: "下拉菜单",
  },
  {
    key: "Menu",
    name: "导航菜单",
  },
  {
    key: "PageHeader",
    name: "页头",
  },
  {
    key: "Pagination",
    name: "分页",
  },
  {
    key: "Steps",
    name: "步骤条",
  },
];

export const componentDataEntryArr: Component[] = [
  {
    key: "AutoComplete",
    name: "自动完成",
  },
  {
    key: "Cascader",
    name: "级联选择",
  },
  {
    key: "Checkbox",
    name: "多选框",
  },
  {
    key: "DatePicker",
    name: "日期选择框",
  },
  {
    key: "FormModel",
    name: "日期选择框",
  },
  {
    key: "Input",
    name: "输入框",
  },
  {
    key: "InputNumber",
    name: "数字输入框",
  },
  {
    key: "Mentions",
    name: "提及",
  },
  {
    key: "Radio",
    name: "单选框",
  },
  {
    key: "Rate",
    name: "评分",
  },
  {
    key: "Select",
    name: "选择器",
  },
  {
    key: "Slider",
    name: "滑动输入条",
  },
  {
    key: "Switch",
    name: "开关",
  },
  {
    key: "TimePicker",
    name: "时间选择框",
  },
  {
    key: "Transfer",
    name: "穿梭框",
  },
  {
    key: "TreeSelect",
    name: "树选择",
  },
  {
    key: "Upload",
    name: "上传",
  },
];

export const componentDataDisplayArr: Component[] = [
  {
    key: "Avatar",
    name: "头像",
  },
  {
    key: "Badge",
    name: "徽标数",
  },
  {
    key: "Calendar",
    name: "日历",
  },
  {
    key: "Card",
    name: "卡片",
  },
  {
    key: "Carousel",
    name: "走马灯",
  },
  {
    key: "Collapse",
    name: "折叠面板",
  },
  {
    key: "Comment",
    name: "评论",
  },
  {
    key: "Descriptions",
    name: "描述列表",
  },
  {
    key: "Empty",
    name: "空状态",
  },
  {
    key: "List",
    name: "列表",
  },
  {
    key: "Popover",
    name: "气泡卡片",
  },
  {
    key: "Statistic",
    name: "统计数值",
  },
  {
    key: "Table",
    name: "表格",
  },
  {
    key: "Tabs",
    name: "标签页",
  },
  {
    key: "Tag",
    name: "标签",
  },
  {
    key: "Timeline",
    name: "时间轴",
  },
  {
    key: "Tooltip",
    name: "文字提示",
  },
  {
    key: "Tree",
    name: "树形控件",
  },
];

export const componentFeedbackArr: Component[] = [
  {
    key: "Alter",
    name: "警告提示",
  },
  {
    key: "Drawer",
    name: "抽屉",
  },
  {
    key: "Message",
    name: "全局提示",
  },
  {
    key: "Modal",
    name: "对话框",
  },
  {
    key: "Notification",
    name: "通知提醒框",
  },
  {
    key: "Popconfirm",
    name: "警告提示",
  },
  {
    key: "Progress",
    name: "进度条",
  },
  {
    key: "Result",
    name: "结果",
  },
  {
    key: "Skeleton",
    name: "骨架屏",
  },
  {
    key: "Spin",
    name: "加载中",
  },
];
