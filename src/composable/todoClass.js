class Todo {
    static runningId=1
    constructor(Name,description){
        this.id = Todo.runningId
        Todo.runningId = Todo.runningId+1
        this.Name = Name
        this.description = description
        this.doneStatus = false 

    }
    getTodo (){
        return {id:this.id, description:this.description, status:this.doneStatus}
    }

    setDescription (description){
        this.description = description
    }

    setdoneStatus (){
        this.doneStatus = true  
    }
}

export default Todo 