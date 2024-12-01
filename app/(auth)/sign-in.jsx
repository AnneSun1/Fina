import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { getCurrentUser, signIn } from "../../lib/appwrite";

const SignIn = () => {
    const { setUser, setIsLogged } = useGlobalContext();
    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        email:'',
        password:''
    })
    const submit = async () => {
        if (form.email === "" || form.password === "") {
            Alert.alert("Error", "Please fill in all fields");
          }
      
          setSubmitting(true);
          try {
            await signIn(form.email, form.password);
            const result = await supabase
                .from('users')
                .select('id')
                .eq('email', email);
            setUser(result);
            setIsLogged(true);
      
            Alert.alert("Success", "User signed in successfully");
            router.replace("/home");
          } catch (error) {
            Alert.alert("Error", error.message);
          } finally {
            setSubmitting(false);
          }
        };

  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className = "w-full justify-center min-h-[85vh] px-4 my-6">
            <Text className="text-2xl text-semibold mt-10 font-psemibold">
                Login to Fina
            </Text>
            <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => {
                
                setForm({
                ...form, email: e})}}
            otherStyles="mt-7"
            keyboardType="email-address"
            />
            <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({
                ...form, password: e})}
            otherStyles="mt-7"
            />

            <CustomButton
                title="Sign In"
                handlePress={submit}
                containerStyles="mt-7"
                isLoading={isSubmitting}/>
                
            <View className="justify-center pt-5 flex-row gap-2">
                <Text className="text-lg font-pregular">
                    Don't have an account?
                </Text>
                <Link href="/sign-up" className='text-lg font-psemibold text-secondary text-customPurple'>Sign Up</Link>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn;

