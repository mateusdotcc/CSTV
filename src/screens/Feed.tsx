import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useStack} from "@hooks/useNav";

export function Feed() {
    const navigation = useStack()

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.text}>FEED</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('matchDetails')}>
                <Text style={styles.textButton}>Go to Match Details</Text>
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
