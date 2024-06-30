// components/styles.js
import { StyleSheet } from 'react-native';

export const createDynamicStyles = (textColor) => StyleSheet.create({
  baseText: {
    fontSize: 20,
    color: textColor,
  },
});

export const staticStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
  microphone: {
    width: 200,
    height: 200,
    borderColor: '#87CEEB',
    borderWidth: 5,
    borderRadius: 100,
    backgroundColor: '#D3D3D3',
    tintColor: null,
    elevation: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
});
