# 20-20-Website
# Author: Dylan Hayton-Ruffner

# Synopsis:
  This repository contains the source files for my bands webpage. The idea behind the site is to  provide
  a place where the group can consolidate its internet presence currently spread between Facebook, Instagram,
  and Youtube. The site will host video, image, and informational content. It is currently under local
  development and not yet hosted online.
  
# Downloading the and Viewing the Project:
  Download the "Main" .html .css and .js files and put in the same directory, add the files from the image assests
  file to the directory. Open the html document with Google Chrome to view.
 
# Notes on the implementation:
  Although the website is multi-page, only one html document is used. Instead, off linking multiple pages view <a>
  elements, the site uses javascript to dynamically create each page's content as needed. This decreases the number 
  of files the site requires. At a high level, the html and css documents provide the base elements and style for
  the home page. From there Main.js specifies how to alter the content to shift from page to page. A typical shift
  involes using either the leaveHome() or returnToHome() function to move the homepage's content in or out and, in
  the case of leaveHome(), deletes the current pages elements. If entering a new page a specific to_pagename() 
  function creates the neccesary elements and styles them. 

# Status of the Project:
  The home and gallery pages (with place holder photots) are finished. The schedule page is currently in progress.
  Links to 3rd part sites are live (FB, Youtube, ect).
  
# Third Party Libraries:
  This repository uses the ScrollReveal.js
  
  # Liscence
    The MIT License

    Copyright 2016 Julian Lloyd

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
    documentation files (the "Software"), to deal in the Software without restriction, including without 
    limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
    of the Software, and to permit persons to whom the Software is furnished to do so, subject to the 
    following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial 
    portions of the Software.
 
