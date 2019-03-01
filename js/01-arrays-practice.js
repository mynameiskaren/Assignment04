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
//leastFavMovies = ['Anchorman 2', 'Lion King 1 ½', 'Hulk (2003)'];
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
//var leastFavMovies = ['Anchorman 2', 'Lion King 1 ½', 'Hulk (2003)'];
//movies = movies.concat(leastFavMovies).sort().reverse();
//window.console.log(movies);



////------------ STEP 10 ------------////
//Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.

//var movies = ['Les Miserables', 'Pan\'s Labyrinth', 'Up', 'Pulp Fiction', 'Goodfellas', 'Deadpool', 'Guardians of the Galaxy Vol. 1'];
//var leastFavMovies = ['Anchorman 2', 'Lion King 1 ½', 'Hulk (2003)'];
//movies = movies.concat(leastFavMovies).sort().reverse();
//window.console.log(movies);



////------------ STEP 11 ------------////

function displayCar(color, make, model) { 
     window.console.log("I own a " + color + " " + make + " " + model + "."); 
}
displayCar("white", "Chevy");

////------------ STEP 12 ------------////




////------------ STEP 13 ------------////




////------------ STEP 14 ------------////




////------------ STEP 15 ------------////




////------------ STEP 16 ------------////




////------------ STEP 17 ------------////




////------------ STEP 18 ------------////




////------------ STEP 19 ------------////




////------------ STEP 20 ------------////



