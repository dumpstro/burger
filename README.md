#Eat-Da-Burger!

Eat-Da-Burger is a node express app utitlizing a MySql database and front-end templating via handlebars. 

![Eat-Da-Burger]
(/public/assets/images/eat-da-burger.png)

When a user submits a burger to the database, it appears in the "Burgers Available to Eat" column. When the user clicks the burger button
a PUT request is sent to the server and the burger devoured state is updated to true. The devoured burgers are listed in the "Devoured Burgers"
column.
