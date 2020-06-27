import React from 'react'
import {View,StyleSheet,Text,Image,Dimensions} from 'react-native';


const {width,height} = Dimensions.get('window')

export default function ImageHolder(item) {
    return (
       
        <View style ={styles.carView}>
         <View>
            <Text style ={styles.itemTitle}>Level : {item.item.title}</Text>
         </View>
         <View style={{borderBottomColor:'#eaeef3',borderBottomWidth:1,marginBottom:10}}/>
        <View>
        <Image style ={styles.image} source={{uri:item.item.url}}/>
        <Text style={styles.itemDescription}>{item.item.description}</Text>
        </View>
        
       </View>
    )
}


const styles =StyleSheet.create({

    carView:{
      
      
        width : width-20,
       
        backgroundColor:'white' ,
        
        borderRadius:10,
        shadowColor:'#000',
        shadowOffset:{width:0.5,height:0.5},
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation:5,
        padding:10,
        paddingBottom:10
    },

    

    image:{
        width:width-40,
        height:height/3-10,
        borderRadius:10
    },

    itemTitle:{
        color:'#2a2a2a',
        fontSize:20,
        shadowColor:'#000',
        shadowOffset:{width:0.8,height:0.8},
        shadowOpacity:1,
        shadowRadius:3,
        marginBottom:5,
        fontWeight:"bold",
        elevation:5,
        padding:10 ,
    },
    
    itemDescription:{
        color:'black',
        fontSize:14,
        shadowColor:'#000',
        shadowOffset:{width:0.8,height:0.8},
        shadowOpacity:1,
        shadowRadius:3,
        elevation:5,
        padding:10 ,
    }
})
