import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './core/providers/AuthProvider.tsx'
import { AppRouter } from './core/router/AppRouter.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </StrictMode>,
)
