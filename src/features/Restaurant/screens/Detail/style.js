import { Colors } from '@Constants';
import { Dimensions } from 'react-native';

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.pageBackground,
    padding: 16,
  },
  mapContainer: {
    marginBottom: 16,
  },
  map: {
    width: Dimensions.get('window').width - 32,
    height: Dimensions.get('window').height / 4,

    borderColor: Colors.tertiary,
    borderWidth: 1,
  },
  mapInstruction: {
    textAlign: 'right',
    fontStyle: 'italic',
    marginTop: 4,
  },
  marker: {
    borderRadius: 10,
    padding: 160,
  },
  action: {
    marginTop: 16,
    justifyContent: 'center',
  },
  favBtn: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  favBtnColor: {
    color: Colors.tertiary
  },
  negativeFavBtnColor: {
    color: Colors.light
  }
};

export default styles;
