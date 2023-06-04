import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CalendarScreen from './Components/CalendarScreen';
import TaskListScreen from './Components/TaskListScreen';
import MainPage from './Components/MainPage';
import LoginScreen from './Components/LoginScreen'
import SignUpScreen from './Components/SignUpScreen';
import ChatBotPage from './Components/ChatBotPage';
const Stack = createStackNavigator();

// App 컴포넌트는 스크린의 네비게이션을 설정하고 관리합니다.
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{title: 'Calendar'}} />
        <Stack.Screen name="TaskList" component={TaskListScreen} options={{title: 'Task List'}} />
        <Stack.Screen name="ChatBot" component={ChatBotPage} options={{title: 'ChatBot'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
