import React,{ useState } from 'react'
import {StyleSheet, SafeAreaView, ScrollView, View, Text, Image,TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

export function Profile() {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ScrollView> 
         <Text style={styles.title}>Lixo, Importancia do cuidado!</Text>
         <View>
         <Image style={styles.image} source={require('../profile/lixo.png')}/>
         </View>
         <Text style={styles.textone}><Text style={styles.bold}>Saúde e Bem-Estar:</Text>{'\n'} {'\n'} Manter a área verde bem-cuidada cria um ambiente mais agradável e saudável. As áreas verdes proporcionam espaços de recreação, promovem a biodiversidade e ajudam a melhorar a qualidade do ar. Isso, por sua vez, contribui para o bem-estar físico e mental de todos que frequentam a escola.
          {'\n'} {'\n'}<Text style={styles.bold}>Educação Ambiental:</Text> {'\n'} {'\n'}A escola desempenha um papel essencial na educação ambiental dos estudantes. Ao demonstrar práticas sustentáveis, como o cuidado com a área verde e a gestão responsável do lixo, a instituição contribui para a formação de cidadãos conscientes e responsáveis ambientalmente. {'\n'} {'\n'}
          <Text style={styles.bold}>Respeito ao Meio Ambiente:</Text> {'\n'} {'\n'} Fomentar o respeito pela natureza desde a infância é crucial. Cuidar da área verde da escola ensina os alunos sobre a importância da preservação ambiental e os incentiva a adotar comportamentos sustentáveis em suas vidas cotidianas. {'\n'} {'\n'}
          <Text style={styles.bold}>Estética e Organização:</Text> {'\n'} {'\n'} Uma área verde bem-cuidada contribui para a estética e organização do ambiente escolar. Isso cria um ambiente mais agradável para o aprendizado, promovendo uma atmosfera positiva e acolhedora. {'\n'}{'\n'}
          <Text style={styles.bold}>Redução de Impactos Ambientais:</Text> {'\n'}{'\n'} Uma gestão eficaz do lixo reduz os impactos ambientais negativos. A separação correta dos resíduos, a reciclagem e a redução do desperdício contribuem para a diminuição da pegada ecológica da escola.  {'\n'}{'\n'}
          <Text style={styles.bold}>Exemplo para a Comunidade:</Text> {'\n'} {'\n'} A escola é uma parte integrante da comunidade. Ao adotar práticas sustentáveis, a instituição serve como um exemplo positivo para os membros da comunidade, inspirando a adoção de comportamentos responsáveis em outros contextos.

</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FFF7',
  },
  title:{
    fontSize: 18,
    padding: 30,
    fontWeight: 'bold',
    marginLeft: 50,
  },
  image:{
    alignSelf: 'center',
    height: 220,
    width: 250, 
    borderRadius: 20,
  },
  textone:{
   textAlign: 'justify',
   padding: 25,
   fontSize: 17,
  },
  texttwo:{
    textAlign: 'justify',
   padding: 25,
   fontSize: 17,
   fontWeight:'bold',
   marginTop: -25,
  },
  bold:{
    fontWeight: 'bold',
  },
});