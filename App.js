import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EggButton from './component/buttons/EggButton';
import React, { useState, useEffect } from 'react';
import AutoClick from './component/buttons/AutoClick';

export default function App() {
	const [activeOne, setActiveOne] = useState(false);
	const [activeTwo, setActiveTwo] = useState(false);
	const [activeThree, setActiveThree] = useState(false);
	const [activeFour, setActiveFour] = useState(false);

	const [currentClickVal, setCurrentClickVal] = useState(10);
	const [totalClicks, setTotalClicks] = useState(0);

	useEffect(() => {
		if (totalClicks == 100) {
			setActiveOne(true);
		}
	}, [totalClicks]);

	const increaseCounter = (val) => {
		console.log('counter increased by...', val);
		setTotalClicks((prevTotal) => prevTotal + val);
	};

	return (
		<View style={styles.container}>
			<StatusBar style='auto' />

			{/* Click Counter */}
			<Text style={styles.totalClicks}>{`${totalClicks} Clicks`}</Text>

			{/* Egg */}
			<EggButton
				increaseCounter={increaseCounter}
				currentClickVal={currentClickVal}
			/>
			<Text style={styles.clicksPerSec}>+ {`${currentClickVal}`} Clicks / s</Text>
			<Text style={styles.clickBoost}>Click Boosts:</Text>
			<Text style={styles.clickBoostHelper}>
				Click Boosts are non-refundable!
			</Text>
			<AutoClick clickValue={1} clickCost={'100'} activeOne={activeOne} setCurrentClickVal={setCurrentClickVal} />
			<AutoClick
				clickValue={10}
				clickCost={10000}
				activeTwo={activeTwo}
			/>
			<AutoClick
				clickValue={20}
				clickCost={1000000}
				activeThree={activeThree}
			/>
			<AutoClick
				clickValue={30}
				clickCost={100000000}
				activeFour={activeFour}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'column',
	},
	eggButton: {
		fontSize: 150,
		marginTop: 50,
	},
	totalClicks: {
		fontSize: 25,
		alignSelf: 'flex-end',
		padding: 20,
	},
	clicksPerSec: {
		fontSize: 30,
	},
	clickBoost: {
		fontSize: 30,
		marginTop: 16,
	},
	clickBoostHelper: {
		fontSize: 10,
	},
});
