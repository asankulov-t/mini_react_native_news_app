import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";

export type ItemPropsType={
    title:string,
    img:string|undefined,
    source:string,
    publish:string,
}
 const Item = (props:ItemPropsType) => {
    return (
       <View style={ItemStyles.item}>
           <Image style={ItemStyles.postImage} source={{uri:props.img}}/>

           <View style={ItemStyles.infoBlock}>
               <Text style={ItemStyles.postTitle}>{props.title}</Text>
               <Text style={ItemStyles.source}>Source: {props.source}</Text>
               <Text style={ItemStyles.publish}>{props.publish}</Text>
           </View>
       </View>
    )

};

//styles
const ItemStyles=StyleSheet.create({
    item:{
        marginBottom:15,
        flexDirection:"row",
        alignItems:'stretch'
    },
    infoBlock:{
        marginLeft:10,
        flexDirection:"column",
        justifyContent:"space-between"
    },
    postImage:{
        width:75,
        height:75,
        borderRadius:12
    },
    postTitle:{
        flexShrink:1,
        fontSize:18,
        fontWeight:"700",
        paddingRight:10
    },
    source:{
        color:'#92948b',
        fontWeight:'700'
    },
    publish:{
        color:'#92948b',
        fontWeight:'700'

    }
})
export default Item;
