class ApiError extends Error{
    constructor( statusCode, message="Something went wrong", errors=[], stack="" ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false;
        this.errors=errors

        if (stack) {
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
            // This tells JS to generate a stack trace automatically, 
            // starting from where this class was called.
        }
    }
}

export {ApiError}



// {
//     "success": true,
//     "data": {...}
// }


// {
//     "success": false,
//     "message": "User not found"
//     "errors": []
//     "stack": ""
//}



// Example usage:

// throw new ApiError(
//     400,
//     "Invalid input",
//     [
//       { field: "email", message: "Email is not valid" },
//       { field: "username", message: "Username already taken" }
//     ]
// )


// {
//     "statusCode": 400,
//     "message": "Invalid input",
//     "success": false,
//     "errors": [
//       { "field": "email", "message": "Email is not valid" },
//       { "field": "username", "message": "Username already taken" }
//     ]
// }
  
  