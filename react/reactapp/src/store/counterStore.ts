import {create} from 'zustand'

//인터페이스 구축(타입지정)
interface CounterState {
    count: number;
    upcount: () => void;
    downcount: () => void;
}

export const useCounterStore = create<CounterState>((set, get) => ({
    count: 0,
    upcount: () => {
        if(get().count < 10) set({count:get().count + 1});
    },
    downcount: () => {
        if(get().count > 0 ) set({count: get().count - 1});
    }
}))