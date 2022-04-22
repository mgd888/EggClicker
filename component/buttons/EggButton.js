import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const EggButton = ({increaseCounter, currentClickVal}) => {
	return (
		<Button
            onPress={() => increaseCounter(currentClickVal)}
			titleStyle={{
				fontSize: 150,
				backgroundColor: 'white',
			}}
			buttonStyle={{
				backgroundColor:"white",
			}}
			title='🥚'
		/>
	);
};

export default EggButton;

const styles = StyleSheet.create({
	eggButton: {
		fontSize: 150,
		marginTop: 50,
	},
});
