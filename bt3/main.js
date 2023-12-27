// >>Bài tập 3:
// Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả các phần tử "không phải số" được xóa bỏ.
// *input:[1, "a", 2, "b", 3] output: [1, 2, 3]
// *gợi ý:
// filter(): Lọc một mảng bằng cách chỉ giữ lại các phần tử thỏa mãn một điều kiện nhất định.
// isNaN(): Kiểm tra xem một giá trị có phải là số ko.



function myArray(arr) {
    return arr.filter(function (element) {
        return !isNaN(element) && typeof element !== 'string';
    });
}
 
console.log(myArray([1, "a", 2, "b", 3]));  
