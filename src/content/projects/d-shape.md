---
title: "Printer Structures and Slicing Software for Selective Cement Activation for LFAM"
summary: "Lightweight modular trusses and print control for the D-Shape Sync 2x4 large-scale 3D printer."
year: "2025"
type: "Industry"

card:
  src: "/images/D-shape/D-shape_Card.png"
  alt: "D-Shape Sync 2x4 printer"
cover:
  src: "/images/D-shape/Cover_01 .png"
  alt: "D-Shape Sync 2x4 printer"
  credit:
    - "Original Model Photo: D-shape Ltd. Hong Kong"

    
facts:
  - label: "Role"
    value: "Software Engineer"
  - label: "Company"
    value: ["D-Shape Limited", "Research Talent Hub @ HKSTP"]
  - label: "Location"
    value: "Hong Kong"
  - label: "Period"
    value: "April – July 2025"
  - label: "Tools"
    value: "Pyhton, ThreeJS, Solidworks"


    
gallery:
  


  - title: "Voxelisation"
    text: " Voxelisation of the target geometry to optimise the run time and calculate the selection points for the nozzle for the SCA method"


    images:

        - src: "/images/D-shape/voxelisation/unnamed.png"
          caption: "Original geometry : 1499mm * 1499mm * 1178mm "
          credit:
           - "Original Model Photo: D-shape Ltd. Hong Kong"

        - src: "/images/D-shape/voxelisation/unnamed (1).png"
          caption: "Voxel Size : 500mm "


        - src: "/images/D-shape/voxelisation/unnamed (2).png"
          caption: "Voxel Size : 250mm "



        - src: "/images/D-shape/voxelisation/unnamed (3).png"
          caption: "Voxel Size : 100mm "



        - src: "/images/D-shape/voxelisation/unnamed (4).png"
          caption: "Voxel Size : 50mm "



        - src: "/images/D-shape/voxelisation/unnamed (5).png"
          caption: "Voxel Size : 25mm "

        - src: "/images/D-shape/voxelisation/unnamed (6).png"
          caption: "Voxel Size : 10mm "


          
        - src: "/images/D-shape/voxelisation/unnamed (7).png"
          caption: "Voxel Size : 5mm "

        - src: "/images/D-shape/voxelisation/unnamed (8).png"
          caption: "Voxel Size : 5mm - Detailed Image"

        - src: "/images/D-shape/voxelisation/unnamed (9).png"
          caption: "Voxel Size : 5mm - Point cloud for the SCA method and nozzle Activation "




  - title: "Web Based Slicer "
    text: " an interactive web-based 3D slicer utilizing Three.js, featuring physics-driven collision detection, automated build-plate packing algorithms, and intuitive manipulation controls. "


    images:

        - src: "/images/D-shape/slicer/unnamed.png"
          caption: "Basic GUI for the slicer"

        - src: "/images/D-shape/slicer/unnamed (1).png"
          caption: "Object Collision Detection with boundary box "


        - src: "/images/D-shape/slicer/unnamed (7).png"
          caption: "Object Optimal Layout for different beds "



        - src: "/images/D-shape/slicer/unnamed (4).png"
          caption: "Printing Process Preview - 1 "

        - src: "/images/D-shape/slicer/unnamed (5).png"
          caption: "Printing Process Preview - 2 "



  - title: "Hardware Conceptualisation "
    text: " Conceptualisation of the hardware and mechanisms as well as needed sensors "


    images:

        - src: "/images/D-shape/slicer/unnamed (8).png"
          caption: "Rough CAD of the printer - 1 "
          credit:
           - "Photo: D-shape Ltd. Hong Kong"          

        - src: "/images/D-shape/slicer/unnamed (9).png"
          caption: "Rough CAD of the printer - 2 "
          credit:
           - "Photo: D-shape Ltd. Hong Kong"
---
## Overview

Development and optimisation of the D-Shape Sync 2x4 printer's slicing software and consultatoin for structural systems behind its Selective Cement Activation (SCA) process.

## Approach

· Engineered an interactive web-based 3D slicer utilizing Three.js, featuring physics-driven collision detection, automated build-plate packing algorithms, and intuitive manipulation controls.

· Engineered a high-performance Python voxelization pipeline optimized for rapid processing of complex target geometries.

· Converted complex CAD assemblies into layer-wise binary voxel matrices to drive precise printhead nozzle activation for Selective Cement Activation (SCA) manufacturing.

## Results

Streamlined large-scale geometry processing from multi-part CAD assemblies into precise, layer-specific binary voxel arrays, reducing memory overhead and enabling seamless printhead nozzle activation for SCA manufacturing.