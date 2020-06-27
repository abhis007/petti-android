import React, {useState,useContext} from 'react';
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
ActivityIndicator
} from 'react-native';
import Moment from 'moment';
 
import Icon from 'react-native-vector-icons/FontAwesome'
import {GlobalContext} from '../context/GlobalState'
import {URLS_QUESTION} from '../apiurls/Urls';
import axios from 'axios';
import { set } from 'react-native-reanimated';

const images =[
                require('../assets/question_2.png'),
                require('../assets/question_2.png'),
                require('../assets/question_2.png')
              ]
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
                                style={{height:180,width:500}}
                                source={require('../assets/no-questions.png')}
                                resizeMode="contain"
                              />
                        <Text style={{fontSize:12,fontWeight: 'bold'}}>You havent asked anything</Text>
                    </View>
                    </View>
                )
            }

 
   export default function PettiHome({route, navigation}) {

   
 //test
    Moment.locale();
    const {authToken,enableLoader,disableLoader,reLoadList,setListReload} = useContext(GlobalContext);
    const [questions,setQuestions]=useState('')
    const [page,setPage]=useState(0)
    const [isFetching,setIsFetching]=useState(false)
    const listQuestionsApiCall = async (currentPage) => {

      enableLoader()
   
      await axios.get(URLS_QUESTION.mycontest+'?page='+currentPage,
          {headers: {Authorization: `Bearer ${authToken}`}},
        )
        .then(
          async (response) => {
          
          var  qstn=await response.data;
          if(currentPage==0){
            if(qstn.length!=0)
            setQuestions(qstn)
            else 
            setQuestions('')
            setPage(0)
          }
        
          else{
            if(qstn.length!=0){
                setQuestions(prevQuestions=>(prevQuestions.concat(qstn)))
              }
            else{
              setPage(-1)
            }
          }
          setIsFetching(false)
          disableLoader()
          },
          (error) => {
            console.log(error);
            disableLoader();
          },
        );
    };
    React.useEffect(() => {
      listQuestionsApiCall(0);
    
    }, []);

 
    if(reLoadList)
        {
          listQuestionsApiCall(0)
          setListReload(false)
        }
 
  const loadMore= ()=>{
   let currentPage =page;
   if(currentPage!=-1)
   { 
      currentPage+=1
      setPage(currentPage)
      listQuestionsApiCall(currentPage);
    }
  
  }

  function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
 
    let k = 1;
    return (
      <View style={styles.container}>
        <View style={{  backgroundColor: '#ff8a80',height:40, flexDirection: 'row', marginTop: -20}}>
        <View style={{flex:8}}  >
          <Text
            style={{
              fontWeight: 'bold',
              color: '#ffffff',
              textAlign: 'center',
              marginTop: 12,
              fontSize: 12,
            }}>
            Showing all question asked by you
          </Text>
          </View>
       
        </View>
        <View style={{backgroundColor:'#e8eaf6',flex:1}}>
        <FlatList
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={questions}
          onEndReached={()=>loadMore()}
          onEndReachedThreshold={0.2}
 ListEmptyComponent={listEmptyComponent}
          onRefresh={() =>listQuestionsApiCall(0)}
         refreshing={isFetching}
          keyExtractor={(item) => {
            return item._id;
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
                        <Text style={{color: '#2a2a2a', fontWeight: 'bold',fontSize: 13}}> {(item.comments)?Object.keys(item.comments).length:0}</Text>
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
