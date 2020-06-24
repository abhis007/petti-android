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
  Icon,
  Picker,
  Button,
  Text,
 
  Toast,
  Spinner ,
  
} from 'native-base';
import Share from "react-native-share";

import {  Image  , Clipboard,TouchableOpacity} from 'react-native';
import {URLS_QUESTION} from '../apiurls/Urls';
import axios from 'axios';
import {GlobalContext,disableLoader} from '../context/GlobalState';

export default function CreateQuestion({route, navigation}) {
  const [huntType, setHuntType] = useState('');
  const [huntName, setHuntName] = useState('');
  const [responseUrl,setResponseUtl] = useState('');
  const [question,setQuestion]=useState('')
 
  function setValueToPicker(value) {
    setHuntType(value);
  }

  const {authToken,enableLoader,disableLoader} = useContext(GlobalContext);
 
 const createQuestionApiCall = async () => {
    enableLoader()
 
    await axios.post(URLS_QUESTION.create,{
          question : question,
          created_user_id:"abi"
        },
        {headers: {Authorization: `Bearer ${authToken}`}},
      )
      .then(
        async (response) => {
 
        const postedData = await response.data
        disableLoader()
        
        console.log('\n\n\n\\r\r\r',postedData)
      
          
        },
        (error) => {
          console.log(error);
          disableLoader();
        },
      );
  };
  return (
    <Container style={{ flex: 1}}>
      
      <View style={{backgroundColor: '#4db6ac', minHeight:100  }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex:1,marginLeft:10,marginLeft:10}}>
            <Image
                    source={require('../assets/quest.png')}
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
      <Content style={{marginTop:30}}>

        <Form>
        
       
          <Content padder>
            <Textarea rowSpan={5} bordered placeholder="Enter Your Question" style={{borderRadius:25}} onChangeText={(text)=>setQuestion(text)} />
          </Content>

         
          <View padder>
            <Button block danger rounded  onPress={() => createQuestionApiCall()}  >
              <Text>Create question</Text>
            </Button>
          </View>
        </Form>
     
      </Content>


      <TouchableOpacity onPress={() =>{ Share.open(options)
    .then((res) => { console.log(res) })
    .catch((err) => { err && console.log(err); });}}>
  <View>
    <Text style={{color: 'red', fontSize: 14 , fontFamily:'Arial', fontStyle: 'bold', textAlign: 'center', marginTop: 3, marginLeft: 25, marginBottom: 17}}> 
                mail@mail.com
    </Text>
  </View>
</TouchableOpacity>
    </Container>
  );
}
