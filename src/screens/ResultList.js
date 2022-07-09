import React  from "react";
import { Text, View , StyleSheet , FlatList} from "react-native";
import useResults from "../hooks/useResults";

const ResultList = ({title , result}) => {

    return (
        <View>
        <Text style={styles.headerStyle}>{title}</Text>
        <Text>Result found {result.length}</Text>
        <FlatList 
        horizontal
        data={result}
        keyExtractor={(result) => result.id}
        renderItem = {({item}) => {
            return <Text>{item.name}</Text>
        }}
        
        />
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle :{
        fontSize: 16,
        fontWeight: "bold"
    }
});


export default ResultList;