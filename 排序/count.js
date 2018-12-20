/*
   建立一个数组C，下标表示原数组的元素，值为下标在原数组中出现的次数
   对数组元素进行顺序求和
   逆序遍历原数组，将元素K放到结果数组R的第C[k]-1位，C[k]值-1,再次遇到K同样处理
   直到原数组遍历结束
 */
const count = (arr)=>{
    if(arr.length <=1)return;

    let arr_r = [],max=0;
    for(let i=0;i<arr.length;i++){
        if(max < arr[i]){
            max = arr[i];
        }  
    }
    let arr_c = new Array(max+1).fill(0);
    for(let i=0;i<arr.length;i++){
        arr_c[arr[i]]++;
    }//->arr_c:[0, 1, 6, 3, 2, 1, 1, 2]
    for(let k=1;k<arr_c.length;k++){
        arr_c[k] = arr_c[k]+arr_c[k-1];
    }//->arr_c:[0, 1, 7, 10, 12, 13, 14, 16]
    for(let j=arr.length-1;j>=0;j--){
        let pos = arr_c[arr[j]];
        arr_r[pos-1] = arr[j];
        arr_c[arr[j]]--;
    }//->arr_r:[1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7]
    return arr_r;
}
count([2,1,3,2,5,2,6,2,7,4,3,2,7,4,3,2])
