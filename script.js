// const wrapper = document.querySelector('.wrapper');
// const btnPopup = document.querySelector('.btnLogin-popup');

// btnPopup.addEventListener('click', () => {
//     wrapper.classList.add('active-popup');
// });//dang fix loi o day ,cay vl, khong nhan vao login lam hien len giao dien dang nhap dc

document.querySelector('#btnLogin').addEventListener('click', function() {
    login.changeFormPopUp();
  });

var login = new Vue({
    el: '.wrapper',
    data: {
        isActive: false,
        isForm: false,
    },
    methods: {
        changeActive() {
            // true->false
            // false -> true
            this.isActive = !this.isActive;
        },
        changeFormPopUp() {
            this.isForm = !this.isForm;
        }
    },
    computed: {
        activeClass() {
            return {
                active: this.isActive
            }
        },
        popupClass() {
            return {
                'active-popup': this.isForm
            }
        }
    }
})


