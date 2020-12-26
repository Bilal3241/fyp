import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Header,Item,Input, View} from 'native-base';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../config/colors';
import IonIcons from 'react-native-vector-icons/Ionicons';
function SearchBox(props) {
    return (
        // <View style={styles.view}>
        //     <TextInput
        //     style={styles.search}
        //     placeholder='Seacrh'
        //     placeholderTextColor={colors.white}  
        //     onChangeText={st=>setSt(st)}
        //     defaultValue={st}/>
        //     <IonIcons style={styles.icon} color={colors.white} size={25} name="search-outline"></IonIcons>
        // </View>
        <View rounded searchBar style={styles.view} >
            <Item>
            <IonIcons style={styles.icon} size={30} name="search-outline"></IonIcons>
            <Input  placeholder="Search here" style={styles.search}></Input>
            </Item>
        </View>
        
    );
}

export default SearchBox;
const styles = StyleSheet.create({
    icon:{
        color:colors.black,
        paddingLeft:"3%",
    },
    search:{
        color:colors.black,
    },
    view:{
        backgroundColor:colors.white,
    }
   
    
})