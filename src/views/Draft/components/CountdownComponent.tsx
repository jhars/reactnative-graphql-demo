import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import { useSubscription } from "@apollo/client";
import { TIME_UNTIL_DRAFT } from "../../../data/subscriptions";

export function CountdownComponent() {
  const { loading, error, data } = useSubscription(TIME_UNTIL_DRAFT);
  if (loading)
    return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;
  console.log(data);
  return (
    <View style={styles.countdown}>
      <Text style={styles.countdownText}>{data.timeUntilDraft}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  countdown: {
    flex: 1,
    marginTop: 25,
  },
  countdownText: {
    margin: 10,
    fontSize: 20,
    color: "white",
  },
});
