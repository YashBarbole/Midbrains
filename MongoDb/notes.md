














we hit request , it does auth checks and hits the db and gets the response 
express has complete access of db it decides what to show to user 
db allow 4 primitives

Create
read
update
delete
CRUD ops

mongodb is schemaLess
but in mongoose 
first create schema then add

that means its loosly tight


1.to create

const UserSchema:........

const User= mongoose.model(...)

User.create({...})


2.to read

User.findByid(...);
Uset.findone({})