import '../scss/global.scss'
import AuthContext from '../context/AuthContext'
import 'semantic-ui-css/semantic.min.css'
import jwtDecode from 'jwt-decode'
import { useRouter } from 'next/router'
import { getToken, removeToken, setToken } from '../api/token'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useMemo, useState } from 'react'
export default function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined)
  const [reloadUser, setReloadUser] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const token = getToken()
    if (token) {
      setAuth({
        token,
        idUser: jwtDecode(token).id,
      })
    } else {
      setAuth(null)
    }
    setReloadUser(false)
  }, [reloadUser])
  const login = token => {
    setToken(token)
    setAuth({
      token,
      idUser: jwtDecode(token).id,
    })
  }

  const logout = () => {
    if (auth) {
      removeToken()
      setAuth(null)
      router.push('/')
    }
  }

  const authData = useMemo(
    () => ({
      auth,
      login, //es igual a login: login,
      logout,
      setReloadUser,
    }),
    [auth]
  )
  if (auth === undefined) return null
  return (
    <AuthContext.Provider value={authData}>
      <Component {...pageProps} />{' '}
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </AuthContext.Provider>
  )
}
