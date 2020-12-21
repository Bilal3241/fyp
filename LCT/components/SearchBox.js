import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../config/colors';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { View } from 'native-base';
function SearchBox(st, setSt) {
    return (
        <View style={styles.view}>
            <TextInput
            style={styles.search}
            placeholder='Seacrh'
            placeholderTextColor={colors.white}  
            onChangeText={st=>setSt(st)}
            defaultValue={st}/>
            <IonIcons style={styles.icon} color={colors.white} size={25} name="search-outline"></IonIcons>
        </View>
        
    );
}

export default SearchBox;
const styles = StyleSheet.create({
    view:{
        flexDirection:'row',
    },
    search:{
        borderBottomWidth:2,
        borderColor: colors.white,
        paddingLeft:'3%',
        marginVertical:'2%',
        color:colors.white,
        width: widthPercentageToDP('80%'),
        height: heightPercentageToDP('6%'),
    },
    icon:{
        top:heightPercentageToDP('2%')
    }
    
})