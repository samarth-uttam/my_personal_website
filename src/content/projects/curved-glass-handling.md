---
title: "Robotic Handling of Large Curved Glass Sheets"
summary: "Planning suction-cup layouts that lift arbitrarily curved glass with minimal stress."
year: "2020–2022"
type: "Thesis"
cover:
  alt: "Curved glass sheet with suction cup layout"
facts:
  - label: "Type"
    value: "MPhil thesis, Integrative Systems and Design"
  - label: "School"
    value: "The Hong Kong University of Science and Technology"
  - label: "Location"
    value: "Hong Kong"
  - label: "Supervisor"
    value: "Prof. Ajay Joneja"
  - label: "Tools"
    value: "SolidWorks · Ansys · Python"
links:
  - label: "Thesis (PDF)"
    href: "/thesis-mphil.pdf"
gallery:
  - title: "Optimisation"
    text: "Suction-cup layouts found by clustering and heuristic search."
    images:
      - caption: "Initial layout"
      - caption: "Optimised layout"
---

## Overview

How should suction cups be placed to lift a large, arbitrarily curved glass sheet safely? This thesis developed methods to plan those layouts while keeping stresses in the glass low.

## Approach

Stresses were calculated and verified with finite element methods in SolidWorks and Ansys. Optimisation algorithms, including cuckoo search, adaptive k-means and a modified Lloyd's algorithm, were implemented in Python to improve lifting efficiency and reduce run time.