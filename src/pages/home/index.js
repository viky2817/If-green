import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.intro}>Bem-vindo ao IF-GREEN</Text>
      <Text style={styles.nomecad}>Conhecimeto é crescimento!</Text>
    
     <View style={styles.image}>
      <Image source={require('../../../assets/logo.png')}/>
     </View>

      <View style={styles.button}>
        <TouchableOpacity  onPress={() => navigation.navigate("Feed")}>
            <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
  },

  intro: { 
    marginTop: 120,
    fontSize: 20,
    color: '#0A4F11',
    fontWeight: 'bold',
  },

  image:{
    marginTop: 100,
    marginBottom: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: '#70B259',
    height: 50,
    width:170,
    borderRadius: 10,
  },

  text: {
    fontSize: 18,
    color: '#ffff',
    textAlign: "center",
    marginTop: 12,
  },

  link: {
    marginTop: 20,
  },

  nomecad:{
    fontSize: 17,
    color: '#0A4F11',
    flexDirection: 'row',
    marginTop: 10,
    fontWeight: '500',

  },
});