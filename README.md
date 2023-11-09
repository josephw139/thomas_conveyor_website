# thomas_conveyor_website

## To Do:

### SSL 
Enable SSL on http://www.thomasconveyor.com/

### Beta URL Replacement
Replace all instances of beta url across all files

In VSCode, Edit > Replace in Files (in this order)
* https://tc.dev2.barn3s.com/beta > https://www.thomasconveyor.com/
* https://tc.dev2.barn3s.com > https://www.thomasconveyor.com/


### Forms
Forms connected to email - comments above each form ```<!-- FORM HERE -->```
* Home page
* Contact page
* Support page > Downloads

### Products
Online Catalog product dropdowns currently have screencap placeholders.<br />
Each image is marked with ```<!-- REPLACE IMAGE -->``` where the actual products should display

### Blog images
CSS is applied to make the images rounded.

* Blog posts are under the blogs folder. The blog's image is right below the comment <br />
```<!-- BLOG IMAGE HERE -->```
* On the blog page, each gray image is marked with ```<!-- REPLACE IMAGE -->```

## Documentation

### File Locations

* index.php - home page
* /conveyor/ folder - Conveyor subpages
* /blogs/ folder - blog posts

* wp-admin - Files here shouldn't be relevant

* wp-content/themes/catchylabs-elementor-theme/style.css - CSS
* wp-content/themes/catchylabs-elementor-theme/assets/css/ - Other CSS files
* wp-content/themes/catchylabs-elementor-theme/assets/css/theme.css - Empty CSS file to add custom styling

* wp-content/themes/catchylabs-elementor-theme/assets/js/areareps.js - JSON variable of US & Canada Reps for the Contact Page
* wp-content/themes/catchylabs-elementor-theme/assets/js/theme.js - Javascript functions. The Area Rep function beings below the comment ```// AREA REP```



### Create a new blog post
* Duplicate a blog post file, go to the ```<main>``` tag to replace text & images appropriately.

* On the Blog page, each post is inside an ```<article>``` tag. Copy paste the article and modify as needed.

