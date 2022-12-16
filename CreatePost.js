return(
    <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}  />
        <View style={styles.appTitle}>
            <View style={styles.appIcon}>
                <Image
                source={require("../assets/logo.png")}
            </View>
        </View>
    </View>

    <DropDownPicker

    items={[
        {label:"Image 1", value:"image_1"},
        {label:"Image 2", value:"image_2"},
        {label:"Image 3", value:"image_3"},
        {label:"Image 4", value:"image_4"},
        {label:"Image 5", value:"image_5"},
        {label:"Image 6", value:"image_6"},
        {label:"Image 7", value:"image_7"}
        
    ]}
);

postCardLight: {
    margin: RFValue(20)
    backgroundColor:"#eaeaea"
    borderRaduis: RFValue(20)
},
authorNameText: {
    color: "white",
    fontSize: FValue(20)
},
authorNameTextLight: {
    color: "black",
    fontSize: RFValue(20)

async addPost() {
    if(
        this.state.caption
    ) {
        let postData = {
            preview_image: this.state.previewImage,
            caption: this.state.caption,
            author: firebase.auth().currentUser.displayName,
            create_on: new Date(),
            author_uid: firebase.auth().currentUser.uid,
            profile_image: this.state.profile_image,
            likes : 0
        };
        await firebase
            .database()
            .ref(
                "/posts/" +
                Math.random()
                    .toString(36)
                    .slice(2)
            )
            .set(postData)
            .then(function(snapshot) { });
        this.props.setUpdateToTrue();
        this.props.navigation.navigate("Feed");
     } else {
         Alert.alert (
             "Error",
             "All Fields Are Required",
             [{ text: "OK", onPress: () => console.log("OK Pressed") }],
             {cancelable: false}
         );
     }
    }
}