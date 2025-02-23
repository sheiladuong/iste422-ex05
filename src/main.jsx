import { Provider } from './components/ui/provider.jsx'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <Theme>
        <App />
      </Theme>
    </Provider>
  </StrictMode>,
)
