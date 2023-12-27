// >>Bài tập 1:
// Viết chương trình nhập vào một chuỗi nếu độ dài của chuỗi ít nhất là 3 - thêm "ing" vào chuỗi đó,
// trường hợp chuỗi kết thúc bằng "ing" - thêm "ly".
// *input: play => output: playing
// *input: go => output: go
// *input: running => output: runningly
// *gợi ý: sử dụng substr()

function myString(inputString) {
        if (inputString.length >= 3) {
        if (inputString.substr(-3) === "ing") {
            inputString += "ly";
        } else {
            inputString += "ing";
        }
    }
    return inputString;
}

console.log(myString("play"));   
console.log(myString("go"));      
console.log(myString("running"));  

