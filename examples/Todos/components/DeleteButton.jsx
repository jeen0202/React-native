import React from 'react'
import {TouchableOpacity,StyleSheet} from 'react-native'
import {Foundation} from '@expo/vector-icons'
const DeleteButton = ({
    onPress,
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.button}>
            <Foundation name ='page-delete' color='#FFFFFF' size={24}/>
                {/* <Text style={styles.text}>
                    삭제
                </Text> */}
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        width : 60,
        height : 60,
        backgroundColor : '#FE5746',
        justifyContent: 'center',
        alignItems:'center'
    },
    text: {
        color: '#FFFFFF'
    }
})
export default DeleteButton