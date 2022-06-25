import { useEffect, useState } from "react";
import {StyleSheet} from 'react-native'
import { useSelector } from "react-redux";

const useThemeColors = () => {    
    const [themeColors, setThemeColors] = useState(LightColors)
    const {themeMode} = useSelector((state)=> state.ui)    
    
    useEffect(() => {
        if(themeMode=='light') setThemeColors(LightColors)
        if(themeMode=='dark') setThemeColors(DarkColors)        
        console.log('rerender?')
        console.log(themeMode)
    }, [themeMode])

    return {themeColors, themeMode};
}

export default useThemeColors;

const darkColor = "#333"

const LightColors = StyleSheet.create({
    color: 'black',
    backgroundColor: 'white'
})

const DarkColors = StyleSheet.create({
    color: 'white',
    backgroundColor: darkColor
})