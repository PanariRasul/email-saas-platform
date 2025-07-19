<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Integrations from './pages/Integrations'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Features" element={<Features />} />
                <Route path="/Pricing" element={<Pricing />} />
                <Route path="/Integrations" element={<Integrations/>}/>
            </Routes>
        </Router>
    );
}
=======
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Features from './pages/Features';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/Features" element={<Features />} />
//                 {/* other routes */}
//             </Routes>
//         </Router>
//     );
// }
>>>>>>> 089fb599974e8bfd1ff909f7908fec2a690220cb
