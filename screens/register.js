import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'galio-framework';
import { decrement, increment } from '../redux/counterSlice';
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = () => {
    const dispatch = useDispatch()
    const value = useSelector(state => state.counter.value)
	return (
        <SafeAreaView style = {{justifyContent: 'center', alignItems: 'center', flex: 1}}>
			<View style = {{flexDirection: 'row', alignItems: 'center'}}>
            <Text style = {{ fontSize: 30, textAlign: 'center'}}>{value}</Text>
            <Button
				iconFamily="antdesign"
				iconSize={30}
				color="warning"
				iconColor="#fff"
                onPress = {() => dispatch(increment())}
			> Increment
                </Button>
			<Button
				iconFamily="antdesign"
				iconSize={30}
				color="warning"
				iconColor="#fff"
                onPress = {() => dispatch(decrement())}
			>
				Decrement
			</Button>
            </View>
		</SafeAreaView>
	);
};

export default Register;
