let pass=0;
function validateform(e) {
    const uname = e.name;
    //const name = e.id.replace(/[0-9]/, '');
    //const fieldRow = document.getElementById(`field_${name}`);
    let pattern, error;
    //name validate
    // if(uname !== "" && fieldRow) {
    if(e.value !== "") {
        switch(uname) {
        case "kanjiName":
        case "furiganaName":
        case "country":
            pass=0;
            error="ローマ字、漢字、ふりがなのみ。";
            pattern = /^[a-zA-Zァ-ンぁ-ん一-龯]+$/;
            break;
        case "address":
            pass=0;
            error="ローマ字、漢字、数字、ふりがなのみ。";
            pattern = /^[0-9a-zA-Zァ-ンぁ-ん一-龯]+$/;
            break;
        case "phone":
            pass=0;
            error="10又は11桁の数字のみ。";
            pattern = /^\d{10,11}$/;
            //pattern = /^[0-9]+$/;
            break;
        case "email":
            pass=0;
            error="正しいメールを入力してください。";
            pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            break;
        case "day":
        case "month":
            pass = 1;
            error="日・月2桁数字のみ。";
            pattern = /^\d{1,2}$/;
            break;
        case "year":
            pass=1;
            error="年4桁数字のみ。";
            pattern = /^\d{4}$/;
            break;
        case "schoolName":
        case "kamName":
        case "sikaku":
            pass=2;
            error="ローマ字、漢字、数字、ふりがなのみ。";
            pattern = /^[0-9a-zA-Zァ-ンぁ-ん一-龯]+$/;
            break;
        default:
            pass=0;
            error="";
            pattern = /.+/;
        }
        //if(name === "phone" || name === "zip") {
        // e.value = e.value.normalize('NFKC');
        //}
        checkField(e, pattern, error);
        //checkGroup(fieldRow, name);
    }else {
        if (pass==1){
            let val = e.classList+"Error";
            let k = document.getElementById(val);
            if (e.classList =="birthday"){
                k.innerHTML="例：日・月・年";
                k.style.color="black";
            }else{
                k.innerHTML="";
            }
        }else{
            let val;
            if (pass==2){
                val = `${e.name}${e.id}`;
            }else {
                val = e.name;
            }
            document.querySelector(`#${val} span`).style.display="none";
            document.getElementById(`${val}Error`).innerHTML="";
        }
    }

    }

function checkField(e, pattern, error) {
    if (pass== 1) {
        let val = e.classList+"Error";
        let k = document.getElementById(val);
        if(e.value.match(pattern)) {
            if (e.classList =="birthday"){
                k.innerHTML="例：日・月・年";
                k.style.color="black";
            }else{
                k.innerHTML="";
            }
        } else {
            if (e.classList =="birthday"){
                k.style.color="red";
                k.innerHTML=error;
            }else{
                k.innerHTML=error;
            }
        }
    }else {
        let val;
        if (pass==2){
            val = `${e.name}${e.id}`;
        }else {
            val = e.name;
        }
        let k = document.querySelector(`#${val} span`);
        let errormgs = document.getElementById(`${val}Error`);
        //if(e.value === "") {
            // e.classList.remove("fieldOk");
            //e.classList.remove("fieldNotOk");
            //return;
        //}uname.value.match(letters)
        //if(pattern.test(e.value)) {
        if(e.value.match(pattern)) {
            errormgs.innerHTML="";
            k.style.display="inline-block";
        } else {
           errormgs.innerHTML=error;   
            k.style.display="none";
        }
    }
    
}
  
  
  function checkGroup(fieldRow, name) {
    const name1 = document.getElementById(`${name}1`);
    const name2 = document.getElementById(`${name}2`);
    let emptyField = name1.value === "" || name2.value === "";
    let matchingField = name1.classList.contains('fieldOk') && name2.classList.contains('fieldOk');
    if(name==="phone") {
      const name3 = document.getElementById(`${name}3`);
      const phone_all = name1.value + name2.value  + name3.value;
      emptyField = name1.value === "" || name2.value === "" || name3.value === "";
      matchingField = name1.classList.contains('fieldOk') && name2.classList.contains('fieldOk') && name3.classList.contains('fieldOk') && /^\d{10,11}$/.test(phone_all);
    }
    if(name==="zip") {
      const address = document.getElementById(`addr1`);
      matchingField = name1.classList.contains('fieldOk') && name2.classList.contains('fieldOk') && address.value !== "";
      notEmpty(address);
    }
    
    if(emptyField) {
      fieldRow.classList.remove("pass");
      fieldRow.classList.remove("fail");
      return;
    }
    if(matchingField) {
      fieldRow.classList.add("pass");
      fieldRow.classList.remove("fail");
    } else {
      fieldRow.classList.add("fail");
      fieldRow.classList.remove("pass");
    }
  }
  
  function notEmpty(e) {
    if(e.value !== "") {
      e.style.borderColor= "green";
    } else {
      e.classList.remove("fieldOk");
    }
  }