
fetchUser = () => {
    let theme;
    firebase
        .database()
        .ref("/users/" + firebase.auth().currentUser.uid)
        .on("value", (snapshot) => {
            theme = snapshot.val().current_theme
            this.setState({ light_theme: theme === "light"})
        })
}

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
}