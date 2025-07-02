import { useMutation } from "@apollo/client";
import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import { ADD_TEAM_TO_LEAGUE } from "../../../data/mutations";
import {
  BaseNavigationProps,
  CreateNewTeamConfirmationScreenRouteProp,
} from "../../../navigation/navTypes";
import { ButtonStyles, ContainerStyles } from "../../../styles/index";

const CreateNewTeamConfirmation = () => {
  const { navigate, setOptions } = useNavigation<BaseNavigationProps>();
  const { params, path } = useRoute<CreateNewTeamConfirmationScreenRouteProp>();
  const { user } = useContext(UserContext);
  const { leagueID, leagueTitle } = params;
  const [teamname, onChangeText] = useState("");

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <HeaderBackButton
          displayMode={"minimal"}
          onPress={() => {
            // JH-NOTE: a bit hacky, but ok for now...
            return navigate(path as never);
          }}
        />
      ),
    });
  }, []);

  // const [addTeam, { data, loading, error }] = useMutation(ADD_TEAM_TO_LEAGUE, {
  const [addTeam, { error }] = useMutation(ADD_TEAM_TO_LEAGUE, {
    onCompleted(data) {
      navigate("MyTeams", { screen: "UserTeams" });
    },
    errorPolicy: "all",
    onError(err) {
      console.log("Apollo err");
      console.log(err);
      console.log("***********");
    },
  });

  return (
    <View style={ContainerStyles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Team Name"
        value={teamname}
      />
      <TouchableOpacity
        style={ButtonStyles.actionButton}
        disabled={teamname.length <= 0}
        onPress={() =>
          addTeam({
            variables: {
              ownerId: String(user.id),
              name: teamname,
              leagueId: Number(leagueID),
            },
          })
        }
      >
        <Text style={ButtonStyles.actionButtonText}>
          Add {teamname} to {leagueTitle}
        </Text>
      </TouchableOpacity>

      {error && <Text style={{ color: "red" }}>Error: {error.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CreateNewTeamConfirmation;
