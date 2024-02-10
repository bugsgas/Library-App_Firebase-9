//firebase import
import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'
import { useAuthContext } from "../hooks/useAuthContext"

export const useLogout = () => {
  const {dispatch} = useAuthContext()

  const logout = () => {
    signOut(auth)
    .then(() => {
      //dispatch
      dispatch({type: "LOGOUT"})

      // console.log('user signout')
    })
    .catch((err) => {
      console.log(err.message)
    })

  }
  return {logout}
}