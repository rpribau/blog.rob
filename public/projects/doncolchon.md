---
title: "SPiD - Don Colchon"
description: "A friendly ToolKit to manage inventory using Machine Learning algorithms to predict the amount of mattresses that will be sold during time."
image: "/images/6.png"
logo: "/logos/tec.ico"
date: "2024-03-08"
tags: [Django, Jupyter Notebook, Keras, MySQL, Next.js, Scikit-learn]
featured: false
links:
  github: "https://github.com/rpribau/TC2004-Reto-Front"
---

During my class of Data Science Analysis, I had the opportunity to work with a local mattress store called Don Colchon. The challenge was to create predictive models to help the store to manage the inventory. The main goal was to predict the amount of mattresses that will be sold during time.

Even if the main solution was to create multiple Machine Learning models, I decided to create a friendly ToolKit to help the store to manage the inventory. The ToolKit is called SPiD (Smart Predictive Inventory Dashboard) and it's a web app that shows the amount of mattresses that will be sold during time. I had this aproach by putting my self as a store manager and thinking that not every store manager has the knowledge to use Machine Learning models, so I created a friendly UI to help them to understand the data.

The ToolKit was created using Next.js for the front-end and Python for the back-end. The back-end was powered by Django REST-API by asking to a Docker container of MySQL with the information from the Machine Learning models. The Machine Learning models were created and trained using Scikit-Learn and Keras libraies.

**Due to Due to Don Colchon policy, I'm unable to share the full Jupyter Notebook of the models used but some of it can be seen in the video below.**