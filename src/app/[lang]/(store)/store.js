import {create} from 'zustand'
const useStore = create((set, get) => ({
  test: 'vi',
  setTest: (data) => {
    set((state) => {
      return {
        ...state,
        test: data,
      }
    })
  },
}))

export default useStore
