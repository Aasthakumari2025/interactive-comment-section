import Image from "next/image";
import CommentPage from "./components/CommentPage";
import { ContextProvider } from './useContext/CommentContext'

export default function Home() {
  return (
   <div className="bg-gray-100 py-5">
     <ContextProvider>
<main className="w-full flex justify-between items-center md:h-screen h-auto">
      <CommentPage/>
    </main>
     </ContextProvider>
    
    </div>
  );
}
