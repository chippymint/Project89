registerUser= (email, password, confirmPassword, first_name, last_name) => {
    if(password==confirmPassword) {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            Alert.alert("User Registered!!");
        })
        .catch(error => {
            Alert.alert(error.message);

        });
    }else{
        Alert.alert("Passwords don't match!");
    }
};