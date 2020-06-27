import React, { Component,useContext, useState } from 'react'
import { View,Modal,Dimensions,
    Image ,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import ListComponent from '../../components/ListComponent'
import {GlobalContext} from '../../context/GlobalState'
import {URLS_CONTEST} from '../../apiurls/Urls';
import axios from 'axios';
var  dummyData2 =
[
    {
        name:"Laptops",
        url:'https://i.picsum.photos/id/62/100/100.jpg',
        description:'147 actionable tasks: 2 executed, 145 up-to-date',
        id:31
    },
    {
      name:"Laptops",
      url:'https://i.picsum.photos/id/62/100/100.jpg',
      description:'147 actionable tasks: 2 executed, 145 up-to-date',
      id:31
  },
  {
    name:"Laptops",
    url:'https://i.picsum.photos/id/62/100/100.jpg',
    description:'147 actionable tasks: 2 executed, 145 up-to-date',
    id:31
},
    
]
var arrHuntList=[];

//export default class Featured extends Component {
export default function CreateHunt({route, navigation}) {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       modalVisible:false
        
    // }

    const {authToken,enableLoader,disableLoader} = useContext(GlobalContext);
    const [modalVisible,setModalVisible]=useState(false)
 

    React.useEffect(() => {
      const listHuntApiCall = async () => {
        enableLoader()
        await axios.get(URLS_CONTEST.create,
            {headers: {Authorization: `Bearer ${authToken}`}},
          )
          .then(
            async (response) => {

      
              arrHuntList=response.data
              await disableLoader()
          
              setTimeout(function(){alert('Redirecting')}, 1000);
            },
            (error) => {
              console.log(error);
              disableLoader();
            },
          );
      };
      
      listHuntApiCall();
    
    }, []);

    clickEventListener = () => {
      setModalVisible(true)
      
      }
    
    
    


        return (
            <Container  style={{backgroundColor:'#dce1e8',flex:1}}>

        <Content>
          <List>
            <ListComponent item={arrHuntList} module='Join'/>
          </List>
        </Content>
        
      </Container>
          
        )
    
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
      backgroundColor:"#eeeeee"
    },
    header:{
      backgroundColor: "#00CED1",
      height:200
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
      flex:1,
    },
    detailContent:{
      top:80,
      height:500,
      width:Dimensions.get('screen').width - 90,
      marginHorizontal:30,
      flexDirection: 'row',
      position:'absolute',
      backgroundColor: "#ffffff"
    },
    userList:{
      flex:1,
    },
    cardContent: {
      marginLeft:20,
      marginTop:10
    },
    image:{
      width:90,
      height:90,
      borderRadius:45,
    },
  
  
  
    card:{
      shadowColor: '#00000021',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
  
      marginVertical: 10,
      marginHorizontal:20,
      backgroundColor:"white",
      flexBasis: '46%',
      padding: 10,
      flexDirection:'row'
    },
  
    name:{
      fontSize:18,
      flex:1,
      alignSelf:'center',
      color:"#008080",
      fontWeight:'bold'
    },
    position:{
      fontSize:14,
      flex:1,
      alignSelf:'center',
      color:"#696969"
    },
    about:{
      marginHorizontal:10
    },
  
    followButton: {
      marginTop:10,
      height:35,
      width:100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    followButtonText:{
      color: "#FFFFFF",
      fontSize:20,
    },
   /************ modals ************/
    popup: {
      backgroundColor: 'white',
      marginTop: 80,
      marginHorizontal: 20,
      borderRadius: 7,
    },
    popupOverlay: {
      backgroundColor: "#00000057",
      flex: 1,
      marginTop: 30
    },
    popupContent: {
      //alignItems: 'center',
      margin: 5,
      height:250,
    },
    popupHeader: {
      marginBottom: 45
    },
    popupButtons: {
      marginTop: 15,
      flexDirection: 'row',
      borderTopWidth: 1,
      borderColor: "#eee",
      justifyContent:'center'
    },
    popupButton: {
      flex: 1,
      marginVertical: 16
    },
    btnClose:{
      height:20,
      backgroundColor:'#20b2aa',
      padding:20
    },
    modalInfo:{
      alignItems:'center',
      justifyContent:'center',
    }
  }); 