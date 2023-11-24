import "@/styles/reset.css";
import "@/styles/variable.css";
import { AuthProvider } from "@/utils/firebase/provider";
import { authService } from "@/utils/firebase/client";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
