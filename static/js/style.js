
document.addEventListener('DOMContentLoaded', function() {
    listEventClickMenu()
    handleOpenMenu()
 });
function listEventClickMenu(){
    var options = document.querySelectorAll('.ocm-dropdown-arrow')
   options.forEach(item => {
       item.addEventListener('click',function(e){
           
           options.forEach(i =>{
               
                if(i != item){

                    i.parentElement.classList.add('option-disable')
                }
                else{
                    
                    if(item.parentElement.classList.contains('option-disable')){
                        item.parentElement.classList.remove('option-disable')
                    }
                    else item.parentElement.classList.add('option-disable')
                }
           })
        //    console.log(subnav.classList.contains('subnav-disable'))
            
       })
   })
}
function handleOpenMenu(){
    document.getElementById("open-menu").addEventListener("click", function(e){
        var container = document.getElementById("container")
        if(!container.classList.contains('marterial-open')){
            document.getElementById("container").classList.add('marterial-open');
            document.getElementById("menu").classList.remove('menu-disable');
        }
        else{
            document.getElementById("container").classList.remove('marterial-open');
            document.getElementById("menu").classList.add('menu-disable');
        }
    });
    document.getElementById("close-menu").addEventListener("click", function(e){
        document.getElementById("container").classList.remove('marterial-open');
        document.getElementById("menu").classList.add('menu-disable');
    });
}