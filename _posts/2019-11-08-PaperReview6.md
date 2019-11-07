---
layout:     post
title:      Generalized Seismic Phase Detection with Deep Learning
subtitle:   Paper Review (Bulletin of the Seismological Society of America)
date:       2019-11-06
author:     Tian Feng
header-img: img/ai.jpeg
catalog: true
tags:
    - Machine Learning
    - Paper Review
    - Earthquake Detection

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
* Scan through continuous seismic data, and for each 4 sec data window, classify the dominant category of the window as either a P-wave, S-wave, or noise.
* 4 convolution layers and 2 fully-connected layers
* 4.5 million 3-component seismic records were used for training and validation of the generalized phase detection framework.
* Data first were detrended and high-pass filtered above 2 Hz to remove microseismic noise, and all data were resampled at 100 Hz.
* Magnitude range of the data was −0.81 < M < 5.7 and epicentral distances less than 100 km were used.
* mini-batches of 480 records
* 3rd epoch had the highest prediction accuracy on the validation set (99%) `Early Stop`

### Classification Performance on the Validation Set
* Almost irrespective of the detection threshold:
  * Precision is very high (>99%) for both phases, suggesting that that the network very rarely labels noise as seismic phases, or confuses P- and S-phases.
  * Recall is somewhat lower, between 96% and 99% for most threshold choices, indicating that seismic phases are sometimes misclassified as noise. Remarkably,

<img src="https://d3i71xaburhd42.cloudfront.net/e178d94a0601f0f395cf6d81b884a238331fa869/5-Figure2-1.png" width="80%"  alt="hello" />
> Figure 2: Precision-recall tradeoff curve for different declaration probability thresholds and confusion matrix with definitions. If P- or S-probabilities exceed the threshold probability (color) the waveform is assigned to the respective class. If neither probability exceeds the threshold the waveform is assigned to the noise class. For low probability thresholds more cases of false positives occur, while with higher thresholds more false negative cases occur. The confusion matrix shows the possible combinations of classifications by human analysts (’H’) and the convnet algorithm (’A’).

### Application to the 2016 Bombay Beach, California Swarm
* Time point of the center of the window is assigned a detection label.
  * When multiple consecutive values are above 0.98, the time point of the maximum value is taken as the detection time.

<img src="https://d3i71xaburhd42.cloudfront.net/e178d94a0601f0f395cf6d81b884a238331fa869/6-Figure3-1.png" width="80%"  alt="hello" />
> Figure 3: Application of GPD to the 2016 Bombay Beach swarm. P-wave (red) and S-wave (blue) detections are colored for all samples of any window in which a class probability exceeds 0.98. The probability time series shows numerous high-probability detections. Inset shows a close up of a time window ~140s long with 13 earthquakes detected. P-detections occur consistently before S-detections. While P-waves tend to have higher vertical amplitudes, S-waves are stronger on the horizontal components.


### Application to the 2016 Mw 7.0 Kumamoto, Japan Earthquake

<img src="https://d3i71xaburhd42.cloudfront.net/e178d94a0601f0f395cf6d81b884a238331fa869/7-Figure4-1.png" width="80%"  alt="hello" />
> Figure 4: Example of GPD applied to the first 12 hours of the 2016 Bombay Beach sequence. The onset time of the swarm is sharply resolved. The total number of events detected is ~10 times as many as listed in the SCSN catalog. The swarm onset is distinctly visible, which often is not the case in routine catalogs, posing a common problem for seismic monitoring operators. The high amplitude signals before the swarm are nuisance signals from nearby vehicles that do not trigger the GPD algorithm.

<img src="https://d3i71xaburhd42.cloudfront.net/e178d94a0601f0f395cf6d81b884a238331fa869/8-Figure5-1.png" width="80%"  alt="hello" />
> Figure 5: Application of GPD to the 2016 Kumamoto earthquake. P-waves (red) and S-waves (blue) are detected at nearly all stations over the epicentral distance range 3-100 km. Diamonds indicate theoretical arrival times. This demonstrates both the viability of GPD to detect large magnitude earthquakes, but also to work in regions and magnitude ranges that are not included in the training data.

### Discussion

* network learns to recognize attributes of the 3D particle motion both before and after the phase arrival, as well as some frequency-based information.
* An important potential application of GPD is in EEW, to improve discrimination between genuine earthquake signals and other spurious signals that could lead to false detections. Many
