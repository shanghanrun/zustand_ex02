import {create} from 'zustand';

export const useCount = create((set)=>({
	count:0,
	id:'',
	password:'',
	increment:()=>set((state)=>({count: state.count+1})),
	decrement:()=>set((state)=>({count:state.count-1})),
	login:(id, password)=>set((state) => ({id, password})),
	reset:()=>set((state)=>({id:'', password:''}))
}))