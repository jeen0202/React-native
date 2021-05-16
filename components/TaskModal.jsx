import React from 'react'
import {View, TextInput, StyleSheet,} from 'react-native'
import Modal from 'react-native-modal'

const TaskModal =({
    isVisible,
    hide,
}) => {
    return (
        <Modal
            isVisible = {isVisible}
            onBackdropPress={hide}
            avoidKeyboard// 키보드 화면이 열렸을 때 화면이동
            styles={styles.modal}
        >
            <View style= {styles.container}>
                <TextInput 
                    placeholder="새로운 할 일을 추가해주세요">                    
                </TextInput>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        justifyContent : 'flex-end',
        margin : 8,
    },
    container : {
        padding : 16,
        backgroundColor : '#FFFFFF',
        borderTopLeftRadius : 8,
        borderTopRightRadius : 8,
    }
})
export default TaskModal