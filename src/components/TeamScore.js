import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TeamScore = ({ team }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>{team.name}</Text>
      <Text style={styles.teamScore}>Score: {team.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 8,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#AF1740',
  },
  teamScore: {
    fontSize: 18,
    marginTop: 4,
    color: '#333',
  },
});

export default TeamScore;
