let min = 1
let sec = 59
let timerDone = false
let hidden = false

window.onload = () => {
    let audio = document.getElementById('bruh')

    audio.play();

    let tl = anime.timeline({
        targets:'.grid-block',
        loop: true
    }).add({
        translateX: anime.stagger(20, {grid: [10,10], from: 'center', axis: 'x'}),
        translateY: anime.stagger(20, { grid: [10,10], from: 'center', axis: 'y'}),
        backgroundColor: '#35f',
        delay: anime.stagger(50,{grid: [10,10], easing:'linear'}),
        duration:1000
    }, '+=1000').add({
        width: 30,
        height: 2,
        marginTop:'3px',
        marginBottom:'3px',
        translateX: 0,
        backgroundColor: '#5f5',
        delay: anime.stagger(50,{grid: [10,10], from:'center'}),
        easing:'easeOutQuad',
        duration:1000
    }, '+=1000').add({
        rotate: anime.stagger([0,90],{grid: [10,10], from:'center'}),
        delay: anime.stagger(50,{grid: [10,10], from:'center'}),
        backgroundColor: '#13f7e8',
        easing:'easeOutQuart',
        duration:1000
    }, '+=1000').add({
        rotate: 180,
        backgroundColor: '#aaa',
        delay: anime.stagger(50,{grid: [10,10], from:'center', direction:'reverse'}),
        easing:'easeOutQuart',
        duration:1000
    }, '+=1000').add({
        rotate: 90,
        delay: anime.stagger(50,{grid: [10,10]}),
        duration:1000
    }, '+=1000').add({
        width:5,
        height:5,
        delay: anime.stagger(50,{grid: [10,10]}),
        marginLeft:'13px',
        borderRadius: '100px',
        marginRight:'13px',
        backgroundColor:'#fc5907',
        duration:1000
    }, '+=1000').add({
        delay: anime.stagger(50,{grid: [10,10], from:'center'}),
        marginTop:'0px',
        marginBottom:'0px',
        marginLeft:'0px',
        marginRight:'0px',
        rotate: 0,
        translateX: anime.stagger(20, {grid: [10,10], from: 'center', direction: 'reverse', axis: 'x'}),
        translateY: anime.stagger(20, { grid: [10,10], from: 'center', direction: 'reverse', axis: 'y'}),
        width:20,
        height:20,
        easing:'easeOutQuad',
        duration:1000
    }, '+=1000').add({
        delay: anime.stagger(200,{grid: [10,10], from:'center'}),
        backgroundColor:'#e0d100',
        translateX: () => {
            return anime.random(-250,250)
        },
        translateY: () => {
            return anime.random(-250,250)
        },
        rotate: () => {
            return anime.random(0,90)
        },
        duration:1000

    }, '+=1000').add({
        translateX: anime.stagger(20, {grid: [10,10], from: 'center', axis: 'x'}),
        translateY: anime.stagger(20, { grid: [10,10], from: 'center', axis: 'y'}),
        backgroundColor: '#7300e0',
        delay: anime.stagger(50,{grid: [10,10], easing:'linear'}),
        duration:1000,
        width:10,
        height:10,
        borderRadius:0,
        easing:'easeOutQuad',
        duration:800
    }, '+=1000').add({
        translateX: 0,
        translateY: 0,
        rotate: 0,
        backgroundColor: '#f00',
        delay: anime.stagger(50,{grid: [10,10], easing:'linear'}),
        duration:1000,
        borderRadius:0,
        easing:'easeOutQuad',
    }, '+=1000')
}

setInterval(()=>{
    if(!timerDone){
        if(Math.floor(sec/10) >= 1){
            document.querySelector('.timer').innerHTML = `0${min}:${sec}`
        } else {
            document.querySelector('.timer').innerHTML = `0${min}:0${sec}`
        }
        sec --
        if(min == 0 && sec < 0){
            timerDone = true
            anime.timeline({}).add({
                targets:".thing",
                opacity:0,
                easing:"easeInOutQuad",
                duration:300
            }, '+=500').add({
                update:()=>{
                    document.querySelector('.title').innerHTML = 'Created By Lemon Orange';
                }
            }).add({
                targets:".title",
                opacity:1,
                easing:"easeInOutQuad",
                duration:500
            }).add({
                update:()=>{
                    document.querySelector('.title').innerHTML = 'Music By Polar';
                }
            }, '+=3000').add({
                update:()=>{
                    document.querySelector('.title').innerHTML = 'Checkout My Github for Source';
                    document.querySelector('.git').style.opacity = 1;
                }
            }, '+=3000')
        }
        if(min == 0 && sec < 1 && !hidden){
            anime({
                targets: ".grid-block",
                opacity:0,
                duration:1000,
                easing:'easeInOutQuad',
                duration:300
            })
        }
        if(sec < 0){
            sec = 59
            min--
        }
    }
}, 1000)