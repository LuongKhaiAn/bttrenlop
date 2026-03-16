import anh from './double-helix-svgrepo-com.svg';
import './App.css';

function App() {
  return (
  <>
  <image src={anh} alt="double-helix" width={1000} height={1000}/>
  
  <table border={1}> 
    <tr>
      <th>STT</th>
      <th>Name</th>
      <th>diem</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Nguyen Van A</td>
      <td>9</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Nguyen Van B</td>
      <td>8</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Nguyen Van C</td>
      <td>7</td>
    </tr>
  </table>
  </>
  );
}

export default App;
