import { createContext } from "react"

// create context
export const AlertsDataContext = createContext();

const AlertsContext = () => {
  return (
    <div>
      <AlertsDataContext.Provider>
        
      </AlertsDataContext.Provider>
    </div>
  )
}

export default AlertsContext
