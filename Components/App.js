/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Alert, AppRegistry, Platform, StyleSheet, Text,Image,
  TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
   TouchableWithoutFeedback, View,FlatList,SectionList,ActivityIndicator
} from 'react-native';
// const width = '10%';
// const height = '10%';

export default class App extends Component {


    constructor(props){
      super(props);
      this.state ={ isLoading: true}
    }

    getGridViewItem(title){
      Alert.alert("",title);

    }
    componentDidMount(){
      // return fetch('https://facebook.github.io/react-native/movies.json')
        return fetch ('https://api.themoviedb.org/3/movie/now_playing?api_key=165aca1ac24743f83b4175e69c4d11c3')
        .then((response) => response.json())
        .then((responseJson) => {

          this.setState({
            isLoading: false,
            dataSource: responseJson.results,
          }, function(){

          });

        })
        .catch((error) =>{
            Alert.alert('Lỗi',error.toString());
        });
    }



    render(){

      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20,  alignItems:'center'}}

                >
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )
      }

      return(
        <View style={{flex: 1, paddingTop:20}}>
      <FlatList
      //'https://image.tmdb.org/t/p/w500'
            data={this.state.dataSource}
                        renderItem={({item}) =>
                        <View style={{flex:1 }}>
                        <Text style={{fontWeight:'bold',fontSize:30 }}>{item.title}</Text>
                        <Image source={{uri:`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}}
                        style={{width:400, height:300}}/>
                        </View>
          }
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }
  }
