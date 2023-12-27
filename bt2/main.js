// >>Bài tập 2:
// Viết một hàm nhận một chuỗi làm đầu vào và trả về một chuỗi mới 
// với tất cả các chữ cái viết hoa được viết thường và tất cả các chữ cái viết thường được viết hoa.
// *input: "TRung Nghai" => output: "trUNG nGHAI"
// *gợi ý: 
// replace(): Thay thế tất cả các ký tự khớp với một biểu thức chính quy bằng một chuỗi khác.
// toUpperCase(): Chuyển đổi tất cả các chữ cái trong một chuỗi thành chữ hoa.
// toLowerCase(): Chuyển đổi tất cả các chữ cái trong một chuỗi thành chữ thường.



function swapCase(inputString) {
    return inputString.replace(/[a-zA-Z]/g, function (match) {
        return match === match.toLowerCase() ? match.toUpperCase() : match.toLowerCase();
    });
}

console.log(swapCase("TRung Nghai"));  
