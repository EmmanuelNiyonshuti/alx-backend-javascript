import Building from './5-building';

const b = new Building(100);

console.log(b);

class TestBuilding extends Building {
  // evacuationWarningMessage()
  // {
  //    console.log("test method overriding")
  // }
}

try {
  new TestBuilding(200);
} catch (e) {
  console.log(e.message);
}
