var names = []
var password = []

var index = 0
var choice = true




registro()

while(choice){

    dados()
    
    function dados(){
        var choice = prompt("1 // Cadastrar, 2 // Fazer Login, 3 // Encerrar 4 //Excluir Cadastro")

        if(choice == "1"){
               registro()
        }

        if(choice == 2){
            login()
        }
        if(choice == "3"){
            finish()
        }

        if(choice == "4"){
            erase()
         }
    }

}


function registro(){
    names[index] = prompt("Digite seu Usuário")
    password[index] = prompt("Digite uma Senha")
    return 1
}



function login(names2, password2){
    var comparador = 0
    names2 = prompt("Qual seu usuário ?")
    password2 = prompt("Qual sua Senha ?")
    for(var contador2 = 0; contador2 < names.length; contador2++){
        
        if(names2 == names[comparador] && password2 == password[comparador]){
            alert("Login Efetuado com sucesso !")  
            return true
        }

        if(names2 != names[comparador] && password2 != password[comparador]){
            comparador++
        }
    }

    if(names2 != names[comparador] || password2 != password[comparador]){
        alert("Usuário ou Senha incorretos")
        return false
    }
    return 2
}


function finish(){
    choice = false
    return 3
}


function erase(names3, password3){
    var base = 0

    var finder = prompt("Qual o seu Usuário ?")
    for(var contador3 = 0; contador3 < names.length; contador3++){
        if(finder == names[base]){
            names3[base] = names[base + 1]
            password3[base] = password[base + 1]
            names.length--
            password.length--
        }
        else{
            base++
        }
    }

    return 4
}

console.log(names, password)