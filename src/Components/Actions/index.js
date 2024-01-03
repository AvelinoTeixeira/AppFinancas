import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView } from 'react-native';

  import { AntDesign } from '@expo/vector-icons'

export default function Actions() {
 return (
   <ScrollView style={StyleSheet.container} horizontal={true} showsHorizontalScrollIndicator={false}>  

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="addfolder" size={23} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="tagso" size={23} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Compras</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="creditcard" size={23} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="barcode" size={23} col r="#000"/>
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="setting" size={23} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Conta</Text>
      </TouchableOpacity>

   </ScrollView>
  );
}


const styles = StyleSheet.create({
  container:{
    maxHeight: 84,
    
  },
  actionButton:{
    alignItems:'center',
    marginBottom:14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart:14,
  },
  areaButton:{
    backgroundColor:'#ecf0f1',
    height:60,
    width:60,
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center'
  },
  labelButton:{
    marginTop:4,
    alignItems:'center',
    fontWeight:'bold'
  },
})