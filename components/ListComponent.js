import React, { Component,useState } from 'react'
import {FlatList,View, Alert,Dimensions} from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import PopupComponent from './PopupComponent'


const {width,height} = Dimensions.get('window')
const ListComponent=({item,module}) =>{

  const [popupState,setPopupState] = useState(false)
  const[popupData,setPopupData]=useState('')

 
  const openPopup=(data)=>{
    
    if(popupState==true)
      {
        setPopupState(false)
        setPopupData('')
        
      }
    else
     { setPopupState(true)
        
      setPopupData(data)
       
    }
    
  }
  
        return (
            
            <Container  style={{backgroundColor:'#dce1e8',flex:1,height:height-200}}>
  
            <Content>
              <List  dataArray={item} 
              
              renderRow={(data) =>       
              <ListItem thumbnail>
          
                  <Left>
                    <Thumbnail square source={{ uri:data.url }} />
                  </Left>
                  <Body>
                    <Text  style={{fontWeight:'bold',color:'#3b3b3b'}}>{data.name}</Text>
                    <Text note numberOfLines={2} st>{data.description}</Text>
                    <Text note style={{fontWeight:'bold'}}>Cash Price:1000 Rs/-</Text>
                  </Body>
                  <Right>
                  {(module=='Created')?
                  
                    <Button backgroundColor='#1e88e5' style={{borderRadius:50,backgroundColor: '#fff'  }}>
                      <Text>Edit</Text>
                      
                    </Button>
                    :(module=='Play')?
                        <Button backgroundColor='#039be5' style={{borderRadius:50,backgroundColor: '#fff'  }}>
                          <Text>Play</Text>
                        </Button>
                      : 
                    
                      <Button backgroundColor='#26a69a' style={{borderRadius:50}}  onPress ={()=>openPopup(data)}>
                        <Text>Join</Text>
                        </Button>
                                                            
                  }
                  </Right>
                </ListItem>}>


                
              </List>
            </Content>    
            <PopupComponent blnShow={popupState}  data={popupData} onChange={value=>openPopup(popupData)}  />
          </Container>
        )
                          }
   export default ListComponent
