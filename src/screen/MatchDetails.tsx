
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useStack} from "../hooks/useNav";

export function MatchDetails() {
    const navigation = useStack()

    return (
        <View style={styles.container}>
            <Text style={styles.text}>MATCH DETAILS</Text>
            <StatusBar style="light" />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('feed')}>
                <Text style={styles.textButton}>Go to Feed</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161621',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#ffffff',
        fontFamily: 'Roboto_700Bold'
    },
    textButton: {
        color: '#161621',
        fontFamily: 'Roboto_500Medium'
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 4
    }
});
