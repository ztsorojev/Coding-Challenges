public static int[] mergeSort(int[] arr) {
	int n = arr.length();
	if(n < 2) return arr;

	int mid = n / 2;
	int[] right = new int[mid];
	int[] left = new int[arr.length - mid];

	for(int i=0; i < mid; i++) right[i] = arr[i];
	for(int i=mid; i < n; i++) left[i-mid] = arr[i];

	return merge(mergeSort(left), mergeSort(right));
}

//Merge 2 sorted arrays into one
public static int[] merge(int[] arr1, int[] arr2) {

	int[] merge = new int[arr1.length() + arr2.length()];
	int i = 0, j = 0, k = 0;

	while(i<arr1.length() && j<arr2.length()) {
		if(arr1[i] <= arr2[j]) {
			merge[k] = arr1[i];
			i++;
		} else {
			merge[k] = arr2[i];
			j++;
		}
		k++;
	}
	
	//At the end, if one of the arrays still has elements, we just add them
	while(i<arr1.length()) {
		arr1[k++] = arr1[i++];
	}
	while(i<arr2.length()) {
		arr1[k++] = arr1[j++];
	}

	return merge;
}