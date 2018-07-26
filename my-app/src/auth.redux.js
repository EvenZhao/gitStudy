const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export function auth(state = {isAuth:false,user:'even'},action) {
	switch(action.type) {
		case LOGIN:
			return {...state,isAuth:true}
		case LOGOUT:
			return {...state,isAuth:false}
		default:
			return state
	}
}

// 生成action的函数
export function login(){
	return {type:LOGIN}
}
export function logout(){
	return {type:LOGOUT}
}