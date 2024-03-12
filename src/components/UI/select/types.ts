export interface ISelectProps {
  defaultValue?: string;
  value: string;
  option: {
    value: string;
    name: string;
  }[];
  onChange: (event: string) => void;
}
