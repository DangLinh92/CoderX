var btn = document.getElementById("task_header_btnAdd");
btn.addEventListener("click",function(){
            var taskName = document.getElementById("task_header_input").value;
            if(taskName){
                var taskItem = document.createElement("li");
                taskItem.setAttribute("class","task_item");
                var inputChecked = document.createElement("input");
                inputChecked.setAttribute("type","checkbox");
                inputChecked.setAttribute("class","task_item--checked");
                var taskItemName = document.createElement("span");
                taskItemName.setAttribute("class","task_item_name");
                taskItemName.textContent = taskName;
                var iconDelete = document.createElement("i");
                iconDelete.setAttribute("class", "fas fa-trash-alt task_item--delete");
        
                taskItem.appendChild(inputChecked);
                taskItem.appendChild(taskItemName);
                taskItem.appendChild(iconDelete);
        
                var tasks = document.getElementById("tasks");
                tasks.appendChild(taskItem);
            }
        });