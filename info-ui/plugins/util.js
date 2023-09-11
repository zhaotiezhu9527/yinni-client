export function changetime(seconds) {
  let m=this;
  let str=''              
  let date = new Date(seconds);  
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  if(month < 10){
    month = '0' + month
  }
  let day = date.getDate();
  if(day < 10){
    day = '0' + day
  }
  str=  year + '-' + month + '-' + day + ' '; 
  return str
}