import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import Barcode from '@kichiyaki/react-native-barcode-generator';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 72, textAlign: 'center', marginBottom: 30 }}>
        Examples
      </Text>
      <Barcode
        format="EAN13"
        value="0123456789012"
        text="0123456789012"
        style={{ marginBottom: 40 }}
        maxWidth={Dimensions.get('window').width / 2}
      />
      <Barcode
        format="CODE128B"
        value="0000002021954Q"
        text="0000002021954Q"
        maxWidth={(Dimensions.get('window').width * 2) / 3}
      />
    </View>
  );
};

export default App;
