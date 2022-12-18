export function getRandomHexColor () {
    document.body.style.backgroundColor = `${getRandomHexColor()}`;  
        
        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        }        
}