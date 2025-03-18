import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import './global.css';
import AppLayout from './app/AppLayout';
import Title from './app/Title';
import CalculatorLayout from './app/CalculatorLayout';
import {Provider} from 'react-redux';
import store from './app/store/store';

export default function App () {
  return (
    <Provider store={store}>
      <AppLayout>
        <Title />
        <CalculatorLayout />
      </AppLayout>
    </Provider>
  );
}
