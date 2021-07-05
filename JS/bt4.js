function tinhToan(){
    //input
    let a = +document.getElementById("soA").value;
    let b = +document.getElementById("soB").value;
    let c = +document.getElementById("soC").value;
    let ketLuan;
    //xử lý
    let divThongBao = document.getElementById('thongBao');
    divThongBao.innerHTML = ""
    let pThongBao = document.createElement("h3");
    if (a==b && a==c && b==c){
        ketLuan = "Đây là tam giác đều";
    }else if ((a==b)||(a==c)||(b==c)){
        ketLuan = "Đây là tam giác cân";
    }else if ((a * a == b * b + c * c) || (b * b == a * a + c * c) || (c * c == b * b + a * a)){
        ketLuan = "Đây là tam giác vuông"
    }else {
        ketLuan = "Đây là tam giác thường"
    }
    pThongBao.innerHTML = "Kết quả sau khi tính toán: " + ketLuan;
    divThongBao.appendChild(pThongBao)
}