import React, { useState } from 'react';
import { SplashScreen } from './components/screens/SplashScreen';
import { OnboardingScreen } from './components/screens/OnboardingScreen';
import { LoginScreen } from './components/screens/LoginScreen';
import { HomeFeedScreen } from './components/screens/HomeFeedScreen';
import { ExploreScreen } from './components/screens/ExploreScreen';
import { CreateScreen } from './components/screens/CreateScreen';
import { NotificationsScreen } from './components/screens/NotificationsScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';
import { SettingsScreen } from './components/screens/SettingsScreen';
import { MessagesScreen } from './components/screens/MessagesScreen';
import { NavigationBar } from './components/NavigationBar';
import { ThemeProvider } from './contexts/ThemeContext';

type Screen = 
  | 'splash' 
  | 'onboarding' 
  | 'login' 
  | 'home' 
  | 'explore' 
  | 'create' 
  | 'notifications' 
  | 'profile'
  | 'settings'
  | 'messages';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');

  const showNavBar = ['home', 'explore', 'notifications', 'profile', 'messages'].includes(currentScreen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onComplete={() => setCurrentScreen('onboarding')} />;
      case 'onboarding':
        return <OnboardingScreen onComplete={() => setCurrentScreen('login')} />;
      case 'login':
        return <LoginScreen onLogin={() => setCurrentScreen('home')} />;
      case 'home':
        return <HomeFeedScreen onNavigate={setCurrentScreen} />;
      case 'explore':
        return <ExploreScreen />;
      case 'create':
        return <CreateScreen onBack={() => setCurrentScreen('home')} />;
      case 'notifications':
        return <NotificationsScreen />;
      case 'messages':
        return <MessagesScreen />;
      case 'profile':
        return <ProfileScreen onNavigate={setCurrentScreen} />;
      case 'settings':
        return <SettingsScreen onBack={() => setCurrentScreen('profile')} />;
      default:
        return <SplashScreen onComplete={() => setCurrentScreen('onboarding')} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="w-screen h-screen overflow-hidden bg-white">
        {/* Mobile frame container (390x844) */}
        <div className="w-full h-full max-w-[390px] max-h-[844px] mx-auto relative shadow-2xl">
          {renderScreen()}
          
          {showNavBar && (
            <NavigationBar 
              activeScreen={currentScreen} 
              onNavigate={setCurrentScreen} 
            />
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}
