<body>

  <h1>PIZZERIA API</h1>

  <li>In this project, I made a system for a pizzeria that contains a user, a pizza, and the user can order the pizza they want. A user can sign up for a new pizza when logged in. A user can make an order when logged in.</li>

  <li> I made this project with:</li>
  <code>
    🟢 NODE.JS
    🔵 PRISMA ORM
    ⚫ JWT
    🟡 BCRYPT
    🔴 EXPRESS
  </code>

  <li> I used the Prisma framework to create my MySQL database, and set my connection port to 3334. Change it to yours and set up your database in the .ENV file.</li>

  <h2>routes</h2>

  <h3>Sign up User</h3>
  <ul>
    <li><strong>Rota:</strong> <a href="http://localhost:3334/user">http://localhost:3334/user</a></li>
    <li><strong>Method HTTP:</strong> POST</li>
    <li><strong>JSON example:</strong></li>
  </ul>
  <code>
    {
      "name": "anymail",
      "email": "test@gmail.com",
      "password": "123456"
    }
  </code>

  <li>The code contains an external API that verifies if the email exists; if it doesn't, it will send a JSON message: "Invalid E-mail"</li>
  
  <h3>Login User</h3>
  <ul>
    <li><strong>Rota:</strong> <a href="http://localhost:3334/login">http://localhost:3334/login</a></li>
    <li><strong>Method HTTP:</strong> POST</li>
    <li><strong>JSON example:</strong></li>
  </ul>
  <code>
    {
      "emailUser": "test@gmail.com",
      "passwordUser": "123456"
    }
  </code>

  <h3>Sign a new pizza</h3>
  <ul>
    <li><strong>Rota:</strong> <a href="http://localhost:3334/cadpizza">http://localhost:3334/cadpizza</a></li>
    <li><strong>Method HTTP:</strong> POST</li>
    <li><strong>JSON example:</strong></li>
  </ul>
  <code>
   {
    "name": "Diavola",
    "price": 7.5,
    "ingredients": [
      "tomato",
      "mozzarella",
      "spicy salami"
    ]
  }
  </code>

  <li> The file 'example-pizzas.json' has examples of pizzas; you can use it</li>

  <li> To sign a pizza, you need to authenticate with the JWT token, which you get when you log in, and pass it in the BEARER TOKEN. If it's valid, the pizza will be signed in.</li>

  <h3>List all pizzas</h3>

  <ul>
    <li><strong>Rota:</strong> <a href="http://localhost:3334/listpizzas">http://localhost:3334/listpizzas</a></li>
    <li><strong>Method HTTP:</strong> GET</li>
    <li><strong>JSON example:</strong></li>
  </ul>
  <li> To list all pizzas, you need to authenticate with the JWT token, which you get when you log in, and pass it in the BEARER TOKEN. If it's valid, it will list all pizzas</li>
  
  <h3>Make an order</h3>
  <ul>
    <li><strong>Rota:</strong> <a href="http://localhost:3334/createorder">http://localhost:3334/createorder</a></li>
    <li><strong>Method HTTP:</strong> POST</li>
    <li><strong>JSON example:</strong></li>
    <code>
      {
        "idUser": 1,
        "idPizzas": [1, 2, 3, 4]
      }
    </code>
  </ul>

  <li> To create an order, you need to authenticate with the JWT token, which you get when you log in, and pass it in the BEARER TOKEN. If it's valid, it will proceed</li>
  
  <h3>List order</h3>

  <ul>
    <li><strong>Rota:</strong> <a href="http://localhost:3334/listorder">http://localhost:3334/listorder</a></li>
    <li><strong>Method HTTP:</strong> GET</li>
    <li><strong>JSON example:</strong></li>
  </ul>
  <li> To list the orders, you need to authenticate with the JWT token, which you get when you log in, and pass it in the BEARER TOKEN. If it's valid, it will proceed</li>

  <h3>List order by ID</h3>

  <ul>
    <li><strong>Rota:</strong> <a href="http://localhost:3334/orderbyid/:id">http://localhost:3334/orderbyid/:id</a></li>
    <li><strong>Method HTTP:</strong> GET</li>
    <li><strong>JSON example:</strong></li>
  </ul>

  <p>Pass the ID of the user you want to see the orders, for example:</p>
  <code>
    http://localhost:3334/orderbyid/1 (it will find the user that has the ID 1)
  </code>
  <li> To list the orders by ID, you need to authenticate with the JWT token, which you get when you log in, and pass it in the BEARER TOKEN. If it's valid, it will proceed</li>
</body>
