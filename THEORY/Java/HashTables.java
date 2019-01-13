/****************************************************************
*****************************************************************
   							HASH TABLES
*****************************************************************/
/* 
Hash table based implementation of the MAP interface
HashMap is a data structure that uses a HASH FUNCTION to map identifying values, known as keys, 
to their associated values. It contains “key-value” pairs and allows retrieving value by key.

--> No guarentees about the order!

--> Average complexity:
	INSERT: O(1)
	SEARCH: O(1)
	REMOVE: O(1)

NB: Synchronized means only one thread can modify a hash table at  one point of time. Basically, it means that any 
	thread before performing  an update on a hashtable will have to acquire a lock on the object  while others will wait for lock to be released.
	
	One of the major differences between HashMap and Hashtable is that  HashMap is non-synchronized whereas Hashtable is synchronized, 
	which  means Hashtable is thread-safe and can be shared between multiple  threads but HashMap cannot be shared between multiple threads 
	without  proper synchronization. Java 5 introduced ConcurrentHashMap which is an  alternative of Hashtable and provides better scalability 
	than Hashtable  in Java.

*/

Map<K,V> map = new HashMap<K,V>();
//OR
HashMap<K,V> hashMap = new HashMap<>();


.get(K key);
.put(K key, V val);
.getOrDefault(K key, V defaultVal);

.size();
.isEmpty();

.values();
.keySet();
.entrySet();
.containsKey(K key);

.remove(Object key)		//removes the mapping for this key (if present)

.replace(K key, V newvalue)	//If key exists, replace its corresponding val pair with newvalue. Else, DO NOTHING.
.replace(K key, V oldvalue, V newvalue) //ONLY replace if set key-oldvalue exists


//Example:
Map<String, Integer> map = new HashMap<String, Integer>();
map.put("bucket", 15);		 //if already contains key, simply updates it
int val = map.get("bucket"); //returns the VALUE (not the keys)
							 //returns NULL if key not contained
boolean isEmp = map.isEmpty();
int size = map.size();

Collection<Integer> values = map.values();
Set<String> keys = map.keySet();
boolean hasKey = map.containsKey("bucket");

//ITERATION
Set<Map.Entry<String, Integer>> entries = map.entrySet();
for(Map.Entry<String, Integer> e : entries) {
	System.out.print(e.getKey() + ": ");
	System.out.println(e.getValue());
}


//getOrDefault(Object key, V defaultValue)
int val = map.getOrDefault("bucket", 0);



/***************************
		HASH SET
****************************/
/*
 Implements the SET interface, backed by a hash table: 
 	- it is NOT a key-value pair!
 	- every value must be UNIQUE!

 	--> different from HashMap who implements a MAP interface, unique keys but can have multiple same values

 	Set, e.g. {1,2,3,4,5}
 	Map, e.g. {a -> 1, b -> 2, c -> 2, d -> 1}

*/

Set<T> set = new HashSet<>();

.add(E elem)
.clear()
.clon()			//return shallow copy of HashSet instance

.contains(Object o)
.isEmpty()

.remove(Object o)

.size();