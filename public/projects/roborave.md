---
title: "RoboRAVE Monterrey 2023"
description: "I compited in the FireFighting category with a robot that could put out candles that are at different heights and blocked by walls."
image: "/images/4.png"
logo: "/logos/tec.ico"
date: "2023-08-10"
tags: [Arduino, Python, ROS-Noetic, YOLOvX]
featured: false
links:
  
---

One of the biggest robotics competitions in the world, RoboRAVE International, is coming to Monterrey, Mexico and a couple friends invited me to join them in this amazing experience. During the summer break, we started to build a robot that could compete in the FireFighting category. The robot was able to detect a candle and extinguish it. The robot was able to detect the candle using a camera and a NVIDIA Jetson Nano. I was in charge of the software communication between the camera, an Arduino that controlled the motors and a fan, and the Jetson Nano that processed the image using a YOLO model and sent the information to the Arduino. All this was made by using ROS (Robot Operating System) and was my first time using it.

Unfortunately, the robot wasn't performing as expected during the competition due to the amount of computer resources needed to run the YOLO model and the communication between the camera and the Jetson Nano. We were able to detect the candle, but the robot wasn't able to extinguish it. I personally learned a lot from this experience and even ignited again my passion to robotics. I never thought that I would be back after 3 years on VOLTEC Robotics 6647.

