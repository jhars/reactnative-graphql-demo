import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Modal,
  Text,
  View,
} from "react-native";
import AddPlayerConfirmationModal from "../components/AddPlayerConfirmationModal";
import AllPlayersTableHeader from "../components/AllPlayersTableHeader";
import PlayerRow from "../components/PlayerRow";
//==== GraphQL ========
import { useQuery } from "@apollo/client";
import { GET_SORTED_PLAYERS } from "../../../data/queries";
import { Player, PlayerData } from "../../../data/types";
//=====================
import { useNavigation, useRoute } from "@react-navigation/native";
import { AvailablePlayersScreenRouteProp } from "../../../navigation/navTypes";

export default function AllPlayersScreen() {
  const navigation = useNavigation();
  const route = useRoute<AvailablePlayersScreenRouteProp>();

  const [addPlayer, setAddPlayer] = useState<Player | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [statCriteria, setStatCriteria] = useState("points");
  const [sortOrder, setSortOrder] = useState("DESC");

  const sortTableCallback = useCallback(
    async (sortStat: string, sortDirection: string) => {
      setStatCriteria(sortStat);
      setSortOrder(sortDirection === "DESC" ? "ASC" : "DESC");
      await handleSortTable();
    },
    [statCriteria],
  );

  const handleSortTable = async () => {
    await refetch({
      orderBy: {
        field: statCriteria,
        order: sortOrder,
      },
    });
  };

  const addPlayerFromPlayerRowCallback = useCallback((player: Player) => {
    selectPlayerToAdd(player);
  }, []);

  const cancelModalCallback = useCallback(() => {
    setModalVisible(false);
  }, []);

  const modalCallBack = useCallback(() => {
    setModalVisible(false);
    navigation.goBack();
  }, []);

  const failedToAddPlayerCallback = useCallback(() => {
    showFailureAlert();
  }, []);

  //==== GraphQL ========
  const { loading, error, data, refetch } = useQuery<PlayerData>(
    GET_SORTED_PLAYERS,
    {
      fetchPolicy: "no-cache",
      variables: {
        orderBy: {
          field: statCriteria,
          order: sortOrder,
        },
        availableForLeagueId:
          Number(route.params?.availableForLeagueId) || null,
        position: route.params?.position || null,
      },
    },
  );

  const showFailureAlert = () => {
    setModalVisible(false);
    Alert.alert(
      "Unable to Add Player",
      "Player may have been added to another team or there may be network issues",
      [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ],
    );
  };

  const selectPlayerToAdd = (player: Player) => {
    setAddPlayer(player);
    setModalVisible(true);
  };

  if (loading)
    return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;
  //=====================
  const renderModal =
    addPlayer &&
    route.params?.team &&
    route.params?.rosterId &&
    route.params?.rosterSpot &&
    route.params?.availableForLeagueId;
  return (
    <View style={{ flex: 1 }}>
      {renderModal && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <AddPlayerConfirmationModal
            testID={"addPlayerConfirmationModalTestID"}
            lastName={addPlayer.lastName}
            position={addPlayer.position}
            team={route.params.team}
            playerId={Number(addPlayer.id)}
            rosterId={route.params.rosterId}
            rosterSpot={route.params.rosterSpot}
            callback={modalCallBack}
            cancelCallback={cancelModalCallback}
            failedToAddPlayerCallback={failedToAddPlayerCallback}
          />
        </Modal>
      )}

      <FlatList
        contentContainerStyle={{ paddingBottom: 20 }}
        style={{ height: "100vh" }}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <AllPlayersTableHeader
            statCriteria={statCriteria}
            sortOrder={sortOrder}
            callback={sortTableCallback}
            availableForLeagueId={route.params?.availableForLeagueId}
          />
        }
        stickyHeaderIndices={[0]}
        data={data?.players}
        renderItem={({ item }) => (
          <PlayerRow
            player={item}
            addPlayerButton={route.params?.availableForLeagueId ? true : false}
            addPlayerCallback={addPlayerFromPlayerRowCallback}
          />
        )}
      />
    </View>
  );
}
