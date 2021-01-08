//import { types } from "sass"
import {SET_USER, SET_LOAD} from "./types"

const actions = {
    loadAuthUser: ({commit, state}) => {
        axios.get('/webapi/user')
                .then( resp => {
                    commit(SET_USER, resp.data)
                    if(resp.data && resp.data.followings_count > 2){
                        commit(SET_SHOWRECVIDEOS, false)
                    }
                commit(SET_LOAD, false)
            })
    },
}

export default actions
