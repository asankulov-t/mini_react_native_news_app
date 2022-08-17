import React, {useCallback, useEffect} from 'react';
import {FlatList, ListRenderItem, View, StyleSheet, TouchableOpacity,} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../store/Store";
import {Result} from "../types/types";
import {MakeFetchThunk} from "../store/reducesr/GerArticlesReducer";
import Item from "./Item";
import {useNavigation} from "@react-navigation/native";

 const Items = () => {
    let disp = useDispatch();
    let results = useSelector<AppRootType, Result[]>((state) => state.GerArticlesReducer.results)
    useEffect(()=>{
        // @ts-ignore
        disp(MakeFetchThunk())
    },[])
    let navigation=useNavigation();
    const renderItems:ListRenderItem<Result>=useCallback((data)=>{
        return <TouchableOpacity onPress={()=>navigation.navigate('Test',{id:data.item.id})}>
            <Item title={data.item.title}
                  img={data.item.media.length!==0?data.item.media[0]["media-metadata"][0].url:'https://blog.webit.ru/wp-content/uploads/2016/04/5d4298d584fc7.png'}
                  publish={data.item.published_date}
                  source={data.item.source}
            />
        </TouchableOpacity>


    },[results])

    return <View style={styles.items}>
        <FlatList data={results} renderItem={renderItems} keyExtractor={(item)=>item.id?item.id.toString():item.title}/>
    </View>
};
const styles=StyleSheet.create({
    items:{
        marginTop:8
    }
})
export default Items;