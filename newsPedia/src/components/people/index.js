import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'

export default class People extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Testing People
                </Text>
                <Button onPress={() => this.props.navigator.push({page: 'news'})}
                  title="News"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height: '100%',
        width:'100%'

    }
});
