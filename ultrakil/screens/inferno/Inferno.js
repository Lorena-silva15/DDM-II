import React from 'react';
import {View,Text,Pressable,ScrollView,Image} from 'react-native';
import styles from './Estilo';
const camadas=[
 {n:'0',nome:'PRELUDE',sub:'O INÍCIO DA DESCIDA',desc:'O primeiro contato da máquina com as profundezas.',img:require('../../assets/images/inferno.png')},
 {n:'1',nome:'LIMBO',sub:'A CAMADA EXTERIOR',desc:'Estruturas abandonadas e caminhos cheios de ameaças.',img:require('../../assets/images/limbo.png')}
];
export default function Inferno({navigation}) {
 return (
 <ScrollView contentContainerStyle={styles.container}>
  
  <Pressable style={styles.voltar} onPress={()=>navigation.navigate('Home')}>
    <Text style={styles.voltarTexto}>← VOLTAR AO MENU</Text>
  </Pressable>
  
  <Text style={styles.eyebrow}>MAPA DE MISSÃO // 02</Text>
  <Text style={styles.titulo}>INFERNO</Text>
  <Text style={styles.intro}>CAMADAS IDENTIFICADAS. EXPLORE OS CENÁRIOS.</Text>
  {camadas.map(c=><View key={c.n} style={styles.camada}><Image source={c.img} style={styles.camadaImage} resizeMode="cover"/><View style={styles.camadaInfo}><Text style={styles.subtitulo}>{c.sub}</Text><Text style={styles.nome}>{c.nome}</Text><Text style={styles.descricao}>{c.desc}</Text></View></View>)}
  <Pressable style={styles.botao} onPress={()=>navigation.navigate('Arsenal')}>
    <Text style={styles.botaoTexto}>REVISAR ARSENAL ↗</Text>
  </Pressable>
  <Text style={styles.rodape}>PROJETO DE FÃ • ARTES ORIGINAIS PARA ESTE PROTÓTIPO</Text>
 </ScrollView>)
}
