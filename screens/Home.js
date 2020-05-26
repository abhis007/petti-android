import React, { Component } from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native'
import { Text,Image, Dimensions,View,ScrollView ,FlatList,TouchableOpacity,StyleSheet,SafeAreaView} from 'react-native'


const dummyData3 =
[
    {
        title:"Laptops",
        url:'https://i.picsum.photos/id/62/200/100.jpg',
        description:'147 actionable tasks: 2 executed, 145 up-to-date 147 actionable tasks: 2 executed, 145 up-to-date 147 actionable tasks: 2 executed, 145 up-to-date',
        key:134
    },
    {
        title:"Fasion",
        url:'https://i.picsum.photos/id/1059/200/100.jpg',
        description:'asd',
        key:2232
    },
    {
        title:"Titlte",
        url:'https://i.picsum.photos/id/23/200/100.jpg',
        description:'adsa12323dasd',
        key:324234
    },
    {
        title:"Laptops",
        url:'https://i.picsum.photos/id/55/200/100.jpg',
        description:'147 actionable tasks: 2 executed, 145 up-to-date',
        key:4123123
    },
    {
        title:"Laptops",
        url:'https://i.picsum.photos/id/61/200/100.jpg',
        description:'147 actionable tasks: 2 executed, 145 up-to-date',
        key:534
    },
    {
        title:"Laptops",
        url:'https://i.picsum.photos/id/62/200/100.jpg',
        description:'147 actionable tasks: 2 executed, 145 up-to-date',
        id:6
    },
]
const dummyData2 =
[
    {
        title:"Laptops",
        url:'https://i.picsum.photos/id/62/100/100.jpg',
        description:'147 actionable tasks: 2 executed, 145 up-to-date',
        key:31
    },
    {
        title:"Fasion",
        url:'https://i.picsum.photos/id/1059/400/300.jpg',
        description:'Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0.',
        key:32
    },
    {
        title:"Titlte",
        url:'https://i.picsum.photos/id/23/400/300.jpg',
        description:'adsadasd',
        key:33
    },
    {
        title:"Laptops",
        url:'https://i.picsum.photos/id/55/100/100.jpg',
        description:'147 actionable tasks: 2 executed, 145 up-to-date',
        key:312
    },
    {
        title:"Laptops",
        url:'https://i.picsum.photos/id/61/100/100.jpg',
        description:'147 actionable tasks: 2 executed, 145 up-to-date',
        key:11
    },
    {
        title:"Laptops",
        url:'https://i.picsum.photos/id/62/100/100.jpg',
        description:'147 actionable tasks: 2 executed, 145 up-to-date',
        key:112
    },
]
const {width,height} = Dimensions.get('window')
export default class Home extends Component {
    render() {
        return (
            <View>
                 <View style={{paddingLeft:11,paddingTop:10}}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Featured Hunts</Text>
                    </View>   
            <ScrollView directionalLockEnabled ={true}>
                
                    <View style={{flexDirection:"row",margin:10,marginBottom:0}}>   
                        <FlatList data={dummyData2} 
                        style={{paddingLeft:5}}
                        horizontal={true}
                        keyExtractor={(item,index)=>'key'+index}
                            renderItem={({item})=>{
                                return(
                                    <View style={{paddingVertical:15, paddingLeft:5,}}>
                                    <TouchableOpacity >
                                    
                                        <Image source={{uri:item.url}}
                                            style={{
                                                width:200,
                                                height:height/6,
                                                marginRight:14,
                                                borderRadius:10,
                                                shadowColor:'#000',
                                                shadowOffset:{width:0.5,height:0.5},
                                                shadowOpacity:0.5,
                                                shadowRadius:3,

                                                textAlign:'center'

                                            }}
                                        />
                                    <Text style ={styles.ImageText}>{item.title}</Text>
                                    
                                    </TouchableOpacity>
                                    </View>
                                )
                            }}
                        /> 
                            
                    </View>
            </ScrollView>

             <View style={{paddingLeft:11,paddingTop:10}}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Trending Hunts</Text>
                    </View>   
            <ScrollView directionalLockEnabled ={true}>
                
                    <View style={{flexDirection:"row",margin:10,marginBottom:0}}>   
                        <FlatList data={dummyData2} 
                        style={{paddingLeft:5}}
                        horizontal={true}
                        keyExtractor={(item,index)=>'key'+index}
                            renderItem={({item})=>{
                                return(
                                    <View style={{paddingVertical:15, paddingLeft:5,}}>
                                    <TouchableOpacity >
                                    
                                        <Image source={{uri:item.url}}
                                            style={{
                                                width:200,
                                                height:height/6,
                                                marginRight:14,
                                                borderRadius:10,
                                                shadowColor:'#000',
                                                shadowOffset:{width:0.5,height:0.5},
                                                shadowOpacity:0.5,
                                                shadowRadius:3,

                                                textAlign:'center'

                                            }}
                                        />
                                    <Text style ={styles.ImageText}>{item.title}</Text>
                                    
                                    </TouchableOpacity>
                                    </View>
                                )
                            }}
                        /> 
                            
                    </View>
            </ScrollView>
            <View style={{paddingLeft:11,paddingTop:10}}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>All hunts</Text>
                    </View>   
            <ScrollView directionalLockEnabled ={true}>
                
                    <View style={{flexDirection:"row",margin:10,marginBottom:0}}>   
                        <FlatList data={dummyData2} 
                        style={{paddingLeft:5}}
                        horizontal={true}
                        keyExtractor={(item,index)=>'key'+index}
                            renderItem={({item})=>{
                                return(
                                    <View style={{paddingVertical:15, paddingLeft:5,}}>
                                    <TouchableOpacity >
                                    
                                        <Image source={{uri:item.url}}
                                            style={{
                                                width:200,
                                                height:height/6,
                                                marginRight:14,
                                                borderRadius:10,
                                                shadowColor:'#000',
                                                shadowOffset:{width:0.5,height:0.5},
                                                shadowOpacity:0.5,
                                                shadowRadius:3,

                                                textAlign:'center'

                                            }}
                                        />
                                    <Text style ={styles.ImageText}>{item.title}</Text>
                                    
                                    </TouchableOpacity>
                                    </View>
                                )
                            }}
                        /> 
                            
                    </View>
            </ScrollView>
            
            
            </View>
        )
    }
}
const styles =StyleSheet.create({
    ImageText:{
        color:'white',
        fontSize:18,
        shadowColor:'#000',
        shadowOffset:{width:0.8,height:0.8},
        shadowOpacity:1,
        shadowRadius:3,
        marginBottom:5,
        fontWeight:"bold",
        elevation:5,
        bottom:5,
        textAlign: 'center', // <-- 
        justifyContent: 'center',
        position:'absolute',
        left:10
        
        
        
    }
})