import { createContext, useContext, useState, ReactNode } from "react";

// 1. Define the context type
type LeadFormContextType = {
  isOpen: boolean;
  openLeadForm: () => void;
  closeLeadForm: () => void;
};

// 2. Create context with a default value (will be overridden by provider)
const LeadFormContext = createContext<LeadFormContextType | undefined>(undefined);

// 3. Provider component
export const LeadFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openLeadForm = () => setIsOpen(true);
  const closeLeadForm = () => setIsOpen(false);

  return (
    <LeadFormContext.Provider value={{ isOpen, openLeadForm, closeLeadForm }}>
      {children}
    </LeadFormContext.Provider>
  );
};

// 4. Hook to use context
export const useLeadForm = () => {
  const context = useContext(LeadFormContext);
  if (!context) {
    throw new Error("useLeadForm must be used within a LeadFormProvider");
  }
  return context;
};

