import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';


export function Config() {
  const navigation = useNavigation();
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode((prev) => !prev);
  };

  return (
    <View style={[styles.container, isNightMode && styles.nightModeContainer]}>
      <Text style={[styles.title, isNightMode && styles.nightModeTitle]}>Configurações</Text>
      <View style={styles.header}>
        <Text style={styles.textheader}>Preferências</Text>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('perfil')}>
          <FeatherIcon name="user" size={20} color="#333" style={styles.icon} />
          <Text style={styles.text}>Perfil</Text>
          <FeatherIcon name="chevron-right" size={22} color="#ababab" style={styles.arrowone} />
        </TouchableOpacity>

        <View style={styles.btn}>
          <FeatherIcon name="moon" size={20} color="#333" style={styles.icon} />
          <Text style={styles.text}>Modo Noturno</Text>
          <Switch value={isNightMode} onValueChange={toggleNightMode} style={styles.switch} />
        </View>
      </View>

      <View style={styles.header}>
        <Text style={styles.textheader}>Conta</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
          <FeatherIcon name="log-out" size={20} color="#333" style={styles.icon} />
          <Text style={styles.text}>Sair da Conta</Text>
          <FeatherIcon color="#ababab" size={22} name="chevron-right" style={styles.arrowtwo} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FFF7',
  },
  nightModeContainer: {
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1d1d1d',
    paddingRight: 24,
    marginBottom: 25,
    marginTop: 20,
    paddingLeft: 25,
  },
  nightModeTitle: {
    color: '#fff',
  },
  header: {},
  textheader: {
    fontSize: 14,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    paddingRight: 24,
    marginBottom: 5,
    marginTop: 5,
    paddingLeft: 25,
  },
  btn: {
    flexDirection: 'row',
    paddingLeft: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    height: 50,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginLeft: 18,
  },
  icon: {
    fontSize: 23,
  },
  arrowone: {
    marginLeft: 240,
    flexDirection: 'row',
    fontSize: 25,
  },
  switch:{
    marginLeft: 160,
  },
  arrowtwo: {
    marginLeft: 175,
    flexDirection: 'row',
    fontSize: 25,
  },
});
