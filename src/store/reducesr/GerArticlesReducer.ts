import {Result, Root} from "../../types/types";
import {Api} from "../../API/Api";
import {AnyAction, Dispatch} from "redux";


let initial: Root={
    status: '',
    copyright: '',
    num_results:0,
    results: []
}


//actions

const GetArticlesAC = (articles:Root) => {
    return {
        type: 'GET_ARTICLES',
        articles,
    } as const
}

export const MakeFetchThunk = () => {
    return (dispatch: Dispatch<AnyAction>) => {
        Api.fetchArticles().then((res) => res)
            .then((res) => dispatch(GetArticlesAC(res.data)))

    }
}

//actionTypes

type GetArticlesType = ReturnType<typeof GetArticlesAC>

type TotalActionTypes = GetArticlesType
const GerArticlesReducer = (state = initial, actions: TotalActionTypes) => {
    switch (actions.type) {
        case "GET_ARTICLES":
            let data=actions.articles
            return {state, status:data.status, copyright:data.copyright, results:data.results, num_results:data.num_results}
    }

    return state
};

export default GerArticlesReducer;