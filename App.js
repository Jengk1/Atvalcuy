import react from 'react';
import {View, Text, Image, Linking, TextInput, Button, ScrollView} from 'react-native';

const App = () => {

  return(
    <View style={{backgroundColor: 'cyan', flex: 1, alignItems: 'center', padding: 40}}>
      <Image style={{width:160, height:250, borderRadius: 10}} source={require('./assets/90ec4f7fc35c9dda8f9bd444635ae5b5.jpg')} />
      <Text style={{fontWeight:'bold', textAlign: 'center', color: 'black', fontSize: 25}}>Ayatullah Velayati Alkahfi
    </Text>
      <Text style={{fontWeight: 'normal', textAlign: 'center', color:'black', fontSize:15}}>Perkenalkan nama aing Ayatullah Velayati Alkahfi, Siswa SMK Telkom Purwokerto. Saya kelas 12 dan berumur 18 anjayy
    </Text>
    <View style= {{padding: 15}}>
    <Button title= "Click Here" color='black' onPress={ () => Linking.openURL (instagram)} />
    </View>
    </View>
    
  );
};

export default App