# IETI LAB 8

**Test user**

username: prueba, prueba123

(Para añadir una tarea el nombre de usuario debe estar registrado.)

## FRONTEND

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://taskplannerieti2021.herokuapp.com/users)

## BACKEND

Deployed to heroky using heroku.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://task-ieti-hfs.herokuapp.com/)


## ENDPOINTS

In order to get the authorization token you need to do a post to the following endpoint with the body example.


POST https://task-ieti-hfs.herokuapp.com/user/login

**Body Example**

    {
        "username":"prueba@mail.com",
        "password":"prueba123"
    }

### Tasks

Authorization header is required.

GET https://task-ieti-hfs.herokuapp.com/api

POST https://task-ieti-hfs.herokuapp.com/api

**Body Example**

    {
        "description":"example",
        "name": "prueba",
        "email": "prueba@mail.com",
        "status": "ready",
        "dueDate" :"09/09/2020"
    }

....



