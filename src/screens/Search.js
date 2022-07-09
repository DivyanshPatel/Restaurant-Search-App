import React , {useState , useEffect}  from "react";
import {Text , View , StyleSheet} from 'react-native';
import SearchBar from "./SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "./ResultList";

const Search = () => {

    const [term, setTerm ] = useState('');
    const [searchApi , errorMessage, results] = useResults();
    
    const fetchResult = (price) => {
        return results.filter((result) => {
            return result.price === price;
        });
    };

    return (
        <View>
        <SearchBar 
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)} 
        onTermSubmit={()=> searchApi()}
        />
        <Text>Search Screen</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length } results</Text>
        <ResultList result = {fetchResult('$')} title="Cost Effective"/>
        <ResultList result = {fetchResult('$$')} title="Bit Pricer"/>
        <ResultList  result = {fetchResult('$$$')} title="Big Spender"/>
        </View>
    );

}

const style = StyleSheet.create({});

export default Search;