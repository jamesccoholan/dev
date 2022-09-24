// import logo from "./logo.svg";
import "./App.css";
import First from "./Components/First.js";
import Second from "./Components/Second.js";
import Third from "./Components/Third.js";
import Fourth from "./Components/Fourth.js";
import Home from "./pages/home";

function App() {
  return (
    <div>

      <header className="App-header">
        {/* <Home /> */}
        <div>
          <form action="/tacos">
            <p>
              <label for="username"> Enter a Username</label>
              <input id="username" type="text" placeholder="username" />
            </p>
            <p>
              <label for="password"> Enter a Password</label>
              <input type="password" placeholder="password" />
            </p>
            <p>
              <label for="firstName">First Name</label>
              <input type="name"></input>
              <label for="lastName">Last Name</label>
              <input type="name"></input>
            </p>
            <input type="radio"></input>
            <input type="radio"></input>
            <input type="radio"></input>
            <input type="radio"></input>
            <p>
              <label for="color"> Enter a Color</label>
              <input type="color" id="color" />
            </p>
            <button>Submit</button>

          </form>
          <form action="https://www.google.com/search">
            <input type="text" name="q"></input>
            <button>search</button>
          </form>
          <span><p>TES<sub>T</sub></p></span>
        </div>
        <section>
          <p>skdjhfklsdjflskdjflsdkjfsdklfjsdlkfj</p>
          <aside><ps>aside test</ps></aside>
        </section>
        <p>
          <label for="Entre"></label>
          <select>
            <option value>--Please Choose an Option</option>
            <option value="dog">Dog</option>
            <option value="dog">Cat</option>
            <option value="dog">Bird</option>
            <option value="dog">Chimp</option>
            <option value="dog">Bruh</option>
          </select>
        </p>
        <p>
          <label for="Entre"></label>
          <select name="meal" is="meal">
            <option value="dog">Dog</option>
            <option value="dog">Cat</option>
            <option value="dog">Bird</option>
            <option value="dog">Chimp</option>
            <option value="dog">Bruh</option>
          </select>
        </p>
        <p>
          <label for="Cheese">Amount of Cheese</label>
          <input type="range"></input>
        </p>
        <nav>
          <ul>
            <li><a href="home">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="blah.html">Blah</a></li>
          </ul>
        </nav>
        <h3>
          <ui>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ui>
        </h3>
        <h1>Birds</h1>
        <table>
          <tr>
            <th>TESST</th>
            <th>TESST</th>
            <th>TESST</th>
            <th>TESST</th>
            <th>TESST</th>
            <th>TESST</th>
            <th>TESST</th>
          </tr>
          <tr>
            <td>BSDSSDFSDF</td>
            <td>ffff</td>
            <td>9387</td>
          </tr>
          <tr>
            <td>BSDSSDFSDF</td>
            <td>ffff</td>
            <td>9387</td>
          </tr>
          <tr>
            <td>BSDSSDFSDF</td>
            <td>ffff</td>
            <td>9387</td>
          </tr>
          <tr>
            <td>BSDSSDFSDF</td>
            <td>ffff</td>
            <td>9387</td>
          </tr>
          <tr>
            <td>BSDSSDFSDF</td>
            <td>ffff</td>
            <td>9387</td>
          </tr>
          <tr>
            <td>BSDSSDFSDF</td>
            <td>ffff</td>
            <td>9387</td>
          </tr>
          <tr>
            <td>BSDSSDFSDF</td>
            <td>ffff</td>
            <td>9387</td>
          </tr>
        </table>
      </header >
      <First />
      <Second />
      <Third />
      <Fourth />
      <footer><p>This is my footer</p></footer>
    </div >
  );
}

export default App;
