import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import {useState, React} from 'react'
import icons from '../constants/icons'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
        <Text className="text-base text-customPurple font-pmedium">{title}</Text>
        <View className='order-2 w-full h-16 px-4 bg-black-100 rounded-2xl items-center'>
            <TextInput className="border-200 border-black flex-1 font-psemibold text-base focus:border-custom-customPurple" value={value} placeholder={placeholder} placeholderTextColor='#C4BBD0' onChangeText={handleChangeText} secureTextEntry={title === 'Password' && !showPassword}/>
            {title==='Password' && (
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}><Image source={!showPassword ? icons.eye : icons.eyehide} className="w-6 h-6" resizeMode=''/></TouchableOpacity>
            )}
        </View>
    </View>
  )
}

export default FormField