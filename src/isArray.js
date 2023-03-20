export default isArray = (arr)=>{
    return Object.prototype.toString(arr) === '[Object Array]' 
}