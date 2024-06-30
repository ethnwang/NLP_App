import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { createDynamicStyles, staticStyles } from '../components/styles';

export default function App() {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState(systemColorScheme);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [isImageClicked, setIsImageClicked] = useState(false);

  const toggleTheme = () => {
    setIsButtonPressed(true);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleImageClick = () => {
    setIsImageClicked(!isImageClicked);
  };

  const currentTheme = isButtonPressed ? theme : systemColorScheme;
  const isDarkMode = currentTheme === 'dark';

  // Set the text color opposite to the detected theme
  const textColor = isDarkMode ? 'white' : 'black';

  // Create styles with the dynamic text color
  const dynamicStyles = createDynamicStyles(textColor);

  return (
    <View style={[staticStyles.container, { backgroundColor: isDarkMode ? 'black' : 'white' }]}>
      <TouchableOpacity onPress={toggleTheme} style={staticStyles.buttonContainer}>
        <LinearGradient
          colors={['#000000', '#FFFFFF']}
          style={staticStyles.circle}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      </TouchableOpacity>
      <View style={staticStyles.center}>
      <TouchableOpacity onPress={handleImageClick}>
            <Image 
              source={require('../assets/images/microphone.png')} 
              style={[
                staticStyles.microphone,
                {
                  tintColor: isImageClicked ? 'blue' : null, // Toggle the image color to blue when clicked
                }
              ]}
            />
          </TouchableOpacity>
        <Text style={dynamicStyles.baseText}>Press the microphone to begin translation!</Text>
      </View>
    </View>
  );
}
