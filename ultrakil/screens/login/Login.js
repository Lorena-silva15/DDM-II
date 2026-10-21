import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, Image, Alert, ScrollView} from 'react-native';
import styles from './Estilo';
export default function Login({navigation}) {
 const [usuario,setUsuario]=useState(''); const [senha,setSenha]=useState('');
 function entrar(){if(!usuario.trim()||!senha.trim()){Alert.alert('Acesso necessário','Preencha usuário e senha.');return;} navigation.replace('Home',{usuario:usuario.trim()});}
 return (
 
 <ScrollView contentContainerStyle={styles.container}>
  <Image source={require('../../assets/images/v1.png')} style={styles.hero} resizeMode="cover"/>
  
  <Text style={styles.logoTop}>MANKIND IS</Text><Text style={styles.logo}>ULTRAKILL</Text><Text style={styles.subLogo}>MACHINE • VIOLENCE • HELL</Text>
  
  <Text style={styles.titulo}>ACESSO AO SISTEMA</Text>
  
  <Text style={styles.label}>USUÁRIO</Text>
    <TextInput value={usuario} onChangeText={setUsuario} placeholder="Digite seu nome" placeholderTextColor="#777" style={styles.input} autoCapitalize="none"/>
  
  <Text style={styles.label}>SENHA</Text>
    <TextInput value={senha} onChangeText={setSenha} placeholder="Digite sua senha" placeholderTextColor="#777" style={styles.input} secureTextEntry/>
  
  <Pressable style={styles.botao} onPress={entrar}>
    <Text style={styles.botaoTexto}>ENTRAR ▶</Text>
  </Pressable>
  
  <Text style={styles.rodape}>PROTOCOLO DE SIMULAÇÃO ATIVO</Text>
 </ScrollView>)
}
