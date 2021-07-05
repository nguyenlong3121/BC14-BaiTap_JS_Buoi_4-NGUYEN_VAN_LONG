// input//
function sapXep(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    
    // xử lý//
    let soLonNhat, soTb, soNhoNhat;
    
    if (a>b){
        soLonNhat = a
        // console.log(soLonNhat);
        if(a>c){
            if (b>c){
                soNhoNhat = c
                soTb = b
            }
        }{
            soLonNhat = c
            soTb = a
            soNhoNhat = b
    
        }
    }else{
        soLonNhat = b
        if (b>c) {
            if (c>a){
                soTb = c
                soNhoNhat = a
            }
            soTb = a
            soNhoNhat = c
    
        }
    }
    //output
    let divThongBao = document.getElementById("thongBao");
    console.log("Thứ tự được sắp xếp là", soLonNhat, soTb, soNhoNhat)
    let hThongBao = document.createElement("h3")
    hThongBao.innerHTML = "Thứ tự được sắp xếp là" +"  " + soLonNhat +" , " + soTb + " , " + soNhoNhat;
    divThongBao.appendChild(hThongBao);
}