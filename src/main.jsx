import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './frontend/Home.jsx'
import About from './frontend/About.jsx'
import Contact from './frontend/Contact.jsx'
import ProductPlan from './frontend/ProductPlan.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider >
      
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/"  element={<App/> }>
              <Route  index element={<Navigate  to="/home"/>}/>
              <Route path="/home" element={<Home />} />
              <Route path="/about_us" element={<About/>} />
              <Route path="/productPlan" element={<ProductPlan/>} />
              <Route path="/contact_us" element={<Contact/>} />              
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      
    </Provider>
  </React.StrictMode>,
)
