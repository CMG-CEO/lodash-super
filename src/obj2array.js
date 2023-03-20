/**
 * obj ={
    label1:'11',
    label2:'22'
}
  
 * arr =[
    {key:'label1',value:'11',},
    {key:'label2',value:'22',}
]
 * 
 */
export default obj2array = (obj, key = "key", value = "value") => {
  const array = [];
  Object.keys(obj).forEach((ikey) => {
    const ivalue = obj[ikey];
    array.push({
      [key]: ikey,
      [value]: ivalue,
    });
  });
  return array;
};
