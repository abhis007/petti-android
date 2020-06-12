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
  Spinner 
} from 'native-base';
import {URLS_CONTEST} from '../apiurls/Urls';
import axios from 'axios';
import {GlobalContext,disableLoader} from '../context/GlobalState';

export default function CreateHunt({route, navigation}) {
  const [huntType, setHuntType] = useState('');
  const [huntName, setHuntName] = useState('');
  const [huntDescription,setHuntDescription]=useState('PUBLIC')
 
  function setValueToPicker(value) {
    setHuntType(value);
  }

  const {authToken,enableLoader,disableLoader} = useContext(GlobalContext);

  createHuntApiCall = async () => {
    enableLoader()
 
    await axios.post(URLS_CONTEST.create,{
          name: huntName,
          description:huntDescription,
          status: 'INACTIVE',
          type: huntType,
        },
        {headers: {Authorization: `Bearer ${authToken}`}},
      )
      .then(
        async (response) => {
          console.log('gg', response.data);
        
          await disableLoader()
         
          setTimeout(function(){alert('Redirecting')}, 1000);
        },
        (error) => {
          console.log(error);
          disableLoader();
        },
      );
  };

  return (
    <Container style={{ flex: 1}}>
      <Content style={{marginTop:30}}>
        <Form>
        
        <Content padder>
            <Item rounded>
            <Input placeholder='   Hunt Name'  onChangeText={(text) => setHuntName(text)} />
          </Item>
            
          </Content>
          <Content padder>
            <Textarea rowSpan={5} bordered placeholder="Description" style={{borderRadius:25}} onChangeText={(text)=>setHuntDescription(text)} />
          </Content>

          <Content padder>
          <View style={{borderRadius: 30, borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden'}}>
            <Item picker  style={{paddingLeft:15}}>
            <Label style={{fontSize:14,fontWeight:'bold'}}>  Hunt Type :</Label>
              <Picker
              
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined,}}
                placeholder='Hunt Type'
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={huntType}
                pickerStyleType={{borderRadius:30}}
                onValueChange={(itemValue) => {
                  setHuntType(itemValue)
                }}>
                <Picker.Item label="Public" value="PUBLIC" />
                <Picker.Item label="Private" value="PRIVATE" />
              </Picker>
              
            </Item>
            </View>
          </Content>
          <View padder>
            <Button block success onPress={() => createHuntApiCall()}>
              <Text>Create Hunt</Text>
            </Button>
          </View>
        </Form>
      </Content>
    </Container>
  );
}
