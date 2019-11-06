---
layout:     post
title:      Generalized Seismic Phase Detection with Deep Learning
subtitle:   Paper Review (Tectonophysics)
date:       2019-10-28
author:     Tian Feng
header-img: img/tohoku-earthquake-damage.jpg
catalog: true
tags:
    - Tohoku Earthquake
    - Paper Review
    - offshore seismicity

---


***
> Author: Zachary E. Ross, Men-Andrin Meier, Egill Hauksson, Thomas H. Heaton

## Abstract

> To optimally monitor earthquake-generating processes, seismologists have sought to lower detection sensitivities ever since instrumental seismic networks were started about a century ago. Recently, it has become possible to search continuous waveform archives for replicas of previously recorded events (template matching), which has led to at least an order of magnitude increase in the number of detected earthquakes and greatly sharpened our view of geological structures. Earthquake catalogs produced in this fashion, however, are heavily biased in that they are com- pletely blind to events for which no templates are available, such as in previously quiet regions or for very large magnitude events. Here we show that with deep learning we can overcome such biases without sacrificing detection sensitivity. We trained a convolutional neural network (ConvNet) on the vast hand-labeled data archives of the Southern California Seismic Network to detect seismic body wave phases. We show that the ConvNet is extremely sensitive and robust in detecting phases, even when masked by high background noise, and when the ConvNet is applied to new data that is not represented in the training set (in particular, very large magnitude events). This generalized phase detection (GPD) framework will significantly improve earthquake monitoring and catalogs, which form the underlying basis for a wide range of basic and applied seismological research.
1



<img src="https://d3i71xaburhd42.cloudfront.net/e178d94a0601f0f395cf6d81b884a238331fa869/3-Figure1-1.png" width="80%"  alt="hello" />

<img src="https://d3i71xaburhd42.cloudfront.net/e178d94a0601f0f395cf6d81b884a238331fa869/5-Figure2-1.png" width="80%"  alt="hello" />

<img src="https://d3i71xaburhd42.cloudfront.net/e178d94a0601f0f395cf6d81b884a238331fa869/6-Figure3-1.png" width="80%"  alt="hello" />

<img src="https://d3i71xaburhd42.cloudfront.net/e178d94a0601f0f395cf6d81b884a238331fa869/7-Figure4-1.png" width="80%"  alt="hello" />

<img src="https://d3i71xaburhd42.cloudfront.net/e178d94a0601f0f395cf6d81b884a238331fa869/8-Figure5-1.png" width="80%"  alt="hello" />
