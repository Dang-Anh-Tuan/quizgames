const preHandleGetIDAnswer = function(id){
  return id.replace(/a-/g, '');
}

export default preHandleGetIDAnswer;