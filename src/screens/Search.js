import React , {useState}  from "react";
import {Text , View , StyleSheet} from 'react-native';
import SearchBar from "./SearchBar";
import yelp from "../api/yelp";

const Search = () => {

    const [term, setTerm ] = useState('');
    const [result, setResult] = useState([]);

    const searchApi = async ()=>{

        const response = await yelp.get('/search',{
            params: {
                limit: 50,
                term,
                location: 'san jose'
            }
        });
    setResult(response.data.businesses);

    };

    return (
        <View>
        <SearchBar 
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)} 
        onTermSubmit={()=> searchApi()}
        />
        <Text>Search Screen</Text>
        <Text>We have found {result.length } results</Text>
        </View>
    );

}

const style = StyleSheet.create({});

export default Search;