function tinhToan(){
    //input//
    let a = +document.getElementById("soA").value;
    let b = +document.getElementById("soB").value;
    let c = +document.getElementById("soC").value;
    // xử lý//
    let divThongBao = document.getElementById('thongBao');
    divThongBao.innerHTML = ""
    let pThongBao = document.createElement("h3");
    let countChan, countLe;
    countChan = 0;
    countLe = 0;
    if(a % 2 == 0){
        ++countChan;
    }else{++countLe;}
    if (b % 2==0){
        ++countChan;
    }else{countLe++}
    if (c % 2==0){
        ++countChan;
    }else{++countLe;}
    //output
    // divThongBao.innerHTML = ""
    pThongBao.innerHTML = "Có tất cả: " + countChan + " số chẵn và có " + countLe; 
    divThongBao.appendChild(pThongBao);
}