import React from 'react'
import { create } from 'zustand'
type StateType = {
    bears: number;
    increase: Function;
 }

 
const store = (set: Function) => ({ 
    bears: 10 ,
    increase: () => set((state: StateType) => ({ bears: state.bears + 1 }))
    
} 
    )
const useBearStore = create(store)