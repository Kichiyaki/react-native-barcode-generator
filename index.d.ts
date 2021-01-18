import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

export type Format =
  | 'CODE39'
  | 'CODE128'
  | 'CODE128A'
  | 'CODE128B'
  | 'CODE128C'
  | 'EAN13'
  | 'EAN8'
  | 'EAN5'
  | 'EAN2'
  | 'UPC'
  | 'UPCE'
  | 'ITF14'
  | 'ITF'
  | 'MSI'
  | 'MSI10'
  | 'MSI11'
  | 'MSI1010'
  | 'MSI1110'
  | 'pharmacode'
  | 'codabar';

export interface BarcodeProps {
  value: string;
  width?: number;
  maxWidth?: number;
  height?: number;
  format?: Format;
  lineColor?: string;
  background?: string;
  text?: React.ReactNode;
  textStyle?: TextStyle;
  style?: ViewStyle;
  onError?: (err: any) => void;
}

export default function Barcode(props: BarcodeProps): JSX.Element;
