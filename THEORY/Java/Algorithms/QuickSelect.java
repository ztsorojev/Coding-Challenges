// Find kth smallest element
int quickSelect(int[] arr, int k) {
	if(k < 1 || k > arr.length()) return -1;

	int randInt = (in) Math.random()*arr.length();
	int pivot = arr[randInt];

	List lower = new ArrayList();
	List higher = new ArrayList();

	for(int num : arr) {
		if(num < pivot) {
			lower.push(num);
		} else if(num > pivot) {
			higher.push(num);
		}
	}

	// We want k = lower.length() + 1
	if(k <= lower.length()) {
		return quickSelect(lower, k);
	} else if(k > arr.length() - higher.length()) {
		return quickSelect(higher, k - (arr.length() - higher.length()));
	}

	return pivot;
}

// Return kth largest element
int quickSelectLargest(int[] arr, int k) {
	return quickSelect(arr, arr.length - k + 1);
}





/********************************************************************************************************
 * We can also reuse the code for QuickSort, with slight modifications.
 * The trick is that we will only recur quickSelect on one side depending on where the kth element is.
 */
int quickSelect(int[] arr, int left, int right, int k) {
	if(k < 1 || k > arr.length()) return -1;

	int pivot = partition(arr, left, right);

	//If pivot is the kth smallest element: meaning it has k elements smaller than it
	if(pivot - left == k - 1) return arr[pivot];
	//Else check the left subarray
	else if(pivot - left > k - 1) return quickSelect(arr, left, pivot-1, k)
	else return quickSelect(arr, pivot+1, right, k);
}

// Puts random pivot at right position, and puts everything smaller before it and larger, after it.
int partition(int[] arr, int left, int right) {
	int randInt = (int) Math.random()*arr.length();
	int pivot = arr[randInt];
	int i = left-1;
	for(int j=left; j<right; j++) {
		if(arr[j] < pivot) {
			i++;
			int temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
	if(arr[i+1]<pivot) {
		int tmp = arr[i+1];
		arr[i+1] = pivot;
		arr[right] = tmp;
	}
	return i+1;
}