import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import RosterRow from './RosterRow';

export default function RosterList({roster}) {

	const tableHeader = () => (
	  <View style={styles.tableHeader}>

		  <View style={styles.positionColumnHeader} >
		  	<Text style={styles.columnHeaderTxt}>Position</Text>	
		  </View>

		  <TouchableOpacity 
		    style={styles.nameColumnHeader}>
		    <Text style={styles.columnHeaderTxt}>Name</Text>
		  </TouchableOpacity>

		  <TouchableOpacity 
		    style={styles.pointsColumnHeader}>
		    <Text style={styles.columnHeaderTxt}>Points</Text>
		  </TouchableOpacity>

	  </View>
	)

  return (
    <View>
      {tableHeader()}
      <ScrollView>
        <RosterRow position={"G"} playerInfo={roster.goalie}/>
        <RosterRow position={"D"} playerInfo={roster.defense1}/>
        <RosterRow position={"D"} playerInfo={roster.defense2}/>
        <RosterRow position={"LSM"} playerInfo={roster.lsm}/>
        <RosterRow position={"FO"} playerInfo={roster.fo}/>
        <RosterRow position={"M"} playerInfo={roster.midfield1}/>
        <RosterRow position={"M"} playerInfo={roster.midfield2}/>
        <RosterRow position={"A"} playerInfo={roster.attack1}/>
        <RosterRow position={"A"} playerInfo={roster.attack2}/>
      </ScrollView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#37C2D0",
    height: 50,
    paddingLeft: 15
  },
  tableRow: {
    flexDirection: "row",
    height: 40,
    alignItems:"center",
  },
  positionColumnHeader: {
    alignItems:"left",
  },
  nameColumnHeader: {
    justifyContent: "flex-start",
    alignItems:"center",
    paddingLeft: 25
  },
  pointsColumnHeader: {
  	flex: 2,
  	flexDirection: "row",
  	justifyContent: "flex-end",
  	paddingRight: 60
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
  },
  columnRowTxt: {
    width:"20%",
    textAlign:"center",
  }
});
