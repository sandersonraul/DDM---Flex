import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { startDetecting } from 'react-native/Libraries/Utilities/PixelRatio';

export default function App() {  
  return (
    <View style={styles.container}>
      <View style ={styles.header}>
        <View style = {styles.textMenu}>
          <Text style={styles.text}>Menu</Text>
        </View>
        <View style = {styles.textMenu}>
          <Text style={styles.text}>Logs</Text>
        </View>
        <View style = {styles.textMenu}>
          <Text style={styles.text}>Credits</Text>
        </View>
      </View>
      <View style ={styles.main}>
        <View style ={styles.section}>
          <View style ={styles.box}>
            <View style ={styles.blackBox}></View>
            <View style ={styles.blackBox}></View>
            <View style ={styles.blackBox}></View>
          </View>
          <View style ={styles.box2}>
            <View style ={styles.blackBox2}></View>
            <View style ={styles.blackBox2}></View>
            <View style ={styles.blackBox2}></View>
          </View>
          <View style ={styles.box3}>
            <View style ={styles.blackBox3}></View>
            <View style ={styles.blackBox3}></View>
            <View style ={styles.blackBox3}></View>
            <View style ={styles.blackBox3}></View>
            <View style ={styles.blackBox3}></View>
            <View style ={styles.blackBox3}></View>
            <View style ={styles.blackBox3}></View>
            <View style ={styles.blackBox3}></View>
            <View style ={styles.blackBox3}></View>
            <View style ={styles.blackBox3}></View>
            <View style ={styles.blackBox3}></View>
            <View style ={styles.blackBox3}></View>
            <View style ={styles.blackBox3}></View>
            <View style ={styles.blackBox3}></View>
            <View style ={styles.blackBox3}></View>
          </View>
        </View>
      </View>

      <View style ={styles.footer}>
        <Text style={styles.textFooter}>Exercício 01 - DDM</Text>
      </View>

    </View>
    
  );
}  

const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    backgroundColor:'white',
    // justifyContent:'center',
   
    
  },
  header:{
    flexDirection:'row',
    marginTop: 25,
    backgroundColor:'#C4C4C4',
    justifyContent:'space-around',
    width: 411,
    height: 55,   
  },
  textMenu:{
    alignSelf:'center',
    backgroundColor:'black',
    width: 100,
    height: 30,
    justifyContent:'center',
    borderRadius: 10

  },
  text:{
    color:'white',
    alignSelf:'center',
    fontSize:18
  },
  main:{
    backgroundColor:'#B8BCE3',
    width: 411,
    height: 550,
    justifyContent:'center'
  },
  section:{
    backgroundColor:'#8A8FC3',
    width: 320,
    height:480,
    alignSelf:'center',
    borderRadius: 15,
    justifyContent:'space-around'
  },
  box:{
    flexDirection:'row',
    backgroundColor:'#B2B9FF',
    width: 250,
    height:110,
    alignSelf:'center',
    justifyContent:'space-around'
  },
  box2:{
    flexDirection:'column',
    backgroundColor:'#B2B9FF',
    width: 250,
    height:110,
    alignSelf:'center',
    justifyContent:'space-around'
  },
  box3:{
    flexDirection:'column',
    backgroundColor:'#B2B9FF',
    width: 250,
    height:110,
    alignSelf:'center',
    justifyContent:'space-around',
    flexWrap:'wrap',
    alignContent:'space-around'
  },
  blackBox:{
    backgroundColor:'black',
    width: 50,
    height: 90,
    alignSelf:'center'
  },  
  blackBox2:{
    backgroundColor:'black',
    width: 220,
    height: 30,
    alignSelf:'center'
  }, 
  blackBox3:{
    backgroundColor:'black',
    width: 30,
    height: 30,
  },
  footer:{
    backgroundColor:'#4E466A',
    with: 411,
    height: 55,
    justifyContent:'center'
  },
  textFooter:{
    color:'white',
    fontSize: 25,
    alignSelf:'center',
  }
})
