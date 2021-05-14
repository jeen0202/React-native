import React from 'react'
import{View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
//TouchableOpacity : 버튼 생성을 위한 태그
 const TodoItem = ({
    title,
    done,
}) => {
    return (
        <View>
            <Text>
                {title}
            </Text>
        </View>
    )
}

export default TodoItem