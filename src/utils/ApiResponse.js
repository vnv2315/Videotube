class ApiResponse{
    constructor(statusCode, data, message="Success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode<400
    }
}

export { ApiResponse };



// 200	✅ OK	Everything went fine (login, fetch, etc.)
// 201	✅ Created	Something was successfully created (user, post)
// 400	❌ Bad Request	Missing info / wrong data (e.g., email not given)
// 401	🔒 Unauthorized	Not logged in or no token provided
// 403	⛔ Forbidden	Logged in but not allowed to do the action
// 404	📭 Not Found	Resource (like user or post) doesn’t exist
// 500	💥 Internal Server Error	Server broke / unexpected crash