void quickSort(int[] arr, int left, int right) {
	if(left < right) {
		int pivot = partition(arr, left, right);
		quickSort(arr, left, pivot-1);
		quickSort(arr, pivot+1, right);
	}
}

// Choose pivot. Put it at right position. Put everything smaller to its left, and everything bigger to its right.
int partition(int[] arr, int left, int right) {
	int pivot = arr[right];
	int i = left - 1;
	for(int j = left; j < right; j++) {
		if(arr[j] < pivot) {
			i++;
			//swap elements
			int temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
	if(arr[i+1] < pivot) {
		int tmp = arr[i+1];
		arr[i+1] = pivot;
		arr[right] = tmp;
	}

	return i+1;
}