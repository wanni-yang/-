/*
  冒泡排序：每次冒泡过程，相邻元素进行比较，符合排序条件就交换位置
  没有有交换发生就终止操作
*/
const swap = (arr,i,j)=>{
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const bubbleSortUpdate = (arr)=>{
    if(arr.length() <= 1)return;
    for(let i=0; i<arr.length;i++){
        let hasChange = false;
        for(var j = 0; j < arr.length - i -1;j++){
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1);
                flag = true;
            }
        }
        if(!hasChange) break;
    }
    return arr;
}
