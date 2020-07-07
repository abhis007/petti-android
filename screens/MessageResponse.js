import axios from 'axios';
import Moment from 'moment';
import React, { useContext, useState } from 'react';
import {
  FlatList, Image,




  ScrollView, StyleSheet,
  Text,


  TouchableOpacity, View
} from 'react-native';
import {
  AdMobInterstitial,

  AdMobRewarded
} from 'react-native-admob';
import { Notifier, NotifierComponents } from 'react-native-notifier';
//export default class Craigslist extends Component {
import { ConfirmDialog } from 'react-native-simple-dialogs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { URLS_QUESTION } from '../apiurls/Urls';
import { GlobalContext } from '../context/GlobalState';
export default function MessageResponse({route, navigation}) {
  Moment.locale();

  const {share,reLoadList,setListReload} = useContext(GlobalContext);

  console.log('\nroute', route.params.data.comments);

  const shareQuestion = async () => {
    await share(route.params.data);
  };
  const [dialogVisible, setDialogVisible] = useState();
  const deleteQuestion = async () => {
    setDialogVisible(true);
  };

  const images =[
    require('../assets/1x/avatar_1.png'),
    require('../assets/1x/avatar_4.png'),
    require('../assets/1x/avatar_3.png'),
    require('../assets/1x/avatar_4.png'),
    require('../assets/1x/avatar_5.png'),
    require('../assets/1x/avatar_1.png'),
  ]
  const name =[
    'Anonymous Ghost',
    'Anonymous Witch',
    'Anonymous  Pumpkin',
    'Anonymous Wiltch',
    'Anonymous Bat',
    'Anonymous Ghost',

,  ]
React.useEffect(() => {
  

    AdMobInterstitial.setAdUnitID('ca-app-pub-8661978230190789/4280363153');

    AdMobInterstitial.addEventListener('adLoaded', () =>
      console.log('AdMobInterstitial adLoaded'),
    );
    AdMobInterstitial.addEventListener('adFailedToLoad', error =>
      console.warn(error),
    );
    AdMobInterstitial.addEventListener('adOpened', () =>
      console.log('AdMobInterstitial => adOpened'),
    );
    AdMobInterstitial.addEventListener('adClosed', () => {
      console.log('AdMobInterstitial => adClosed');
      AdMobInterstitial.requestAd().catch(error => console.log(error));
    });
    AdMobInterstitial.addEventListener('adLeftApplication', () =>
      console.log('AdMobInterstitial => adLeftApplication'),
    );

    AdMobInterstitial.requestAd().catch(error => console.log(error));
}, []);



  const listEmptyComponent = () => {
    return (
      <View  style={{padding: 10}}>
        <View style={{flex: 1,alignItems: 'center',marginTop: 30,backgroundColor:'white',padding: 20,borderRadius:50,shadowColor: 'blue',
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowOpacity: 0.8,
          shadowRadius:0,
          elevation: 5,}}>
         <Image
                    style={{height:150,width:120}}
                    source={require('../assets/no-comments.png')}
                    resizeMode="contain"
                  />
            <Text style={{fontSize:12,fontWeight: 'bold'}}>No responses yet</Text>
        </View>
        </View>
    )
}
  
  const deleteQuestionApiCall = async () => {
    enableLoader();
 
    await axios
      .delete(URLS_QUESTION.create + route.params.data._id, {
        headers: {Authorization: `Bearer ${authToken}`},
      })
      .then(
        (response) => {
          setListReload(true)
          navigation.navigate('Home',{blnReload:true});
          setDialogVisible(false);
          disableLoader();

          Notifier.showNotification({
            title: 'DONE',
            description: 'Petti deleted successfully',
            Component: NotifierComponents.Alert,
            duration: 6000,
            componentProps: {
              alertType: 'danger',
              backgroundColor: '#26a69a',
            },
          });
          AdMobInterstitial.showAd().catch(error => console.warn(error));
        },
        (error) => {
          console.log(error);
          disableLoader();
        },
      );
  };
  let k = 1;
  return (
    <View style={styles.container}>
      <ConfirmDialog
        title="Petti Delete"
        message="Are you sure, you want to delete this petti ?"
        visible={dialogVisible}
        onTouchOutside={() => setDialogVisible(false)}
        positiveButton={{
          title: 'YES',
          onPress: () => deleteQuestionApiCall(),
        }}
        negativeButton={{
          title: 'NO',
          onPress: () =>  setDialogVisible(false),
        }}
      />
      <View
        style={{
          
          backgroundColor: 'white',
         
          minHeight: 150,
         
         marginTop:-20,
         
          shadowColor: 'blue',
          shadowOffset: {
            width: 0,
            height: 50,
          },
          shadowOpacity: 0.8,
          shadowRadius: 7.49,
          elevation: 8,
        }}>
        <View
          style={{
            backgroundColor: '#ff8a80',
            padding: 10,
           
             
            flexDirection: 'row',
            
          
          elevation: 10,
          }}>
          <View style={{flex: 9}}>
            <Text
              style={{
                fontWeight: 'bold',
                marginLeft: 10,
                color: 'white',
                fontSize: 12,
              }}>
              You Asked this On{' '}
              {Moment(route.params.data.created_time).format('LLL')}
            </Text>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => deleteQuestion()}>
              <Icon
                name="trash-o"
                style={{
                  fontSize: 20,

                  color: '#ffffff',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => shareQuestion()}>
              <Icon
                name="share-alt"
                style={{
                  fontSize: 20,
                  marginLeft: 5,
                  color: '#ffffff',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, marginLeft: 10, marginLeft: 10}}>
            <Image
              source={require('../assets/question_2.png')}
              style={{height: 70, width: 70, marginTop: 10}}
              resizeMode="contain"
            />
          </View>
          <View style={{flex: 4, padding: 10}}>
            <ScrollView style={{minHeight: 55}}>
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
                  color: '#2a2a2a',
                  textAlign: 'left',
                  marginTop: 9,
                  fontSize: 15,
                  marginLeft: 5,
                  marginRight: 5,
                }}>
                {route.params.data.question}
              </Text>
            </ScrollView>
          </View>
          {/* <View style={{flex: 1}}>
          <TouchableOpacity>
<Icon
                          name="trash-o"
                          style={{
                            fontSize: 35,
                            marginTop:30,
                            color: '#2a2a2a',
                           
                          }}
                        />
</TouchableOpacity>
          </View> */}
        </View>
      </View>
      <View style={{backgroundColor: '#e8eaf6', flex: 1,padding: 8}}>
        <FlatList
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={route.params.data.comments}
          keyExtractor={(item) => {
            return item._id;
          }}

          ListEmptyComponent={listEmptyComponent}
          renderItem={({item}) => {
            if (k == 3) k = 1;
            let imageSrc = '../assets/smiling_' + k + '.png';

            return (
              <TouchableOpacity
                style={styles.card}
                >
                 
                  <Image
                    style={styles.image}
                    source={images[item.char_id]}
                    resizeMode="contain"
                  />
              
                <View style={styles.cardContent}>
                  <Text style={{fontWeight: 'bold'}}>{name[item.char_id]}</Text>
                  <Text style={styles.followButtonText}>
                    &nbsp;{item.comment}
                  </Text>
                  {/* <TouchableOpacity style={styles.followButton} onPress={()=> clickEventListener(item)}>
                  <Text style={styles.followButtonText}>Explore now</Text>  
                </TouchableOpacity> */}
                  <View style={{flex: 1, marginTop: 10}}>
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
                        <Text
                          style={{
                            color: '#2a2a2a',
                            fontWeight: 'bold',
                            fontSize: 13,
                          }}>
                          {' '}
                          {Moment(item.created_time).format('LLL')}
                        </Text>
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
   
   elevation:4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
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
