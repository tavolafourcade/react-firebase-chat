import { create } from "zustand" 
import { doc, getDoc } from "firebase/firestore"
import { db } from "./firebase"

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if(!uid) return set({currentUser: null, isLoading: false})
    try {
      const docRef = doc(db, "users", uid)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const data = docSnap.data()
        return set({currentUser: data, isLoading: false})
      } else {
        return set({currentUser: null, isLoading: false})
      }
    } catch (error) {
      console.log(error)
      return set({currentUser: null, isLoading: false})

    }
  }
}))