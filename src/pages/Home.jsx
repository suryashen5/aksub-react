import React,{ Component } from 'react'
import CardSummaryContainer from '../components/pages/home/CardSummaryContainer.jsx';
import Calculator from '../components/pages/home/Calculator.jsx';

class Home extends Component{
    render(){
        return <div>
            <CardSummaryContainer />
            {/* <Calculator /> */}
        </div>
    }
}

export default Home;