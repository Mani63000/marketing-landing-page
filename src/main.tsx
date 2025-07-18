import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LeadFormProvider } from './LeadFormContext.tsx';

createRoot(document.getElementById("root")!).render(
  <LeadFormProvider>
    <App />
  </LeadFormProvider>
);
