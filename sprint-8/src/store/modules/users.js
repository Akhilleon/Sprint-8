import router from '@/router/index';

export default {
    namespaced: true,
    
    state: {
        authenticated: false,
        users: []
    },
    getters: {
        
    },
    mutations: {
        setAuthentication(state, status) {
            console.log('authenticated');
            state.authenticated = status;
        },
        signUp(state, payload) {
            state.users.push(payload);
            router.push('/login');
        },
        login(state, payload) {
            state.users.forEach(user => {
                if(user.username == payload.username && user.password == payload.password){
                    state.authenticated = true
                    router.push('/starships');
                }
            });
        },
        logout(state) {
            state.authenticated = false;
            router.push('/')
        },
    },
    actions: {

    },
    
}