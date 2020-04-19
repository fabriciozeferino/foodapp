import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from './ResultDetail';

const ResultList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultsShow', { id: item.id })
              }
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default withNavigation(ResultList);

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});
