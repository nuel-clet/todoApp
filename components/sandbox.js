import { StyleSheet, Text, View } from "react-native";

const Sandbox = () => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>                    
     );
}

const styles = StyleSheet.create({
    container:{
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        backgroundColor: '#ddd',
        paddingTop: 40        
    },
    boxOne: {
        padding: 10,
        backgroundColor: 'violet'
    },
    boxTwo: {
        padding: 20,
        backgroundColor: 'gold'
    },
    boxThree: {
        padding: 30,
        backgroundColor: 'coral'
    },
    boxFour: {
        padding: 40,
        backgroundColor: 'skyblue'
    },

})
 
export default Sandbox;