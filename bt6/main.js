
// >>Bài tập 6
// Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới chỉ có số lẻ.
// *Input: [1, 2, 3, 4, 5, 6, 7] => Output: [1, 3, 5, 7]
// *Gợi ý phương thức: push()




function myArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }

    return result;
}
 
console.log(myArray([1, 2, 3, 4, 5, 6, 7]));   
