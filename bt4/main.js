// >>Bài tập 4:
// Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với các phần tử được sắp xếp theo thứ tự giảm dần.
// *input:[1, 5, 3, 2] output: [5, 3, 2, 1] 
// *gợi ý:sort(): Sắp xếp một mảng theo thứ tự tăng dần.





function myArray(arr) {
    return arr.sort(function (a, b) {
        return b - a;
    });
}

 
console.log(myArray([1, 5, 3, 2]));   
