/********************************
FOR ALL OBJECT COLLECTIONS: 
(LinkedLists, ArrayLists, Queues, ...)
--------------------------

public static void sort(List myList)

    myList : A List type object we want to sort.

    This method doesn't return anything
    java.util.Collections.sort() method is present in java.util.Collections class. 

    --> Better than java.util.Arrays.sort() method because it can sort the elements of Array as well as 
        linked lists, queues and many more present in it.

*/

//EXAMPLE:
ArrayList<String> al = new ArrayList<String>(); 
al.add("Geeks For Geeks"); 
al.add("Friends"); 
al.add("Dear"); 

Collections.sort(al);
Collections.sort(al, Collections.reverseOrder());

//SPECIFIC ORDER: defined a comparator
class IntervalComparator implements Comparator<Interval> {

    public int compare(Interval a, Interval b) {
        return a.start < b.start ? -1 : 0;
    }
}

class Main 
{ 
    public static void main (String[] args) 
    { 
        ArrayList<Student> arr = new ArrayList<Student>(); 
        arr.add(new Interval(5,15)); 
        arr.add(new Interval(3,9)); 
        arr.add(new Interval(17,25)); 
    
        Collections.sort(arr, new IntervalComparator());
    }

}

//To use Collections.sort() to sort a simpl array, we need to transform it into an ArrayList first.
String[] arr = ["Hello", "My", "Name", "Zaurbek"];
List l = new ArrayList(Arrays.asList(arr));
Collections.sort(l);



/**********************************
/**********************************
FOR ARRAYS ONLY:
---------------

public static void sort(int[] arr, int from_Index, int to_Index)

    arr - the array to be sorted
    from_Index - the index of the first element, inclusive, to be sorted
    to_Index - the index of the last element, exclusive, to be sorted

    sort() method is a java.util.Arrays class method. 
    This method doesn't return any value.

    NB: can sort numbers and alphabetically!

*/

int[] arr = {13, 7, 6, 45, 21, 9, 101, 102}; 
Arrays.sort(arr); //sort in order
Arrays.sort(arr, Collections.reverseOrder());   //sort in reverse order

