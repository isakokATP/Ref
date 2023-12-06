
function PasswordInput(password) {

    let count_special_character = 0
    let count_digit = 0
    let count_uppercase = 0
    let count_Lowercase = 0
    ArrayPass = [...password]

    if (ArrayPass.length > 7) {
        for (let i = 0; i < ArrayPass.length; i++) {
            Upper = ArrayPass[i].toUpperCase()
            Lower = ArrayPass[i].toLowerCase()
            if (ArrayPass[i] === "@" || ArrayPass[i] === "#" || ArrayPass[i] === "$" || ArrayPass[i] === "%" ||ArrayPass[i] === "^" || ArrayPass[i] === "&" || ArrayPass[i] === "!" ) {
                    count_special_character ++
                    continue         
            } 
            if (ArrayPass[i] === "0" || ArrayPass[i] === "1" || ArrayPass[i] === "2" || ArrayPass[i] === "3" || ArrayPass[i] === "4" ||ArrayPass[i] === "5" || ArrayPass[i] === "6" || ArrayPass[i] === "7" || ArrayPass[i] === "8" || ArrayPass[i] === "9" ) {
                    count_digit ++
                    continue
            }
            if(ArrayPass[i] === Upper){
                    count_uppercase ++  
                    console.log(count_uppercase)  
            }
            if(ArrayPass[i] === Lower){
                    count_Lowercase ++
                    // console.log(count_Lowercase)   
        }
       }

       if (count_special_character > 0 && count_digit >0 && count_uppercase >0 && count_Lowercase >0) {
            return [password ,true]
       }
    } 
        return false
}

console.log(PasswordInput("Tak0yak!"))
 