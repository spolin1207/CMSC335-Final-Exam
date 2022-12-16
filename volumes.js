/*
Array of all volumes within MURJ. Each time a new volume is added to MURJ, add the pdf file 
to the volumes folder within the application. Then, insert an object into the volumes array
so it can be rendered dynamically through the website. 

Currently a crude implementation. Can be improved by having a function/form that will add to 
the volumes array.
*/

let volumes = [
  {
    id: 1,
    title: "SCIENTIFIC TERRAPIN VOL1 ISS1",
    filepath: __dirname + "/volumes/SCIENTIFIC TERRAPIN VOL1 ISS1.pdf",
    cover: __dirname + "/covers/SCIENTIFIC TERRAPIN VOL1 ISS1.pdf",
  },
  {
    id: 2,
    title: "SCIENTIFIC TERRAPIN VOL2 ISS1",
    filepath: __dirname + "/volumes/SCIENTIFIC TERRAPIN VOL2 ISS1.pdf",
    cover: __dirname + "/covers/SCIENTIFIC TERRAPIN VOL2 ISS1.pdf",
  },
  {
    id: 3,
    title: "SCIENTIFIC TERRAPIN VOL2 ISS2",
    filepath: __dirname + "/volumes/SCIENTIFIC TERRAPIN VOL2 ISS2.pdf",
    cover: __dirname + "/covers/SCIENTIFIC TERRAPIN VOL2 ISS2.pdf",
  },
  {
    id: 4,
    title: "SCIENTIFIC TERRAPIN VOL3 ISS1",
    filepath: __dirname + "/volumes/SCIENTIFIC TERRAPIN VOL3 ISS1.pdf",
    cover: __dirname + "/covers/SCIENTIFIC TERRAPIN VOL3 ISS1.pdf",
  },
  {
    id: 5,
    title: "SCIENTIFIC TERRAPIN VOL3 ISS2",
    filepath: __dirname + "/volumes/SCIENTIFIC TERRAPIN VOL3 ISS2.pdf",
    cover: __dirname + "/covers/SCIENTIFIC TERRAPIN VOL3 ISS2.pdf",
  },
];

module.exports = volumes;
