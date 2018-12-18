/*
    1.从数组中间将其分为两部分
    2.一直分到单个元素
    3.再合并
 */
/*
    出错点
    1.参数，递归的对象
    2.合并对象
 */
const mergeSort = (arr,p,r)=>{
    if(arr.length <= 0) return;
    if(p >= r) return;
    let q = (p+r)/2;
    mergeSort(arr,p,q);
    mergeSort(arr,q+1,r);
    let arrp = arr.slice(p,q);
    let arrr = arr.slice(q+1,r);
    merge(arr,arrp,arrr);
}
const merge = (left,right)=>{
    const temp = [];
    for(let i = 0;i < left.length;){
        for(let j = 0; j < right.length;){
            if(left[i] <= right[j]){
                temp.push(left[i]);
                i++;
            }else if(left[i] > right[j]){
                temp.push(right[j]);
                j++;
            }
        }
    }
    // 合并剩余的数组
    return temp.concat(left.slice(i)).concat(right.slice(j));

}

const mergeSortUpdate = (arr)=>{
    if(arr.length <= 0)return;
    let middle = Math.floor(arr.length/2);
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);
    return merge(mergeSortUpdate(left),mergeSortUpdate(right));
}