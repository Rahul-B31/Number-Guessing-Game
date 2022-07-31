let number;
let score = 0;
const generate_number=()=>{

 let n1 =  Math.random()  
 
 let n2 = n1*10;
 // for remove decimal point
 n2 = Math.trunc(n2);

 // for range between 1 to 6
 n2 = (n2%10)+1;
 number = n2;

 console.log(number);
}

const generate_number_btn=()=>{
    document.querySelector('#section1').style.display = 'none';
    document.querySelector('#section2').style.display = 'none';
    document.querySelector('#section3').style.display = 'block';
    document.body.style.backgroundColor = "white"
    setTimeout(()=>{
        generate_number();
        document.querySelector('#section1').style.display = 'none';
        document.querySelector('#section2').style.display = 'block';
        document.querySelector('#section3').style.display = 'none';
    },3000)

}

const checkNumber = ()=>{
  let userNumber = document.getElementById('inputfiled').value;
  if(number==userNumber)
  {
    score++;
    alert("You Won The Game 🎉");
  }
  else
  {
    alert("You lost the Game ! try again😔")
  }
   document.getElementById('score-text').innerHTML = `Score:${score}`
   reload();
}
const reload=()=>{
     generate_number_btn();
    // document.getElementById('section3').style.display="none";
    // document.getElementById('section1').style.display="none";
       document.getElementById('inputfiled').value = '';
    // document.body.style.backgroundColor = "rgb(65, 85, 90)"
}