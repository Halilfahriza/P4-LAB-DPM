import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import ScoreManager from '../components/ScoreManager';

const FutsalMatch = () => {
  const [teamA, setTeamA] = useState({ name: 'Team A', score: 0 });
  const [teamB, setTeamB] = useState({ name: 'Team B', score: 0 });

  const handleReset = () => {
    setTeamA({ ...teamA, score: 0 });
    setTeamB({ ...teamB, score: 0 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚽ Futsal Match ⚽</Text>
      <ScoreManager team={teamA} setTeam={setTeamA} />
      <ScoreManager team={teamB} setTeam={setTeamB} />
      {teamA.score >= 20 && <Text style={styles.winner}>{teamA.name} Wins! 🎉</Text>}
      {teamB.score >= 20 && <Text style={styles.winner}>{teamB.name} Wins! 🎉</Text>}
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset Match</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#06D001',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF2929',
    marginBottom: 24,
  },
  winner: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF2929',
    marginVertical: 16,
  },
  resetButton: {
    backgroundColor: '#FF6500',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    elevation: 4,
  },
  resetButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default FutsalMatch;
