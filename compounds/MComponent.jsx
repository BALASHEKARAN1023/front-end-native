import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import Form from './Form';
import ImageViewer from './ImageViewer';
const MyComponent = ({ PlaceholderImage }) => (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <ImageBackground
            source={PlaceholderImage}
            style={styles.background}
        >
            <View style={styles.overlay}>
                <View style={styles.header}>
                    <Text style={styles.headerText2}>Professional Online Makeup Course</Text>
                    <Text style={styles.headerText3}>India No.1 Online Makeup  Course</Text>
                    <Text style={styles.headerText3}>Learn by Live  Do-it-Togethere Classes</Text>
                    <Text style={styles.headerText3}>Unlimited Praacties Session to master skills</Text>

                </View>

                <Form />

                <Text style={styles.headerText}>Why Should You Join Airblack?</Text>
                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Image source={{ uri: "https://th.bing.com/th/id/OIP.gGoSLqZvqtBNejWfbe2DbgHaH_?rs=1&pid=ImgDetMain" }} style={styles.icon} />
                        <Text style={styles.statText}>Do-it-together, live on zoom</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Image source={{ uri: "https://static.vecteezy.com/system/resources/previews/000/579/037/original/star-logo-template-vector-icon-illustration-design.jpg" }} style={styles.icon} />
                        <Text style={styles.statText}>4.8 / 5 Rated Classes</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Image source={{ uri: "https://th.bing.com/th/id/OIP.A5rZGnnmCAixyCKce89DzwHaHa?rs=1&pid=ImgDetMain" }} style={styles.icon} />
                        <Text style={styles.statText}>35000 + Members</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.applyButton} onPress={() => { }}>
                    <Text style={styles.applyButtonText}>Apply Now</Text>
                </TouchableOpacity>
                <View style={styles.newSection}>
                    <Text style={styles.newSectionText}>Get Certified From India's Biggest Beauty Platform</Text>
                    <Image source={{ uri: "https://th.bing.com/th/id/OIP.IT5dKaQehe0H3gm8Qn1BtgHaFQ?rs=1&pid=ImgDetMain" }} style={styles.newSectionImage} />
                </View>
                <View style={styles.alumniSection}>
                    <Text style={styles.alumniText}>Join our growing community of 35,000+ alumni</Text>
                    <TouchableOpacity style={styles.applyButton} onPress={() => { }}>
                        <Text style={styles.applyButtonText}>Apply Now</Text>
                    </TouchableOpacity>
                    <View style={styles.socialIcons}>
                        <Image source={{ uri: "https://th.bing.com/th/id/OIP.kIgAoVfb7NLSj3RXtLxAnAHaFj?rs=1&pid=ImgDetMain" }} style={styles.socialIcon} />
                        <Image source={{ uri: "https://th.bing.com/th/id/OIP.QHODby_bS81-x2of8vCIhgAAAA?rs=1&pid=ImgDetMain" }} style={styles.socialIcon} />
                        <Image source={{ uri: "https://th.bing.com/th/id/OIP.waOtRAV99hCXTCS_RvbK6QHaGp?rs=1&pid=ImgDetMain" }} style={styles.socialIcon} />
                        <Image source={{ uri: "https://th.bing.com/th/id/OIP.eBo4UfoCOevLR1Rc8e7tcgHaHa?rs=1&pid=ImgDetMain" }} style={styles.socialIcon} />
                    </View>
                </View>
            </View>
        </ImageBackground>
    </ScrollView>
);

const styles = StyleSheet.create({
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    statBox: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 5,
    },
    statText: {
        fontSize: 16,
        color: '#000',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    scrollViewContainer: {
        flexGrow: 5,
    },
    background: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    header: {
        marginVertical: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    headerText2: {
        fontStyle: "italic",
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    headerText3: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
        flexDirection: "row"
    },
    form: {
        marginVertical: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    whyUs: {
        marginVertical: 20,
        alignItems: 'center',
    },
    whyUsText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    benefits: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    benefit: {
        alignItems: 'center',
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    benefitText: {
        color: '#fff',
        textAlign: 'center',
    },
    certificate: {
        marginVertical: 20,
        alignItems: 'center',
    },
    certificateText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center',
    },
    certificateImage: {
        width: 100,
        height: 100,
    },
    footer: {
        marginVertical: 20,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    newSection: {
        marginVertical: 20,
        alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 2,
        padding: 10,
    },
    newSectionText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
    },
    newSectionImage: {
        width: 260,
        height: 300,
        marginBottom: 10,
    },
    newSectionFooterText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    alumniSection: {
        marginVertical: 20,
        alignItems: 'center',
        padding: 10,
    },
    alumniText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
    },
    applyButton: {
        backgroundColor: '#ff0078',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    applyButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#678',
        borderRadius: 10,
    },
    socialIcon: {
        width: 50,
        height: 50,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 50,
    },
});

export default MyComponent;