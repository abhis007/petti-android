import React, {Component,useContext} from 'react';
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
import Moment from 'moment';
import {Container, Header, Content, Badge} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import {GlobalContext} from '../context/GlobalState'
import {URLS_QUESTION} from '../apiurls/Urls';
import axios from 'axios';
//export default class Craigslist extends Component {
    const data = [
        {
          id: 1,
          name: 'Comunity',
          image: '../assets/smiling_1.png',
          count: 124.711,
        },
        {
          id: 2,
          name: 'Housing',
          image: 'https://img.icons8.com/color/100/000000/real-estate.png',
          count: 234.722,
        },
        {
          id: 3,
          name: 'Jobs',
          image:
            'https://img.icons8.com/color/100/000000/find-matching-job.png',
          count: 324.723,
        },
        {
          id: 4,
          name: 'Personal',
          image: 'https://img.icons8.com/clouds/100/000000/employee-card.png',
          count: 154.573,
        },
        {
          id: 5,
          name: 'For sale',
          image: 'https://img.icons8.com/color/100/000000/land-sales.png',
          count: 124.678,
        },
      ]
      const images =[require('../assets/question_1.png'),require('../assets/question_2.png'),require('../assets/question_2.png')]
  
     var questions =[];
 
   export default function PettiHome({route, navigation}) {

    Moment.locale();
    const {authToken,enableLoader,disableLoader} = useContext(GlobalContext);
 
 
 
    React.useEffect(() => {
      const listQuestionsApiCall = async () => {
        enableLoader()
        console.log(URLS_QUESTION.create)
        await axios.get(URLS_QUESTION.mycontest,
            {headers: {Authorization: `Bearer ${authToken}`}},
          )
          .then(
            async (response) => {
console.log(response.data)
questions=await response.data;
             // arrHuntList=response.data
             // console.log(arrHuntList);
              await disableLoader()
          
              setTimeout(function(){alert('Redirecting')}, 1000);
            },
            (error) => {
              console.log(error);
              disableLoader();
            },
          );
      };
      
      listQuestionsApiCall();
    
    }, []);


  clickEventListener = (item) => {
    Alert.alert('Message', 'Item clicked. ' + item.name);
  };

  
    let k = 1;
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: '#ef5350', height: 50, marginTop: -20}}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#ffffff',
              textAlign: 'center',
              marginTop: 10,
              fontSize: 15,
            }}>
            Showing all question asked by you
          </Text>
        </View>
        <View style={{backgroundColor:'#e8eaf6',flex:1}}>
        <FlatList
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={questions}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
           
            let imageSrc = '../assets/smiling_' + k + '.png';
           
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={()=>{navigation.navigate('MessageResponse',{data:item})}}>
                <Image
                  style={styles.image}
                  source={images[ Math.floor(Math.random() * 2) ]}
                  resizeMode="contain"
                />
                <View style={styles.cardContent}>
                <Text  style={{fontWeight:'bold'}}>You Asked</Text>
                  <Text style={styles.followButtonText}>
                    {item.question}
                  </Text>
                  {/* <TouchableOpacity style={styles.followButton} onPress={()=> clickEventListener(item)}>
                  <Text style={styles.followButtonText}>Explore now</Text>  
                </TouchableOpacity> */}
                  <View style={{flex: 1,marginTop:10}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{flex: 4, flexDirection: 'row'}}>
                        <Icon
                          name="calendar"
                          style={{
                            fontSize: 11,
                            color: '#2a2a2a',
                            lineHeight: 20,
                            fontWeight: 'bold',
                          }}
                        />
                        <Text style={{color: '#2a2a2a',fontWeight: 'bold', fontSize: 13,}}> {Moment(item.created_time).format('LLL')}</Text>
                      </View>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <Icon
                          name="comment-o"
                          style={{
                            fontSize: 15,
                            color: '#2a2a2a',
                            lineHeight: 19,
                          }}
                        />
                        <Text style={{color: '#2a2a2a', fontWeight: 'bold',fontSize: 13}}> {Object.keys(item.comments).length}</Text>
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
        /></View>
         <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=>{navigation.navigate('CreateQuestion')}}
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

    marginLeft: 6,
    marginRight: 6,
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
