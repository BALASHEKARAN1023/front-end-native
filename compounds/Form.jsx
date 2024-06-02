import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-paper';

const { width } = Dimensions.get('window');

const Form = () => {
    const [name, setName] = useState('');
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [profession, setProfession] = useState('');
    const [goal, setGoal] = useState('');
    const [city, setCity] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        let valid = true;
        let errors = {};

        if (!name) {
            errors.name = 'Name is required';
            valid = false;
        }

        if (!whatsappNumber) {
            errors.whatsappNumber = 'WhatsApp Number is required';
            valid = false;
        }

        if (!profession) {
            errors.profession = 'Profession is required';
            valid = false;
        }

        if (!goal) {
            errors.goal = 'Goal is required';
            valid = false;
        }

        if (!city) {
            errors.city = 'City is required';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const handleSubmit = () => {
        if (validate()) {
            Alert.alert("Form Submitted", "Your form has been successfully submitted.");
        }
        else {
            Alert.alert("Fill the all content...!");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>FILL THE FORM BELOW TO ENQUIRE</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>*Enter your name</Text>
                <TextInput
                    style={[styles.textInput, errors.name && styles.errorInput]}
                    placeholder="Enter the Name"
                    value={name}
                    onChangeText={setName}
                />
                {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>*Enter your WhatsApp Number</Text>
                <View style={styles.row}>
                    <TextInput style={styles.codeInput} placeholder="+91" editable={false} />
                    <TextInput
                        style={[styles.textInput2, errors.whatsappNumber && styles.errorInput]}
                        placeholder="9265783675"
                        value={whatsappNumber}
                        onChangeText={setWhatsappNumber}
                        keyboardType="phone-pad"
                    />
                </View>
                {errors.whatsappNumber && <Text style={styles.errorText}>{errors.whatsappNumber}</Text>}
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>*Select your profession</Text>
                <View style={[styles.pickerContainer, errors.profession && styles.errorInput]}>
                    <Picker
                        selectedValue={profession}
                        onValueChange={(itemValue) => setProfession(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Choose the most relevant option" value="" />
                        <Picker.Item label="Profession 1" value="profession1" />
                        <Picker.Item label="Profession 2" value="profession2" />
                    </Picker>
                </View>
                {errors.profession && <Text style={styles.errorText}>{errors.profession}</Text>}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>*Select your goal</Text>
                <View style={[styles.pickerContainer, errors.goal && styles.errorInput]}>
                    <Picker
                        selectedValue={goal}
                        onValueChange={(itemValue) => setGoal(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Choose the most relevant option" value="" />
                        <Picker.Item label="Goal 1" value="goal1" />
                        <Picker.Item label="Goal 2" value="goal2" />
                    </Picker>
                </View>
                {errors.goal && <Text style={styles.errorText}>{errors.goal}</Text>}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>*Select your city</Text>
                <View style={[styles.pickerContainer, errors.city && styles.errorInput]}>
                    <Picker
                        selectedValue={city}
                        onValueChange={(itemValue) => setCity(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Choose the most relevant option" value="" />
                        <Picker.Item label="City 1" value="city1" />
                        <Picker.Item label="City 2" value="city2" />
                    </Picker>
                </View>
                {errors.city && <Text style={styles.errorText}>{errors.city}</Text>}
            </View>

            <Button mode="contained" style={styles.button} onPress={handleSubmit}>
                Submit
            </Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'grey',
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#e91e63',
        paddingVertical: 10,
        paddingHorizontal: 20,
        textAlign: 'center',
        width: width - 40,
        borderRadius: 5,
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        marginBottom: 5,
        color: '#fff',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#f9f9f9',
        width: '100%',
    },
    textInput2: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#f9f9f9',
    },
    codeInput: {
        width: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#f9f9f9',
        marginRight: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
    },
    picker: {
        width: '100%',
        height: 40,
    },
    button: {
        backgroundColor: '#ff4081',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: width - 40,
        marginTop: 20,
    },
    errorInput: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
});

export default Form;
