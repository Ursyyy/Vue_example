const getters = {
    getUser: state => {
        return state.authUser
    },
    getSocket: state => {
        return state.socketConnection
    },
    getMenuData: state => {
        return state.requireMenuData
    },
    getLoad: state => {
        return state.load
    },
    getIPhone: state => {
        return state.isIPhone
    },
    getCountryTime: state => {
        return state.country_n_timestamp
    },
    getNotify: state => {
        return state.notify
    },
    getShowRecVideos: state => {
        return state.showRecVideos
    },
    getMenu: state => {
        return state.showMenu
    },
    getRouter: state => {
        return state.router
    },
}

export default getters
