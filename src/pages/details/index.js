import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import { useRoute } from '@react-navigation/native'

export function Details({navigation}){
    const {params} = useRoute();
    const Separator = () => <View style={styles.separator} />;
    return(
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
            <Text style={styles.text}>{params.item.text}</Text>
            <Image source={{uri: params.item.image}} style={styles.img}/>
            <Text style={styles.texttwo}>{params.item.texttwo}</Text><Separator/>

            <Text style={styles.textbold}>{params.item.textA}</Text>
            <Text style={styles.textthree}>{params.item.textthree}</Text>
            <Text style={styles.textbold}>{params.item.textB}</Text>
            <Text style={styles.textfour}>{params.item.textfour}</Text>
            <Text style={styles.textbold}>{params.item.textC}</Text>
            <Text style={styles.textfour}>{params.item.textfive}</Text>
            <Text style={styles.textbold}>{params.item.textD}</Text>
            <Text style={styles.textfour}>{params.item.textsix}</Text>
            <Text style={styles.textbold}>{params.item.textE}</Text>
            <Text style={styles.textfour}>{params.item.textseven}</Text>
            <Text style={styles.textbold}>{params.item.textF}</Text>
            <Text style={styles.textfour}>{params.item.texteight}</Text>
            <TouchableOpacity style={styles.btn}  onPress={() => navigation.navigate("Feed")}><Text style={styles.textbtn}>Concluido</Text></TouchableOpacity>
        </View>
       </ScrollView> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6FFF7', 
    },
    text:{
        color: '#3d7d45',
        textAlign: 'center',
        padding: 16,
        fontSize: 20,
        fontWeight: 'bold',
    },
    texttwo:{
       color: '#184a1e',
       textAlign: 'center',
       padding: 20,
       fontSize: 20,
       fontWeight: 'bold'
    },
        textthree:{
        padding: 25,
        fontSize: 18,
        textAlign: 'justify',
        marginBottom: -15,
    },
    separator:{
        height: 20,
        backgroundColor: '#3d7d45',
        marginVertical: 10,
        marginTop: 50,
        marginBottom: 20,
    },
    textfour:{
        padding: 24,
        fontSize: 18,
        textAlign: 'justify',
    },
    textbold:{
        padding: 25,
        marginBottom: -15,
        paddingVertical: 1,
        fontSize: 18,
        textAlign: 'justify',
        fontWeight: 'bold',
    },
    btn:{
        backgroundColor: '#70B259',
        height: 50,
        width:170,
        borderRadius: 10,
        marginLeft: 110,
    },
    textbtn:{
        fontSize: 18,
        color: '#ffff',
        textAlign: "center",
        marginTop: 12,  
    },
    img:{
       alignSelf: 'center',
       height: 220,
       width: 250, 
       borderRadius: 20,
    },
})