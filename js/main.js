const { createApp } = Vue

createApp(
    {
        data() {
            return {
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Superman_S_symbol.svg/1200px-Superman_S_symbol.svg.png',
                testo: "Superman"
                
            }
        }
    }
).mount('#app')