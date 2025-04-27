// // import React, {useState, useCallback} from 'react';
// // import { View, Text, StyleSheet, ScrollView, Modal } from 'react-native';
// import RosterRow from './RosterRow';
// import DropPlayerConfirmationModal from './DropPlayerConfirmationModal'
// import { DropPlayerRequestObject } from '../../data/types';

// export default function RosterList({roster, myTeam}) {
//   const [ dropPlayer, setDropPlayer ] = useState(null);
//   const [ modalVisible, setModalVisible ] = useState(false);

//   const selectPlayerToDrop = (player) => {
//     setDropPlayer(player)
//     setModalVisible(true)
//   }
//   //JH-NOTE: may want to define type here...
//   const rosterRowCallback = useCallback( (player) => {
//     selectPlayerToDrop(player)
//   }, []);

//   const modalCallback = useCallback( () => {
//     // Attempt Mutation logic on Modal
//     setModalVisible(false)
//   }, []);

//   //May only need one of these (above/below)

//   const cancelModalCallback = useCallback( (show) => {
//     setModalVisible(false)
//   }, []);

//   // const { league } = roster?.teamInfo

// 	const tableHeader = () => (
// 	  <View style={styles.tableHeader}>

// 		  <View style={styles.positionColumnHeader} >
// 		  	<Text style={styles.columnHeaderTxt}>Pos.</Text>	
// 		  </View>

// 		  <View 
// 		    style={styles.nameColumnHeader}>
// 		    <Text style={styles.columnHeaderTxt}>Name</Text>
// 		  </View>

// 		  <View 
// 		    style={styles.pointsColumnHeader}>
// 		    <Text style={styles.columnHeaderTxt}>Points</Text>
// 		  </View>

//       { myTeam && 
//         <View 
//           style={styles.dropAddColumnHeader}>
//           <Text style={styles.columnHeaderTxt}>DropAdd</Text>
//         </View>        
//       }

// 	  </View>
// 	)
//   // May not need leagueId in RosterRow Props 
//   // (available via "team(Info)")
//   return (
//     <View style={styles.container}>
//       {tableHeader()}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             // does this ever run?
//             Alert.alert('Modal has been closed.');
//             // setModalVisible(!modalVisible);
//           }}>
//             <DropPlayerConfirmationModal 
//               rosterSpot={dropPlayer?.rosterSpot}
//               playerId={dropPlayer?.playerInfo.id}
//               lastName={dropPlayer?.playerInfo.lastName}
//               position={dropPlayer?.playerInfo.position}
//               roster={roster}
//               modalCallback={modalCallback}
//               cancelCallback={cancelModalCallback}
//               visible={modalVisible}
//             />
//           </Modal>
//       <ScrollView>
//         <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"GOALIE"} position={"G"} playerInfo={roster.goalie} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
//         <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"DEFENSE1"} position={"D"} playerInfo={roster.defense1} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
//         <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"DEFENSE2"} position={"D"} playerInfo={roster.defense2} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
//         <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"LSM"} position={"LSM"} playerInfo={roster.lsm} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
//         <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"SSDM"} position={"SSDM"} playerInfo={roster.ssdm} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
//         <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"FO"} position={"FO"} playerInfo={roster.fo} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} teamName={roster?.teamInfo}/>
//         <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"MIDFIELD1"} position={"M"} playerInfo={roster.midfield1} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
//         <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"MIDFIELD2"} position={"M"} playerInfo={roster.midfield2} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
//         <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"ATTACK1"} position={"A"} playerInfo={roster.attack1} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
//         <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"ATTACK2"} position={"A"} playerInfo={roster.attack2} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
//       </ScrollView>      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   tableHeader: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#37C2D0",
//     height: 50,
//   },
//   positionColumnHeader: {
//     flex:1,
//     flexGrow: 2,
//     alignItems: 'center'
//   },
//   nameColumnHeader: {
//     flex:1,
//     flexGrow: 5,
//   },
//   pointsColumnHeader: {
//   	flexGrow:1,
//     alignItems: 'center'
//   },
//   dropAddColumnHeader: {
//     flexGrow:1,
//   },
//   columnHeaderTxt: {
//     color: "white",
//     fontWeight: "bold",
//   },
// });
