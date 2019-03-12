/*eslint-env browser*/

//The Product Inventory Management System (55 points)
//In this part of the assignment you will use multi-dimensional arrays to build a small inventory management system. Here are the specifics:
//•	The primary array will be “inventory”.

//•	The nested arrays (products) will each contain elements that represent sku (number), product (string), quantity (number), and cost (floating point number).
//•	You should have at least 5 products in your inventory.
//•	Similar to lab 9, your application should display a title in the console window along with a command menu that features commands to view all products, update stock, and exit the program. 
//•	When the user select view, rather than displaying each product in a numeric list like you did in lab 9, you should display the details for each product, ordered by sku number. Here’s an example of what the user should see if they choose the view command:
//
//2233 Hat (12) $14.99
//3223 Socks (36) $9.99
//4824 Shirt (10) $15.99
//6343 Jeans (22) $39.99
//9382 Jacket (5) $49.99
//
//•	If the user selects the update command, a prompt should appear that allows the user to enter a sku number. Once the user enters a correct sku number a second prompt should appear that allows the user to enter a new stock quantity. The quantity should then update the product of the sku number entered.
//•	If the user selects the exit command, the program should be terminated.
//•	All data should be persisted using Web Storage. If the user closes the browser and then reopens it, all of the data should be retained from the previous session.
//•	Make sure to validate all inputs. If the user enters a command that’s not valid, the application should be able to handle that. Similarly, if the user enters a bad sku number, or text instead of a number when updating stock, the application should be able to handle that too.



/******************************************/
/*******    FUNCTION - MENU         *******/
/******************************************/
function menu(inv){
    "use strict";
    var command = "";
    var proceed = true;
    window.console.log("-----------------------------------------------\n" + 
                       "| Welcome to the inventory management system! |\n" + 
                       "|                                             |\n" + 
                       "---------------COMMAND MENU--------------------\n" + 
                       "|      > show - Show all products             |\n" + 
                       "|      > update - Update stock                |\n" + 
                       "|      > exit - Exit the program              |\n" + 
                       "-----------------------------------------------\n" + 
                       "| Please enter command in the prompted window.|\n" + 
                       "-----------------------------------------------");
    window.console.log(command);
    do{
        command = window.prompt("-------------------------------------------------------\nWelcome to the inventory management system!\n\n-----------------COMMAND MENU------------------\n       > show - Show all products\n       > update - Update stock\n       > exit - Exit the program\n--------------------------------------------------------\nEnter command:");
        if(command === 'show')          {   display(inv);       }
        else if(command === 'update')   {   update(inv);        }
        else if(command == 'exit')      {   proceed = false;    }
    }while(proceed);
}


/******************************************/
/*******    FUNCTION - DISPLAY      *******/
/******************************************/
function display(arr){
    "use strict";
    var i = 1;
    arr.forEach(function (product) {
        window.console.log(i + ". " + product['sku'] + " " + product['name'] + " " + "(" + product['quantity'] + ") " + product['cost']);
        i += 1;
    });
    window.console.log("");
    
/*    arr.forEach (function each(item){
        if (Array.isArray(item))
            item.forEach(each);
        else
            window.console.log(item);
    });*/
    
}

/******************************************/
/*******    FUNCTION - UPDATE       *******/
/******************************************/
function update(arr){
    "use strict";
    window.console.log('updaing array');
    return arr;
}


/******************************************/
/*******    FUNCTION - MAIN         *******/
/******************************************/
function main(){
    "use strict";
    var inventory = [];
    var product1, product2, product3, product4, product5;
    
    product1 = [2233, "Hat", "(12)", "$14.99"];
    product2 = [3223, "Socks", "(36)", "$9.99"];
    product3 = [4824, "Shirt", "(10)", "$15.99"];
    product4 = [6343, "Jeans", "(22)", "$39.99"];
    product5 = [9382, "Jacket", "(5)", "$49.99"];

    inventory = [product1, product2, product3, product4, product5];
    
    menu(inventory);
}



main();





