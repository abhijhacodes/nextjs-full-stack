### Full stack site created with Next JS framework

**Tech stack used:**
- [Next JS](https://nextjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Rest API](https://restfulapi.net/)
- [Material design for bootstrap](https://mdbootstrap.com/docs/b5/react/)
- [Axios](https://axios-http.com/)

You can create, view, update and delete details about your favourite superheroes

### Home page ("/")
Listing all the heroes

![Screenshot from 2022-01-24 21-47-55](https://user-images.githubusercontent.com/77770628/150822264-99f3d38b-2a90-48a5-9f10-5ca5bd636db2.png)


### Adding new hero ("/add")
Adding details of a new hero

![Screenshot from 2022-01-24 21-48-09](https://user-images.githubusercontent.com/77770628/150822768-67afc565-d379-44f5-a88a-1e9329fe48e3.png)


### Unique hero pages ("/id")
Dynamically generated pages for hero details
This page also has option to delete a hero

![Screenshot from 2022-01-24 21-48-25](https://user-images.githubusercontent.com/77770628/150822615-e1be9a37-8a92-4cc3-968d-6f566eea2038.png)


### Updating details of a hero ("/id/edit")
Update all details of a hero

![Screenshot from 2022-01-24 21-48-36](https://user-images.githubusercontent.com/77770628/150823158-886fcd81-5c74-4c40-a99e-60fc5976fd4a.png)


**All API routes:**
```bash
GET - "/api/" (getting all heroes)
GET - "/api/id/" (getting unique hero)
POST - "/api/" (adding a new hero)
PUT - "/api/id/" (updating the hero)
DELETE - "/api/id/" (deleting the hero)
```