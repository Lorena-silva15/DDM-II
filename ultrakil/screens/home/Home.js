import React from 'react';
import {View,Text,Pressable,ScrollView,Image} from 'react-native';
import styles from './Estilo';
export default function Home({navigation,route}) {
 const usuario=route.params?.usuario||'OPERADOR';
 return <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.topBar}>
            <Text style={styles.topLabel}>TERMINAL // 001</Text>

                <Pressable onPress={()=>navigation.replace('Login')}>
                    <Text style={styles.sair}>SAIR ↗</Text>
                </Pressable>
        </View>
        <Image source={require('../../assets/images/inferno.png')} style={styles.banner} resizeMode="cover"/>

        <Text style={styles.eyebrow}>BEM-VINDO, {usuario.toUpperCase()}</Text>
        
        <Text style={styles.titulo}>A DESCIDA{"\n"}COMEÇA AGORA.</Text>

        <Text style={styles.descricao}>Explore o universo de ULTRAKILL: conheça o arsenal da máquina e descubra as camadas do Inferno.</Text>
            <View style={styles.statusBox}>
                <Text style={styles.statusLabel}>STATUS DA MÁQUINA</Text>
                <Text style={styles.statusValue}>● ONLINE</Text>
                <View style={styles.barra}><View style={styles.barraInterna}/></View>

                <Text style={styles.statusSmall}>COMBUSTÍVEL: SANGUE // MISSÃO: ATIVA</Text>
            </View>
        <Text style={styles.secao}>SELECIONE UM DESTINO</Text>

        <Pressable style={styles.card} onPress={()=>navigation.navigate('Arsenal')}><Image source={require('../../assets/images/revolver.png')} style={styles.cardImage}/><View style={styles.cardTextos}><Text style={styles.cardTitulo}>ARSENAL</Text><Text style={styles.cardDescricao}>Armas e equipamentos</Text></View><Text style={styles.seta}>↗</Text></Pressable>
        <Pressable style={styles.card} onPress={()=>navigation.navigate('Inferno')}><Image source={require('../../assets/images/limbo.png')} style={styles.cardImage}/><View style={styles.cardTextos}><Text style={styles.cardTitulo}>INFERNO</Text><Text style={styles.cardDescricao}>Camadas e desafios</Text></View><Text style={styles.seta}>↗</Text></Pressable>
        <Text style={styles.rodape}>ULTRAKILL FAN APP • PROJETO EDUCACIONAL</Text>

 </ScrollView>;
}
