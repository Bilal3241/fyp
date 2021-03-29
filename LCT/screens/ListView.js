import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import {
  Switch,
  ScrollView,
  Text,
  View,
  TouchableOpacity,StyleSheet
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import colors from '../config/colors';
import {getPlaces} from '../controller/AdsController/GetPlaces';

function ListView({navigation,route}) {

  
  const [activeSections,setActiveSections]=useState([]);
  const [collapsed,setCollapsed]=useState(true);
  const [multipleSelect,setMultipleSelect]=useState(false);
  const [placeList1,setPlaceList1]=useState([]);
  const onPlaceRecieved=(placeList)=>{
    setPlaceList1(placeList)
    }
  var AreaData=(areaName)=>{
    useEffect(() => {
      getPlaces(areaName,onPlaceRecieved);
   }, []);
    <View>
      <FlatList
      keyExtractor={(item)=>item.Title}
      data={placeList1}
      renderItem={({item})=>(
        <View>
          <Text>Title: {item.Title}</Text>
          <Text>Category: {item.Category}</Text>
        </View>               
      )}/>
    </View>
      }  
  
      const CONTENT = [
        {
          title: 'Garhi Shahu',
          content: AreaData('Garhi Shahu'),
        },
        {
          title: 'Walled City',
          content: AreaData('Walled City'),
        },
        {
          title: 'Saddar Town',
          content: AreaData('Saddar Town'),
        },
        {
          title: 'Gulberg',
          content: AreaData('Gulberg'),
        },
        {
          title: 'DHA',
          content: AreaData('DHA'),
        },
        {
          title: 'Wapda Town',
          content: AreaData('Wapda Town'),
        },
        {
          title: 'Walton',
          content: AreaData('Walton'),
        },{
          title: 'Allama Iqbal Town',
          content: AreaData('Allama Iqbal Town'),
        },{
          title: 'Model Town',
          content: AreaData('Model Town'),
        },
        {
          title: 'Bahria Town',
          content: AreaData('Bahria Town'),
        },
        {
          title: 'Johar Town',
          content: AreaData('Johar Town'),
        },
        {
          title: 'Canal Road',
          content: AreaData('Canal Road'),
        },
        {
          title: 'Township',
          content: AreaData('Township'),
        },
        {
          title: 'Jail Road G.O.R. - I',
          content: AreaData('Jail Road G.O.R. - I'),
        },{
          title: 'Shahrah-e-Quaid-e-Azam',
          content: AreaData('Shahrah-e-Quaid-e-Azam'),
        },
        {
          title: 'Others',
          content: AreaData('Others'),
        },
      ];
  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  const setSections = (sections) => {
    setActiveSections(
     sections.includes(undefined) ? [] : sections,
    );
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  const renderContent=(section, _, isActive)=> {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }
      return ( 
        <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
         
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}
          />
        </ScrollView>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  
  },
  title: {
    textAlign: 'left',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    backgroundColor: colors.white,
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },

})
export default ListView;