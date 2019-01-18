/****************************************************************
*****************************************************************
                        	HEAPS

Tree-like structure where each node must be ordered with respect to
the value of its children.
Max Heap: parent node's value always > children
Min Heap: parent node's value always < children  						
*****************************************************************/
/*
HackerRank's Cracking The Coding Interview - HEAPS: https://www.youtube.com/watch?v=t0Cq6tVNRBA

	- INSERTION: always looking for 1st empty spots - go from top to bottom, from left to right
*/

/* Binary Heap: typically represented as an ARRAY	*/
public class MinIntHeap {
	private int capacity = 10;
	private int size = 0;

	int[] items = new int[capacity];

	public void swap(int indexOne, int indexTwo) {
		int temp = items[indexOne];
		items[indexOne] = items[indexTwo];
		items[indexTwo] = temp;
	}

	//If array full, double its capacity
	private void ensureExtraCapacity() {
		if(size == capacity) {
			//create a new array that is copy of items but double its size
			items = Arrays.copyOf(items, capacity * 2);
			capacity *= 2;
		}
	}

	//Returns root of heap WITHOUT removing it!
	public int peek() {
		if(size == 0) throw new IllegalStateException();
		return items[0];
	}

	//Returns root of heap AND remove it!
	public int poll() {
		if(size == 0) throw new IllegalStateException();
		int item = items[0];
		items[0] = items[size - 1];
		size--;
		heapifyDown();
		return item;
	}

	//Insert element at end of array and then go up until reach correct position
	//O(log n)
	public void add(int item) {
		ensureExtraCapacity();
		items[size] = item;
		size++;
		heapifyUp();
	}

	//Goes from bottom to top and swaps elements out of order
	//O(log n)
	public void heapifyUp() {
		int index = size - 1; //we start at end
		int parentIndex = (index - 1)/2;

		//while parent exists and parent out of order
		while (parentIndex >= 0 && items[parentIndex] > items[index]) {
			swap(parentIndex, index);
			index = parentIndex;
		}
	}

	//Start at top of heap and go down, swap elements until in correct position
	public void heapifyDown() {
		int index = 0;
		while(hasLeftChild(index)) {
			int smallerChildIndex = getLeftChildIndex(index);
			if (hasRightChild(index) && rightChild(index) < leftChild(index)) {
				smallerChildIndex = getRightChildIndex(index);
			}

			//good, we are in order
			if (items[index] < items[smallerChildIndex]) {
				break;
			} else {
				swap(index, smallerChildIndex);
			}
			index = smallerChildIndex;
		}
	}
}

