// Grabbing the required elements
let countNums = document.getElementsByClassName('numbers')[0]
let followerTxt = document.getElementById('numTxt')

console.log(countNums)


let count = 0
setInterval( () => {
    if (count < 1000){
        count++;
        countNums.innerHTML = count;
    }else{
        followerTxt.innerHTML = "Reached 1k Followers!!! &#127881;"
        followerTxt.style.transition = 'all 0.5s'
        followerTxt.style.fontSize = '2.5rem';
    }
}, 10)