let data = [1,2,4,5,3,6,4,8,7,9.0]
magic(data)
function magic(array) {
    mergeSort(array)
    for (let i = 0; i < array.length; i++){
       console.log(array[i] + " ")
    }
}

function mergeSort(array) {
    let length = array.length
    let middle = length / 2;
    let leftArray = new Array(middle)
    let rightArray = new Array(length - middle)
    let i = 0; //right array
    let j = 0; //left array
    if (length <= 1) return // Base Case

    for (; i < length; i++) {
        if ( i < middle) {
            leftArray[i] = array[i]
        } else {
            rightArray[j] = array[i]
            j++;
        }
    }
    mergeSort(leftArray)
    mergeSort(rightArray)
    merge(leftArray, rightArray, array)
}

function merge(leftArray, rightArray, array) {
    let leftSize = array.length / 2; 
    let rightSize = array.length - leftSize;
    let i = 0, l = 0, r = 0; // indices

    //chicking the condition while merging
    while(l < leftSize && r < rightSize) {
        if (leftArray[l] < rightArray[r]) {
            array[i] = leftArray[l];
            i++;
            l++;
        } else {
            array[i] = rightArray[r]
            i++;
            r++;
        }
    }
    while ( l < leftSize) {
        array[i] = leftArray[l]
        i++;
        l++;
    }
    while( r < rightSize) {
        array[i] = rightArray[r]
        i++;
        r++;
    }


}