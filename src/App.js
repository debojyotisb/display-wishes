
import './App.css';

function App() {

let curDate = new Date();
curDate = curDate.getHours();

let greeting = '';
const cssStyle = {};

if (curDate >= 1 && curDate <12) {
 greeting = 'Good Morning, Have great day ahead';
 cssStyle.color = "green";
} else if (curDate >= 12 && curDate <16) {
  greeting = 'Good Afternoon';
  cssStyle.color = "orange";
} else if (curDate >=16 && curDate <20) {
  greeting = 'Good Evening';
  cssStyle.color = "pink";
} else {
  greeting = 'Good Night & take care'
  cssStyle.color = "black";
}

  return (
    <>
    <div>
    <h1>Hello Sir,
    <br/>
    it's {curDate}
    <br/>
    <h2>Wishing you very</h2> 
    <br/>
    <span style={cssStyle}> { greeting } </span> 
    </h1>
    </div>
    </>
  );
}

export default App;
