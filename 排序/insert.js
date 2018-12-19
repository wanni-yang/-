/*
  1.整个数组分为两部分：已排序区[0...i-1]和未排序区[i...arr.length-1]
  2.已排序区默认初始为第一个元素
  3.开始排序从未排序区中遍历取出一个待排元素arr[i]
  4.和已排序区元素从尾到头依次进行比较，若arr[i]小于当前元素，移动当前元素，
    直到遍历结束或者遇到大于arr[i]的元素
  5.将带待排元素插入当前遍历的位置
  6.重复3-5直到未排序区为空
 */
const insertSort = (arr)=>{
    if(arr.length <= 1) return;
    // 未排序区
    for(let i = 1;i < arr.length; i++){
        // 已排序区
        const tmp = arr[i];
        for(let j = i-1; j >= 0; j--){
            // 遇到小于的就移动元素
            if(tmp < arr[j]){
                arr[j+1] = arr[j];
            }else{
                break;
            }
        }
        // 待排元素插入j,前面--这里+1
        arr[j+1] = tmp;
    }
}
