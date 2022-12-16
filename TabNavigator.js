import React from'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-iconsIonicons';
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
import {createMaterialBottomTabNavigator} from 'react-navigation'

yarn add @react-navigation/stack or npm install @react-navigation/stack

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={({route})} ({
                tabBarIcon: ({ focused, color, size}) => {
                    let IconName;
                    if (route.name === 'Feed') {
                        iconName= focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'CreatePost') {
                        iconName = focused ? 'create' :'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })
    )
}

render () {
    return(
        <View style ={styles.container}>
            <View style ={styles.cardContainer}>
                <View stytle ={styles.authorContainer}>
                    <View style ={styles.authorImageContainer}>
                        <Image>
                            source={require("../assets/profile_img.png")}
                            style={styles.profileImage}
                        </Image>
                    </View>
                    <View style = {styles.authorNameContainer}>
                        <Text style={styles.authorNameText}>{this.props.CreatePost.author}</Text>
                    </View>
                </View>
                <Image source={require("../assets/post.jpeg")} style = {styles.postImage} />
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>
                        {this.props.post.caption}
                    </Text>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                        <Text style={styles.likeText}>12k</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

