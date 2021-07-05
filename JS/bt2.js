function nhap(){
    //input
    let wc = document.getElementById("welcome");
    wc.innerHTML = "";
    let user = document.getElementById("chonNguoiDung").value;
    //xử lý
    let pThongBao = document.createElement("h3");
    let divChange =document.getElementById("welcome")
    
    switch(user){
        case 'B':
            pThongBao.innerHTML="Xin chào Bố";
            break;
        case 'M':
            pThongBao.innerHTML="Xin chào Mẹ";
            break;
        case 'A':
            pThongBao.innerHTML="Xin chào Anh";
            break;
        case 'E':
            pThongBao.innerHTML="Xin chào Em";
            break;
    }
    // xử lý
    //output
    divChange.appendChild(pThongBao);
    
}