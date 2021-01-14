import React from 'react';
import { TextInput, StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../config/colors';


function InputField({pholder, st, setSt, cheight='6', cwidth='85', ...otherProps}) {
    return (
        <TextInput
        style={[styles.input, {height: hp(cheight+'%')}, {width: wp(cwidth+'%')} ]}
        placeholder= {pholder}
        onChangeText={st=>setSt(st)}
        defaultValue={st}
        {...otherProps}
        />
    );
}
const styles = StyleSheet.create({
    input:{
        backgroundColor: colors.inpWhite,
        color:colors.black,
        paddingHorizontal:'3%',
        marginVertical:'2%',
        borderRadius:30,
    }
})

export default InputField;