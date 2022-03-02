import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import Feature from './feature'


function Item(props) {

  const { data, index } = props
  const { breed } = data
  const keys = Object.keys(data).filter( key => key !== 'breed')

  const average = (keys.reduce((acc, key) => {
    return acc + data[key]
  }, 0) / keys.length).toFixed(1)

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.label}>{breed}</Text>
        <Text style={styles.label}>{average}</Text>
      </View>
    
      {/* {keys.map(key => <Text>{key} {data[key]}</Text>)} */}
      {keys.map(key => <Feature name={key} value={data[key]}/>)}
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    padding: 10,
    margin: 7,
    backgroundColor: 'mistyrose'
  },
  label : {
    fontSize: 28,
    color: 'maroon',
    fontWeight: 'bold'
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})

export default Item