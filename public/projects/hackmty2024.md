---
title: "HackMTY 2024"
description: "A tool for plant detection and care with leverage technologies such as computer vision and AI to identify and monitor plant health."
image: "/images/hackmty2024.png"
logo: "/logos/hackmty.ico"
date: "2024-09-15"
tags: [OpenCV, Python, React Native, YOLOvX]
featured: false
links:
  github: "https://github.com/jpgtzg/hackmty-2024"
  live: ""
---

In this edition of HackMTY, sponsored by Softtek, they gave us a challenge to create a free project using computer vision with AI. We have developed an advanced farm management app that integrates a trained YOLO object detection model to monitor plant health. The model generates a JSON file, which is processed by a trained OpenAI LLM to provide actionable insights, recommendations, and instructions. Additionally, the app manages IoT devices, such as water pipes, to automate and optimize the irrigation process, ensuring efficient water usage and crop management.

Our app not only manages farm operations and plant health using AI, but it also evaluates the quality of fruits and vegetables when they are ready for packaging. The app can determine which client the product should be sold to based on quality, or provide suggestions for handling products that don’t meet the required standards.

I was mainly responsible for developing the app’s front-end using React Native, and creating the tools for the object detection using Python and the libraries OpenCV and OpenVINO. The models were trained using a custom dataset of images of plants and fruits in different conditions to provide accurate results. Also, I created two Flask API endpoints to manage the object detection results to the app.

