import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const AutoClick = ({
	clickValue,
	clickCost,
	activeOne,
	activeTwo,
	activeThree,
	activeFour,
	setCurrentClickVal,
}) => {
	return activeOne || activeTwo || activeThree || activeFour ? (
		<Button
			onPress={() => setCurrentClickVal((currClick) => currClick + 1)}
			titleStyle={{
				backgroundColor: 'white',
				color: 'black',
				fontSize: 12,
			}}
			buttonStyle={{
				backgroundColor: 'white',
				borderWidth: 0,
				marginTop: 5,
			}}
			containerStyle={{
				borderWidth: 1,
				margin: 10,
				padding: 12,
				width: '70%',
			}}
			title={`+ ${clickValue} Click / s (Cost: ${clickCost} Clicks)`}
		/>
	) : (
		<Button
			disabled
			titleStyle={{
				color: 'black',
				fontSize: 12,
			}}
			buttonStyle={{
				borderWidth: 0,
				marginTop: 5,
			}}
			containerStyle={{
				borderWidth: 1,
				margin: 10,
				padding: 12,
				width: '70%',
				backgroundColor: '#cccccc',
			}}
			disabledStyle={{
				backgroundColor: 'none',
			}}
			title={`+ ${clickValue} Click / s (Cost: ${clickCost} Clicks)`}
		/>
	);
};

export default AutoClick;
