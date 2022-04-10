const wrapper = document.querySelector('.wrapper')
const imgContainer = document.querySelectorAll('.img-container')
const ctrLeft = document.querySelector('.ctr-left')
const ctrRight = document.querySelector('.ctr-right')
const btnContainer = document.querySelector('.btn-container')

ctrRight.setAttribute('href', '#img1')
ctrLeft.setAttribute('href', `#img${Number(imgContainer.length) - 1}`)

for (let index = 0; index < imgContainer.length; index++) {
    btnContainer.innerHTML += `<a href='#img${index}' class='btn'></a>` 
}

function scrollFun(){
    for (let index = 0; index < imgContainer.length; index++) {
        imgContainer[index].setAttribute('id', `img${index}`);            


        if(imgContainer[index].getBoundingClientRect().left >= wrapper.getBoundingClientRect().left && imgContainer[index].getBoundingClientRect().left < wrapper.getBoundingClientRect().right){
            imgContainer[index].setAttribute('data-state', 'true')
        
            let count = index;

            if(count == imgContainer.length -1) count = -1
            ctrRight.setAttribute('href', `#img${count + 1}`)
            if(count == 0) count = imgContainer.length
            ctrLeft.setAttribute('href', `#img${count - 1}`)
            
            // if(imgContainer[index].getAttribute('data-state') == 'true'){
                document.querySelectorAll('.btn')[index].classList.add('active--btn')
                console.log('hello');
            
            
        }else{
            imgContainer[index].setAttribute('data-state', 'false')
            document.querySelectorAll('.btn')[index].classList.remove('active--btn')
        }
    }
}scrollFun()

wrapper.addEventListener('scroll', scrollFun);
ctrLeft.addEventListener('click', scrollFun)
ctrRight.addEventListener('click', scrollFun)

