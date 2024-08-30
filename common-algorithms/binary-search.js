function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] > target) {
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
}

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right){
        return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target){
        return mid;
    } 
    else if (arr[mid] > target){
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
    else {
        return binarySearchRecursive(arr, target, mid + 1, right);
    }
}

console.log(binarySearch([1, 4, 6, 7, 9, 10, 25, 45, 67, 87, 90, 92, 101, 200], 1));
console.log(binarySearchRecursive([1, 4, 6, 7, 9, 10, 25, 45, 67, 87, 90, 92, 101, 200], 1));