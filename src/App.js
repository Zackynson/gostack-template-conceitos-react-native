import React, { useEffect, useState } from "react";
import api from './services/api';

import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";

import Repository from './components/Repository'

export default function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => { 
    api.get('repositories').then(response => setRepositories( response.data ) ); 
    console.log(repositories) 
  }, [])

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList 
        data={repositories} 
        renderItem={() => repositories.map(repository => <Repository key={repository.id} data={repository}/> )}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
  
});
