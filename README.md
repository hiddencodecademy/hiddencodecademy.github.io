# Hidden Codecademy Courses
----

Here you will find a collection of hidden courses on Codecademy.
https://hiddencodecademy.github.io/

### Contributions

You can contribute to this project by adding more courses to our current list.
```
 All the courses and topics should be added to the data/courses.json file
```

##### How to add a topic
- Add a comma at the end of the latest topic object
- Add a new object like this:
```
"ai": {
    "name": "Artifial Intelligence",
    "slug": "artificial-intelligence",
    "category": "pro",
    "description": "Simple description",
    "links": [
      {
        "url": "http://the-link.com",
        "name": "Name of the course"
      }
    ]
}
```

![](https://i.gyazo.com/fd1f89102b19dde05a3cd0b83abed655.gif)

##### How to add a course to a topic
- Add a comma at the end of the latest course object
- Add a new object like this:
```
{
    "url": "http://the-other-link.com",
    "name": "Name of the other course"
}
```

![](https://i.gyazo.com/e408696ccf53187400307e0fbcdea663.gif)


