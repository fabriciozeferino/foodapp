import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.h1}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          console.log(item);

          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 'auto',
  },
  h1: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
});
