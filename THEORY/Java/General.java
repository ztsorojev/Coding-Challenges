/****************
 * ARRAYS
 */

int[] num = new int[5]; 				//create empty array of 5 elements
int[] myIntArray = {1,2,3}; 			//create array initialized with [1,2,3]
int[] myIntArray = new int[]{1,2,3};	//DONT put a number in [] when you initialize array!

int[][] num = new int[5][2];
int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };

//To assign values, you use CURLY BRACKETS
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};

//Loop through array
for (String i : cars) {
  System.out.println(i);
}


.split(regex);		//same as in JS -> example: String[] arr = str.split("\\s");		--> This covers more cases than: str.split(" ");
					//																	--> \s stands for whitespace, + tells to select all whitespaces
					//							String ops[] = str.split("[a-z]")
					//							String[] arrOfStr = str.split("for");

Arrays.copyOf(arr, len);	//len is the length of the copied array. If bigger than arr, the additional fields will be zeros.
//Example:
int[] a = {1,2,3};
int[] b = Arrays.copyOf(a, a.length);	//b = [1,2,3]
int[] c = Arrays.copyOf(a, 5);			//c = [1,2,3,0,0]

Arrays.asList(...)		// Transform an array into a List
						// Examples: 
						//		- List<Integer> l = Arrays.asList(1,2,3);

						//		- Integer[] arr = {1,2,3};
						//		  List<Integer> l = Arrays.asList(arr);


/***************
 * MATH
 */
Math.random()		//returns random float between 0 and 1 (not included)
Math.floor()
Math.ceil()

Integer.MAX_VALUE;
Integer.MIN_VALUE;

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