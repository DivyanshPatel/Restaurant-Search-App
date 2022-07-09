import React , {useState , useEffect}  from "react";
import {Text , View , StyleSheet} from 'react-native';
import SearchBar from "./SearchBar";
import useResults from "../hooks/useResults";

const Search = () => {

    const [term, setTerm ] = useState('');
    const [searchApi , errorMessage, result] = useResults();
    

    return (
        <View>
        <SearchBar 
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)} 
        onTermSubmit={()=> searchApi()}
        />
        <Text>Search Screen</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {result.length } results</Text>
        </View>
    );

}

const style = StyleSheet.create({});

export default Search;