import ReactDOM from 'react-dom/client'
import App from './MultiForm/App'
import './index.css'
import './style.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer position="top-center" />
  </>
)
