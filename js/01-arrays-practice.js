/*eslint-env browser*/

////------------ STEP 1 -------------////
//// Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.

//var favMov = ['Les Miserables', 'Pan\'s Labyrinth', 'Deadpool', 'Guardians of the Galaxy Vol. 1', 'Goodfellas'];
//window.console.log(favMov[1]);



////------------ STEP 2 -------------////
// Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.

//var movies = new Array(5);
//movies[0] = 'Les Miserables';
//movies[1] = 'Pan\'s Labyrinth';
//movies[2] = 'Deadpool';
//movies[3] = 'Guardians of the Galaxy Vol. 1';
//movies[4] = 'Goodfellas';
//window.console.log(movies[0]);



////------------ STEP 3 -------------////
// Copy your code from step 2. Add a new movie into the 5th position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.

//var movies = new Array(5);
//movies[0] = 'Les Miserables';
//movies[1] = 'Pan\'s Labyrinth';
//movies[2] = 'Deadpool';
//movies[3] = 'Guardians of the Galaxy Vol. 1';
//movies[4] = 'Goodfellas';
//
//movies.splice(4, 0, 'Schindler\'s List');
//window.console.log(movies.length);



////------------ STEP 4 -------------////
//Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

//var movies = [];
//movies[0] = 'Les Miserables';
//movies[1] = 'Pan\'s Labyrinth';
//movies[2] = 'Deadpool';
//movies[3] = 'Guardians of the Galaxy Vol. 1';
//movies[4] = 'Goodfellas';
//delete movies[0];
//window.console.log(movies);



////------------ STEP 5 -------------////
//Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.

//var movies = ['Les Miserables', 'Pan\'s Labyrinth', 'Up', 'Pulp Fiction', 'Goodfellas', 'Deadpool', 'Guardians of the Galaxy Vol. 1'];
//for(var i = 0; i < movies.length; i++){
//	window.console.log(movies[i]);
//}



////------------ STEP 6 -------------////
//Copy the code from step 5. Now, use a for-in loop to iterate through the array and display each movie within the console window.

//var movies = ['Les Miserables', 'Pan\'s Labyrinth', 'Up', 'Pulp Fiction', 'Goodfellas', 'Deadpool', 'Guardians of the Galaxy Vol. 1'];
//for (var i in movies){
//	window.console.log(movies[i]);
//}



////------------ STEP 7 -------------////
//Copy the code from step 5. Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.

//var movies = ['Les Miserables', 'Pan\'s Labyrinth', 'Up', 'Pulp Fiction', 'Goodfellas', 'Deadpool', 'Guardians of the Galaxy Vol. 1'].sort();
//for (var i in movies){
//	window.console.log(movies[i]);
//}



////------------ STEP 8 -------------////
//Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this:

//var movies, leastFavMovies, list, i;
//movies = ['Les Miserables', 'Pan\'s Labyrinth', 'Up', 'Pulp Fiction', 'Goodfellas', 'Deadpool', 'Guardians of the Galaxy Vol. 1'];
//leastFavMovies = ['Anchorman 2', 'Lion King 1 ½', 'The Last Airbender'];
//list = 'Movies I like:\n\n';
//
//for (i in movies)
//	list += movies[i] + '\n';
//
//list += '\nMovies I regret watching:\n\n';
//
//for (i in leastFavMovies)
//	list +=  leastFavMovies[i] + '\n';
//
//window.console.log(list);



////------------ STEP 9 -------------////
//Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.

//var movies = ['Les Miserables', 'Pan\'s Labyrinth', 'Up', 'Pulp Fiction', 'Goodfellas', 'Deadpool', 'Guardians of the Galaxy Vol. 1'];
//var leastFavMovies = ['Anchorman 2', 'Lion King 1 ½', 'The Last Airbender'];
//movies = movies.concat(leastFavMovies).sort().reverse();
//window.console.log(movies);



////------------ STEP 10 ------------////
//Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.

//var movies = ['Les Miserables', 'Pan\'s Labyrinth', 'Up', 'Pulp Fiction', 'Goodfellas', 'Deadpool', 'Guardians of the Galaxy Vol. 1'];
//var leastFavMovies = ['Anchorman 2', 'Lion King 1 ½', 'The Last Airbender'];
//movies = movies.concat(leastFavMovies).sort().reverse();
//window.console.log(movies);



////------------ STEP 11 ------------////
//Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.

//var movies = ['Les Miserables', 'Pan\'s Labyrinth', 'Up', 'Pulp Fiction', 'Goodfellas', 'Deadpool', 'Guardians of the Galaxy Vol. 1'];
//var leastFavMovies = ['Anchorman 2', 'Lion King 1 ½', 'The Last Airbender'];
//movies = movies.concat(leastFavMovies);
//window.console.log(movies[0]);



////------------ STEP 12 ------------////

//Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 

//var leastFavMovies = ['Anchorman 2', 'Lion King 1 ½', 'The Last Airbender'];
//window.console.log('Movies I do not like: ' + leastFavMovies[0] + ', '+ leastFavMovies[1] + ', ' + leastFavMovies[2]);
//leastFavMovies.splice(0,3,'Les Miserables', 'Pan\'s Labyrinth', 'Up', 'Pulp Fiction', 'Goodfellas', 'Deadpool', 'Guardians of the Galaxy Vol. 1');
//window.console.log(leastFavMovies);



////------------ STEP 13 ------------////

//Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window.

//var employee1 = {employeeID: 1, name: 'Mark', title:'Manager', department:'Sales', employed:true},             employee2 = {employeeID: 2, name: 'Paula',title:'Associate', department:'Sales', employed:false},           employees = [employee1, employee2];
//window.console.log(employees[1].name);



////------------ STEP 14 ------------////

//Copy the code from step 13. Modify the code slightly so that you’re using a loop to iterate through the array and print out the names of both employees.

//var employee1 = {employeeID: 1, name: 'Mark', title:'Manager', department:'Sales', employed:true},
//    employee2 = {employeeID: 2, name: 'Paula',title:'Associate', department:'Sales', employed:false},
//    employees = [employee1, employee2];
//for(var i in employees)
//	window.console.log(employees[i].name);



////------------ STEP 15 ------------////

//Copy the code from step 14. Now add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.

var employee1 = {employeeID: 1, name: 'Mark', title:'Manager', department:'Sales', employed:true},
    employee2 = {employeeID: 2, name: 'Paula',title:'Associate', department:'Sales', employed:true},
    employee3 = {employeeID: 3, name: 'Rubio',title:'Associate', department:'Customer Service', employed:false},
    employees = [employee1, employee2, employee3];

for(var i in employees)
	if(employees[i].employed === true)
		window.console.log(employees[i].name);



////------------ STEP 16 ------------////

//Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
//
//movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
//
//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.

//var movies = [['Les Miserables', 1], ['Pan\'s Labyrinth', 2], ['Up', 3], ['Pulp Fiction', 4], ['Goodfellas', 5]], 
//    list = movies.filter(item => item[1]);
//list.forEach(element => console.log(element[0]));


////------------ STEP 17 ------------////

//Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:
//
//Employees: 
//
//ZAK 
//JESSICA 
//MARK 
//FRED 
//SALLY
//

//var employees = ['Sahil', 'Amanda', 'James', 'Carlos', 'Alice', 'Jessica', 'Kim', 'Isabella'];
//
//function showEmployee(arr){
//	window.console.log('Employees:\n\n');
//	for(var i in arr)
//		window.console.log(arr[i]);
//}
//
//showEmployee(employees);



////------------ STEP 18 ------------////

//Write a JavaScript function to filter false, null, 0 and blank values from an array.
//Test Data: window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
//Expected Result: [58, "abcd", true]





////------------ STEP 19 ------------////

//Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.





////------------ STEP 20 ------------////

//	Write a JavaScript function to get the largest number from a numeric array.



