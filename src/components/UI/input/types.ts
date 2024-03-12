export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  pattern?: string;
  value?: string;
}
