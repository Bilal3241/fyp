import React from 'react';
import { View,Text, StyleSheet, Linking } from 'react-native';
import {widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../config/colors';

function DescriptionView({route,navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.detailbox}>
                <Text style={styles.title}>
                   Title
                </Text>

                <Text style={styles.heading}>
                    Location: <Text style={styles.description}>Location</Text>
                </Text>
                
                <Text style={styles.heading}>
                    Type: <Text style={styles.description}>Type </Text>
                </Text>
                <Text style={styles.heading}>
                    Timing: <Text style={styles.description}>Timing</Text>
                </Text>
                <Text style={styles.heading}>
                    Description: <Text style={styles.description}>{'\n'}Description </Text>
                </Text>
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        padding:'5%'
    },
    title:{
        color:colors.black,
        fontSize: hp('5%'),
        fontWeight:'bold',
        textAlign:'center'

    },
    heading:{
        color:colors.black,
        fontSize: hp('3%'),
        textAlign:'left',
        fontWeight:'bold',
        
    },
    detailbox:{
        padding:'6%',
        borderColor:colors.black,
        borderWidth:2,
        borderTopLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor:colors.cardBg,
    },
    buttons:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:'3%',
    },
    description:{
        fontWeight:'normal',
        color:'grey',
        fontStyle:'italic',
        textAlign:'right'

    },
    modal2:{
        flex:0.8,
        width:wp('65%'),
        marginTop:hp('25%') ,
        marginBottom:hp('25%'),
        marginLeft:wp('17%'),
        backgroundColor: 'rgba(190,190,190,0.9)',
        borderRadius: 20,
        alignItems: 'center',
    },
    chkInchkOutBTn:{
    flex:1,
    flexDirection:'row',
    justifyContent:"center"
    },
    date:{
    padding:wp('1%'),
    margin: wp('2%'),
    fontSize:15,
    },
    btn:{
    flex:1,
    flexDirection:'row',
    justifyContent:"center",
    marginTop:'3%',
    },

    openButton:{
    marginTop:hp("10%"),
    marginRight:wp('4%'),
    marginBottom:hp("10%"),
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    
    },
    icons:{
    padding:'2%'
    }

    
    
})
export default DescriptionView;