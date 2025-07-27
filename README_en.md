-----

[README](https://github.com/dkssud-dus/portfolio/blob/main/README.md) | [README_en](https://github.com/dkssud-dus/portfolio/blob/main/README_en.md)

<br/>

`#DesignProject` `#Portfolio` `#Solo` `#Responsive`

# **Website Design Project Details:**

### Portfolio

<br/>
<br/>
<br/>

## Table of Contents

1. [Project Overview](#1-Project-Overview)
1. [Core Features](#2-Core-Features)
1. [Page-wise Features](#3-Page-wise-Features)

</br>
</br>
</br>

-----

## 1. Project Overview

### 1.1. Background

In today’s environment where countless designers and developers are active, having a space that clearly communicates one’s identity and showcases work philosophy and strengths is valued. I felt that traditional resumes alone cannot properly express ‘me’, and it’s difficult to sufficiently show growth direction or work intentions.

</br>

The purpose of this project is as follows:

</br>

1. I want to build a site that can organically showcase my work, way of thinking, and growth process as a developer.
1. Beyond a simple portfolio, I want users to intuitively understand my tendencies and capabilities.

</br>
</br>
</br>

### 1.2. Keywords

1. **Windows XP**  
   1.1. Since Windows XP was the first OS I encountered, I designed it to capture that feeling  
   1.2. Especially since I’m studying frontend development as of 2025, I designed it like a website within a website to represent ‘me’

</br>

2. **Readability and Flow**  
   2.1. To allow users to navigate comfortably, information flow and content structure are intuitively arranged

</br>

3. **Learning-centered / Possibility of Change**  
   3.1. Organically incorporates learning so far and future directions

</br>
</br>
</br>

-----

## 2. Core Features

### Multi-language Support

1. This is a feature that considers users from other language regions.
1. In the previous [Studio Ghibli Redesign Project](https://github.com/dkssud-dus/webRedesign-StudioGhibli), I used a method of creating new HTML for each language, which made file management inefficient.
1. Therefore, in this project, I use objects in JS to make internal content management easier.

</br>
</br>
</br>

### Filter Function

1. Based on values entered in objects, it shows values identical to button text.
1. Filters are divided into project categories and project technologies used, and clicking buttons shows corresponding items.

</br>
</br>
</br>

### Modal Popup

1. When clicking on projects, a modal pops up to minimize page navigation and enhance user convenience.

</br>
</br>
</br>

-----

## 3. Page-wise Features

### 3.1. [Main Page](https://dkssud-dus.github.io/portfolio/)

-----

### 3.1.1. Header + Main Visual

![1](https://github.com/user-attachments/assets/2d0c70ca-2cef-468e-8a35-c576f72d80e5)

<br/>

#### Purpose

1. To imprint ‘me’ on users.
1. The `Header` stays fixed so users can always perform functions like language change or resume download.

<br/>

#### Implementation Summary

1. The `Header` performs link navigation functions for `Git Hub`, `Linked In`, and `MailTo`.
1. It also enables language change functionality (English, Korean, Japanese) and resume download. (Not uploaded as of July 12, 2025)
1. Sub-page navigation is enabled through new window opening.
1. The motto uses text typing appearance functionality.

<br/>
<br/>
<br/>

### 3.1.2. SKill

![2](https://github.com/user-attachments/assets/7d59de4d-813c-4fbc-9b81-2517f98fd297)

<br/>

#### Purpose

1. To allow users to see implementable skills at a glance.

<br/>

#### Implementation Summary

1. Using tab structure to categorize and view languages and tools & technologies.
1. When hovering over icons, descriptive explanations appear as tooltips.

<br/>
<br/>
<br/>

### 3.1.3. Works & Study & About Me & Thank you for Reading!

![3](https://github.com/user-attachments/assets/0daa6256-0260-43bd-84ec-35f7fbda3843)

<br/>

#### Purpose

1. To allow users to intuitively recognize information.

<br/>

#### Implementation Summary

1. Works performs sub-page link navigation functionality.
1. Study performs link navigation functionality to personal Notion page where study records are kept.
1. About Me only performs listing of career/certifications/education, etc.
1. Thank you for Reading! performs personal information and `Mailto` functionality.

<br/>
<br/>
<br/>

-----

### 3.2. Sub Pages (1)

-----

### 3.2.1. [Works](https://dkssud-dus.github.io/portfolio/pages/works.html)

![4](https://github.com/user-attachments/assets/a9815b2f-30ed-4ac2-bb60-ba8140e09c51)

#### Purpose

1. To allow users to recognize information more intuitively and use it conveniently.

<br/>

#### Implementation Summary

1. Projects can be checked using filtering functionality by category and tools & technologies.
1. Projects are arranged in 3 columns but arranged in 1 column on responsive design.  
   2.1. Simple tags appear when hovering over projects.  
   2.2. Modal pops up when clicking on projects.
1. Modal can be categorized with project abstract on the left and project preview on the right.  
   3.1. In project abstract, I created a button to open a demo page with specified size in new window view.  
   3.2. Project abstract mainly describes study content in before/after format, or project background and change content.  
   3.3. In project preview, using `swiper`, project results can be checked with `GIF`, and technology icons used appear at the bottom.  
   3.4. At the bottom of project preview, buttons to navigate to `Project Brief`, `Design Brief`, and `Github` are placed so project details can be known anytime.

</br>
</br>
</br>

-----
