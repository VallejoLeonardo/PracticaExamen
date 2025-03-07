import { StyleSheet } from 'react-native';

const colors = {
  primary: '#4a90e2',
  secondary: '#f5a623',
  background: '#f9f9f9',
  text: '#333333',
  lightGray: '#e1e1e1',
  white: '#ffffff',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    height: 60,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  backButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  menuItem: {
    backgroundColor: colors.white,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 18,
    color: colors.text,
    marginLeft: 10,
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 20,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileText: {
    fontSize: 16,
    marginVertical: 5,
    color: colors.text,
  },
  counterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  counterValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.primary,
    marginVertical: 20,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export { colors };