import React, { useEffect, useState, } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import api from '../services/api'


const styles = StyleSheet.create({
    repositoryContainer: {
        marginBottom: 15,
        marginHorizontal: 15,
        backgroundColor: "#fff",
        padding: 20,
      },
      repository: {
        fontSize: 32,
        fontWeight: "bold",
      },
      techsContainer: {
        flexDirection: "row",
        marginTop: 10,
      },
      tech: {
        fontSize: 12,
        fontWeight: "bold",
        marginRight: 10,
        backgroundColor: "#04d361",
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: "#fff",
      },
      likesContainer: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      likeText: {
        fontSize: 14,
        fontWeight: "bold",
        marginRight: 10,
      },
      button: {
        marginTop: 10,
      },
      buttonText: {
        fontSize: 14,
        fontWeight: "bold",
        marginRight: 10,
        color: "#fff",
        backgroundColor: "#7159c1",
        padding: 15,
      },
})

const Repository = ( {data} ) => {

  const [likes, setLikes] = useState('')

  useEffect(() => {
    setLikes(data.likes);
  }, []);


  async function handleLikeRepository(id) {
    const response = await api.post(`/repositories/${id}/like`);

    setLikes(response.data.likes);
}
  return  <View style={styles.repositoryContainer}>
  <Text style={styles.repository}>{data.title}</Text>

  <View style={styles.techsContainer}>
    <Text style={styles.tech}>
      ReactJS
    </Text>
    <Text style={styles.tech}>
      Node.js
    </Text>
  </View>

  <View style={styles.likesContainer}>
    <Text
      style={styles.likeText}
      // Remember to replace "1" below with repository ID: {`repository-likes-${repository.id}`}
      testID={`repository-likes-${data.id}`}
    >
      {likes} curtidas
    </Text>
  </View>

  <TouchableOpacity
    style={styles.button}
    onPress={() => handleLikeRepository(data.id)}
    // Remember to replace "1" below with repository ID: {`like-button-${repository.id}`}
    testID={`like-button-${data.id}`}
  >
    <Text style={styles.buttonText}>Curtir</Text>
  </TouchableOpacity>
</View>;
}



export default Repository;