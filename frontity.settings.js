const settings = {
  "name": "tutorcast prod",
  "state": {
    "frontity": {
      "url": "https://www.tutorcast.xyz",
      "title": "TutorCast on Frontity",
      "description": " Powered for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Subjects",
              "/showcase/"
            ],
            [
              "Courses",
              "/category/courses/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://raw.githubusercontent.com/Shauky/frontutor/master/build/posts/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
