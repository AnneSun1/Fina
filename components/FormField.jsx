import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet
 } from 'react-native'
import {useState, React} from 'react'
import icons from '../constants/icons'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-12 ${otherStyles}`}>
        <Text className="text-base text-customPurple font-pmedium">{title}</Text>
        <View style={styles.container}>
            <TextInput style={styles.input} value={value} placeholder={placeholder} placeholderTextColor='#C4BBD0' onChangeText={handleChangeText} secureTextEntry={title === 'Password' && !showPassword}/>
            {title==='Password' && (
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}><Image source={!showPassword ? icons.eye : icons.eyehide} className="w-6 h-6" resizeMode=''/></TouchableOpacity>
            )}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    paddingVertical: 7,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 100,
  },
});

export default FormField