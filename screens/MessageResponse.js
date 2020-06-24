import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView,
} from 'react-native';
import {Container, Header, Content, Badge} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import Moment from 'moment';
//export default class Craigslist extends Component {
    


      // 



  export default function MessageResponse({route, navigation}) {
    Moment.locale();
  clickEventListener = (item) => {
    Alert.alert('Message', 'Item clicked. ' + item.name);
  };
//console.log('\nnav',navigation);
console.log('\nroute',route.params.data.comments);
  
    let k = 1;
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: '#03a9f4', minHeight:100, marginTop: -20}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex:1,marginLeft:10,marginLeft:10,marginTop:10}}>
            <Image
                    source={require('../assets/question_1.png')}
                    style={{height:50,width:50,marginTop:10}}
                    resizeMode="contain"
                />
</View>
<View style={{flex: 5}}>
<ScrollView style={{  minHeight: 50,}}>      
{/* <Text  style={{
              fontWeight: 'bold',
              color: '#ef5350',
            
              marginTop: 10,
              fontSize: 15,
              marginLeft: 5,
              marginRight: 5,
            }}>You Asksed :</Text> */}
          <Text
            style={{
              fontWeight: 'bold',
              color: '#ffffff',
          
              marginTop: 10,
              fontSize: 15,
              marginLeft: 5,
              marginRight: 5,
            }}>
          
          {route.params.data.question}
       
          </Text>
          </ScrollView>      
          </View>
          </View>
        </View>
        <View style={{backgroundColor:'#e8eaf6',flex:1}}>
        <FlatList
        
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={route.params.data.comments}
          keyExtractor={(item) => {
            return item._id;
          }}
          renderItem={({item}) => {
            if (k == 3) k = 1;
            let imageSrc = '../assets/smiling_' + k + '.png';

            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => {
                  clickEventListener(item);
                }}>

                {
                    (item.id==1)?
                <Image
                  style={styles.image}
                  source={require('../assets/1x/avatar_3.png')} resizeMode="contain"/>:(item.id==2)?
                  <Image
                  style={styles.image}
                  source={require('../assets/1x/avatar_4.png')}  resizeMode="contain"/>:
                  <Image
                  style={styles.image}
                  source={require('../assets/1x/avatar_1.png')} resizeMode="contain" />
               
                 
                }
                <View style={styles.cardContent}>
                <Text  style={{fontWeight:'bold'}}>Anonymus Ghost</Text>
                  <Text style={styles.followButtonText}>
                  &nbsp;{item.comment}
                  </Text>
                  {/* <TouchableOpacity style={styles.followButton} onPress={()=> clickEventListener(item)}>
                  <Text style={styles.followButtonText}>Explore now</Text>  
                </TouchableOpacity> */}
                  <View style={{flex: 1,marginTop:10}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <Icon
                          name="calendar"
                          style={{
                            fontSize: 11,
                            color: '#2a2a2a',
                            lineHeight: 20,
                            fontWeight: 'bold',
                          }}
                        />
                        <Text style={{color: '#2a2a2a',fontWeight: 'bold', fontSize: 13,}}>  {Moment(item.created_time).format('LLL')}</Text>
                      </View>
                      
                      {/* <View style={{flex: 1, flexDirection: 'row'}}>
                        <Icon
                          name="star"
                          style={{
                            fontSize: 15,
                            color: '#2a2a2a',
                            lineHeight: 20,
                          }}
                        />
                        <Text style={{color: '#2a2a2a'}}>1866</Text>
                      </View> */}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        </View>
         <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=>{navigation.navigate('CreateHunt')}}
        style={styles.TouchableOpacityStyle}>
            <Icon
                          name="plus-circle"
                          style={{
                            fontSize: 60,
                            color: '#2a2a2a',
                           
                          }}
                        />
        {/* <Image
          source={{
            uri:
              'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png',
          }}
          style={styles.FloatingButtonStyle}
        /> */}
      </TouchableOpacity>
      </View>
    );
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#ebf0f7',
  },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
    width: 210,
  },
  image: {
    marginTop: 12,
    width: 60,
    height: 60,
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    borderRadius:10,
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#3399ff',
    fontWeight: 'bold',
  },
  count: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: '#6666ff',
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
  followButtonText: {
    //color: "#dcdcdc",
    color: '#3b4045',
    
    fontSize: 14,
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    bottom: 10,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
  },
});
