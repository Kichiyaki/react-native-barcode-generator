import React from 'react';
import { Text, View } from 'react-native';
import Barcode from '@kichiyaki/react-native-barcode-generator';

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 42, textAlign: 'center', marginBottom: 30 }}>
        Examples
      </Text>
      <Barcode
        format="EAN13"
        value="0123456789012"
        text="0123456789012"
        width={3}
        style={{ marginBottom: 60 }}
      />
      <Barcode
        format="CODE128B"
        value="0000002021954Q"
        text="0000002021954Q"
        width={2}
      />
    </View>
  );
};

export default App;
