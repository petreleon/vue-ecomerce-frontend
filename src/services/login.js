export default new class login {
    constructor(){
        this.login = '';
    }
    loginAs(name){
        this.login = name;
    }
    logout(){
        this.login = '';
    }
}