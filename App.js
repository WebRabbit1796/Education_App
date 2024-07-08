import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './navigations/AppNavigation';
import { LogBox } from 'react-native';

//Ignore all log notifications
LogBox.ignoreAllLogs();

export default function App() {
  return (
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
  );
}