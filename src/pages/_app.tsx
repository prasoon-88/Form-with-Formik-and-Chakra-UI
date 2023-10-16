import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useState } from "react";

export const Mycontext = createContext<{
  state: typeof Number;
  setState: React.Dispatch<React.SetStateAction<typeof Number>>;
} | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [page,setPage] = useState<Number>(0);
  const [val,setVal] = useState<Object>("");
  const [p,setp] = useState<Number>(0);
  return (
    
    <ChakraProvider>
      <Mycontext.Provider value={{p,page,setPage,setVal,val}}>
      <Component {...pageProps} />
      </Mycontext.Provider>
    </ChakraProvider>
    
  );
}

export default MyApp;
