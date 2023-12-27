// >>Bài tập 5:
// Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả các phần tử được nhân với 2.
// *input: [1, 2, 3] output: [2, 4, 6]
// *gợi ý: sử dụng map()


function myArray(arr) {
    return arr.map(function (element) {
        return element * 2;
    });
}

 
console.log(myArray([1, 2, 3]));  
