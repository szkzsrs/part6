!function(t){function i(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,i),a.l=!0,a.exports}var e={};i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=2)}([function(t,i){var e=document.getElementById("canvas1"),r=e.getContext("2d"),a=document.getElementById("canvas2"),o=a.getContext("2d"),s={imgUrl:"./images/",can1:e,ctx1:r,can2:a,ctx2:o,canWid:e.width,canHei:e.height,mx:.5*e.width,my:.5*e.height,aneOb:{},fruitOb:{},momOb:{},babyOb:{},scoreOb:{},waveOb:{},haloOb:{},dustOb:{},diffframetime:0,globaltext:function(){console.log("global")}()};t.exports=s},function(t,i){function e(t,i,e,r){return Math.sqrt(Math.pow(t-e,2)+Math.pow(i-r,2))}function r(t,i,e){var r=i-t;return r>Math.PI&&(r-=2*Math.PI),r<-Math.PI&&(r+=2*Math.PI),t+r*e}function a(t,i,e){return t+(i-t)*e}function o(t,i,e,r,a){var o=Math.abs(t-e),s=Math.abs(i-r);return o<a&&s<a}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t,i){return window.setTimeout(t,1e3/60)}}();var s={calLength2:e,lerpAngle:r,lerpDistance:a,distance:o,utiltest:function(){console.log("util")}()};t.exports=s},function(t,i,e){var r=e(3);e(12),r.startgame(),r.Controllertext()},function(t,i,e){function r(){console.log("Controller"),l.globaltext,f.utiltest,b.anetext,c.badytest,x.dusttest,g.fruittest,v.halotest,p.momtest,w.scoretest,I.wavetest}var a,o,s,n,h,m,u,d,y,l=e(0),f=e(1),b=e(4),c=e(5),x=e(6),g=e(7),v=e(8),p=e(9),w=e(10),I=e(11),T=b.Ane,E=c.Baby,A=x.Dust,O=g.Fruit,B=v.Halo,M=p.Mom,F=w.Score,P=I.Wave,S=l.can1,N=l.ctx1,W=l.ctx2,k=l.canWid,C=l.canHei,H=f.calLength2,R={};R.startgame=function(){R.init(),y=Date.now(),R.gameLoop()},R.drawBackgorund=function(){var t=new Image;t.src=l.imgUrl+"background.jpg",W.drawImage(t,0,0,k,C)},R.init=function(){N.fillStyle="white",N.font="20px 微软雅黑",N.textAlign="center",S.addEventListener("mousemove",R.onMouseMove,!1),S.addEventListener("click",R.onClick,!1),l.mx=.5*k,l.my=.5*C,a=l.aneOb=new T,a.init(),o=l.fruitOb=new O,o.init(),s=l.momOb=new M,s.init(),n=l.babyOb=new E,n.init(),h=l.scoreOb=new F,m=l.waveOb=new P,m.init(),u=l.haloOb=new B,u.init(),d=l.dustOb=new A,d.init()},R.gameLoop=function(){requestAnimFrame(R.gameLoop);var t=Date.now();l.diffframetime=t-y,y=t,l.diffframetime>40&&(l.diffframetime=40),W.clearRect(0,0,k,C),R.drawBackgorund(),a.drawAne(),o.computeFruit(),o.drawFruit(),N.clearRect(0,0,k,C),s.drawMom(),n.drawBaby(),h.gameOver||(R.momEatFruit(),R.momFoodBaby()),h.drawScore(),m.drawWave(),u.drawHalo(),d.drawDust()},R.onMouseMove=function(t){h.gameOver||(t.offsetX||t.layerX)&&(l.mx=void 0==t.offsetX?t.layerX:t.offsetX,l.my=void 0==t.offsetY?t.layerY:t.offsetY)},R.onClick=function(){h.gameOver&&(h.gameOver=!1,o.init(),s.init(),n.init(),h.init())},R.momEatFruit=function(){for(var t=0;t<o.num;t++)if(o.alive[t]&&o.grow[t]){var i=H(o.x[t],o.y[t],s.x,s.y);i<30&&(o.dead(t),m.born(t),h.fruitNum++,s.momBodyIndex=7==s.momBodyIndex?s.momBodyIndex:s.momBodyIndex+1,"blue"==o.type[t]&&h.doubleNum++)}},R.momFoodBaby=function(){if(h.fruitNum>0){if(H(s.x,s.y,n.x,n.y)<30){u.born(),s.momBodyIndex=0;var t=h.doubleNum*h.fruitNum,i=n.babyBodyIndex-t;i<0&&(i=0);var e=h.strength+(i/2).toFixed(0);e>10&&(e=10),h.strength=e,n.babyBodyIndex=i,h.computeScore()}}},t.exports={startgame:R.startgame,Controllertext:r}},function(t,i,e){var r=e(0),a=r.ctx2,o=r.canHei,s=function(){this.num=50,this.rootx=[],this.headx=[],this.heady=[],this.amp=[],this.beta=0};s.prototype.init=function(){for(var t=0;t<this.num;t++)this.rootx[t]=18*t+30*Math.random(),this.headx[t]=this.rootx[t],this.heady[t]=o-220+50*Math.random(),this.amp[t]=50*Math.random()+60},s.prototype.drawAne=function(){this.beta+=8e-4*r.diffframetime;var t=Math.sin(this.beta);a.save(),a.globalAlpha=.7,a.lineWidth=20,a.lineCap="round",a.strokeStyle="#3b154e";for(var i=0;i<this.num;i++){var e=this.headx[i]+t*this.amp[i];a.beginPath(),a.moveTo(this.rootx[i],o),a.quadraticCurveTo(this.rootx[i],o-100,e,this.heady[i]),a.stroke()}a.restore()},t.exports={Ane:s,anetext:function(){console.log("ane")}()}},function(t,i,e){var r=e(0),a=e(1),o=r.imgUrl,s=r.ctx1,n=r.can1,h=r.canWid,m=r.canHei,u=a.lerpAngle,d=a.lerpDistance,y=function(){this.x=0,this.y=0,this.angle,this.babyTailArr=[],this.babyTailTimer=0,this.babyTailIndex=0,this.babyEyeArr=[],this.babyEyeTimer=0,this.babyEyeIndex=0,this.babyEyeInterval=1e3,this.babyBodyArr=[],this.babyBodyTimer=0,this.babyBodyIndex=0};y.prototype.init=function(){this.x=.5*h-50,this.y=.5*m+50,this.babyBodyIndex=0,this.angle=0;for(var t=0;t<8;t++)this.babyTailArr[t]=new Image,this.babyTailArr[t].src=o+"babyTail"+t+".png";for(var t=0;t<2;t++)this.babyEyeArr[t]=new Image,this.babyEyeArr[t].src=o+"babyEye"+t+".png";for(var t=0;t<20;t++)this.babyBodyArr[t]=new Image,this.babyBodyArr[t].src=o+"babyFade"+t+".png"},y.prototype.drawBaby=function(){var t=r.momOb,i=r.scoreOb;this.x=d(t.x,this.x,.98),this.y=d(t.y,this.y,.99);var e=t.x-this.x,a=t.y-this.y,o=Math.atan2(a,e)+Math.PI;this.angle=u(o,this.angle,.6),this.babyTailTimer+=r.diffframetime,this.babyTailTimer>50&&(this.babyTailIndex=(this.babyTailIndex+1)%8,this.babyTailTimer%=50),this.babyEyeTimer+=r.diffframetime,this.babyEyeTimer>this.babyEyeInterval&&(this.babyEyeIndex=(this.babyEyeIndex+1)%2,this.babyEyeTimer%=this.babyEyeInterval,0==this.babyEyeIndex?this.babyEyeInterval=1500*Math.random()+1500:this.babyEyeInterval=200),this.babyBodyTimer+=r.diffframetime,this.babyBodyTimer>550&&(this.babyBodyIndex+=1,this.babyBodyTimer%=550,i.strength=((20-this.babyBodyIndex)/2).toFixed(0),this.babyBodyIndex>19&&(this.babyBodyIndex=19,i.gameOver=!0,n.style.cursor="pointer")),s.save(),s.translate(this.x,this.y),s.rotate(this.angle);var h=this.babyTailArr[this.babyTailIndex];s.drawImage(h,.5*-h.width+24,.5*-h.height);var m=this.babyBodyArr[this.babyBodyIndex];s.drawImage(m,.5*-m.width,.5*-m.height);var y=this.babyEyeArr[this.babyEyeIndex];s.drawImage(y,.5*-y.width,.5*-y.height),s.restore()},t.exports={Baby:y,babytest:function(){console.log("bady")}()}},function(t,i,e){var r=e(0),a=r.ctx1,o=r.imgUrl,s=r.canWid,n=r.canHei,h=function(){this.num=30,this.dustPic=[],this.x=[],this.y=[],this.amp=[],this.index=[],this.beta=0};h.prototype.init=function(){for(var t=0;t<7;t++)this.dustPic[t]=new Image,this.dustPic[t].src=o+"dust"+t+".png";for(var t=0;t<this.num;t++)this.x[t]=Math.random()*s,this.y[t]=Math.random()*n,this.amp=20+Math.random()+15,this.index[t]=Math.floor(7*Math.random())},h.prototype.drawDust=function(){for(var t=0;t<this.num;t++){var i=this.index[t];a.drawImage(this.dustPic[i],this.x,this.y)}},t.exports={Dust:h,dusttest:function(){console.log("dust")}()}},function(t,i,e){function r(){for(var t=a.fruitOb,i=0;i<t.num;i++)if(!t.alive[i])return t.born(i),!1}var a=e(0),o=a.ctx2,s=a.imgUrl,n=function(){this.num=30,this.x=[],this.y=[],this.size=[],this.type=[],this.speed=[],this.grow=[],this.alive=[],this.orange=new Image,this.blue=new Image};n.prototype.init=function(){this.orange.src=s+"fruit.png",this.blue.src=s+"blue.png";for(var t=0;t<this.num;t++)this.x[t]=this.y[t]=0,this.speed[t]=.015*Math.random()+.005,this.alive[t]=!1,this.grow[t]=!1,this.type[t]=""},n.prototype.drawFruit=function(){for(var t=0;t<this.num;t++)if(this.alive[t]){this.size[t]<=16?(this.grow[t]=!1,this.size[t]+=this.speed[t]*a.diffframetime*.8):(this.grow[t]=!0,this.y[t]-=5*this.speed[t]*a.diffframetime);var i=this.orange;"blue"==this.type[t]&&(i=this.blue),o.drawImage(i,this.x[t]-.5*this.size[t],this.y[t]-.5*this.size[t],this.size[t],this.size[t]),this.y[t]<8&&(this.alive[t]=!1)}},n.prototype.born=function(t){var i=a.aneOb,e=Math.floor(Math.random()*i.num);this.x[t]=i.headx[e],this.y[t]=i.heady[e],this.size[t]=0,this.alive[t]=!0;var r=Math.random();this.type[t]=r<.1?"blue":"orange"},n.prototype.dead=function(t){this.alive[t]=!1},n.prototype.computeFruit=function(){for(var t=a.fruitOb,i=0,e=0;e<t.num;e++)t.alive[e]&&i++;if(i<15)return r(),!1},t.exports={Fruit:n,fruittest:function(){console.log("Fruit")}()}},function(t,i,e){var r=e(0),a=r.ctx1,o=r.canWid,s=r.canHei,n=function(){this.num=5,this.x=[],this.y=[],this.r=[],this.status=[]};n.prototype.init=function(){for(var t=0;t<this.num;t++)this.x[t]=.5*o,this.y[t]=.5*s,this.status[t]=!1,this.r[t]=0},n.prototype.drawHalo=function(){a.save(),a.lineWidth=4;for(var t=0;t<this.num;t++)if(this.status[t]){if(this.r[t]+=.08*r.diffframetime,this.r[t]>100)return this.status[t]=!1,!1;var i=1-this.r[t]/100;a.strokeStyle="rgba(203, 91, 0, "+i+")",a.beginPath(),a.arc(this.x[t],this.y[t],this.r[t],0,2*Math.PI),a.stroke()}a.restore()},n.prototype.born=function(){for(var t=r.babyOb,i=0;i<this.num;i++)if(!this.status[i])return this.status[i]=!0,this.x[i]=t.x,this.y[i]=t.y,this.r[i]=10,!1},t.exports={Halo:n,halotest:function(){console.log("halo")}()}},function(t,i,e){var r=e(0),a=e(1),o=r.ctx1,s=r.imgUrl,n=r.canWid,h=r.canHei,m=a.lerpAngle,u=a.lerpDistance,d=function(){this.x=0,this.y=0,this.angle,this.momTailArr=[],this.momTailTimer=0,this.momTailIndex=0,this.momEyeArr=[],this.momEyeTimer=0,this.momEyeIndex=0,this.momEyeInterval=1e3,this.momOrangeArr=[],this.momBlueArr=[],this.momBodyIndex=0};d.prototype.init=function(){this.x=.5*n,this.y=.5*h,this.angle=0;for(var t=0;t<8;t++)this.momTailArr[t]=new Image,this.momTailArr[t].src=s+"bigTail"+t+".png";for(var t=0;t<2;t++)this.momEyeArr[t]=new Image,this.momEyeArr[t].src=s+"bigEye"+t+".png";for(var t=0;t<8;t++)this.momOrangeArr[t]=new Image,this.momOrangeArr[t].src=s+"bigSwim"+t+".png",this.momBlueArr[t]=new Image,this.momBlueArr[t].src=s+"bigSwimBlue"+t+".png"},d.prototype.drawMom=function(){var t=r.scoreOb;this.x=u(r.mx,this.x,.96),this.y=u(r.my,this.y,.98);var i=r.mx-this.x,e=r.my-this.y,a=Math.atan2(e,i)+Math.PI;this.angle=m(a,this.angle,.6),this.momTailTimer+=r.diffframetime,this.momTailTimer>50&&(this.momTailIndex=(this.momTailIndex+1)%8,this.momTailTimer%=50),this.momEyeTimer+=r.diffframetime,this.momEyeTimer>this.momEyeInterval&&(this.momEyeIndex=(this.momEyeIndex+1)%2,this.momEyeTimer%=this.momEyeInterval,0==this.momEyeIndex?this.momEyeInterval=1500*Math.random()+1500:this.momEyeInterval=200),o.save(),o.translate(this.x,this.y),o.rotate(this.angle);var s=this.momTailArr[this.momTailIndex];o.drawImage(s,.5*-s.width+30,.5*-s.height);var n;n=1!=t.doubleNum?this.momBlueArr[this.momBodyIndex]:this.momOrangeArr[this.momBodyIndex],o.drawImage(n,.5*-n.width,.5*-n.height);var h=this.momEyeArr[this.momEyeIndex];o.drawImage(h,.5*-h.width,.5*-h.height),o.restore()},t.exports={Mom:d,momtest:function(){console.log("mom")}()}},function(t,i,e){var r=e(0),a=r.ctx1,o=r.canWid,s=r.canHei,n=function(){this.fruitNum=0,this.doubleNum=1,this.score=0,this.strength=10,this.alpha=0,this.gameOver=!1};n.prototype.init=function(){this.fruitNum=0,this.doubleNum=1,this.score=0},n.prototype.drawScore=function(){var t=r.scoreOb;a.fillText("num: "+this.fruitNum,.5*o,s-30),a.fillText("double: "+this.doubleNum,.5*o,s-70),a.save(),a.font="30px verdana",a.fillText("SCORE: "+this.score,.5*o,50),a.font="20px verdana",a.fillText("strength: ",650,45),t.strength<=3&&(a.fillStyle="red"),a.fillText(t.strength,710,45),t.gameOver&&(this.alpha+=5e-4*r.diffframetime,this.alpha>1&&(this.alpha=1),a.font="40px verdana",a.shadowBlur=10,a.shadowColor="white",a.fillStyle="rgba(255, 255, 255, "+this.alpha+")",a.fillText("GAME OVER",.5*o,.5*s-25),a.save(),a.font="25px verdana",a.fillText("CLICK TO RESTART",.5*o,.5*s+25),a.restore()),a.restore()},n.prototype.computeScore=function(){var t=r.scoreOb;t.score+=t.fruitNum*t.doubleNum,this.fruitNum=0,this.doubleNum=1},t.exports={Score:n,scoretest:function(){console.log("Score")}()}},function(t,i,e){var r=e(0),a=r.ctx1,o=r.canWid,s=r.canHei,n=function(){this.num=10,this.x=[],this.y=[],this.r=[],this.status=[]};n.prototype.init=function(){for(var t=0;t<this.num;t++)this.x[t]=.5*o,this.y[t]=.5*s,this.status[t]=!1,this.r[t]=0},n.prototype.drawWave=function(){a.save(),a.lineWidth=3;for(var t=0;t<this.num;t++)if(this.status[t]){if(this.r[t]+=.04*r.diffframetime,this.r[t]>60)return this.status[t]=!1,!1;var i=1-this.r[t]/60;a.strokeStyle="rgba(255, 255, 255, "+i+")",a.beginPath(),a.arc(this.x[t],this.y[t],this.r[t],0,2*Math.PI),a.stroke()}a.restore()},n.prototype.born=function(t){for(var i=r.fruitOb,e=0;e<this.num;e++)if(!this.status[e])return this.status[e]=!0,this.x[e]=i.x[t],this.y[e]=i.y[t],this.r[e]=10,!1},t.exports={Wave:n,wavetest:function(){console.log("Wave")}()}},function(t,i){}]);