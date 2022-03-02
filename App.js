import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  View, 
  FlatList, 
  SafeAreaView, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform,
  Button 
} from 'react-native';
import React, { useState } from 'react';

import Item from './components/item';

import { cats, dogs } from './breeds'

export default function App() {
  const [search, setSearch] = useState('')
  const [breeds, setBreeds] = useState('cats')
  const breedSel = breeds === 'cats' ? cats : dogs;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style = {styles.kav}
      >

      <StatusBar style='auto' />

      <View style={styles.listContainer}>
        <FlatList 
          data = {breedSel.filter(item => item.breed.includes(search))}
          renderItem = {({ item, index}) => {
            return <Item index={index} data={item}/>
          }}
          keyExtractor = {item => item.breed}
        />
      </View>

      <View style={styles.buttons}>
          <Button
            onPress={() => setBreeds('dogs')}
            title='Dogs'
          />
          <Button
            onPress={() => setBreeds('cats')}
            title='Cats'
          />
      </View>

      <TextInput 
      style={styles.search}
      placeholder='Search'
      onChangeText={setSearch}
      value={search}
      />

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: '100%',
    marginTop: 50
  },
  search : {
    fontSize: 24,
    padding: 10,
    marginBottom: 30,
    borderWidth: 1,
    textAlign: 'center'
  },
  kav: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
