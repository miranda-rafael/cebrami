import Head from "next/head";

import Navbar from '../components/layout/Navbar';
import Contact from '../components/Contact/Contact';

import GlobalStyle from '../public/style/global.style';

const Index = (props) => {
  return (
    <div className="app">
      <GlobalStyle />
      <Head>
        <title>Cebrami | Limpeza</title>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex"/>
        <link href="/assets/css/page.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Buy beautiful, high quality carpets for your home." />
      </Head>
      <main className="main">
        
          <Navbar/>
            <Contact/>
                    
      </main>
      <script src="/assets/js/page.min.js"></script>
    </div>
  )
}

export default Index;


