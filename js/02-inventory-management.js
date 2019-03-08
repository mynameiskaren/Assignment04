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


//GLOBAL VARIABLES
var storage;
var list = "";
var task;
var tasks = [];

//GET THE DOM ELEMENT
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

//DISPLAY THE TASK
var displayTaskList = function () {
    "use strict";
    // if there are no tasks in tasks array, check storage
    if (tasks.length === 0) {
        // get tasks from storage or empty string if nothing in storage
        storage = localStorage.getItem("tasks") || "";

        // if not empty, convert to array and store in global tasks variable
        if (storage.length > 0) {
            tasks = storage.split("|");
        }
    }
    
    // if there are tasks in array, sort and create tasks string
    if (tasks.length > 0) {
        tasks.sort();
        list = tasks.join("\n");
    }
    // display tasks string
    $("task_list").value = list;
};

//ADD A TASK
var addToTaskList = function () {
    "use strict";
    task = $("task");
    if (task.value === "") {
        window.alert("Please enter a task.");
    } else {
        // add task to array and local storage
        tasks.push(task.value);
        localStorage.tasks = tasks.join("|");

        // clear task text box and re-display tasks
        task.value = "";
        displayTaskList();
    }
};

//CLEAR TASK LIST
var clearTaskList = function () {
    "use strict";
    tasks.length = 0;           //clear the array
    localStorage.tasks = "";    //empty out the storage object
    $("task_list").value = "";  //clear the text field
};

//WIRE UP EVENT HANDLERS AND DISPLAY TASK LIST
window.addEventListener("load", function () {
    "use strict";
    $("add_task").addEventListener("click", addToTaskList);
    $("clear_tasks").addEventListener("click", clearTaskList);
    displayTaskList();
});