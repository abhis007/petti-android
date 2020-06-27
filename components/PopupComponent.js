import React, {Component} from 'react';
import {
 
  Modal,
  ScrollView ,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {   Badge,  Button, Icon, View,
 
    Text,
    Left, } from 'native-base';
    import Tooltip from 'rn-tooltip';

const dummyData = {
  title: '1',
  url: 'https://i.picsum.photos/id/180/400/300.jpg',
  description: '147 actionable tasks: 2 executed, 145 up-to-date',
  id: 1,
};
const {width, height} = Dimensions.get('window');
export default class PopupComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
   
  }


  componentWillReceiveProps(newProps) {
      console.log(newProps)
    this.setState({show:newProps.blnShow})
}
  render() {
      console.log(this.props,this.state)
    return (
      <View>
        {/* Modal */}
        <Modal transparent={true} visible={this.state.show}>
          {/* modal outer backgorund */}
          <View
            style={{
              backgroundColor: '#2a2a2aaa',
              flex: 1,
              paddingTop: 50,
              paddingBottom: 60,
              paddingLeft: 20,
              paddingRight: 20,
            }}>
            {/* modal inner */}
            <View
              style={{
                backgroundColor: '#ffffff',
                
                flex: 1,
                padding: 20,
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderRadius: 10,
              }}>
              <ScrollView style={{backgroundColor:"white",borderRadius:10}}>
              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                <Image
                  style={{width: width - 80, height: height / 3}}
                  source={{uri: dummyData.url}}
                />
              </View>
              <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap',padding:10,}}>
              <View>
              <Text style={{fontSize:20,fontWeight:"bold",marginTop:20}}>{this.props.data.name} </Text>
              </View>
            
             <View>
                <Text style={{marginTop:10}}>
                  {this.props.data.description}
                </Text>
                </View>    
       
              </View>

              <View
                style={{
                  flexDirection: 'row',
                
                  height: 50,
                 
                  marginTop: 10,
                }}>
               
          <View style={{paddingLeft:10}}>
          <Tooltip backgroundColor="#009688"   withOverlay={false} 
 popover={<Text style={{color:"white",fontSize:12,fontWeight:"bold"}}>Top the list</Text>}>
          <View style={{backgroundColor:"#1e88e5",padding:5,paddingRight:10,borderRadius:20}}>
       
          <Text style={{color:"#ffffff",fontSize:12}}>   <Icon name='people'  style={{color:"#ffffff",fontSize:15}}  />&nbsp;Brain battle</Text>
          </View>
          </Tooltip>
          </View>

          <View style={{paddingLeft:10}}>
          <Tooltip backgroundColor="#009688"   withOverlay={false} 
 popover={<Text style={{color:"white",fontSize:12,fontWeight:"bold"}}>500 people Playing</Text>}>
          <View style={{backgroundColor:"#1e88e5",padding:5,paddingRight:10,borderRadius:20}}>
       
          <Text style={{color:"#ffffff",fontSize:12}}>   <Icon name='people'  style={{color:"#ffffff",fontSize:15}}  />&nbsp;500</Text>
          </View>
          </Tooltip>
          </View>
             </View>
              </ScrollView>
              



              <View
                style={{
                  flexDirection: 'row',
                
                  height: 35,
                  marginBottom: 10,
                }}>
                <View style={{flex: 1, padding: 10, marginBottom: 10}}>
                  <TouchableOpacity
                    style={{
                      borderRadius: 20,
                      alignItems: 'center',
                      backgroundColor: '#009688',
                      height:40,
                      padding: 10,
                    }}>
                    <Text style={{color: '#ffffff'}}>Join</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flex: 1, padding: 10}}>
                  <TouchableOpacity
                  onPress={event => this.props.onChange(false) }
                    style={{
                      borderRadius: 20,
                      alignItems: 'center',
                      backgroundColor: '#0288D1',
                      padding: 10,
                      height:40
                    }}>
                    <Text style={{color: '#ffffff'}}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>

             
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
