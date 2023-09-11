import react, { createContext, useContext, useState } from 'react';

const StateContext = createContext();


const initialState = {
   chat:false,
   cart : false,
   userProfile : false,
   Notification: false,
}

export const ContextProvider = ({ children }) => {
   const [activeMenu, setActiveMenu] = useState(true);
   const [isClicked, setIsClicked] = useState(initialState);
   const [screenSize, setScreenSize] = useState(undefined);
   const [currentColor, setCurrentColor] = useState('#03C9D7');
   const [currentMode, setCurrentMode] = useState('Light');
   const [themeSettings, setThemeSettings] = useState(false)
   const [Chat, setChat] = useState(true)
   const [isCartOpen, setIsCartOpen] = useState(true);

   const setMode =(e) => {
      setCurrentMode(e.target.value);

      localStorage.setItem('themeMode', e.target.value);

      setThemeSettings(false);
   }

   const setColor =(color) => {
      setCurrentMode(color);

      localStorage.setItem('colorMode', color);

      setThemeSettings(false);
   }
   

   const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  




   return (
      <StateContext.Provider
       value={{
         currentColor,
         currentMode,
         activeMenu, 
         screenSize, 
         setScreenSize, 
         handleClick, 
         isClicked, 
         initialState, 
         setIsClicked, 
         setActiveMenu, 
         setCurrentColor, 
         setCurrentMode, 
         setMode, 
         setColor, 
         themeSettings, 
         setThemeSettings,
         setMode,
         setColor,
         Chat,
         setChat,
         isCartOpen, setIsCartOpen

       }}
      >
         {children}
      </StateContext.Provider>
   )
}

export const  useStateContext = () => useContext
(StateContext)