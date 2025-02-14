let placeOne = document.getElementById("place-one")
let placeTwo = document.getElementById("place-two")


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];





function randomPassword (){

    let passwordOne = " ";
    let passwordtwo = " ";

        for (let i = 0 ; i < 7; ++i){

            let randomKey = Math.floor( Math.random()*characters.length)
            let randomKeytwo = Math.floor ( Math.random()* characters.length)

            passwordOne += characters[randomKey]
            passwordtwo += characters [randomKeytwo]
            
        }

        placeOne.textContent = passwordOne;
        placeTwo.textContent = passwordtwo ;

      
   

}

// Function to copy text
function copyToClipboard(element) {
    navigator.clipboard.writeText(element.textContent).then(() => {
        alert("Copied: " + element.textContent);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

// Add click event to copy password
placeOne.addEventListener("click", function () {
    copyToClipboard(placeOne);
});

placeTwo.addEventListener("click", function () {
    copyToClipboard(placeTwo);
});