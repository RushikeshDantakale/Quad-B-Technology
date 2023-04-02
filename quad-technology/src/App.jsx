import './App.css';
import axios from 'axios';
import { useEffect , useState } from 'react';
import Ticker from './components/Ticker';
import Navbar from './components/Navbar';

function App() {

  const [tickerData , setTickerData] = useState([]);

  useEffect(() => {
    const fetchData=async () => {
      const response =await axios.get("http://localhost:1200/ticker");
      console.log(response);
      

  //  console.log( typeof(data),data);  
      setTickerData(response.data);
     
    };
    fetchData();
  }, []);
  console.log(tickerData , 18);
 
  return (
    <div className="App">
    <Navbar/>
    <div className='heading-div'>
            <div className='sr_no'><div>#</div></div>
            <div className='name'><div>name</div></div>
            <div className='name'><div>last</div></div>
            <div className='buy_sell'><div>buy/sell Price</div></div>
            <div className='name'><div>volume</div></div>
            <div className='base_unit'><div>base_unit</div></div>
        </div>
     <div className='ticker'>{tickerData.map((ticker,index)=>{
      return (<Ticker ticker={ticker} key={index} index={index}/>)
     })}</div>
    </div>
  )
}

export default App
