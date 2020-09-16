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

### [Reliable Real‐Time Seismic Signal/Noise Discrimination With Machine Learning](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2018JB016661)
    `by Meier et al., 2018`

<span style="color:red"> [seismogram, feature] </span>
<span style="color:blue"> [CNN, RNN, GAN, Attention, ANN] </span>
<span style="color:brown"> [single station] </span>


### [Machine Learning Seismic Wave Discrimination: Application to Earthquake Early Warning](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2018GL077870?utm_campaign=Geophysical_Research_Letters_TrendMD_0&utm_medium=cpc&utm_source=TrendMD)
    `by Li et al., 2018`

<span style="color:red"> [seismogram] </span>
<span style="color:blue"> [GAN, RF] </span>
<span style="color:brown"> [single station] </span>

### [Discrimination of Seismic Signals from Earthquakes and Tectonic Tremor by Applying a Convolutional Neural Network to Running Spectral Images](https://pubs.geoscienceworld.org/ssa/srl/article/90/2A/530/567979/Discrimination-of-Seismic-Signals-from-Earthquakes)
    `by Nakano et al., 2019`

<span style="color:red"> [spectrogram] </span>
<span style="color:blue"> [CNN] </span>
<span style="color:brown"> [single station] </span>






## Direct Earthquake Location Models

### [Convolutional neural network for earthquake detection and location](https://advances.sciencemag.org/content/4/2/e1700578)


[seismogram] [CNN][single station]



Perol et al., 2018






Automated Seismic Source Characterisation Using Deep Graph Neural Networks

[seismogram][CNN,GNN][network]

https://www.researchgate.net/publication/341621998_Automated_Seismic_Source_Characterisation_Using_Deep_Graph_Neural_Networks


Ende et al., 2020





Locating earthquakes with a network of seismic stations via a deep learning method
[seismogram][CNN][network]

https://www.nature.com/articles/s41598-020-58908-5


Zhang et al., 2020



A Deep Convolutional Neural Network for Localization of Clustered Earthquakes Based on Multistation Full Waveforms


[Seismogram][CNN][network]

https://pubs.geoscienceworld.org/ssa/srl/article/90/2A/510/567690/A-Deep-Convolutional-Neural-Network-for

Kriegerowski et al., 2019







Bayesian-Deep-Learning Estimation of Earthquake Location from Single-Station Observations
[seismogram][CNN][single station]

https://arxiv.org/pdf/1912.01144.pdf

Mousavi et al., 2019







Phase Picking Models
PhaseNet: a deep-neural-network-based seismic arrival-time picking method
[seismogram][CNN, Shortcut][single station]

https://academic.oup.com/gji/article/216/1/261/5129142

Zhu et al., 2019










Generalized Seismic Phase Detection with Deep Learning

[seismogram][CNN][single station]

https://arxiv.org/abs/1805.01075

Ross et al., 2019




Earthquake transformer—an attentive deep- learning model for simultaneous earthquake detection and phase picking
[seismogram][CNN, shortcut, LSTM RNN, Attention][single station]

https://www.nature.com/articles/s41467-020-17591-w

Mousavi et al., 2020






CRED: A Deep Residual Network of Convolutional and Recurrent Units for Earthquake Signal Detection

[spectrogram][CNN, LSTM RNN][single station]
Mousavi et al., 2019

https://www.nature.com/articles/s41598-019-45748-1






Convolutional Neural Network for Seismic Phase Classification, Performance Demonstration over a Local Seismic Network

[seismogram][CNN][single station]

https://pubs.geoscienceworld.org/ssa/srl/article/90/2A/491/568234/Convolutional-Neural-Network-for-Seismic-Phase



Woollam et al., 2019







P Wave Arrival Picking and First-Motion Polarity Determination With Deep Learning

[seismogram][CNN][single station]

https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2017JB015251

Ross et al.,





Deep Learning for Picking Seismic Arrival Times

[seismogram][CNN, shortcut][single station]

https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JB017536

Wang et al.,2019







Hybrid Event Detection and Phase-Picking Algorithm Using Convolutional and Recurrent Neural Networks

[seismogram][CNN,GRU RNN][single station]

https://watermark.silverchair.com/srl-2018319.1.pdf?token=AQECAHi208BE49Ooan9kkhW_Ercy7Dm3ZL_9Cf3qfKAc485ysgAAApswggKXBgkqhkiG9w0BBwagggKIMIIChAIBADCCAn0GCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMjfazqP8QFjxPYNPMAgEQgIICTsHdG7iK0t60Mm9PthPW4JdpU6OGuvTV2JJLpYi-Jd4e7w-EGTsMj-6fmWaJ8va1OH8lbPKfTTU-iiSLS6TNINQNqW2JjNmrjjKVMRGXmIleqM1IRzaDrb2PxIdvly50UB_xPKD7s2Pu7Zm1ukc-dpdsAag-3yawphu9Qcl-oGgC95ebO6vd2jB-tiz_zIyhIwDyVYUzp9eK8h5yx0god2FLQX6MmMmKY89c92zFFzjH_CHYi1t1l3Rkp6JxH-e9c3J9GZbYek6qbbnIzVLz5tF2DkwDMxSijA46nuOroWrEu2rOysDJ3nxHclvhJHavEYsCuOTDpDVHCV7fqk4YdzAfuOMl8EllRWN-IKT7aY_jQ7DzAjMHLPrd0jRGatURR2DYIRovJ7b5iPbeaBXEkPtjDLZ4GBc5RA7YRSdKaWBQi6NOZ-ZWwb7vASk6his3c_ZPhErGN1WBxCxMDNdrnb86Sh9iwQY4RWoJUjC9zx0e7FfX49VSZKyA6Mk2bNzXL7V6rUlpN1H2dcKBwRSn6C4PQ3l7YJVO7bcskLo3slE-1GpUw5wT07vZ_hDumQ7aeMokQJr3RjqzdKeaDfS3twqJEcYRYIRjitePtiq7jA-G231f8py1UPFnwzzLeu_GidDbBp8oj1MmSl8y0AY38RrRYuerB8JpO873zkcN0yzL6qW1KLlBywbIM0NZYgPDskOv-4fwjedYmViX1hcSFcYySjAYdetYBiwJuOZhdpCYDrFJuXs2oHGBMyYsxEhd0msQsm1uDiIcCHRplwU_


Zhou et al., 2020








Seismic Event and Phase Detection Using Time–Frequency Representation and Convolutional Neural Networks

[spectrogram][CNN][single station]

https://www.researchgate.net/publication/330425340_Seismic_Event_and_Phase_Detection_Using_Time-Frequency_Representation_and_Convolutional_Neural_Networks

Dokht et al., 2020









Phase Association Models

PhaseLink: A Deep Learning Approach to Seismic Phase Association

[phase][RNN][network]

https://arxiv.org/abs/1809.02880

Zachary et al., 2018







Pairwise Association of Seismic Arrivals with Convolutional Neural Networks

[seismogram][CNN][network]

https://pubs.geoscienceworld.org/ssa/srl/article/90/2A/503/568100/Pairwise-Association-of-Seismic-Arrivals-with

McBrearty et al., 2019







Earthquake Arrival Association with Backprojection and Graph Theory

[phase][graph, BP][network]

McBrearty et al., 2019

https://arxiv.org/abs/1904.00980













## Relationship to prior coupling and megathrust ruptures

* Update coupling map:
  * Updated slip-deficit move seaward
  * Update coupling estimates by removing assumptions of no up-dip interseismic strain accumulation
  * Half of the early slip models are more consistent with the original coupling models while others have slip more seaward.
  * Recent slip models more compatible with the revised coupling estimates
  * it is misleading to impose an up-dip free slip condition if there is no actual constraint from the on-land data.

* Repeater: (Uchida and Matsuzawa, 2011)
  * high coupling from 1993 to 2000 in the 2011 large-slip zone by the absence of repeating sequences, whereas repeating events in the northern, western and southern regions indicate `slow slip deformation` and `lower strain accumulation` in areas surrounding the large-slip zone of the 2011 rupture.
  * overcome the limited resolution from on-land geodesy
  * coupling coefficient tripled from values before the event, to near 0.6 afterwards
* Long-term seismicity patterns:
  * Asano et al. (2011) examine moment tensors for events on and off the plate boundary, with the distribution of `interplate thrust activity fringing the mainshock large-slip zone`.
  * Lin and Wu (2012) map cumulative seismic moment for events from 1976 to 2011, finding that `larger moment` is located in the `down-dip area of the 2011 mainshock rupture` than in the `up-dip` area. Up-dip moment is located where `slow slip activity` and `repeaters` are observed.
  * Ye et al. (2013) analyzed the region off Sanriku with low seismicity, few M > 5 events, and lack of large historical ruptures, designating this the Sanriku Low Seismicity Region (`SLSR`).

<img src="https://ars.els-cdn.com/content/image/1-s2.0-S0040195117303992-gr11.jpg" width="80%"  alt="hello" />
> Fig. 11. Updated retroactive computations of `interplate slip-deficit` in which the coupling is allowed to `extend farther seaward` (even if it is not resolved to do so by the data). These models from broaden the zones of inferred interplate coupling relative to the models before the earthquake in Fig. 1. (a) The updated slip-deficit model of `Hashimoto et al. (2012)` is shown in blue with contour intervals of 3 cm/yr. The yellow star indicates the USGS-NEIC epicenter. The white circle is the Mw 7.3 foreshock. Aftershock locations for the first three days are shown by yellow circles. The green region superimposes a slip model with 4 m slip contours inverted from GPS static and offshore displacement data, which largely overlaps the region of strong coupling. (b) The updated coupling fraction estimate of `Loveless and Meade (2011)`, without constraint of zero strain accumulation at the up-dip end of the model.

<img src="https://ars.els-cdn.com/content/image/1-s2.0-S0040195117303992-gr12.jpg" width="80%"  alt="hello" />
> Fig. 12. (a) Map of `GPS station accelerations` estimated by `Mavrommatis et al. (2014)` (black arrows). Colors (blue to red) represent `dip-slip component of estimated slip acceleration` on the plate interface from `1996 to 2011`. Triangles show repeating earthquake locations, with `yellow` indicating `decelerating` recurrence and `cyan` indicating `accelerating recurrence`. Gray circles are and white squares are less reliable repeaters. Contours are coseismic slip distribution for the 2011 event in 10 m intervals from `Hooper et al. (2013)`. (b) Preferred model of slip accelerations from joint inversion of GPS and repeating earthquakes. Observed GPS accelerations shown in black arrows with 2σ error ellipses, predicted in green. From `Mavrommatis et al. (2015).`


<img src="https://ars.els-cdn.com/content/image/1-s2.0-S0040195117303992-gr13.jpg" width="80%"  alt="hello" />
> Fig. 13. Spatial distribution of event faulting types (a) before (July 1984 to 11 March 2011, 14:45) and (b) after (11 March 2011, 14:46 to December 2013) the Tohoku earthquake. Contours of slip distributions for major interplate events are shown in black. In (a) main source areas for the 1994 Sanriku-oki earthquake (M7.6) and the largest 9 March 2011 foreshock (Mw 7.3) are shown by yellow and light blue areas, respectively. `Black ellipsoids` (regions (A)–(D)) indicate `earthquake clusters` including aftershock areas of the 2003 Mw 7.1 (D) and 2005 Mw 7.2 (A) intraplate earthquakes. In (b), the area with coseismic slip of ≥30 m from the Tohoku earthquake (Iinuma et al., 2012) is light blue. The `slip areas` for `two large aftershocks` on 11 March 2011 (Mw 7.4, Mw 7.7) are shown by `gray-filled contours` (Kubo et al., 2013; Muto et al., 2014). Black ellipsoids (regions (E)–(H)) indicate earthquake clusters including aftershocks of the major intraplate earthquakes that occurred at 15:25 JST, 11 March 2011 (Mw 7.5), on 14 March (Mw 6.9), and 7 December (Mw 7.3) 2012. Stars indicate epicenters of major earthquakes.

## Relationship to aftershocks and afterslip
* Asano et al. (2011) find that thrust aftershocks near the fault plane are seldom located in the large slip area, and that normal faulting occurs in both the upper and lower plates.
  * `on-fault thrust events` to `fringe` the `large-slip zone` (Kato and Igarashi (2012))
  * rate of interplate aftershocks changed significantly -> edges of the mainshock slip zone
  * infer that the `accumulated stress` was almost `entirely released` in the large slip zone, while `stress increased in surrounding areas`.
*  They infer that the mainshock stress change was up to 1 MPa for east-west tension, extensional stress was augmented, not reversed.
* Focal mechanisms before the mainshock in the inland areas of northern Tohoku have `extensive compressional activity` (Yoshida et al., 2012), and dramatically reduced across Japan after the event.
* infer that the reduced strain in the areas of slow slip and recent ruptures acted as a barrier to the mainshock rupture.
* `OBS` detected aftershocks are intraplate, with few events locating on the plate boundary and none being on the plate boundary in the most seaward 45 km of the megathrust (Obana et al., 2013). The absence of even small events on the shallow megathrust, including in locations of preceding repeater events (Uchida and Matsuzawa, 2013) -> `no afterslip` was occurring there.
  * They also report several `trench-normal compressional events` at the landward end of the 45 km wide aseismic wedge, which they attribute to `relocking of the megathrust`.

* Lengliné et al. (2012) analyses the first 12h after mainshock, increasing the catalog of small events by 40%.
  * The seismicity extends around the margins of large-slip in the mainshock, primarily along the coast, but also farther up-dip along Fukushima and Ibaraki Prefectures.
  * observe progressive expansion of the down dip aftershock area along strike to the south and locally around some patches of high activity. The activity decays with time, and could involve a `cascade of static stress triggers` or `afterslip driven expansion`.


<img src="https://ars.els-cdn.com/content/image/1-s2.0-S0040195117303992-gr14.jpg" width="80%"  alt="hello" />
> Fig. 14. Determinations of afterslip distributions for the 2011 Tohoku earthquake. (a) Postseismic displacements for 12–25 March 2011 from Ozawa et al. (2011). (b) Updated, and much contracted afterslip distribution (red contours) along with the coseismic slip estimate from `Ozawa et al. (2012)` with 8 m contour intervals. (c) Cumulative distribution of estimated postseismic slip (red areas) from Iinuma et al. (2016). The color scale for the cumulative slip is indicated at the bottom. The blue dashed contours represent the coseismic slip model of `Iinuma et al. (2012)`. Gray contours are slip regions of previous large events.

* Geodetic: `concentrate afterslip` in the `down-dip portion` of the megathrust `deeper than about 30 km`, complementary to the increasingly seaward location of the estimated mainshock slip.
* GPS: Afterslip extends down-dip of the co-seismic slip to ~80 km deep. It peaks and decays more slowly near the SLSR region offshore of Sanriku. Silverii et al. (2014)
  * postseismic motion could have contribution from vis-coelastic relaxation.
  * The afterslip pattern largely coincides with the aftershock distribution and with zones of calculated increased Coulomb failure stress from the mainshock slip. The afterslip Coulomb stress change is about 10% of that for the mainshock.
* repeating events is commonly inferred to indicate slow slip
  * Uchida and Matsuzawa (2013) examine repeating events prior to and after the 2011 mainshock, inferring postseismic slip of 1.6 m over the 9 months following the mainshock, in the area surrounding the large-slip zone. The `postseismic slip rate increases` near the margins of the main slip zone, consistent with outward propagation of afterslip. They also note small increases in rate in the 3 years preceding the mainshock, which they attribute to `‘unfastening’ of the locked area margin`.
  * Repeating sequences exhibit an increase of 0.3 magnitude units
  * Near the Kamaishi repeaters in the SLSR, magnitude increased by 1 magnitude unit and the `quasi-static slip rate` is estimated to have `increased` by a factor of `6` after the 2011 event, with `repeat times dropping` from 5.5 years to 9 months -> may represent an `aseismic to seismic transition` under the ephemeral fast loading rate by the postseismic slip.
* afterslip from Iinuma et al. (2016) (GPS and seafloor deformation statics) Three large afterslip regions:
  * SLSR region off Sanriku,
  * down-dip of the mainshock overlapping the 1978 Miyagi-oki region,
  * up-dip on the megathrust seaward of the Mw 7.9 aftershock off Ibaraki, in the region with no historic earthquakes.
  * Comparison with the distribution of repeating earthquakes (Fig. 13b) shows that the afterslip regions have some repeaters, as expected, although more are concentrated down-dip. The occurrence of repeaters appears valuable for constraining the regions of afterslip (e.g., Shirzaei et al., 2014; Hu et al., 2016; Iinuma et al., 2016).
  * very different end-member models of afterslip, and these influence assessments of coseismic slip. Incorporating the supplementary information from seismology, a preference can be given to the models in Fig. 14b and c, but these models do depend on assumptions that need further validation.???

## Depth-varying radiation behavior and slip to the trench

<img src="https://ars.els-cdn.com/content/image/1-s2.0-S0040195117303992-gr15.jpg" width="80%"  alt="hello" />
> Fig. 15. Compilation of 45 slip models (identified in Supplementary Table S1 listing) along the corridor indicated in the inset. Solid and dashed lines show models that do or do not include seafloor displacement data as constraints. In the inset, position of the JFAST drill hole is indicated. Modified from Sun et al. (2017).


<img src="https://ars.els-cdn.com/content/image/1-s2.0-S0040195117303992-gr16.jpg" width="80%"  alt="hello" />

> Fig. 16. Slip model obtained by iterative inversion of seismic data and forward modeling of tsunami gauge data and coastal runup and inundation by Yamazaki et al. (2017). The slip model has peak slip of 56 m located 20 to 40 km down-dip from the trench. The shallow slip patch in the north is needed to account for peak runup north of 39°. This model provides good fit to the geodetic data. It is also compatible with the reconstructions of initial sea surface height shown in Fig. 8, explicitly mapping the tsunami data into a fault slip model consistent with teleseismic and geodetic observations.


<img src="https://ars.els-cdn.com/content/image/1-s2.0-S0040195117303992-gr17.jpg" width="80%"  alt="hello" />

> Fig. 17. Stress drop estimates for the 2011 Tohoku earthquake. (a) The shear stress resulting from fault displacement from the joint inversion of Yamazaki et al. (2017). The shear stress change is highly variable in direction and magnitude, spanning from 0 to 37 MPa. The average stress drop is estimated to be 6.1 MPa when the fault model is trimmed to remove subfaults that have< 15% of the moment of the peak subfault, and it is estimated to be 5.9 MPa using the slip-weighted procedure of Noda et al. (2013). (b) Relationship between average stress drop and the slip contour used to define the aver- aging area for 40 rupture models, compiled by Brown et al. (2015).

<img src="https://ars.els-cdn.com/content/image/1-s2.0-S0040195117303992-gr18.jpg" width="80%"  alt="hello" />
> Fig. 18. Postseismic ground deformation from the original (green vectors, measured from September 2012 to January 2014) and augmented (black vectors, measured from September 2012 to May 2016; note that “This study” in the inset label refers to Tomita et al., 2017) array of GPS/Acoustic sites offshore of cen- tral Honshu coast. Gray vectors onshore are GEONET measurements from September 2012 to November 2015. Yellow and red contours correspond to the PRA (primary rupture area) 20-m slip and the VLSA (very large slip area) 50-m contours of slip for the model of Iinuma et al. (2012).
