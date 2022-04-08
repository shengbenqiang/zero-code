export interface Component extends commonObj {
  key: string;
  name: string;
  tag: string;
  uuid: string;
  content?: string;
  props: commonObj;
  config?: object;
  locateProps?: commonObj;
  formItemProps?: commonObj;
}

export interface DesignDate {
  name: string;
  selectComponent: Component;
  addRenderComponent: SelectComponent;
}

export interface OpenObject extends SelfEvent {
  [key: string]: unknown;
}

export interface SelfEvent {
  to: OpenObject;
}

interface commonObj {
  [key: string]: string | boolean | number | undefined | unknown;
}

export interface RenderDate {
  renderComponents: Component[];
  changeSelectComponent: ChangeSelectComponent;
}

type SelectComponent = (attrs: Component) => void;
type ChangeSelectComponent = (uuid: string) => void;
