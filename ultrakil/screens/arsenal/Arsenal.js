import React from 'react';
import {View,Text,Pressable,ScrollView,Image} from 'react-native';
import styles from './Estilo';
const armas=[
 {n:'01',nome:'REVOLVER',tipo:'PRECISÃO',desc:'Arma versátil para disparos rápidos e certeiros.',img:require('../../assets/images/revolver.png')},
 {n:'02',nome:'SHOTGUN',tipo:'CURTA DISTÂNCIA',desc:'Grande impacto em combate próximo.',img:require('../../assets/images/shotgun.png')},
 {n:'03',nome:'NAILGUN',tipo:'DISPARO CONTÍNUO',desc:'Lança projéteis em sequência contra os alvos.',img:require('../../assets/images/nailgun.png')}
];
export default function Arsenal({navigation}) {
 return(
  <ScrollView contentContainerStyle={styles.container}>
    
    <Pressable style={styles.voltar} onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.voltarTexto}>← VOLTAR AO MENU</Text>
    
    </Pressable>
    
    <Text style={styles.eyebrow}>BANCO DE DADOS // 01</Text>
    
    <Text style={styles.titulo}>ARSENAL</Text>
    
    <Text style={styles.intro}>FERRAMENTAS DE COMBATE DA MÁQUINA V1.</Text>
    {armas.map(a=><View key={a.n} style={styles.armaCard}><Image source={a.img} style={styles.armaImage} resizeMode="cover"/><View style={styles.armaHeader}><Text style={styles.numero}>{a.n}</Text><Text style={styles.tipo}>{a.tipo}</Text></View><Text style={styles.nome}>{a.nome}</Text><Text style={styles.descricao}>{a.desc}</Text></View>)}
    
    <Pressable style={styles.botao} onPress={()=>navigation.navigate('Inferno')}>
        <Text style={styles.botaoTexto}>AVANÇAR PARA O INFERNO ↗</Text>
    </Pressable>
 </ScrollView>

 )

}
