import React, { Component } from 'react'
import { View, Text,TextInput,StyleSheet ,Dimensions,Button, TouchableOpacity } from 'react-native'
import ImageHolder from '../components/ImageHolder'
const dummyData ={
        title:"1",
        url:'https://i.picsum.photos/id/180/400/300.jpg',
        description:'147 actionable tasks: 2 executed, 145 up-to-date',
        id:1
    }
    const {width,height} = Dimensions.get('window')
export default class Arena extends Component {
    render() {
        return (
            <View style={styles.container}>
           
           
           
         

            <View style={{flex: 1, flexDirection: 'column'}}>
        
               
              
               
                <View style={{width: width-5,   padding:10}} >
                    <ImageHolder item={dummyData}/>  
                </View>
                <View style={{width: width-5, height: 75, padding:15}} >
                    <TextInput  placeholder='Answer' style={{backgroundColor: 'white',padding:5,borderRadius:20,textAlign:'center'}}/>
                </View>
                <View style={{flexDirection: 'row',width: width-5, height: 50,marginBottom:10 }} >
                            <View style={{flex: 1,   padding:10,marginBottom:10}}>
                            <TouchableOpacity
                            style={{borderRadius:20 ,alignItems: "center",
                            backgroundColor: "#009688",
                        
                            padding: 10}}
                            >
                                <Text style={{color:'#ffffff'}}>Check Answer</Text>
                            </TouchableOpacity>
                            </View>
                            <View style={{flex: 1,padding:10}}>
                            <TouchableOpacity
                            style={{borderRadius:20 ,alignItems: "center",
                            backgroundColor: "#0288D1",
                            padding: 10}}
                            >
                                 <Text style={{color:'#ffffff'}}>Check Proximity</Text>
                            </TouchableOpacity>
                            </View>
                </View>
      
            </View>
              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dce1e8',
    },
    formContent:{
      flexDirection: 'row',
      marginTop:30,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        height:45,
        flexDirection: 'row',
        alignItems:'center',
        flex:1,
        margin:10,
    },
    icon:{
      width:30,
      height:30,
    },
    iconBtnSearch:{
      alignSelf:'center'
    },
    inputs:{
        height:415,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
        backgroundColor: 'blue',
      
    },
    inputIcon:{
      marginLeft:15,
      justifyContent: 'center'
    },
    notificationList:{
      marginTop:20,
      padding:10,
    },
    notificationBox: {
      paddingTop:10,
      paddingBottom:10,
      marginTop:5,
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      borderRadius:10,
    },
    image:{
      width:45,
      height:45,
      borderRadius:20,
      marginLeft:20
    },
    name:{
        fontSize:20,
        fontWeight: 'bold',
        color: "#000000",
        marginLeft:10,
        alignSelf: 'center'
      },
    });  