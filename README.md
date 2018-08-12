# bamazon
Amazon-like storefront with the MySQL skills
------------------------------------------------------------------

You need to install the following NPM modules for the app to work:

$ npm install mysql
$ npm install console.table --save
$ npm install inquirer
$ npm install --save prompt-list

Create a MySQL Database called bamazon, inside of that database 
there is a table called products. 

The products table has the following columns:

item_id (unique id for each product)
product_name (Name of product)
department_name
price (cost to customer)
stock_quantity (how much of the product is available in stores)

The table has 10 inital values.

![Initial](https://github.com/ksalazar91/bamazon/blob/master/initial.PNG)

The app will load the initial values and then ask the user to input the id and quantity need it. 

if the user input is less of equal to the actual stock the stock will be update it on mysqul and the user will get the total price. After 5s it will ask if it wants to make a new transaction or end the app.

![Complet transaction](https://github.com/ksalazar91/bamazon/blob/master/complete.PNG)


if the user input is greater than the actual stock then the user will get a message with "Insufficient quantity!" than ask the user if the want to make a new transition or if they want to end the app.

![Insufficent Stock](https://github.com/ksalazar91/bamazon/blob/master/insufficient_stock.PNG)