// >>Bài tập 7
// Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả các phần tử lặp lại được loại bỏ.
// *input:[1, 2, 3, 1, 2, 3, 4, 5, 3, 1, 2] => output: [1, 2, 3, 4, 5]
// *gợi ý: sử dụng indexOf(), push()



function myArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }

    return result;
}
 
console.log(myArray([1, 2, 3, 1, 2, 3, 4, 5, 3, 1, 2]));  
