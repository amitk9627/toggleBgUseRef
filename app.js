import React,{useRef,useState} from 'react'
import '../styles/App.css'
const App = () => {
    const[state,setState]=useState(true);
    const Pink=useRef(0);
    const handleBg=()=>{
        if( Pink.current.style.backgroundColor !== "pink"){
             Pink.current.style.backgroundColor = "pink";
        }else{
             Pink.current.style.backgroundColor = "white";
        }
        
    }
    
    const itemsList = ['item1', 'item2', 'item3'];
    return (
        <div>
            <ul ref={Pink}  >
                {itemsList.map(item => <li><ItemList items={item} /></li>)}
            </ul>
            <button onClick={handleBg}>Change Color</button>
        </div>
    )
}

function ItemList({ items }) {
  return (
      <>{items}</>
  )
}

export default App;
//  styles/app.css
.pink{
    background-color: pink;
}
.white{
    background-color: white;
}
