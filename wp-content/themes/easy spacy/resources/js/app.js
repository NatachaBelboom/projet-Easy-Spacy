/*const nav = document.getElementsByClassName('top__menu');
const burger = document.getElementsByClassName('more-info__header');

burger.addEventListener('click', (e) =>{
    nav.classList.toggle('menu__responsive');
});
*/

const app = {
    init(){
        this.burgerMenu = document.querySelector('.more-info__header');
        this.leNav = document.querySelector('.top__menu');
        this.burgerMenu.addEventListener('click', (e) => {this.f_burger(e)} );

    },
    f_burger(e){
        e.preventDefault()
        /*if(leMain.classList.contains('is-opened')){
       leMain.classList.remove('is-opened')
        }
        else{
            leMain.classList.add('is-opened')
        }*/
        console.log(this);
        this.leNav.classList.toggle('menu__responsive');
    }
}
app.init();
