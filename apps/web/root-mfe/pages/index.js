import dynamic from "next/dynamic";

const Header = dynamic(() => import("header/Header"), { ssr: false });
const Footer = dynamic(() => import("footer/Footer"), { ssr: false });
const Landing = dynamic(() => import("static/Landing"), { ssr: false }); 
export default function Home() {
  return (
    <> 
      <Header /> 
      
      <Landing />
      <Footer /> 
    </>
  );
}
