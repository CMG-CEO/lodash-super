/**
 * arr =[
    {key:'label1',value:'11',},
    {key:'label2',value:'22',}
]

obj ={
    label1:'11',
    label2:'22'
}
 * 
 */
function array2obj(array, key = "key", value = "value") {
  const object = {};

  for (let index = 0; index < array.length; index += 1) {
    const item = array[index];
    object[item[key]] = item[value];
  }
  return object;
}
export default array2obj;
