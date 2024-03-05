import React, { useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image,  Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const widhtWindow = Dimensions.get("window").width

export function Feed() {

  const navigation = useNavigation()
  const separatorComponent = () => <View style={styles.separator} />;
  const DATA = [
    {
      id: 0,
      image: 'https://seed2plant.in/cdn/shop/files/Allamanda-Yellow-Creeper-Plant-1.jpg?v=1689069068&width=493',
      title: 'Allamanda',
      text: 'Detalhes sobre a planta',
      texttwo: '5 cuidados necessários :',
      textA: 'Rega :',
      textthree: 'As regas da alamanda podem ser frequentes e abundantes, no entanto a planta não tolera o encharcamento do solo. \nDessa forma,  recomenda-se a irrigação a cada 2 ou 3 dias, bem como quando o substrato estiver completamente seco.' ,
      textB: 'Iluminação :',
      textfour: 'A Planta precisa estar exposta à luz do sol direta e deve-se evitar plantá-la próxima a cercas e muros frágeis.',
      textC: 'Solo :',
      textfive: 'O solo ideal para o cultivo de alamanda precisa ser bem drenado e com adubo orgânico composto  (de adubo animal e folhas decompostas) rico em fósforo para ajudar na florada.',
      textD: 'Floração :',
      textsix: 'Por ter uma floração duradoura, a alameda precisa de um bom substrato e a adubação precisa ser frequente.\nÉ indicado o uso de fertilizantes naturais, como o esterco de boi ou o húmus de minhoca, que são mais sustentáveis.',
      textE: 'Muda :',
      textseven: 'A alamanda se multiplica por meio da polinização das sementes ou estaquia. Para o plantio das estacas, basta cortar um ramo da planta e colocá-la em um recipiente com água. \nApós o enraizamento, a nova muda deve ser plantada em um substrato de qualidade, fértil e drenável. Nos primeiros dias de cultivo, lembre-se que a muda jovem não deve ser exposta ao sol, pois não é muito resistente.',
      textF: 'Localização no Campus :',
      texteight: 'Perto da Rampa da entrada.',
    },

    {
      id: 2,
      image: 'https://www.jardiland.pt/wp-content/themes/2016fev/timthumb.php?src=https://www.jardiland.pt/wp-content/uploads/2012/06/Bougainvillea1.jpg&h=172&w=172&zc=1',
      title: 'Buganvilia',
      text: 'Detalhes sobre a planta',
      texttwo: '5 cuidados necessários :',
      textA: 'Rega :',
      textthree: 'Para regar a bougainville da forma adequada, molhe a planta em dias alternados, de 2 a 3 vezes na semana, dependendo da estação do ano. Mais água em tempo seco, menos água em tempo chuvoso.\n ' ,
      textB: 'Iluminação :',
      textfour: 'É importante que localize suas buganvílias em um lugar ensolarado, já que é uma planta que requer muita luz solar. \nNo caso das espécies de buganvília que crescem no interior, existem inúmeras variedades desta espécie, será necessário colocá-las nos locais com mais luz ou em sacadas. ',
      textC: 'Solo :',
      textfive: 'O ideal é que o solo tenha um pH entre 5,0 e 6,0 de acidez para essa espécie. \nNa hora de plantar, opte por locais onde as raízes possam se desenvolver livremente. Cave um buraco profundo e use um fertilizante já nessa etapa. ',
      textD: 'Floração :',
      textsix: 'A floração ocorre de novembro à fevereiro. Uma das características mais marcantes dos vegetais do gênero Bougainvillea é a presença de brácteas, as quais são folhas modificadas de cores chamativas que visam à atração de polinizadores.',
      textE: 'Muda :',
      textseven: 'De acordo com os especialistas, a melhor época para plantar e fazer mudas da planta bougainville é durante a primavera e o verão. \nTal razão se explica pelo fato de que a planta necessita de bastante sol para conseguir se desenvolver da forma adequada e assim fazer uma bela muda dessas plantas.',
      textF: 'Localização no Campus :',
      texteight: 'Fica no corredor entre o bloco A e B e no corredor antes do pátio.',
    },

    {
      id: 4,
      image: 'https://img.fazendinha.me/production/produtor/550/produtos/4880/casa-das-folhas-babosa-1-kilo-casa-das-folhas-1662125335.jpeg',
      title: 'Babosa',
      text: 'Detalhes sobre a planta',
      texttwo: '5 cuidados necessários :',
      textA: 'Rega :',
      textthree: 'Como a babosa é uma planta suculenta, ela não gosta de solos encharcados. Por isso, regue-a uma vez por semana, pulverizando a água sobre a planta.\n' ,
      textB: 'Iluminação :',
      textfour: 'Deve ser cultivada em sol pleno ou meia-sombra. \nSe a sua babosa estiver dentro de casa, escolha um local que receba, ao menos, 8 horas de luz natural por dia.',
      textC: 'Solo :',
      textfive: 'A planta requer um solo bem drenado, com pouca argila para que drene bem a água e não tenha risco de a raiz apodrecer. O recomendado é uma mistura de 50% de areia média e 50% de terra orgânica adubada ou mistura de terra para cactos e suculentas que contenha bastante fósforo.',
      textD: 'Floração :',
      textsix: 'A floração da babosa não é um evento tão comum ou proeminente como em algumas outras plantas ornamentais, uma vez que a babosa é cultivada principalmente por suas propriedades suculentas. \nNo entanto, quando a babosa atinge a maturidade e está em condições ideais de cultivo, pode produzir uma haste floral.',
      textE: 'Muda :',
      textseven: 'Caso deseje gerar mudas, mantenha sua planta em um vaso menor, assim, para sobreviver, a babosa gerará “filhotes” que você poderá retirar e plantar em um vaso maior.',
      textF: 'Localização no Campus :',
      texteight: 'Fica em alguns locais espalhados pelo campus, mas pode ser encontrada mais facilmente no bloco A.',
    },

  ]

  const SECOND_DATA = [
    {
      id: 1,
      image: 'https://www.picturethisai.com/image-handle/website_cmsname/image/1080/154018648262967327.jpeg?x-oss-process=image/format,webp/resize,s_422&v=1.2',
      title: 'Frangipani',
      text: 'Detalhes sobre a Planta',
      texttwo: '5 cuidados necessários :',
      textA: 'Rega :',
      textthree: 'A rega da Frangipani é moderada, ou seja, pode ser realizada cerca de três vezes por semana. \nOpte por fazê-la apenas quando o solo estiver bem seco. Tome cuidado para não regar frequentemente, pois a mesma poderá murchar ou até morrer. \n' ,
      textB: 'Iluminação :',
      textfour: 'Cultive a Frangipani em sol forte, pelo menos 5 horas de sol direto por dia.',
      textC: 'Solo :',
      textfive: 'A Frangipani é ideal para ser cultivada em temperaturas tropicais. Como toda planta tropical, precisa de sol forte, com mínimo de cinco horas por dia, e solo úmido.',
      textD: 'Floração :',
      textsix: 'A floração desta planta acontece apenas durante o inverno e a primavera, mas o período pode variar de acordo com o clima de cada região.',
      textE: 'Muda :',
      textseven: 'Há três formas de cultivo, sendo a primeira por semente, germinação da semente em solo ou em papel toalha umidificado e colocado em pote, depois transfere-se para o solo ou vaso. \nJá a segunda é por estaquia, através da colocação de ramos direto no solo. \nA terceira é a Alporquia, a qual coloca um pouco de solo adubado em contato com o galho, até formar raízes, em seguida coloca-se no solo ou no vaso. \nDestes, a melhor forma é a estaquia.',
      textF: 'Localização no Campus :',
      texteight: 'Fica no bloco A.',
    },

    {
      id: 3,
      image: 'https://www.picturethisai.com/image-handle/website_cmsname/image/1080/201213887765413888.jpeg?x-oss-process=image/format,webp/resize,s_422&v=1.2',
      title: 'Ixora',
      text: 'Detalhes sobre a planta',
      texttwo: '5 cuidados necessários :',
      textA: 'Rega :',
      textthree: 'Após o plantio podem ser realizadas até três vezes na semana. Depois de enraizada, as regas devem ser reduzidas para uma única vez semanalmente. \nÉ importante que o solo fique apenas úmido, nunca encharcado. \n' ,
      textB: 'Iluminação :',
      textfour: 'É recomendado que seja cultivada sempre em sol pleno. Gosta de iluminação solar direta, durante todo o dia e não suporta geada.',
      textC: 'Solo :',
      textfive: 'É necessário que o substrato seja bem drenável evitando acúmulo de água e apodrecimento da raiz. \nDeve ser rico em matéria orgânica e se possível possuir o pH levemente ácido.',
      textD: 'Floração :',
      textsix: 'Para que a ixora floresça, é ideal que sejam feitas adubações pelo menos quatro vezes durante o ano. Deve ser usado adubo de gado bem curtido e composto orgânico, sendo aplicados depois de misturados ao redor da planta.',
      textE: 'Muda :',
      textseven: 'As mudas são feitas preferencialmente na primavera, através de galhos da planta que devem medir entre 10 a 15 centímetros. \nÉ ideal que o ramo escolhido seja de espessura fina e aspecto saudável.',
      textF: 'Localização no Campus :',
      texteight: 'Fica nos blocos B e C em frente as salas de aula e do lado esquerdo da Biblioteca.',
    },

    {
      id: 5,
      image: 'https://shop-static.arborday.org/media/0002204_first-editions-delta-blues-vitex_510.jpg',
      title: 'Vitex',
      text: 'Detalhes sobre a planta',
      texttwo: '5 cuidados necessários :',
      textA: 'Rega :',
      textthree: 'A Vitex prefere um solo levemente úmido. Regue a planta regularmente, especialmente durante períodos secos. Evite encharcar o solo, pois a Vitex não gosta de solos excessivamente úmidos.\n ' ,
      textB: 'Iluminação :',
      textfour: 'Essa planta gosta de luz solar plena. Plante-a em um local onde receba pelo menos 6 horas de luz solar direta por dia. Isso favorecerá o crescimento saudável e a floração.',
      textC: 'Solo :',
      textfive: 'O solo ideal para a Vitex é bem drenado e ligeiramente ácido a neutro. \nCertifique-se de que o solo permite uma boa drenagem para evitar o acúmulo de água ao redor das raízes.',
      textD: 'Floração :',
      textsix: 'Ela geralmente floresce durante a primavera e o verão. \nPara incentivar a floração, forneça luz solar adequada e evite podas excessivas, permitindo que a planta desenvolva seus botões florais.',
      textE: 'Muda :',
      textseven: 'A propagação da Vitex pode ser feita por meio de sementes ou estacas. \nSe deseja propagar por estacas, escolha uma parte saudável da planta, retire uma seção de galho e plante em solo úmido. Mantenha a umidade até que as raízes se desenvolvam.',
      textF: 'Localização no Campus :',
      texteight: 'Fica no bloco A (ao lado da jasmin-Café). ',
    },

    {
      id: 7,
      image: 'https://iloveflores.com/wp-content/uploads/2022/11/pragas-473280-2.jpg',
      title: 'Jasmim-Café',
      text: 'Detalhes sobre a planta',
      texttwo: '5 cuidados necessários :',
      textA: 'Rega :',
      textthree: ' A Jasmin-café prefere um solo levemente úmido. Regue quando o topo do solo estiver seco ao toque, evitando encharcar. Durante os meses mais quentes, aumente a frequência de rega, mas permita que o solo seque entre as regas.' ,
      textB: 'Iluminação :',
      textfour: 'A planta precisa ter 5 horas de sol por dia.',
      textC: 'Solo :',
      textfive: 'Utilize um solo bem drenado e rico em matéria orgânica. \nCertifique-se de que o solo permita a drenagem adequada para evitar o acúmulo de água, o que pode levar a problemas de raiz.',
      textD: 'Floração :',
      textsix: 'A Jasmin-café é apreciada por suas flores delicadas. Ela geralmente floresce na primavera e no verão. \nPara incentivar a floração, forneça um ambiente estável, evitando mudanças bruscas de temperatura ou condições extremas.',
      textE: 'Muda :',
      textseven: 'A propagação da Jasmin-café pode ser feita por estaquia. Corte um pedaço saudável do caule e plante em solo úmido. \nMantenha o solo levemente úmido até que as raízes se desenvolvam. Após o enraizamento, a muda pode ser transplantada para um vaso maior ou diretamente no solo.',
      textF: 'Localização no Campus :',
      texteight: 'Fica no bloco A (próxima a parede do pátio).',
    },
  ]

    const tamTotal = DATA.length + SECOND_DATA.length;
    const FINAL_DATA = [];
  
    for (let i = 0; i < tamTotal; i++) {
      if (i < DATA.length) {
        FINAL_DATA.push(DATA[i]);
      }
      if (i < SECOND_DATA.length) {
        FINAL_DATA.push(SECOND_DATA[i]);
      }
    }
    console.log(FINAL_DATA)


    function renderItem({ item, index }){
      const isLeft = index % 2 === 0;
        return(
          <TouchableOpacity  onPress={() => navigation.navigate('Detalhes', {item})} >
            <View style={[styles.card, isLeft ? styles.leftItem : styles.rightItem]}>
              <Image source={{uri: item.image}} style={styles.img} resizeMode='contain'/>
              <Text style={styles.name}>{item.title}</Text>
            </View>
          </TouchableOpacity>
  
        )
    }
  return (
    <View style={styles.container}>
      <FlatList showsVerticalScrollIndicator={false}
          data={FINAL_DATA}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={separatorComponent}
          renderItem={renderItem}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FFF7',
  },
  
  card:{
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    width: 200,
    height: 100,
    backgroundColor:"#B2D4A1",
    marginVertical: 10,
  },

  img:{
    borderRadius: 10,
    height: 100,
    width: 100,
    marginLeft:-19,
    marginRight:25, 
 },
 
  name:{    
    color: '#244f0f',
    fontSize: 20,
    fontWeight:'bold',
    marginRight: 50,

  },
  separator: {
    marginVertical:1,
  },

  leftItem: {
    width:"65%",
    left:widhtWindow - 275,
    borderRadius:10,
    textShadowColor:'transparent',
    backgroundColor: "#B2D4A1",
  },

  rightItem: {
    width:"65%",
    backgroundColor: "#B2D4A1",
    right:-20,
    borderRadius:10,
    textShadowColor:"transparent",
  },
  boldText: {
    fontWeight: 'bold',
  },
});