import '../scss/global.scss'
import AuthContext from '../context/AuthContext'
import 'semantic-ui-css/semantic.min.css'
import jwtDecode from 'jwt-decode'
import { setToken } from '../api/token'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useMemo, useState } from 'react'
export default function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined)
  console.log(auth)
  const login = token => {
    setToken(token)
    setAuth({
      token,
      idUser: jwtDecode(token).id,
    })
  }

  const authData = useMemo(
    () => ({
      auth: { name: 'Eduardo', email: 'eduardo1ja99@gmail.com' },
      login, //es igual a login: login,
      logout: () => null,
      setReloadUser: () => null,
    }),
    []
  )
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
