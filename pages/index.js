import Head from "next/head";

import Navbar from '../components/layout/Navbar';
import Header from '../components/Home/Header/Header'

import GlobalStyle from '../public/style/global.style';

const Index = (props) => {
  return (
    <div className="app">
      <GlobalStyle />
      <Head>
        <title>Cebrami | Limpeza</title>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex"/>
        {/* <link rel="shortcut icon" type="image/x-icon" href="/static/images/índice.png" /> */}
        <link href="/assets/css/page.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Buy beautiful, high quality carpets for your home." />
      </Head>
      <main className="main">
        
          <Navbar/>
          <Header/>
          //Vai colocar os componentes/containers aqui
        
      </main>
      <script src="/assets/js/page.min.js"></script>
    </div>
  )
}

export default Index;


