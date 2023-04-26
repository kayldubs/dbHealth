//import Logo from './assests/imgs/DB_Logo.pdf';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Features from './components/Features';
import Form from './components/Contact/Form';
import ImageSlider from './components/Slider-2/ImageSlider';
import { SliderData } from './components/Slider-2/SliderData';
import ImageHero from './components/Carousel/ImageHero';
import { HeroData } from './components/Carousel/HeroData';
import Platform from './components/Platform/Platform';
import Faq from './components/FAQ/Faq.js';
import About from './components/About/about';
import Blog from './components/Blog/Blog';
// import Physician from './components/Physician';
import Footer from './components/Footer';
import Team from './components/Team/Team';
import Team4 from './components/Team4/Team4';
import Terms from './components/Regulatory/TermsOfUse'
import Technology from './components/Blog/pages/Technology';

//import CSS Boostrap 
import 'bootstrap/dist/css/bootstrap.min.css';
//import Expletus Sans Font
import "@fontsource/expletus-sans"
import { TextData } from './components/Carousel/TextData';
import ESummary from './components/ESummary/ES';
import HeroPost from './components/Blog/posts/HeroPost';
import Cardiology from './components/Blog/pages/Cardiology';
import RemoteMonitoring from './components/Blog/pages/RemoteMonitoring';
import Science from './components/Blog/pages/Science';
import Health from './components/Blog/pages/Health';
import LifeStyle from './components/Blog/pages/LifeStyle';
import AiBenefits from './components/Blog/posts/AiBenefits';
import Silent from './components/Blog/posts/Silent';
import Tips5 from './components/Blog/posts/Tips5';
import Tips10 from './components/Blog/posts/Tips10';
import WarHeartDisease from './components/Blog/posts/WarHeartDisease';
//import DigiBeatInt from './components/Blog/posts/DigiBeatInt';
import HowTo from './components/Blog/posts/HowTo';
import CookiePolicy from './components/Cookies/CookiesPolicy';

// cookie imports
// import CookieBanner from './components/Cookies/CookiesBanner';
// import posthog from 'posthog-js';



//Set up Apollo and GraphQL
// import {
//    ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
//   // useQuery,
//   // gql
// } from "@apollo/client";
//  import { Provider } from 'react-redux';
// import { setContext } from '@apollo/client/link/context';

// //import graph QL for future back end linking
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });
// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });


// //Set up apollo
// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });



function App() {
  const [categories]= useState([
    {
        name:"FAQ",
        description: "Text page of frequently asked questions about digibeat",
    },
    {
        name:"About",
        description: "Meet the team page",
    },
    { 
        name:"Payer",
        description:"Page for Payer information"
},
    {
        name:"Physician",
        description:"Page for Physician information"
    }
]);
const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return(
  // <ApolloProvider client={client}>
  
    <div className='App'> 
        {/* <Provider> */}
          <Nav />
          {/* {posthog.has_opted_in_capturing()||posthog.has_opted_out_capturing() ? null : <CookieBanner />} */}
          <Routes>
              <Route path="/" element={<>
              <ImageHero slides={HeroData}/>
              <ImageSlider slides={SliderData} menu={TextData}/>
              <Platform/>
              <Features currentCategory={currentCategory} />
              <Form/>
              </>} />
            <Route path="/faq" element={<>
            <Faq/>
            </>} />
            <Route path="/about" element={<>
            <About/>
            <Team/>
            <Team4/>
            </>} />
          <Route exact path="/regulatory" element={<>
          <Terms/>
          </>} /> 
          <Route exact path="/blog" element={<>
          <Blog/>
          </>} /> 
          <Route exact path="/blog/heropost" element={<HeroPost/>} />
          <Route exact path="/blog/technology" element={<Technology/>} />
          <Route exact path="/blog/cardiology" element={<Cardiology/>} />
          <Route exact path="/blog/remotemonitoring" element={<RemoteMonitoring/>} />
          <Route exact path="/blog/science" element={<Science/>} />
          <Route exact path="/blog/health" element={<Health/>} />
          <Route exact path="/blog/lifestyle" element={<LifeStyle/>} />
          <Route exact path="/blog/aibenefits" element={<AiBenefits/>} />
          <Route exact path="/blog/silentheartattacks" element={<Silent/>} />
          <Route exact path="/blog/healthyeating" element={<Tips5/>} />
          <Route exact path="/blog/10tips" element={<Tips10/>} />
          <Route exact path="/blog/quickglimpse" element={<WarHeartDisease/>} />
          {/* <Route exact path="/blog/feature2" element={<DigiBeatInt/>} /> */}
          <Route exact path="/blog/athomeuse" element={<HowTo/>} />
          <Route exact path='/contactForm' element={<Form/>} />
          <Route exact path='/esummary' element={<ESummary/>} />
          <Route exact path="/cookiepolicy" element={<>
          <CookiePolicy/>
          </>} /> 
          <Route exact path="/contactForm" element={<>
          <Form/>
          </>} />
          </Routes>
          
          <Footer/>
          {/* </Provider> */}
    </div>
 
// </ApolloProvider>
);
}

export default App;
