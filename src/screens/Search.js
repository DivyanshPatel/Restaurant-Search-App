import React  from "react";
import {Text , View , StyleSheet} from 'react-native';
import SearchBar from "./SearchBar";

const Search = () => {

    return (
        <View>
        <SearchBar />
        <Text>Search Screen</Text>
        </View>
    );

}

const style = StyleSheet.create({});

export default Search;