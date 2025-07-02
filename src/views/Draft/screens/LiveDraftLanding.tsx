import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import { ContainerStyles } from "../../../styles/index";

export default function LiveDraftLanding() {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);

  useEffect(() => {
    navigation.setOptions({
      title: "Live Draft Landing",
    });
  }, []);

  return (
    <View style={ContainerStyles.container}>
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginBottom: 25,
    marginTop: 25,
  },
});
