export enum ButtonColor {
  yellow = '#F7EE55',
  black = '#000000',
  red = '#DA1515'
}

export interface IButtonProps {
  colorButton?: ButtonColor;
  onClick: () => void;
  children: JSX.Element;
}
