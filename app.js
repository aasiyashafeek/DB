const express=require("express");
const app=express();
courseList=[
    {
    "courseTitle":"React",
    "courseDescription":"React Course",
    "courseDuration":"4 Months",
    "courseDate":"2022-05-06",
    "courseVenue":"ONLINE"
},
{
    "courseTitle":"Angular",
    "courseDescription":"Angular Course",
    "courseDuration":"4 Months",
    "courseDate":"2022-05-06",
    "courseVenue":"PHYSICAL" 
},
{
    "courseTitle":"Java",
    "courseDescription":"Java Course",
    "courseDuration":"4 Months",
    "courseDate":"2022-05-06",
    "courseVenue":"ONLINE"
},
{
    "courseTitle":"VFX",
    "courseDescription":"VFX Course",
    "courseDuration":"4 Months",
    "courseDate":"2022-05-06",
    "courseVenue":"ONLINE"
},
{
    "courseTitle":".NET",
    "courseDescription":".NET Course",
    "courseDuration":"4 Months",
    "courseDate":"2022-05-06",
    "courseVenue":"ONLINE"
}
]
app.get('/getcourses',function(req,res){
    res.send(courseList);
})
app.post('/addcourse',function(req,res)
{
      console.log(req.body);
      courseList.push(req.body);
      res.send(courseList);
})
app.listen(3000);
console.log("Server running at 3000")
