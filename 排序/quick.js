/*
    没写出来
    将数组分为两部分，重点是这个分区函数partial()
        1.通过游标i将数组分为已排序区[left...i-1]小于arr[pivot],未排序区[i...right-1]
        2.类型选择排序，每次遍历未排序区[i...right-1]，若小于arr[pivot],
          将arr[j]放到已排序区尾部即arr[i]
        3.返回pivot分区后的位置
    排序:
        1.随机选择一个元素作为 pivot（一般情况下，可以选择区间最后一个元素）
        2.通过不断的左右分区，到区间距离为1
 */
const swap = (arr,i,j)=>{
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const partition = (arr,pivot,left,right)=>{
    const pivotVal = arr[pivot];
    let i = left;
    for(let j = left; j < right; j++){
        if(arr[j] < pivotVal){
            swap(arr,j,i);
            i++;
        }
    }
    swap(arr,i,pivot);
    return i;
}
const quickSort = (arr,left,right)=>{
    if(left < right){
        let pivot = right;
        let partialIndex = partition(arr,pivot,left,right);
        quickSort(arr,left,partitionIndex-1 <left ? left : partialIndex -1);
        quickSort(arr,partialIndex+1 > right ? right : partialIndex +1,right);
    }
}
