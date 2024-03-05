import React from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';


export function Perfil(){

return(
    <View style={styles.container}>
        <View style={styles.perfil}>
        <Image style={styles.img} alt=""source={require('../perfil/iconeperfil.png')}/>
        <Text style={styles.dados}>Seus Dados</Text>
        <Text style={styles.Name}>Nome</Text>
        <Text style={styles.profileName}>Seu Nome</Text>
        <Text style={styles.Email}>E-mail</Text>
        <Text style={styles.profileEmail}>exemplo.@acad.ifma.edu.br</Text>
        </View>
    </View>
)}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#F6FFF7',
    },
    perfil:{
    padding: 17,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    marginTop: 20,
    },
    img:{
    width: 150,
    height: 150,
    },
    dados:{
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#090909',   
    },
    Name:{
    marginTop: 12,
    fontSize: 20,
    fontWeight: '500',
    color: '#090909',
    marginRight: 280,
    },
    profileName:{
    marginTop: 13,
    fontSize: 16,
    fontWeight: '400',
    color: '#848484', 
    marginRight: 260,
    },
    Email: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '500',
    color: '#090909', 
    marginRight: 280, 
    },
    profileEmail: {
    marginTop: 7,
    fontSize: 16,
    fontWeight: '400',
    color: '#848484',
    marginRight: 140,
    },
})