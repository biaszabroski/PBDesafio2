const users = [
	{
		login: 'brunohs',
		email: 'brunohs@pbtech.net.br',
		age: 18
	},
	{
		login: 'thainabcc',
		email: 'thaina.biudes@gmail.com',
		age: 25
	},
	{
		login: 'annecl',
		email: 'annecl@pbtech.net.br',
		age: 34
	},
    {
        login: 'willianfl',
        email: 'willianfl@pbtech.net.br',
        age: 30
    },
    {
        login: 'lucasplc',
        email: 'lucasplc@pbtech.net.br',
        age: 20
    }
];

function ValidateForm(evt) {
    evt.preventDefault ()
    const email = document.getElementById ("email").value
    const passwd = document.getElementById ("passwd").value
    if (!email){    
        alert("Por favor, digite o e-mail.")
        return 
    }
    if (!passwd){
        alert("Por favor, digite a senha.")
        return
    }
    let somaIdade = somarIdade().toString()
    let lista = mostrarEmails()
    if (somaIdade === passwd && lista.includes(email)){
        alert("E-mail e senha corretos. O formulário foi submetido.") 
    } else { 
        alert("E-mail ou senha inválidos. Tente novamente.") 
    }
}

function somarIdade() {
    const idades = users.map(user => user.age);
    
    console.log(idades);
    
    const soma = idades.reduce((previous, current) => previous + current, 0);
    
    return soma 
  }
  
function mostrarEmails() {
    const lista = users.map(el => el.email);
    
    return lista;
  }

/*function contarEmails() {
    const emailsPbTech = users.filter(user => user.email.endsWith('@pbtech.net.br'));
    
    console.log(emailsPbTech);
    
    console.log(`A soma dos e-mails pertencentes ao pbtech.net.br foi de ${emailsPbTech.length}`)
  }
  */
/*function validaLogin(param) {
    const login = users.find(el => el.login === param);
    
    if (login === undefined) {
      console.log('Não encontramos esse usuário');
    } else {
      console.log(`O usuário ${login.login} foi encontrado.`) 
    }
  }*/  

/*
        1. Referenciar elementos dos campos do formulário pelo ID
        2. Verificar se a senha e o e-mail estão válidos 
        3. Se tudo estiver ok, alertar o usuário que o formulário foi submetido

        Plus: Alertar o usuário quando o e-mail ou senha estiverem vazios ou incorretos.
    */
