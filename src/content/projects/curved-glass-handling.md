---
title: "On the planning of handling large arbitrarily curved glass sheets"
summary: "Planning suction-cup layouts that lift arbitrarily curved glass with minimal stress."
year: "2020–2022"
type: "Thesis"


card:
  src: "/images/Mphil/Card.png"
  alt: "D-Shape Sync 2x4 printer"
cover:
  src: "/images/Mphil/Cover.png"
  alt: "D-Shape Sync 2x4 printer"

facts:
  - label: "Type"
    value: "MPhil thesis, Integrative Systems and Design"
  - label: "School"
    value: "The Hong Kong University of Science and Technology"
  - label: "Location"
    value: "Hong Kong"
  - label: "Supervisors"
    value: "Prof. Ajay Joneja (supervisor) · Prof. Pedro Sander (co-supervisor) "
  - label: "Tools"
    value: "SolidWorks · Ansys · Python"
links:
  - label: "Thesis (PDF)"
    href: "https://repository.hkust.edu.hk/ir/bitstream/1783.1-134870/1/991013142458003412.pdf"

figures:
  - value: "90 Minutes "
    label: "Simulation Runtime Per Sheet"
  - value: "4"
    label: "Factor of Safety"





gallery:
  - title: "Pre-processing"
    text: "Sheet geometry parameterisation, Boundary Conditions, Minimum Edge Bounding box and Stress Calculation "


    images:
        - src: "/images/Mphil/pre/bunnt_2_planes.jpg"
          caption: "Minumum Edge bounding box Calculation - Standord Bunny"

        - src: "/images/Mphil/pre/sheet_full_bb.jpg"
          caption: "Minumum Edge bounding box Calculation - Glass Sheet"
     

        - src: "/images/Mphil/pre/bb_sheet.jpg"
          caption: "Boundary Conditions"
     
        - src: "/images/Mphil/pre/max_stress_point_1.jpg"
          caption: "Stress Calculation and Max stress point "
     
     


  - title: "Optimisation"
    text: " Using modified k-means to calculate initial candidates and using heuristic algorithms to find optimal lifting configurations with 2NN movement for run-time optimisation"


    images:

        - src: "/images/Mphil/opt/para_cups_02.jpg"
          caption: "10*10 grid to precompute stress and find initial optimal position"

        - src: "/images/Mphil/opt/c_space.jpg"
          caption: "Stress Behavours when we move a cup to different nearby position"

        - src: "/images/Mphil/opt/orig_k_means_stress_points.jpg"
          caption: "Initial Candidates calculation using modified llyoid's algorithm"
     

        - src: "/images/Mphil/opt/orig_k_means_stress_b.jpg"
          caption: "Initial Candidates Stress calculation using modified llyoid's algorithm"


  - title: "Results (for a single sheet)"
    text: " Initial candidates selection,suction cup movement to reduce stress"


    images:

        - src: "/images/Mphil/results/sheet_6/sheet_6.jpg"
          caption: "Original Sheet"

        - src: "/images/Mphil/results/sheet_6/0.jpg"
          caption: "Iteration 1 - Original cancidates in blue, optimal point to move towards in orange"
          
        - src: "/images/Mphil/results/sheet_6/1.jpg"
          caption: "Iteration 2 - current canciposition in black, optimal point to move towards in orange"
 
        - src: "/images/Mphil/results/sheet_6/2.jpg"
          caption: "Iteration 3 - current canciposition in black, optimal point to move towards in orange"
          
        - src: "/images/Mphil/results/sheet_6/3.jpg"
          caption: "Iteration 4 - current canciposition in black, optimal point to move towards in orange"

        - src: "/images/Mphil/results/sheet_6/4.jpg"
          caption: "Iteration 5 - current canciposition in black, optimal point to move towards in orange"
          
        - src: "/images/Mphil/results/sheet_6/5.jpg"
          caption: "Iteration 6 - current canciposition in black, optimal point to move towards in orange"

        - src: "/images/Mphil/results/sheet_6/sheet_cong_6.jpg"
          caption: "Final Iteration 28 - original position in black, final optimised position in black. Stress optimisation -  3.4 MPa to 1.745 MPa "
            
---

## Overview

How should suction cups be placed to lift a large, arbitrarily curved glass sheet safely? \
This thesis developed methods to plan those layouts while keeping stresses in the glass low.

## Approach

Stresses were calculated and verified with finite element methods in SolidWorks and Ansys. Optimisation algorithms, including cuckoo search, adaptive k-means and a modified Lloyd's algorithm, were implemented in Python to improve lifting efficiency and reduce run time.