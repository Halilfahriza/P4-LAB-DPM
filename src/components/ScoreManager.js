import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import TeamScore from './TeamScore';

const ScoreManager = ({ team, setTeam }) => {
  const incrementScore = () => setTeam({ ...team, score: team.score + 1 });
  const decrementScore = () =>
    setTeam({ ...team, score: Math.max(0, team.score - 1) });

  return (
    <View style={styles.container}>
      <TeamScore team={team} />
      <View style={styles.buttons}>
        <Button title="+" onPress={incrementScore} color="#4CAF50" />
        <Button title="-" onPress={decrementScore} color="#F44336" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    width: '50%',
  },
});

export default ScoreManager;
