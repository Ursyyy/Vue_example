import io from 'socket.io-client'
import {SET_COUNTYTIMESTAMP, SET_ISIPHONE, SET_MENUDATA, SET_SOCKETCONNECTION,
        SET_USER, SET_LOAD, SET_CHATS, SET_SHOWRECVIDEOS, SET_MENU, SET_ROUTER} from './types'

const mutations = {
    [SET_COUNTYTIMESTAMP]: (state, payload) => {
        state.country_n_timestamp.country = payload.country
        state.country_n_timestamp.timestamp = payload.timestamp
    },
    [SET_ISIPHONE]: (state, payload) => {
        state.isIPhone = payload
    },
    [SET_MENUDATA]: (state, payload) => {
        state.requireMenuData = payload.data
    },
    [SET_SOCKETCONNECTION]: state => {
        state.socketConnection = io(':6001')
    },
    [SET_USER]: (state, payload) => {
        state.authUser = payload
    },
    [SET_LOAD]: (state, payload) => {
        state.load = payload
    },
    [SET_SHOWRECVIDEOS]: (state, payload) => {
        state.showRecVideos = payload
    },
    [SET_MENU] : (state, payload) => {
        state.showMenu = payload
    },
    [SET_ROUTER] : (state, payload) => {
        state.router = payload
    }
}

export default mutations
