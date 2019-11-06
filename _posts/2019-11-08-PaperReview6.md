---
layout:     post
title:      Generalized Seismic Phase Detection with Deep Learning
subtitle:   Paper Review (Bulletin of the Seismological Society of America)
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

> To optimally monitor earthquake-generating processes, seismologists have sought to lower detection sensitivities ever since instrumental seismic networks were started about a century ago. Recently, it has become possible to search continuous waveform archives for replicas of previously recorded events (template matching), which has led to at least an order of magnitude increase in the number of detected earthquakes and greatly sharpened our view of geological structures. Earthquake catalogs produced in this fashion, however, are heavily biased in that they are completely blind to events for which no templates are available, such as in previously quiet regions or for very large magnitude events. Here we show that with deep learning we can overcome such biases without sacrificing detection sensitivity. We trained a `convolutional neural network (ConvNet)` on the vast hand-labeled data archives of the Southern California Seismic Network to detect seismic body wave phases. We show that the ConvNet is extremely sensitive and robust in detecting phases, even when masked by high background noise, and when the ConvNet is applied to new data that is not represented in the training set (in particular, very large magnitude events). This `generalized phase detection (GPD) framework` will significantly improve earthquake monitoring and catalogs, which form the underlying basis for a wide range of basic and applied seismological research.

## Key Points

## Introduction
* The magnitude of completeness—the magnitude above which all events have been detected by a network—for southern California now is ~M1.8 in most areas.
* Template matching: move-out pattern as the template event across the network, blind to what they have not seen before -> catalogs  inherently incomplete.
* Generalized phase detection (GPD) is capable of reliably detecting P- and S-waves of very small to very large earthquakes without the need for explicit waveform templates.

## Methods
### Neural Networks and Deep Learning
* The first layer of a FCNN acts on "features", which are attributes of the raw data, such as peak amplitudes and frequency measures
* Convolutional neural networks (ConvNets), on the other hand, typically combine a FCNN with a learnable and hierarchical feature extraction system that is trained to extract the relevant information directly from the raw data.
* The resulting output of the last layer is concatenated to a vector and is used as input to a FCNN in order to perform regression or classification tasks.
* Due to the convolutional nature of the filtering operations and the regular decimation, a ConvNet can detect a target object (e.g. a cat or a P-wave) irrespective of where it is located in an image or seismogram, or the size within the image. ConvNets

<img src="https://d3i71xaburhd42.cloudfront.net/e178d94a0601f0f395cf6d81b884a238331fa869/3-Figure1-1.png" width="80%"  alt="hello" />
> Figure 1: (a) Illustration of a convolutional network for generalized phase detection and (b) applica- tion example. By applying a series of filtering and decimation operations, features are automatically extracted and used to classify data windows. (b) Example usage of GPD to continuous data. Probabil- ity time series for P- (red) and S-waves (blue) are used as characteristic functions for phase detection. `Detection windows with probability greater than 0.98 are colored by the respective phase type`.


### A ConvNet for Generalized Seismic Phase Detection


<img src="https://d3i71xaburhd42.cloudfront.net/e178d94a0601f0f395cf6d81b884a238331fa869/5-Figure2-1.png" width="80%"  alt="hello" />

<img src="https://d3i71xaburhd42.cloudfront.net/e178d94a0601f0f395cf6d81b884a238331fa869/6-Figure3-1.png" width="80%"  alt="hello" />

<img src="https://d3i71xaburhd42.cloudfront.net/e178d94a0601f0f395cf6d81b884a238331fa869/7-Figure4-1.png" width="80%"  alt="hello" />

<img src="https://d3i71xaburhd42.cloudfront.net/e178d94a0601f0f395cf6d81b884a238331fa869/8-Figure5-1.png" width="80%"  alt="hello" />
