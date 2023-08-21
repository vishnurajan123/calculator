// display btn content in input box
function display(content){
    result.value+=content
}
function resetResult(){
    result.value=""
}
function expEval(){
    try{
        result.value=eval(result.value)
    }
    catch{
        result.value="Invalid expression !!!"
    }
}
function removeLast(){
    result.value=result.value.slice(0,-1)
}