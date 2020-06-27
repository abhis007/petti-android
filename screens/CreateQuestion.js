import React, {useState, useContext} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Textarea,
  View,
  Picker,
  Button,
  Text,
  Toast,
  Spinner ,
  
  
} from 'native-base';
import { Notifier, NotifierComponents } from 'react-native-notifier';
import Share from "react-native-share";
import Icon from 'react-native-vector-icons/FontAwesome'
import {  Image  , Clipboard,TouchableOpacity,  StyleSheet} from 'react-native';
import {URLS_QUESTION,URLS_USER} from '../apiurls/Urls';
import axios from 'axios';
import {GlobalContext,disableLoader} from '../context/GlobalState';
import AsyncStorage from '@react-native-community/async-storage';
import  {baseUrl,shareWebUrl} from '../config/config'
export default function CreateQuestion({route, navigation}) {
  const [huntType, setHuntType] = useState('');
  const [huntName, setHuntName] = useState('');
  const [responseData,setResponseData] = useState('');
  const [sharemode,SetSharemode]=useState(false);
  const [question,setQuestion]=useState('')
  const images =[
    require('../assets/question_1.png'),
    require('../assets/question_2.png'),
    require('../assets/question_2.png')
  ]

  function setValueToPicker(value) {
    setHuntType(value);
  }

  const {authToken,enableLoader,disableLoader,setListReload,share} = useContext(GlobalContext);
 
 const createQuestionApiCall = async () => {
    enableLoader()
 
    await axios.post(URLS_QUESTION.create,{
          question : question,
           
        },
        {headers: {Authorization: `Bearer ${authToken}`}},
      )
      .then(
        (response) => {
 
       // const postedData = await response.data

        setResponseData(response.data)
        SetSharemode(true)
        disableLoader()
        
        setListReload(true)
Notifier.showNotification({
  title: 'DONE',
  description: 'Question Created Sucessffully',
  Component: NotifierComponents.Alert,
  duration:3000,
  componentProps: {
    alertType: 'info',
    backgroundColor:"#26a69a"
  },
});
        console.log('\n\n\n\r\r\r',responseData)
      
          
        },
        (error) => {
          console.log(error);
          disableLoader();
        },
      );
  };


  
  const shareQuestion =async ()=>{
  await share(responseData);
  }

  const reset =()=>{
   
    setResponseData('')
    SetSharemode(false)
  }

  const copyUrl =  () => {
    const url =shareWebUrl+ responseData._id

    Clipboard.setString(url)
    Notifier.showNotification({
      title: 'Copied',
      description: 'Question link Copied Sucessffully ',
      Component: NotifierComponents.Alert,
      duration:3000,
      componentProps: {
        alertType: 'info',
         
      },
    });

  }

  return (
    <Container style={{ flex: 1,backgroundColor:'#e8eaf6'}}>
      <View style={{flex: 4}}>
      <View style={{backgroundColor: '#ff8a80', minHeight:100  }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex:1,marginLeft:10,marginLeft:10}}>
            <Image
                    source={require('../assets/question_1.png')}
                    style={{height:80,width:80,marginTop:10}}
                    resizeMode="contain"
                />
          </View>
          <View style={{flex: 3}}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#ffffff',
            
              marginTop: 10,
              fontSize: 15,
              marginLeft: 5,
              marginRight: 5,
            }}>
          Create your question and share the link . let your friends answer is anonmusly
          </Text>
          </View>
          </View>
        </View>
      <Content style={{}}>

        <Form>
        
       
          <Content padder>
          { (!sharemode)?
            <Textarea   rowSpan={5} bordered placeholder="Enter Your Question" style={{borderRadius:25,backgroundColor:'#e3f2fd'}} onChangeText={(text)=>setQuestion(text)} />
            :
            <TouchableOpacity
                style={styles.card}
               >
                <Image
                  style={styles.image}
                  source={images[ Math.floor(Math.random() * 2) ]}
                  resizeMode="contain"
                />
                <View style={styles.cardContent}>
                <Text  style={{fontWeight:'bold'}}>You Asked</Text>
                  <Text style={styles.followButtonText}>
                  {responseData.question
                  
                  }
                  {  console.log('asdasd',responseData.question)}
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
                            fontSize: 14,
                            color: '#2a2a2a',
                            lineHeight: 20,
                            fontWeight: 'bold',
                          }}
                        />
                        <Text style={{color: '#2a2a2a',fontWeight: 'bold', fontSize: 13,}}> Just Now</Text>
                      </View>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <Icon
                          name="comment"
                          style={{
                            fontSize: 15,
                            color: '#2a2a2a',
                            lineHeight: 19,
                          }}
                        />
                        <Text style={{color: '#2a2a2a', fontWeight: 'bold',fontSize: 13}}> 0</Text>
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
            }


          </Content>

         
          <View padder style={{padding:10}}>
          { (!sharemode)?
            <Button block   rounded  onPress={() => createQuestionApiCall()}   style={{backgroundColor:'#ff5252'}}>
              <Text>Create question</Text>
            </Button>
            :null
            
          }
         
           
          </View>
        </Form>


      </Content>
</View>

{


      <View style={{flex:1,padding: 20,backgroundColor:'#3b4045',display:(sharemode)?'flex':'none'}}>
        <View>
        {/* <Item disabled  regular>
            <Input  disabled  small placeholder='Icon Alignment in Textbox' style={{}}/>
            <Icon active name='swap' />
          </Item> */}
          <Text style={{fontSize:15,color:'white'}} numberOfLines={1}>
            {shareWebUrl+responseData._id}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
              <View style={{flex:1,padding:10}}>
                  <Button rounded  block  bordered small   onPress={() => shareQuestion()}  ><Text style={{textAlign:'center',color:"white"}}>  Share</Text></Button>
              </View>
              <View style={{flex:1,padding:10}}>
                  <Button rounded  block danger bordered small onPress={() =>copyUrl()}><Text style={{textAlign:'center',color:"white"}}>Copy </Text></Button>
              </View>
              <View style={{flex:1,padding:10}}>
                  <Button rounded  block success bordered small  onPress={() =>reset()}><Text style={{textAlign:'center',color:"white"}}>New</Text></Button>
              </View>
          </View>
        </View>
        }
     

      {/* <TouchableOpacity onPress={() =>{ Share.open(options)
    .then((res) => { console.log(res) })
    .catch((err) => { err && console.log(err); });}}>
  <View>
    <Text style={{color: 'red', fontSize: 14 , fontFamily:'Arial', fontWeight: 'bold', textAlign: 'center', marginTop: 3, marginLeft: 25, marginBottom: 17}}> 
                mail@mail.com
    </Text>
    <Button block danger rounded  onPress={() => shareQuestion()}  >
          <Text>Share</Text>
    </Button>
     
  </View>
</TouchableOpacity> */}
    </Container>
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
    marginTop: 50,
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
