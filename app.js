const submitBtn = document.querySelector('#submit-btn')

const input = document.querySelector('#form-user')


submitBtn.addEventListener('click', () => {
    alert('hi ' + input.value)
});