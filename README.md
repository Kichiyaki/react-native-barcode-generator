# @kichiyaki/react-native-barcode-generator

![Screenshot](/images/example.png?raw=true)

A React-Native component for generating barcodes.

## Installation

Using npm:

```shell
npm install --save react-native-svg @kichiyaki/react-native-barcode-generator
```

or using yarn:

```shell
yarn add react-native-svg @kichiyaki/react-native-barcode-generator
```

## Properties

| Prop       | Type        | Description                                            |
| ---------- | ----------- | ------------------------------------------------------ |
| value      | `string`    | the text to be encoded                                 |
| width      | `number`    | the width of a single bar                              |
| maxWidth   | `number`    | the max width of the barcode                           |
| height     | `number`    | the height of the barcode                              |
| format     | `string`    | select which [barcode type](#supported-formats) to use |
| lineColor  | `string`    | set the color of a single bar                          |
| background | `string`    | set the color of the container                         |
| text       | `component` | an optional text that will be render under the barcode |
| textStyle  | `object`    | styles to be applied on the text component             |
| style      | `object`    | styles to be applied on the container                  |
| onError    | `function`  | an optional error handler                              |

## Supported formats

Only flat versions are available for now.

- CODE39
- CODE128
- CODE128A
- CODE128B
- CODE128C
- EAN13
- EAN8
- EAN5
- EAN2
- UPC
- UPCE
- ITF14
- ITF
- MSI
- MSI10
- MSI11
- MSI1010
- MSI1110
- pharmacode
- codabar
