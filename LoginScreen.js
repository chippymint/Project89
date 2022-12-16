signIn = async(email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
          this.props.navigation.replace("Dashboard");
      })
      .catch(error => {
          Alert.alert(error.message);
      });
};

render() {
    if(!this.state.fontsloaded) {
        return <AppLoading />;
    } else {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent : "center",
                    alignItems : "center"
                }}>
                <Button
                    title="Sign in with Google"  
                    onPress={() => this.signInWithGoogleAsync()}  ></Button>
            </View>        
            
                
        )
    }
}

return (
    <View style={styles.container}>
     <SafeAreaView style ={styles.droidSafeArea} />
     <View style={styles.appTitle}>
      <Image
       source={require("../assets/logo.png")}
       style={styles.appIcon}
       ></Image>
       < Text style={styles.appTitleText}>{'Story Telling\nApp'}</Text>
       </View>
       <View style ={styles.buttonContainer}>
    <TouchableOpacity
          style={styles.button}
          onPress={() => this.signInWithGoogleAsync()}
          >
            <Image
              source={require("../assets/google_icon.png")}
              style={styles.googleIcon}
              ></Image>
              <Text style={styles.googleText}> Sign In With Google</Text>
          </TouchableOpacity>
          </View>
    

);

toggleSwitch() {
    const previous_state = this.state.isEnabled;
    const theme = !this.state.isEnabled ? "dark" : "light"
    var updates = {}
    updates["/users/" + firebase.auth().currentUser.uid + "/current_theme"] = theme
    firebase.database().ref().update(updates);
    this.setState({isEnabled: !previous_state, light_theme: previous_state})
};