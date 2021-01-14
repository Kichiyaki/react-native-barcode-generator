import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import barcodes from 'jsbarcode/src/barcodes';

const Barcode = ({
  value = '',
  width = 2,
  height = 100,
  format = 'CODE128',
  lineColor = '#000000',
  background = '#ffffff',
  text,
  textStyle,
  style,
}) => {
  const drawRect = (x, y, width, height) => {
    return `M${x},${y}h${width}v${height}h-${width}z`;
  };

  const drawSvgBarCode = (encoded) => {
    const rects = [];
    const { data: binary } = encoded;

    let barWidth = 0;
    let x = 0;
    let yFrom = 0;

    for (let b = 0; b < binary.length; b++) {
      x = b * width;
      if (binary[b] === '1') {
        barWidth++;
      } else if (barWidth > 0) {
        rects[rects.length] = drawRect(
          x - width * barWidth,
          yFrom,
          width * barWidth,
          height,
        );
        barWidth = 0;
      }
    }

    if (barWidth > 0) {
      rects[rects.length] = drawRect(
        x - width * (barWidth - 1),
        yFrom,
        width * barWidth,
        height,
      );
    }

    return rects;
  };

  const encode = (text, Encoder) => {
    if (typeof text !== 'string' || text.length === 0) {
      console.error('Barcode value must be a non-empty string');
    }
    const encoder = new Encoder(text, {
      width,
      format,
      height,
      lineColor,
      background,
      flat: true,
    });
    if (!encoder.valid()) {
      console.error('Invalid barcode for selected format.');
    }
    return encoder.encode();
  };

  const { bars, barCodeWidth } = useMemo(() => {
    const encoder = barcodes[format];
    if (!encoder) {
      console.error('Invalid barcode format.');
    }
    const encoded = encode(value, encoder);
    return {
      bars: drawSvgBarCode(encoded),
      barCodeWidth: encoded.data.length * width,
    };
  }, [value, width, height, format, lineColor, background]);

  return (
    <View
      style={[{ backgroundColor: background, alignItems: 'center' }, style]}
    >
      <Svg height={height} width={barCodeWidth} fill={lineColor}>
        <Path d={bars.join(' ')} />
      </Svg>
      {text && <Text style={[{ textAlign: 'center' }, textStyle]}>{text}</Text>}
    </View>
  );
};

export default Barcode;
