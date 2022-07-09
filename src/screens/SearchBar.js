import React  from "react";
import {Text , View , StyleSheet , TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {

    return (
        <View style={style.background}> 
        <Feather name="search" style={style.iconStyle}/>
        <TextInput placeholder="Search" style={style.inputStyle}/>
        </View>
    );

}

const style = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        borderColor: 'black',
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        //marginHorizontal: 15
        marginRight: 10
    }

});

export default SearchBar;