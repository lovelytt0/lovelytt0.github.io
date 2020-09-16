---
layout:     post
title:      Earthquake Detection by Machine Learning
subtitle:   Paper List
date:       2020-09-16
author:     Tian Feng
header-img: img/ai.jpeg
catalog: true
tags:
    - Machine Learning
    - Paper Review

---


***



Type 1 Question: Is there any earthquakes that occur in this time window?

Solution:  Earthquake Detection Only Model
Input: seismogram/spectrogram/feature -> Output: earthquake or noise

Type 2 Question: Where and when do earthquakes occur? (Dection+Location)

Solution 1: Direct Earthquake Location Model
Input: seismogram/spectrogram/features -> Output: location/origin_time/magnitude

Solution 2: Phase Picking Model + Phase Association Model + Earthquake    Location Model
Phase Picking
Input: seismogram/spectrogram/features-> Output: phase
	Phase association
Input: phase -> Output: phase cluster
Event location
Input: phase cluster -> location/origin_time/magnitude

## Earthquake Detection Only Models

##### [Reliable Real‐Time Seismic Signal/Noise Discrimination With Machine Learning](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2018JB016661)
* by Meier et al., 2018
* <span style="color:red"> [seismogram, feature] </span>
<span style="color:blue"> [CNN, RNN, GAN, Attention, ANN] </span>
<span style="color:green"> [single station] </span>


##### [Machine Learning Seismic Wave Discrimination: Application to Earthquake Early Warning](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2018GL077870?utm_campaign=Geophysical_Research_Letters_TrendMD_0&utm_medium=cpc&utm_source=TrendMD)
* by Li et al., 2018
* <span style="color:red"> [seismogram] </span>
<span style="color:blue"> [GAN, RF] </span>
<span style="color:green"> [single station] </span>

##### [Discrimination of Seismic Signals from Earthquakes and Tectonic Tremor by Applying a Convolutional Neural Network to Running Spectral Images](https://pubs.geoscienceworld.org/ssa/srl/article/90/2A/530/567979/Discrimination-of-Seismic-Signals-from-Earthquakes)
* by Nakano et al., 2019
* <span style="color:red"> [spectrogram] </span>
<span style="color:blue"> [CNN] </span>
<span style="color:green"> [single station] </span>

## Direct Earthquake Location Models

##### [Convolutional neural network for earthquake detection and location](https://advances.sciencemag.org/content/4/2/e1700578)
* Perol et al., 2018
* <span style="color:red"> [seismogram]
</span><span style="color:blue"> [CNN] </span>
<span style="color:green"> [single station] </span>

##### [Automated Seismic Source Characterisation Using Deep Graph Neural Networks](https://www.researchgate.net/publication/341621998_Automated_Seismic_Source_Characterisation_Using_Deep_Graph_Neural_Networks)
* Ende et al., 2020
* <span style="color:red"> [seismogram] </span>
<span style="color:blue"> [CNN, GNN] </span>
<span style="color:green"> [network] </span>

##### [Locating earthquakes with a network of seismic stations via a deep learning method](https://www.nature.com/articles/s41598-020-58908-5)
* Zhang et al., 2020
* <span style="color:red"> [seismogram] </span>
<span style="color:blue"> [CNN] </span>
<span style="color:green"> [network] </span>

##### [A Deep Convolutional Neural Network for Localization of Clustered Earthquakes Based on Multistation Full Waveforms](https://pubs.geoscienceworld.org/ssa/srl/article/90/2A/510/567690/A-Deep-Convolutional-Neural-Network-for)

* Kriegerowski et al., 2019
* <span style="color:red"> [seismogram] </span>
<span style="color:blue"> [CNN] </span>
<span style="color:green"> [network] </span>

##### [Bayesian-Deep-Learning Estimation of Earthquake Location from Single-Station Observations](https://arxiv.org/pdf/1912.01144.pdf)
* Mousavi et al., 2019
* <span style="color:red"> [seismogram] </span>
<span style="color:blue"> [CNN] </span>
<span style="color:green"> [single station] </span>

## Phase Picking Models
##### [PhaseNet: a deep-neural-network-based seismic arrival-time picking method](https://academic.oup.com/gji/article/216/1/261/5129142)
* Zhu et al., 2019
* <span style="color:red"> [seismogram] </span>
<span style="color:blue"> [CNN, shortcut] </span>
<span style="color:green"> [single station] </span>

##### [Generalized Seismic Phase Detection with Deep Learning](https://arxiv.org/abs/1805.01075)
* Ross et al., 2019
* <span style="color:red"> [seismogram] </span>
<span style="color:blue"> [CNN] </span>
<span style="color:green"> [single station] </span>

##### [Earthquake transformer—an attentive deep- learning model for simultaneous earthquake detection and phase picking](https://www.nature.com/articles/s41467-020-17591-w)
* Mousavi et al., 2020
* <span style="color:red"> [seismogram] </span>
<span style="color:blue"> [CNN, shortcut, LSTM RNN, Attention] </span>
<span style="color:green"> [single station] </span>


###### CRED: A Deep Residual Network of Convolutional and Recurrent Units for Earthquake Signal Detection

[spectrogram][CNN, LSTM RNN][single station]
Mousavi et al., 2019

https://www.nature.com/articles/s41598-019-45748-1






###### Convolutional Neural Network for Seismic Phase Classification, Performance Demonstration over a Local Seismic Network

[seismogram][CNN][single station]

https://pubs.geoscienceworld.org/ssa/srl/article/90/2A/491/568234/Convolutional-Neural-Network-for-Seismic-Phase



Woollam et al., 2019







###### P Wave Arrival Picking and First-Motion Polarity Determination With Deep Learning

[seismogram][CNN][single station]

https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2017JB015251

Ross et al.,



###### Deep Learning for Picking Seismic Arrival Times

[seismogram][CNN, shortcut][single station]

https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JB017536

Wang et al.,2019



###### Hybrid Event Detection and Phase-Picking Algorithm Using Convolutional and Recurrent Neural Networks

[seismogram][CNN,GRU RNN][single station]

https://watermark.silverchair.com/srl-2018319.1.pdf?token=AQECAHi208BE49Ooan9kkhW_Ercy7Dm3ZL_9Cf3qfKAc485ysgAAApswggKXBgkqhkiG9w0BBwagggKIMIIChAIBADCCAn0GCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMjfazqP8QFjxPYNPMAgEQgIICTsHdG7iK0t60Mm9PthPW4JdpU6OGuvTV2JJLpYi-Jd4e7w-EGTsMj-6fmWaJ8va1OH8lbPKfTTU-iiSLS6TNINQNqW2JjNmrjjKVMRGXmIleqM1IRzaDrb2PxIdvly50UB_xPKD7s2Pu7Zm1ukc-dpdsAag-3yawphu9Qcl-oGgC95ebO6vd2jB-tiz_zIyhIwDyVYUzp9eK8h5yx0god2FLQX6MmMmKY89c92zFFzjH_CHYi1t1l3Rkp6JxH-e9c3J9GZbYek6qbbnIzVLz5tF2DkwDMxSijA46nuOroWrEu2rOysDJ3nxHclvhJHavEYsCuOTDpDVHCV7fqk4YdzAfuOMl8EllRWN-IKT7aY_jQ7DzAjMHLPrd0jRGatURR2DYIRovJ7b5iPbeaBXEkPtjDLZ4GBc5RA7YRSdKaWBQi6NOZ-ZWwb7vASk6his3c_ZPhErGN1WBxCxMDNdrnb86Sh9iwQY4RWoJUjC9zx0e7FfX49VSZKyA6Mk2bNzXL7V6rUlpN1H2dcKBwRSn6C4PQ3l7YJVO7bcskLo3slE-1GpUw5wT07vZ_hDumQ7aeMokQJr3RjqzdKeaDfS3twqJEcYRYIRjitePtiq7jA-G231f8py1UPFnwzzLeu_GidDbBp8oj1MmSl8y0AY38RrRYuerB8JpO873zkcN0yzL6qW1KLlBywbIM0NZYgPDskOv-4fwjedYmViX1hcSFcYySjAYdetYBiwJuOZhdpCYDrFJuXs2oHGBMyYsxEhd0msQsm1uDiIcCHRplwU_


Zhou et al., 2020


###### Seismic Event and Phase Detection Using Time–Frequency Representation and Convolutional Neural Networks

[spectrogram][CNN][single station]

https://www.researchgate.net/publication/330425340_Seismic_Event_and_Phase_Detection_Using_Time-Frequency_Representation_and_Convolutional_Neural_Networks

Dokht et al., 2020


## Phase Association Models

###### PhaseLink: A Deep Learning Approach to Seismic Phase Association

[phase cluster][RNN][network]

https://arxiv.org/abs/1809.02880

Zachary et al., 2018




###### Pairwise Association of Seismic Arrivals with Convolutional Neural Networks

[seismogram][CNN][network]

https://pubs.geoscienceworld.org/ssa/srl/article/90/2A/503/568100/Pairwise-Association-of-Seismic-Arrivals-with

McBrearty et al., 2019





###### Earthquake Arrival Association with Backprojection and Graph Theory

[phase][graph, BP][network]

McBrearty et al., 2019

https://arxiv.org/abs/1904.00980
