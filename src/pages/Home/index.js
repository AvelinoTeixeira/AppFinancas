import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../Components/Header'
import Balance from '../../Components/Balance'
import Moviments from '../../Components/Moviments'
import Actions from '../../Components/Actions'

const list = [
  {
    id: 1,
    label: 'AliExpress',
    value: '300, 90',
    date: '02/01/2024',
    type: 0 // despesas
  },

  {
    id: 2,
    label: 'Pix Cliente',
    value: '2.500, 00',
    date: '04/01/2024',
    type: 1 // receita // entradas
  },

  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '06/01/2024',
    type: 1 // despesas
  }
  
  
]
export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="AvelinoDev"/>
      <Balance saldo="9.295.5" gastos="-560,00"/>

      <Actions/>
      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList 
      style={styles.list}
      data={list}
      keyExtractor={ (item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Moviments data={item}/>}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize:18,
    fontWeight:"bold",
    margin:14,
    marginTop:-170,
  },
  list:{
    marginStart:14,
    marginEnd:14,
  },
});
