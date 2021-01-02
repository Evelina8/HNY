var mouse = {
    x: undefined,
    y: undefined
 }
 
 //Get mouse x and y coordinates
 window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
 });
 
 var colorArray = [
    'white',
    '#357291',
    '#949799',
    '#547b8e',
    '#063f5b'
 ];
 
 var nameArray = [
    
    'Happy New Year', 'Feliĉan novan jaron', 'Eƒé bé dzogbenyui nami', 'Mbembe mbu',
     'Bonne année','Feliz ano novo', 'Frohes neues Jahr', 
     'Boldog új évet', 
    'Felice anno nuovo',  'Felix sit annus novus', 
    'Bón ànno nêuvo', 
    'Szczęśliwego nowego roku', 'Feliz ano novo',  'С Новым Годом', 
     'Щасливого Нового Року', 
    'Ene boune anéye, ene boune sintéye', 'Nyak\'omtsha', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021', '2021','2021','2021','2021','2021','2021','2021','2021','2021','2021','2021','2021','2021','2021','2021','2021','2021','2021','2021','2021','2021','2021','2021','2021','2021',
 ];
 
 var container = document.querySelector('#name-canvas');
 var nameMovers = [];
 var vHeight = window.innerHeight;
 var vWidth = window.innerWidth;
 
 var mover;
 for (var i = 0; i < nameArray.length; i++) {
    mover = createMover(nameArray[i], container);
    nameMovers.push(mover);
 }
 
 animate();
 
 function randPos(max) {
     return Math.floor(Math.random() * max);
 }
 
 function randMinMax(min, max, nonZero) {
    var value = Math.floor(Math.random() * (max - (min))) + (min);
    
    if (nonZero && value === 0) {
       return randMinMax(min, max, nonZero);
    } else {
       return value;
    }
 }
 
 
 function createMover(name, container) {
    var mover = {
       x: randPos(vWidth),
       y: randPos(vHeight),
       z: randPos(100),
       dx: randMinMax(-2, 3, true) / 1.5,
       dy: randMinMax(-2, 3, true) / 2,
       dz: randMinMax(-2, 3, true),
    };
 
    //Colors randomly from color array
    var color = colorArray[Math.floor(Math.random() * colorArray.length)];
   
    var el = document.createElement('div');
    el.innerHTML = name;
    el.classList.add('mover');
    el.style.color = color;
    mover.el = el;
    container.appendChild(el);
    return mover;
 }
 
 
 function updateMoverPosition(mover) {
    mover.x += mover.dx;
    mover.y += mover.dy;
    mover.z += mover.dz;
    
    // bounce back.
    if (mover.x >= window.innerWidth || mover.x < 0) {
       mover.dx = -mover.dx;
    }
    if (mover.y >= window.innerHeight || mover.y < 0) {
       mover.dy = -mover.dy;
    }
    if (mover.z >= 500 || mover.z < -500) {
       mover.dz = -mover.dz;
    }
    
    mover.el.style.transform = [
       "translateX("  + mover.x + "px)",
       "translateY("  + mover.y + "px)",
       "translateZ("  + mover.z + "px)"
    ].join('');
       
    
 }
 
 //for moving names around
 function animate() {
    
    for (let i = 0; i < nameMovers.length; i++) {
       updateMoverPosition(nameMovers[i]);
    }  
    
    //setTimeout(animate, 1000 / 50);
    requestAnimationFrame(animate);
 }
 
 
 