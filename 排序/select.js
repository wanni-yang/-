/*
 1.将数组分为已排序区[]、当前待排序元素i和未排序区[i+1...arr.length-1]
 2.在未排序区中选择一个最小的元素，和当前待排序元素i互换位置
 3.重复直到未排序区为空
 4.外层循环长度
 */
/*
    出错点
    1.最小元素初始化
    2.内外层循环长度反了
    3.找最小元素索引
 */
const chooseSort = (arr)=>{
    if(arr.length <=1)return;
    for(let i = 0; i < arr.length; i++){
        let j = i+1;
        let min = arr[j];
        for(;j < arr.length -1; j++){
            if(arr[j+1] < min){
                min = arr[j+1];
            }
        }
        const t = arr[i];
        arr[i] = arr[j+1];
        arr[j+1] = t;
    }
    return arr;
}
const swap = (arr,i,j)=>{
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const chooseSortUpdate = (arr)=>{
    if(arr.length <=1)return;
    // 未排序区
    for(let i = 0; i < arr.length -1; i++){
        let min = i;
        // 在未排序区找出来最小元素
        for(let j = i+1;j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        // 换位置
        swap(arr,i,min);
    }
    return arr;
}
