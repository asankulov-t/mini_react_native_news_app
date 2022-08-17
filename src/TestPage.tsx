import React, {useCallback} from 'react';
import {FlatList, Image, ListRenderItem, Text, View} from "react-native";
import {useSelector} from "react-redux";
import {AppRootType} from "./store/Store";
import {Result} from "./types/types";
import {StyleSheet} from 'react-native'
import {useRoute} from "@react-navigation/native";
import {height, width} from "../App";
const TestPage = () => {
    let results = useSelector<AppRootType, Result[]>((state) => state.GerArticlesReducer.results);
    const route=useRoute();
    // @ts-ignore
    const {id}=route.params;
    let article=results.filter((item)=>item.id==id)
    const renderItemFunc:ListRenderItem<Result>=useCallback((data)=>{
        return(
            <View style={styles.block}>
                <Image style={styles.largeImg} source={{uri:data.item.media.length!==0?data.item.media[0]["media-metadata"][1].url:'https://blog.webit.ru/wp-content/uploads/2016/04/5d4298d584fc7.png'}}/>
                <Text style={styles.title}>{data.item.title}</Text>
                <Text style={styles.des}>{data.item.abstract}</Text>
                <Text>Category: {data.item.section}</Text>
                <Text>Source: {data.item.source}</Text>
                <Text>Published: {data.item.published_date}</Text>
            </View>
        )
    },[article])
    return <View>
        <FlatList data={article} renderItem={renderItemFunc} keyExtractor={(item)=>item.id.toString()}/>
    </View>

};

const styles=StyleSheet.create({
        block:{
            flex:1,
            textAlign:'center'
        },
        largeImg:{
            width:width,
            height:300,
        },
        title:{
            fontSize:20,
            textAlign:'center',
            marginTop:10
        },
        des:{
            fontSize:17,
            color:'#616165',
            marginTop:10,
            marginBottom:10
        }
})
export default TestPage;