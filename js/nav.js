const nav = document.querySelector('.nav-menu');
const dropdown = document.querySelector('.dropdown');

const Nav = () => {

    //Event listeners
    nav.addEventListener('click', changeIcon);
    dropdown.addEventListener('click', openDropdown)

    //Actions
    function changeIcon() {
        nav.classList.toggle('active');
    }

    function openDropdown() {
        dropdown.classList.toggle('active');
    }

};

export default Nav;