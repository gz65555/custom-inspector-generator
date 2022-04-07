export enum FormType {
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
  type: FormType,
  label: string,
}

interface TextConfig extends BaseConfig {
  type: FormType.Text,
  defaultValue: string,
}
