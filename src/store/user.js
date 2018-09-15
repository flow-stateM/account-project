
export default {
    state:{
        1:{
            id:1,
            name:'flow-state',
            account:0
        }
    },
    mutations:{
        addaccount(state,id){
            state[id].account++
        }
    },
    actions:{},
    getters:{
        accountGetter: state => id => {
            return '账户余额' + state[id].account
        }
    }
}