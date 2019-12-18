import React from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";
import { render } from "react-dom";

export default class AuthLoadingScreen extends React.Component{
    constructor(props){
        super(props);
        this.bootstrapAsync();
    }


bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    this.props.navigation.navigate(userToken ? "LoggedIn": "LoggedOut");
     
}

render() {
    return (
        <View>
            <ActivityIndicator/>
            <StatusBar barStyle="default"/>
        </View>
    );
}
}