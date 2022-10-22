//add a loading screen
//fix button
document.querySelector('iframe').style.display = 'none'
document.querySelector('#info').style.display = 'none'

document.querySelector('button').addEventListener('click', check)
document.querySelector('#nasaImg').addEventListener('click', showModal)
function getFetch() {
    fade('body')
    document.querySelector('h1').style.display = 'none'
    }
function urlData(url){
    fetch(url)
        
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            console.log('here')
            if (data.media_type === 'image') {
                document.querySelector('img').src = data.hdurl
                document.querySelector('iframe').src = null


            } else if (data.media_type === 'video') {
                document.querySelector('iframe').style.display = 'block'
                document.querySelector('iframe').src = data.url
                document.querySelector('img').src = null


            }
            document.querySelector('h3').innerHTML = data.title
            document.querySelector('#image_Description').innerHTML = data.explanation
            document.querySelector('#info').style.display = 'block'
            setTimeout(() => { unfade('body'); }, 1000);
        })
        .catch(err => {
            console.log(`error ${err}s`)
        });
    }
function check(){
    const choice = document.querySelector('#dates').value
    let dayArray = choice.split('-')
    if (Number(dayArray[0]) >= 1996){
        const url = 'https://api.nasa.gov/planetary/apod?api_key=BUEQx41gEhdJDQmIfJmNWjuxyIfM4DSAEHTfL9a2&date=' + choice
        document.querySelector('#check').innerHTML = ''
        getFetch()
        urlData(url)
    }else{
        document.querySelector('#check').innerHTML = 'Choose any day between 1996 to today'
    }
}
function showModal() {
    var img = document.getElementById("myImg");
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = document.querySelector('#nasaImg').src;
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    document.querySelector('span').addEventListener('click', close)
    document.querySelector('#img01').addEventListener('click', close)

     function close () {
        modal.style.display = "none";
    }

    //captionText.innerHTML = document.querySelector('h3').src;

}


function fade() {
    element = 'body'
    var op = .35  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            document.querySelector(element).style.display = 'none';
        }
        document.querySelector(element).style.opacity = op;
        document.querySelector(element).style.filter = 'alpha(opacity=' + op * 10 + ")";
        op -= op * 0.1;
    }, 50);
    
}
function unfade(element) {
    var op = 0.6;  // initial opacity
    document.querySelector(element).style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        document.querySelector(element).style.opacity = op;
        document.querySelector(element).style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}