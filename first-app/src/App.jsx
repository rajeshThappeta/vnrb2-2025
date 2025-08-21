import "./App.css";

//create component
function App() {
  //state
  let username = "bhanu kumar";
  let rollNo = 100;
  let person = {
    pid: 1234,
    city: "hyderabad",
  };
  let marks = [10, 20, 30,40,50,10];

  // create  react element using jsx and return
  return (
    <div>
      <h1>Welcome to React</h1>
      <h2>Username : {username}</h2>
      <h2>RollNo : {rollNo}</h2>
      <h2>{person.pid}</h2>
      <h2>{person.city}</h2>
      {
        marks.map((element,index)=><h3 key={index}>{element}</h3>)
      }
    </div>
  );
}

export default App;


//for , for of, while(cant return)
//forEach() //wont return

//filter,map