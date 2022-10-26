let slideIndex = 0;
let url = ''
const none = 'none'
showSlides()
document.querySelector('iframe').style.display = 'none'
document.querySelector('#info').style.display = 'none'
document.querySelector('.instructions').style.display = 'none'
document.querySelector('#big-button').style.display = 'block'
const slideImg = document.querySelectorAll('.mySlides')
document.querySelector('#button').addEventListener('click', check)
document.querySelector('#big-button').addEventListener('click', toggleButton)

const resultSound = new Howl({
    src: ['assets/sounds/request.mp3']
});

slideImg.forEach(img => {img.addEventListener('click', function loadImg(){
    let source = img.querySelector('img').src;
    console.log(img.querySelector('img').src)
    console.log(source.search('1'))
    if(source.search('1') > -1){
        document.querySelector('#dates').value = '2022-10-20'
        console.log('here')
    }else if(img.querySelector('img').src.search('2')){
        document.querySelector('#dates').value = '2022-10-16'
        console.log('2'  > -1)
    }else if(source.search('3'  > -1)){
        document.querySelector('#dates').value = '2022-10-22'
        console.log('3'  > -1)
    }else if(source.search('4'  > -1)){
        document.querySelector('#dates').value = '2022-10-14'
        console.log('4')
    }else if(source.search('5'  > -1)){
        document.querySelector('#dates').value = '2022-10-18'
        console.log('5')
    }else if(source.search('6'  > -1)){
        document.querySelector('#dates').value = '2022-10-11'
        console.log('6')
    }else if(source.search('7'  > -1)){
        document.querySelector('#dates').value = '2022-10-21'
        console.log('7')
    }
    check()
})})


function toggleButton(){
  if(document.querySelector('#big-button').style.display == 'block'){
  document.querySelector('#big-button').style.display = 'none'
  document.querySelector('.instructions').style.display = 'block'
  }else{
    document.querySelector('#big-button').style.display = 'block'
    document.querySelector('.instructions').style.display = 'none'
  }

}


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  document.querySelector('.slider').style.display = 'block'
  if (url === ''){
    //fade('.slideshow-container')
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  //console.log(slides[slideIndex-1].querySelector('img').src)


  setTimeout(() => { fade('.slideshow-container'); }, 4000);
  setTimeout(() => { unfade('.slideshow-container'); }, 6000);
  setTimeout(showSlides, 5000); // Change image every 5 seconds
  }else{
    setTimeout(document.querySelector('.slider').style.display = 'none', 6500)
    return
  }

}


// //add a loading screen
// //fix button


// document.querySelector('#nasaImg').addEventListener('click', showModal)
function getFetch() {
    fade('body')
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
            resultSound.play()

        })
        .catch(err => {
            console.log(`error ${err}s`)
        });
    }

function check(){
    const choice = document.querySelector('#dates').value
    let dayArray = choice.split('-')
    if (Number(dayArray[0]) >= 1996){
        url = 'https://api.nasa.gov/planetary/apod?api_key=BUEQx41gEhdJDQmIfJmNWjuxyIfM4DSAEHTfL9a2&date=' + choice
        console.log(url)
        showSlides()
        document.querySelector('.slideshow-container').style.display = 'none'
        document.querySelector('.instruction-text').style.color = 'white'

        toggleButton()
        getFetch()
        resultSound.play()
        urlData(url)
        

    }else{
        document.querySelector('.instruction-text').style.color = 'red'
    }
}

// function showModal() {
//     var img = document.getElementById("myImg");
//     var modal = document.getElementById("myModal");
//     var modalImg = document.getElementById("img01");
//     modal.style.display = "block";
//     modalImg.src = document.querySelector('#nasaImg').src;
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks on <span> (x), close the modal
//     document.querySelector('span').addEventListener('click', close)
//     document.querySelector('#img01').addEventListener('click', close)

//      function close () {
//         modal.style.display = "none";
//     }

//     //captionText.innerHTML = document.querySelector('h3').src;

// }


function fade(element) {
    var op = .45  // initial opacity
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
    var op = 0.3;  // initial opacity
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
