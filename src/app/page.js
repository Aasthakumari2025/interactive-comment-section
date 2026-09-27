import Image from "next/image";
import CommentPage from "./components/CommentPage";
import { ContextProvider } from './useContext/CommentContext'

export default function Home() {
  return (
   <div className="bg-gray-100 h-full py-5">
     <ContextProvider>
<main className="w-full flex justify-between items-center bg-gray-100  h-full">
      <CommentPage/>
    </main>
     </ContextProvider>
    
    </div>
  );
}
