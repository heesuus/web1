let Links = {
    setColor:function (color) {
        let alist=document.querySelectorAll('a');
        // let i=0;
        // while(i<alist.length){
        //     alist[i].style.color=color;
        //     i=i+1;
        // }                          // 순수 자바스크립트 아래 제이쿼리로 바꾸기 
        $('a').css('color', color);   // css('바꾸고싶은것', 매개변수)
    }
}
let Body = {
    SetColor:function (color) {
        //document.querySelector('body').style.color= color;
        $('body').css('color', color);
    },
    SetBackgroundColor:function (color) {
        //document.querySelector('body').style.backgroundColor= color;
        $('body').css('backgroundColor', color);
    }
}
function nightDayHandler(self) {
    let target = document.querySelector('body');
    if (self.value==='night') {
        Body.SetBackgroundColor('gray');
        Body.SetColor('white');
        self.value='day';
        
        Links.SetColor('powderblue');
    } else {
        Body.SetBackgroundColor('white');
        Body.SetColor('black');
        self.value='night';
        
        Links.SetColor('black');
    }
}