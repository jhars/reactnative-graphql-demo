import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import RosterRow from './RosterRow';

export default function RosterList({roster, myTeam}) {

  const { league } = roster.teamInfo

	const tableHeader = () => (
	  <View style={styles.tableHeader}>

		  <View style={styles.positionColumnHeader} >
		  	<Text style={styles.columnHeaderTxt}>Pos.</Text>	
		  </View>

		  <View 
		    style={styles.nameColumnHeader}>
		    <Text style={styles.columnHeaderTxt}>Name</Text>
		  </View>

		  <View 
		    style={styles.pointsColumnHeader}>
		    <Text style={styles.columnHeaderTxt}>Points</Text>
		  </View>

      { myTeam && 
        <View 
          style={styles.dropAddColumnHeader}>
          <Text style={styles.columnHeaderTxt}>DropAdd</Text>
        </View>        
      }

	  </View>
	)

  return (
    <View style={styles.container}>
      {tableHeader()}
      <ScrollView>
        <RosterRow rosterId={roster.id} rosterSpot={"GOALIE"} position={"G"} playerInfo={roster.goalie} myTeam={myTeam} leagueId={league.id} team={roster.teamInfo}/>
        <RosterRow rosterId={roster.id} rosterSpot={"DEFENSE1"} position={"D"} playerInfo={roster.defense1} myTeam={myTeam} leagueId={league.id} team={roster.teamInfo}/>
        <RosterRow rosterId={roster.id} rosterSpot={"DEFENSE2"} position={"D"} playerInfo={roster.defense2} myTeam={myTeam} leagueId={league.id} team={roster.teamInfo}/>
        <RosterRow rosterId={roster.id} rosterSpot={"LSM"} position={"LSM"} playerInfo={roster.lsm} myTeam={myTeam} leagueId={league.id} team={roster.teamInfo}/>
        <RosterRow rosterId={roster.id} rosterSpot={"SSDM"} position={"SSDM"} playerInfo={roster.ssdm} myTeam={myTeam} leagueId={league.id} team={roster.teamInfo}/>
        <RosterRow rosterId={roster.id} rosterSpot={"FO"} position={"FO"} playerInfo={roster.fo} myTeam={myTeam} leagueId={league.id} teamName={roster.teamInfo}/>
        <RosterRow rosterId={roster.id} rosterSpot={"MIDFIELD1"} position={"M"} playerInfo={roster.midfield1} myTeam={myTeam} leagueId={league.id} team={roster.teamInfo}/>
        <RosterRow rosterId={roster.id} rosterSpot={"MIDFIELD2"} position={"M"} playerInfo={roster.midfield2} myTeam={myTeam} leagueId={league.id} team={roster.teamInfo}/>
        <RosterRow rosterId={roster.id} rosterSpot={"ATTACK1"} position={"A"} playerInfo={roster.attack1} myTeam={myTeam} leagueId={league.id} team={roster.teamInfo}/>
        <RosterRow rosterId={roster.id} rosterSpot={"ATTACK2"} position={"A"} playerInfo={roster.attack2} myTeam={myTeam} leagueId={league.id} team={roster.teamInfo}/>
      </ScrollView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tableHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#37C2D0",
    height: 50,
  },
  positionColumnHeader: {
    flex:1,
    flexGrow: 2,
    alignItems: 'center'
  },
  nameColumnHeader: {
    flex:1,
    flexGrow: 5,
  },
  pointsColumnHeader: {
  	flexGrow:1,
    alignItems: 'center'
  },
  dropAddColumnHeader: {
    flexGrow:1,
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
  },
});
