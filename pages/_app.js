import '@/styles/globals.css'
import { Poppins } from "next/font/google";

const merriweather = Poppins({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["400"],
});


export default function App({ Component, pageProps }) {
  return (
    <main className={`${merriweather.variable} font-merriweather`}>
      <Component {...pageProps} />
    </main>
  );
}
