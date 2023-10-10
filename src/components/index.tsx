import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

export default function Timer() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHora(new Date());
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  const resetarHora = () => {
    const novaHora = new Date();
    novaHora.setMinutes(novaHora.getMinutes() - 10); 
    setHora(novaHora);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.relogioContainer}>
        <Text style={styles.relogioTexto}>Hora Atual: {hora.toLocaleTimeString()}</Text>
      </View>
      <View style={styles.botaoContainer}>
        <Button title="Reset H em 10Min" onPress={resetarHora} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  relogioContainer: {
    backgroundColor: 'lightblue', 
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  relogioTexto: {
    color: '#fff', 
    fontSize: 24,
    fontWeight: 'bold',
  },
  botaoContainer: {
    marginBottom: 20,
  },
});