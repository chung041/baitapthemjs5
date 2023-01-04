
// Bài 1: Tính thuế thu nhập cá nhân
document.getElementById("test").onclick = function () {
    let nameEl = document.getElementById('name').value //Họ tên
    let incomeEl = +document.getElementById('income').value//Tổng thu nhập năm
    let numberDependenciesEl = +document.getElementById('numberDependencies').value //Số người phụ thuộc
    let sum = incomeEl - 4000000 - numberDependenciesEl * 1600000//Tổng thu nhập chịu thuế
    let ratioTax; //Thuế suất
    let incomeTax; //Thuế thu nhập cá nhân

    //Xoá các gía trị của lần nhâp trước đó
    document.getElementById("name").value = ""
    document.getElementById("income").value = ""
    document.getElementById("numberDependencies").value = "0"

    //Kiểm tra dữ liệu điểm nhập vào, không thoả hiện pop-up báo nhập lại
    if (sum <= 0) {
        alert("Vui lòng nhập lại")
        return;
    }
    else if (sum > 0 && sum <= 60000000) {
        ratioTax = 0.05;
        incomeTax = ratioTax * sum;
        console.log(incomeTax);
    } else if (sum <= 120000000) {
        ratioTax = 0.1;
        incomeTax = ratioTax * sum;
    } else if (sum <= 210000000) {
        ratioTax = 0.15
        incomeTax = ratioTax * sum;
    } else if (sum <= 384000000) {
        ratioTax = 0.2
        incomeTax = ratioTax * sum;
    } else if (sum <= 624000000) {
        ratioTax = 0.25
        incomeTax = ratioTax * sum;
    } else if (sum <= 960000000) {
        ratioTax = 0.3
        incomeTax = ratioTax * sum;
    } else {
        ratioTax = 0.35
        incomeTax = ratioTax * sum;
    }

    //Dùng hàm NumberFormat để hiển thị số tiền
    incomeEl = new Intl.NumberFormat().format(incomeEl);
    sum = new Intl.NumberFormat().format(sum);
    incomeTax = new Intl.NumberFormat().format(incomeTax);

    //Trả dữ liệu thông tin người chịu thuế, thu nhập, thu nhập chịu thuế, thuế thu nhập ra bảng table
    let tdName = "<td>" + nameEl + "</td>"
    let tdIncome = "<td>" + incomeEl + "</td>"
    let tdNumberDependencies = "<td>" + numberDependenciesEl + "</td>"
    let tdSum = "<td>" + sum + "</td>"
    let tdIncomeTax = "<td>" + incomeTax + "</td>"
    let tr = "<tr>" + tdName + tdIncome + tdNumberDependencies + tdSum + tdIncomeTax + "<tr>"
    let tbody = document.getElementById("student-list")
    tbody.innerHTML += tr;
}
//Bài 2: Tính tiền cáp

document.getElementById("calculate").onclick = function () {
    //DOM Mã khách hàng về và gán biến 
    let identifiedCodeEl = document.getElementById("identifiedCode").value
    //DOM số kênh cao cấp về và gán biến 
    let numberChanelEl = +document.getElementById("numberChanel").value
    //DOM loại khách hàng về và gán biến 
    let typeEl = document.getElementById("type").value
    //DOM số kết nối về và gán biến 
    let numberEl = +document.getElementById("number").value
    //Khai báo biến tổng chi phí ($) là overall
    let overall;


    //Xoá giá trị của lần nhập trước đó nếu có Pop-up báo lỗi hoặc sau mỗi lần Click Tính tiền cáp
    document.getElementById("type").value = "0"
    document.getElementById("identifiedCode").value = ""
    document.getElementById("number").value = ""
    document.getElementById("numberChanel").value = ""

    // Pop-up nếu khách hàng không chọn option
    if (typeEl === "0") {
        alert("Vui lòng cho biết Bạn là ai?")
        return
    } //Kiểm tra dữ liệu nhập có đúng?
    else if (numberEl < 0 || numberChanelEl < 0) {
        alert("Vui lòng nhập lại số kênh cao cấp/số kết nối")
        return
    } else if (typeEl === "Doanh nghiệp" && numberEl >= 0 && numberEl <= 10) {
        //Tính chi phí cần thanh toán
        overall = 15 + 75 + 50 * numberChanelEl
    } else if (typeEl === "Doanh nghiệp" && numberEl > 10) {
        //Tính chi phí cần thanh toán
        overall = 15 + 75 + 5 * (numberEl - 10) + 50 * numberChanelEl
    } else if (typeEl === "Hộ dân") {
        //Tính chi phí cần thanh toán
        overall = 4.5 + 20.5 + 7.5 * numberChanelEl
    }

    //Gán biến và trả dữ liệu thông tin Mã khách hàng, Số kênh cao cấp, Loại khách hàng, Số kết nối về bảng table
    let tdName = "<td>" + identifiedCodeEl + "</td>"
    let tdNumberChanel = "<td>" + numberChanelEl + "</td>"
    let tdType = "<td>" + typeEl + "</td>"
    let tdNumber = "<td>" + numberEl + "</td>"
    tdOverall = "<td>" + overall + "</td>"
    tr = "<tr>" + tdName + tdNumberChanel + tdType + tdNumber + tdOverall + "</tr>"
    tbody = document.getElementById("customer-list")
    tbody.innerHTML += tr;
}

//Hàm function khi khách hàng chọn Loại đối tượng =>Thêm/Xoá input nhập số kênh cao cấp
function myFunction() {
    let typeEl = document.getElementById("type").value

    if (typeEl === "Hộ dân") {
        // document.getElementById("number").classList.add("d-none")
        //NẾU là Hộ dân thì sẽ xoá input Yêu cầu nhập số kết nối.
        document.getElementById("number").classList.remove("d-inline")

    } else if (typeEl === "Doanh nghiệp") {
        // number.style.display = "block"
        //NẾU là Doanh nghiệp thì sẽ xuất hiện input Yêu cầu nhập số kết nối.
        document.getElementById("number").classList.add("d-inline")
    }

    //Xoá giá trị của lần nhập trước nếu thay đổi Loại khách hàng
    document.getElementById("identifiedCode").value = ""
    document.getElementById("number").value = ""
    document.getElementById("numberChanel").value = ""

}