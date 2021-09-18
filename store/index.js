export const state = () => ({
  nfts: [],
})

export const mutations = {
    setNft(state, nfts){
        state.nfts = nfts
    },
}

export const actions = {
    async nuxtServerInit({ dispatch }){
        await this.$axios.$get("https://api.coinranking.com/v2/nfts?limit=10")
        .then(res => {
            dispatch("getNft", res.data.nfts)
        })
    },
        getNft({commit}, nfts) {
            commit("setNft" , nfts)
        }
}

export const getters = {
    getNft(state){
        return state.nfts
    },
}