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
        <RosterRow position={"G"} playerInfo={roster.goalie} myTeam={myTeam} leagueId={league.id}/>
        <RosterRow position={"D"} playerInfo={roster.defense1} myTeam={myTeam} leagueId={league.id}/>
        <RosterRow position={"D"} playerInfo={roster.defense2} myTeam={myTeam} leagueId={league.id}/>
        <RosterRow position={"LSM"} playerInfo={roster.lsm} myTeam={myTeam} leagueId={league.id}/>
        <RosterRow position={"SSDM"} playerInfo={roster.ssdm} myTeam={myTeam} leagueId={league.id}/>
        <RosterRow position={"FO"} playerInfo={roster.fo} myTeam={myTeam} leagueId={league.id}/>
        <RosterRow position={"M"} playerInfo={roster.midfield1} myTeam={myTeam} leagueId={league.id}/>
        <RosterRow position={"M"} playerInfo={roster.midfield2} myTeam={myTeam} leagueId={league.id}/>
        <RosterRow position={"A"} playerInfo={roster.attack1} myTeam={myTeam} leagueId={league.id}/>
        <RosterRow position={"A"} playerInfo={roster.attack2} myTeam={myTeam} leagueId={league.id}/>
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
