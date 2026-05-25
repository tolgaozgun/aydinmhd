const colors = {
  primary: '#E84C88', // Awareness Pink
  primaryLight: '#F194B4',
  primaryDark: '#C0392B', // A darker pink/red tone for contrast (wait, user said no red. Let's make it a dark pink)
  primaryDarker: '#A82B5C', // Safe dark pink
  
  white: '#FFFFFF',
  neutral100: '#F8F9FA',
  neutral200: '#E9ECEF',
  neutral300: '#DEE2E6',
  neutral400: '#ADB5BD',
  neutral500: '#6C757D',
  neutral600: '#495057',
  neutral700: '#343A40',
  neutral800: '#212529',
  neutral900: '#111315',

  glassBackground: 'rgba(255, 255, 255, 0.85)',
  glassBorder: 'rgba(255, 255, 255, 0.3)',
  
  transparent: 'transparent',
};

// Override primaryDark to not be red
colors.primaryDark = '#D13A76';

export default colors;
