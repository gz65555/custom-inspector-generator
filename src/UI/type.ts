export enum FormItemType {
  Text,
  Number,
  Vector4,
  Vector3,
  Vector2,
  Color,
  Switch,
  Slider,
  Select,
}

interface BaseConfig {
  type: FormItemType;
  label: string;
  when?: () => boolean;
}

export interface TextConfig extends BaseConfig {
  type: FormItemType.Text;
  defaultValue?: string;
  maxLength?: string;
}

export interface NumberConfig extends BaseConfig {
  type: FormItemType.Number;
  min?: number;
  max?: number;
}

export type FormItemConfig = TextConfig | NumberConfig;
