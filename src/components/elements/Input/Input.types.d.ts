export type InputProps = {
  type: string;
  placeholder: string;
  icon?: string;
  style?: React.CSSProperties;
  value?: string;
  name?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, v: string) => void;
};
