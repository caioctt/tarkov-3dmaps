import { useContext } from 'react';
import ColorModeContext from '../contexts/ColorModeContext';

const useColorMode = () => useContext(ColorModeContext);

export default useColorMode;
