import React from 'react'
import {View, StyleSheet, Image, Text, TextInput, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Noturno() {
  return (
    <View style = {styles.container}>
      <Text style={styles.intro}> Seja bem-vindo ao IF-GREEN! </Text>
      <Text style={styles.frase}> Conhecimento é crescimento </Text>
      <Image style={styles.img} source={require('../../../assets/ifgreenlogo.png')}/>

      <View style={styles.log}> 
     <Text style={styles.label}>Nome:</Text>
     <TextInput style={styles.input} type="password"/>

     <Text style={styles.label}>E-mail:</Text>
     <TextInput style={styles.input} type="text"/>
     
     <Text style={styles.label}>Senha:</Text>
     <TextInput style={styles.input} type="password"/>
    </View>

   <View> 
    <TouchableOpacity style={styles.btn} onPress={() =>{}}><Text style={styles.btntext}>Cadastre-se</Text></TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  log: {
    marginBottom: 12,
  },

  img:{
    width: 500,
    height: 300,
  },

  intro: {
   fontSize: 20,
   marginBottom: 10,
   letterSpacing: 0.9,
   color: '#0A4F11',
   fontWeight: 'bold'
  },

  frase: {
    fontSize: 15,
    marginBottom: 10,
    letterSpacing: 0.9,
    color: '#0A4F11',
    fontWeight: 'bold',
  },

  label: {
    fontSize: 15,
    marginTop: 2,
    marginBottom: 4,
    color: '#0A4F11',
    fontWeight: 'bold'
  },

  input: {
   borderWidth:2, 
   borderColor: '#0A4F11',
   backgroundColor: '#f2f6e8',
   width: 275,
   padding:5, 
   borderRadius:10, 
   marginBottom: 11,
   letterSpacing: 0.75, 
  },

  btn: {
   marginTop: 5,
   textAlign: 'center',
   fontWeight: 'bold',
   width: 170,
   borderWidth: 2,
   borderColor: '#4e660b', 
   borderRadius: 10,
   padding: 10,
   backgroundColor: '#f2f6e8',
  },

  btntext: {
   fontSize: 17, 
   fontWeight: 'bold',
   color: '#0A4F11', 
   marginLeft: 23,
  },
});