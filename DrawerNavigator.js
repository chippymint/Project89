import DrawerNavigator from "../../../game_code/React/Dec_01-22Class86/navigation/DrawerNavigator";

componentDidMount() {
    let theme;
    firebase
        .database()
        .ref("/users/" + firebase.auth().currentUser.uid)
        .on("value", function (snapshot){
            theme = snapshot.val().current_theme;
        });
    this.setState({ light_theme: theme === "light" ? true : false });

}

render() {
    let props = this.props;
    return(
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: "#e91e63",
                inactiveTintColor: this.state.light_theme ? "black" : "white",
                itemStyle: { marginVertical: 5}
            }}
            drawerContent={props => <CustomSidebarMenu {...props} />}
            >

            <Drawer.Screen
                name = "Home"
                component={StackNavigator}
                options={{unmountOnBlur : true}}
                />
                <Drawer.Screen
                    name = "Profile"
                    component = {Profile}
                    options = {{unmountOnBlur: true}}
                    />
                <Drawer.Screen
                    name= "Logout"
                    component = {Logout}
                    options = {{unmountOnBlur: true}}
                    />
                </Drawer.Navigator>
                
    )
}

async addPost() {
    if (
        this.state.caption
    ) {
        let postData = {
            preview_image: this.state.previewImage,
            caption: this.state.caption,
            author: firebase.auth().currentUser.displayName,
            created_on: new Date(),
            author_uid: firebase.auth().currentUser.uid,
            profile_image: this.state.profile_image,
            likes: 0
        };
        await firebase
            .database()
            .ref(
                "/posts" +
                Math.random()
                    .toString(36)
                    .slice(2)
            )
            .set(postData)
            .then(function (snapshot) {});
        this.props.setUpdateToTrue();
        this.props.navigation.navigate("Feed");

    } else {
        Alert.alert(
            "Error",
            "All Fields Are Required!",
            [{text : "OK", onPress: () => console.log("OK PRESSED" ) }],
            {cancelable: false}
        );
    }
}