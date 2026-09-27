
import CommentPage from "./components/CommentPage";
import { ContextProvider } from './useContext/CommentContext'

export default function Home() {
  return (
    <div className=" h-full py-5">
      <ContextProvider>
        <main >
          <CommentPage />
        </main>
      </ContextProvider>

    </div>
  );
}
