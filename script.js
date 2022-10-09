const menuToggle = document.querySelector ('.toggle')
        const showcase = document.querySelector ('.nav')

        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active')
            showcase.classList.toggle('active')

        })