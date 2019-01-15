/****************
 * ARRAYS
 */

int[] num = new int[5]; 	//create empty array of 5 elements
int[] myIntArray = {1,2,3}; //create array initialized with [1,2,3]

int[][] num = new int[5][2];
int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };

//To assign values, you use CURLY BRACKETS
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};

//Loop through array
for (String i : cars) {
  System.out.println(i);
}


Math.random()		//returns random float between 0 and 1 (not included)


//LENGTH
.length 	//can be used for int[], double[], String[] to know the length of the ARRAYS!

.length() 	//can be used for String, StringBuilder, etc 



/**************
 * TYPE CAST
 */

int i = Integer.parseInt(str);		// Transfrom the String str into a primitive type int


/**************
 * COMPARAISON
 */

.equals() 	// tests for value equality: OBJECTS
==			// tests for reference equality (or value equality of primitive types)