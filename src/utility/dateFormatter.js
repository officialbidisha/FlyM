export const dateFormatter = (date) =>{
   let arr = date.split('-');
   return arr[2]+'/'+arr[1]+'/'+arr[0];
}