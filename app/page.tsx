export default function Home() {
  return (
    <>
    <header>
      <h1>Fire Pizzeria</h1>
    </header>
    <main>
      <h1>Meet, Eat & Enjoy The Taste</h1>

      <h2>Food tastes better when you share it with your family and friends.</h2>

      <img src="/main-pizza.svg" alt="Nice big pizza"/>

      <div>
        <h3>Our Special Recipes</h3>
        <table>
          <thead>
            <tr>
              <th>Pepperoni</th>
              <th>Pepperoni</th>
              <th>Pepperoni</th>
            </tr>
          </thead>
        <tbody>
          <tr>
            <td>Fresh basil</td> 
            <td>Fresh basil</td>
            <td>Fresh basil</td>
          </tr>
          <tr>
            <td>Crushed Red Pepper Flakes</td> 
            <td>Crushed Red Pepper Flakes</td>
            <td>Crushed Red Pepper Flakes</td>
          </tr>
          <tr>
            <td>Jalapeño Slices</td> 
            <td>Jalapeño Slices</td>
            <td>Jalapeño Slices</td>
          </tr>
        </tbody>
        </table>
      </div>

      <p>Your options:</p>
      <ol>
        <li>Order Food !</li>
        <li>Pick-Up Food !</li>
        <li>Enjoy Food !</li>
      </ol>

      
    </main>
    <footer>
      <p>Information:</p>
      <ul>
        <li><a href="/faq">FAQ</a></li>
        <li>Blog</li>
        <li>Support</li>
        <li>Menu</li>
      </ul>
      <form>
        <label>
          <input type="email" />
        </label>
        <button type="submit">Sumbit</button>
      </form>
    </footer>
    </>
  );
}
