function findMedianSortedArrays(nums1, nums2) {
  const total = nums1.length + nums2.length;
  const half = Math.round(total / 2);

  let shorterArr, longerArr;

  if(nums1.length > nums2.length) {
    shorterArr = nums2;
    longerArr = nums1;
  } else {
    shorterArr = nums1;
    longerArr = nums2;
  }

  let left = 0;
  let right = shorterArr.length - 1;

  while(true) {
    const middleIndexOfShorterArr = Math.floor((right + left) / 2);

    const middleIndexOfLongerArr = half - middleIndexOfShorterArr - 2;
    
    const rightMostValueOfLeftPartitionOfShorterArr = middleIndexOfShorterArr >= 0 ? shorterArr[middleIndexOfShorterArr] : Number.NEGATIVE_INFINITY;

    const isRightPartitionOfShorterArrAvailable = (middleIndexOfShorterArr + 1) < shorterArr.length;
    const leftMostValueOfRightPartitionOfShorterArr = isRightPartitionOfShorterArrAvailable 
      ? shorterArr[middleIndexOfShorterArr + 1] 
      : Number.POSITIVE_INFINITY;
    
    const rightMostValueOfLeftPartitionOfLongerArr = middleIndexOfLongerArr >= 0 ? longerArr[middleIndexOfLongerArr] : Number.NEGATIVE_INFINITY;

    const isRightPartitionOfLongerArrAvailable = (middleIndexOfLongerArr + 1) < longerArr.length;
    const leftMostValueOfRightPartitionOfLongerArr = isRightPartitionOfLongerArrAvailable
      ? longerArr[middleIndexOfLongerArr + 1]
      : Number.POSITIVE_INFINITY;

    // Xong bước tạo partition, giờ check xem đúng chưa

    if(rightMostValueOfLeftPartitionOfShorterArr <= leftMostValueOfRightPartitionOfLongerArr 
      && rightMostValueOfLeftPartitionOfLongerArr <= leftMostValueOfRightPartitionOfShorterArr) {
      if(total % 2 !== 0) {
        return Math.max(rightMostValueOfLeftPartitionOfShorterArr, rightMostValueOfLeftPartitionOfLongerArr);
      } else {
        return (Math.min(leftMostValueOfRightPartitionOfShorterArr, leftMostValueOfRightPartitionOfLongerArr) 
          + Math.max(rightMostValueOfLeftPartitionOfShorterArr, rightMostValueOfLeftPartitionOfLongerArr)) / 2;
      }
    } else if(rightMostValueOfLeftPartitionOfShorterArr > leftMostValueOfRightPartitionOfLongerArr) {
      right = middleIndexOfShorterArr - 1;
    } else {
      left = middleIndexOfShorterArr + 1;
    }
  }
}


console.log(findMedianSortedArrays([],[1])); // expected: 1.5
console.log(findMedianSortedArrays([3,4,5],[1,2,3,4])); // expected: 3





