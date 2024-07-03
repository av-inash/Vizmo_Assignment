To start project : npm run dev

===========================================================Api===================================================================

1. signup: http://localhost:4006/api/v1/users/register

example to check in postman:
{
"name":"Avinash105",
"email":"avinash105@gmail.com",
"password":"Avinash@123"
}
// use another email because i set the email property unique

2. login:http://localhost:4006/api/v1/users/login

example:
{
"email":"avinash105@gmail.com",
"password":"Avinash@123"
}

// after login you will get accessToken
//and a message "login successfully"

3. create a blog: http://localhost:4006/api/v1/blog/create-blog

example:

{
"title":"doctor",
"content":"best hospital in city",
"images":"xyz"
}

// in this i use image as a string only i can also use here 1st upload to cloudinary and get image url and store in database

4. Get All Blogs : http://localhost:4006/api/v1/blog/get-all-blogs

5. Get Blog by id : http://localhost:4006/api/v1/blog/get-blog-by-id

// in this put blog id in params then it look like (http://localhost:4006/api/v1/blog/get-blog-by-id?id=66846fb5f18b4c8e62c84371)

6. update a particular blog(authorize user only ): http://localhost:4006/api/v1/blog/update-blog?id=66846fb5f18b4c8e62c84371

example ; if any one want to update title of blog then :
{
"title":"Hollywood"
}
// put this in body and hit api

7. get blog by filter( filter by "title"or filter by "author"): http://localhost:4006/api/v1/blog/get-blog-by-filter

// put filter choice in params

8. delete a blog(authorize user only ): http://localhost:4006/api/v1/blog/delete-blog?id=66846fb5f18b4c8e62c84371

// put blog id in params

==============================Thank you======================================================================
