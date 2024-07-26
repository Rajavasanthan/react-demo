function Message() {
  let a = 5;
  let b = 5;

  let peoples = [
    {
      name: "Person 1",
      age: 20,
    },
    {
      name: "Person 2",
      age: 30,
    },
  ];

  let handleClick = () => {
    alert("Hello there!")
  }

  return (
    <div>
      {a == b && b == a && <h1>Both are same</h1>}
      {peoples.map((people) => {
        return (
          <div>
            <h1>Name : {people.name}</h1>
            <h2>Age : {people.age}</h2>
          </div>
        );
      })}
      <button onClick={handleClick}>Click Me</button>
      <a href="https://google.com">Google</a>
      
    </div>
  );
}

export default Message;