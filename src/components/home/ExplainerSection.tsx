
import React from 'react';
import Lottie from 'react-lottie';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const ExplainerSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: refContent, isVisible: isVisibleContent } = useScrollAnimation();
  
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: {
      "v": "5.5.7",
      "fr": 29.9700012207031,
      "ip": 0,
      "op": 90.0000036657751,
      "w": 636,
      "h": 636,
      "nm": "tax-icon-animation",
      "ddd": 0,
      "assets": [],
      "layers": [
        {
          "ddd": 0,
          "ind": 1,
          "ty": 4,
          "nm": "Calculator",
          "sr": 1,
          "ks": {
            "o": { "a": 0, "k": 100, "ix": 11 },
            "r": { "a": 0, "k": 0, "ix": 10 },
            "p": { "a": 0, "k": [318, 318, 0], "ix": 2 },
            "a": { "a": 0, "k": [0, 0, 0], "ix": 1 },
            "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }
          },
          "ao": 0,
          "shapes": [
            {
              "ty": "gr",
              "it": [
                {
                  "ind": 0,
                  "ty": "sh",
                  "ix": 1,
                  "ks": {
                    "a": 0,
                    "k": {
                      "i": [[0, 0], [0, 0], [0, 0], [0, 0]],
                      "o": [[0, 0], [0, 0], [0, 0], [0, 0]],
                      "v": [[-100, -130], [100, -130], [100, 130], [-100, 130]],
                      "c": true
                    },
                    "ix": 2
                  },
                  "nm": "Path 1",
                  "mn": "ADBE Vector Shape - Group",
                  "hd": false
                },
                {
                  "ty": "st",
                  "c": { "a": 0, "k": [0.392, 1, 0.855, 1], "ix": 3 },
                  "o": { "a": 0, "k": 100, "ix": 4 },
                  "w": { "a": 0, "k": 8, "ix": 5 },
                  "lc": 2,
                  "lj": 2,
                  "bm": 0,
                  "nm": "Stroke 1",
                  "mn": "ADBE Vector Graphic - Stroke",
                  "hd": false
                },
                {
                  "ty": "tr",
                  "p": { "a": 0, "k": [0, 0], "ix": 2 },
                  "a": { "a": 0, "k": [0, 0], "ix": 1 },
                  "s": { "a": 0, "k": [100, 100], "ix": 3 },
                  "r": { "a": 0, "k": 0, "ix": 6 },
                  "o": { "a": 0, "k": 100, "ix": 7 },
                  "sk": { "a": 0, "k": 0, "ix": 4 },
                  "sa": { "a": 0, "k": 0, "ix": 5 },
                  "nm": "Transform"
                }
              ],
              "nm": "Calculator Body",
              "np": 2,
              "cix": 2,
              "bm": 0,
              "ix": 1,
              "mn": "ADBE Vector Group",
              "hd": false
            },
            {
              "ty": "gr",
              "it": [
                {
                  "ind": 0,
                  "ty": "sh",
                  "ix": 1,
                  "ks": {
                    "a": 0,
                    "k": {
                      "i": [[0, 0], [0, 0], [0, 0], [0, 0]],
                      "o": [[0, 0], [0, 0], [0, 0], [0, 0]],
                      "v": [[-80, -110], [80, -110], [80, -70], [-80, -70]],
                      "c": true
                    },
                    "ix": 2
                  },
                  "nm": "Path 1",
                  "mn": "ADBE Vector Shape - Group",
                  "hd": false
                },
                {
                  "ty": "st",
                  "c": { "a": 0, "k": [0.392, 1, 0.855, 1], "ix": 3 },
                  "o": { "a": 0, "k": 100, "ix": 4 },
                  "w": { "a": 0, "k": 6, "ix": 5 },
                  "lc": 2,
                  "lj": 2,
                  "bm": 0,
                  "nm": "Stroke 1",
                  "mn": "ADBE Vector Graphic - Stroke",
                  "hd": false
                },
                {
                  "ty": "tr",
                  "p": { "a": 0, "k": [0, 0], "ix": 2 },
                  "a": { "a": 0, "k": [0, 0], "ix": 1 },
                  "s": { "a": 0, "k": [100, 100], "ix": 3 },
                  "r": { "a": 0, "k": 0, "ix": 6 },
                  "o": { "a": 0, "k": 100, "ix": 7 },
                  "sk": { "a": 0, "k": 0, "ix": 4 },
                  "sa": { "a": 0, "k": 0, "ix": 5 },
                  "nm": "Transform"
                }
              ],
              "nm": "Display",
              "np": 2,
              "cix": 2,
              "bm": 0,
              "ix": 2,
              "mn": "ADBE Vector Group",
              "hd": false
            },
            {
              "ty": "gr",
              "it": [
                {
                  "ind": 0,
                  "ty": "sh",
                  "ix": 1,
                  "ks": {
                    "a": 1,
                    "k": [
                      {
                        "i": { "x": 0.833, "y": 0.833 },
                        "o": { "x": 0.167, "y": 0.167 },
                        "t": 0,
                        "s": [
                          {
                            "i": [[0, 0], [0, 0]],
                            "o": [[0, 0], [0, 0]],
                            "v": [[-70, -90], [0, -90]],
                            "c": false
                          }
                        ]
                      },
                      {
                        "i": { "x": 0.833, "y": 0.833 },
                        "o": { "x": 0.167, "y": 0.167 },
                        "t": 30,
                        "s": [
                          {
                            "i": [[0, 0], [0, 0]],
                            "o": [[0, 0], [0, 0]],
                            "v": [[-70, -90], [50, -90]],
                            "c": false
                          }
                        ]
                      },
                      {
                        "i": { "x": 0.833, "y": 0.833 },
                        "o": { "x": 0.167, "y": 0.167 },
                        "t": 60,
                        "s": [
                          {
                            "i": [[0, 0], [0, 0]],
                            "o": [[0, 0], [0, 0]],
                            "v": [[-70, -90], [70, -90]],
                            "c": false
                          }
                        ]
                      },
                      {
                        "t": 89.0000036257043,
                        "s": [
                          {
                            "i": [[0, 0], [0, 0]],
                            "o": [[0, 0], [0, 0]],
                            "v": [[-70, -90], [0, -90]],
                            "c": false
                          }
                        ]
                      }
                    ],
                    "ix": 2
                  },
                  "nm": "Path 1",
                  "mn": "ADBE Vector Shape - Group",
                  "hd": false
                },
                {
                  "ty": "st",
                  "c": { "a": 0, "k": [0.392, 1, 0.855, 1], "ix": 3 },
                  "o": { "a": 0, "k": 100, "ix": 4 },
                  "w": { "a": 0, "k": 6, "ix": 5 },
                  "lc": 2,
                  "lj": 2,
                  "bm": 0,
                  "nm": "Stroke 1",
                  "mn": "ADBE Vector Graphic - Stroke",
                  "hd": false
                },
                {
                  "ty": "tr",
                  "p": { "a": 0, "k": [0, 0], "ix": 2 },
                  "a": { "a": 0, "k": [0, 0], "ix": 1 },
                  "s": { "a": 0, "k": [100, 100], "ix": 3 },
                  "r": { "a": 0, "k": 0, "ix": 6 },
                  "o": { "a": 0, "k": 100, "ix": 7 },
                  "sk": { "a": 0, "k": 0, "ix": 4 },
                  "sa": { "a": 0, "k": 0, "ix": 5 },
                  "nm": "Transform"
                }
              ],
              "nm": "Cursor",
              "np": 2,
              "cix": 2,
              "bm": 0,
              "ix": 3,
              "mn": "ADBE Vector Group",
              "hd": false
            },
            {
              "ty": "gr",
              "it": [
                {
                  "ind": 0,
                  "ty": "sh",
                  "ix": 1,
                  "ks": {
                    "a": 0,
                    "k": {
                      "i": [[0, 0], [0, 0]],
                      "o": [[0, 0], [0, 0]],
                      "v": [[-80, -50], [80, -50]],
                      "c": false
                    },
                    "ix": 2
                  },
                  "nm": "Path 1",
                  "mn": "ADBE Vector Shape - Group",
                  "hd": false
                },
                {
                  "ty": "st",
                  "c": { "a": 0, "k": [0.392, 1, 0.855, 1], "ix": 3 },
                  "o": { "a": 0, "k": 100, "ix": 4 },
                  "w": { "a": 0, "k": 4, "ix": 5 },
                  "lc": 2,
                  "lj": 2,
                  "bm": 0,
                  "nm": "Stroke 1",
                  "mn": "ADBE Vector Graphic - Stroke",
                  "hd": false
                },
                {
                  "ty": "tr",
                  "p": { "a": 0, "k": [0, 0], "ix": 2 },
                  "a": { "a": 0, "k": [0, 0], "ix": 1 },
                  "s": { "a": 0, "k": [100, 100], "ix": 3 },
                  "r": { "a": 0, "k": 0, "ix": 6 },
                  "o": { "a": 0, "k": 100, "ix": 7 },
                  "sk": { "a": 0, "k": 0, "ix": 4 },
                  "sa": { "a": 0, "k": 0, "ix": 5 },
                  "nm": "Transform"
                }
              ],
              "nm": "Divider",
              "np": 2,
              "cix": 2,
              "bm": 0,
              "ix": 4,
              "mn": "ADBE Vector Group",
              "hd": false
            },
            {
              "ty": "gr",
              "it": [
                {
                  "ty": "rc",
                  "d": 1,
                  "s": { "a": 0, "k": [30, 30], "ix": 2 },
                  "p": { "a": 0, "k": [-60, -20], "ix": 3 },
                  "r": { "a": 0, "k": 5, "ix": 4 },
                  "nm": "Rectangle Path 1",
                  "mn": "ADBE Vector Shape - Rect",
                  "hd": false
                },
                {
                  "ty": "st",
                  "c": { "a": 0, "k": [0.392, 1, 0.855, 1], "ix": 3 },
                  "o": { "a": 0, "k": 100, "ix": 4 },
                  "w": { "a": 0, "k": 4, "ix": 5 },
                  "lc": 2,
                  "lj": 2,
                  "bm": 0,
                  "nm": "Stroke 1",
                  "mn": "ADBE Vector Graphic - Stroke",
                  "hd": false
                },
                {
                  "ty": "tr",
                  "p": { "a": 1, "k": [
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 10,
                      "s": [0, 0],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 20,
                      "s": [0, -5],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "t": 30.0000012219251,
                      "s": [0, 0]
                    }
                  ], "ix": 2 },
                  "a": { "a": 0, "k": [0, 0], "ix": 1 },
                  "s": { "a": 0, "k": [100, 100], "ix": 3 },
                  "r": { "a": 0, "k": 0, "ix": 6 },
                  "o": { "a": 0, "k": 100, "ix": 7 },
                  "sk": { "a": 0, "k": 0, "ix": 4 },
                  "sa": { "a": 0, "k": 0, "ix": 5 },
                  "nm": "Transform"
                }
              ],
              "nm": "Button 1",
              "np": 2,
              "cix": 2,
              "bm": 0,
              "ix": 5,
              "mn": "ADBE Vector Group",
              "hd": false
            },
            {
              "ty": "gr",
              "it": [
                {
                  "ty": "rc",
                  "d": 1,
                  "s": { "a": 0, "k": [30, 30], "ix": 2 },
                  "p": { "a": 0, "k": [0, -20], "ix": 3 },
                  "r": { "a": 0, "k": 5, "ix": 4 },
                  "nm": "Rectangle Path 1",
                  "mn": "ADBE Vector Shape - Rect",
                  "hd": false
                },
                {
                  "ty": "st",
                  "c": { "a": 0, "k": [0.392, 1, 0.855, 1], "ix": 3 },
                  "o": { "a": 0, "k": 100, "ix": 4 },
                  "w": { "a": 0, "k": 4, "ix": 5 },
                  "lc": 2,
                  "lj": 2,
                  "bm": 0,
                  "nm": "Stroke 1",
                  "mn": "ADBE Vector Graphic - Stroke",
                  "hd": false
                },
                {
                  "ty": "tr",
                  "p": { "a": 1, "k": [
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 40,
                      "s": [0, 0],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 50,
                      "s": [0, -5],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "t": 60.0000024438501,
                      "s": [0, 0]
                    }
                  ], "ix": 2 },
                  "a": { "a": 0, "k": [0, 0], "ix": 1 },
                  "s": { "a": 0, "k": [100, 100], "ix": 3 },
                  "r": { "a": 0, "k": 0, "ix": 6 },
                  "o": { "a": 0, "k": 100, "ix": 7 },
                  "sk": { "a": 0, "k": 0, "ix": 4 },
                  "sa": { "a": 0, "k": 0, "ix": 5 },
                  "nm": "Transform"
                }
              ],
              "nm": "Button 2",
              "np": 2,
              "cix": 2,
              "bm": 0,
              "ix": 6,
              "mn": "ADBE Vector Group",
              "hd": false
            },
            {
              "ty": "gr",
              "it": [
                {
                  "ty": "rc",
                  "d": 1,
                  "s": { "a": 0, "k": [30, 30], "ix": 2 },
                  "p": { "a": 0, "k": [60, -20], "ix": 3 },
                  "r": { "a": 0, "k": 5, "ix": 4 },
                  "nm": "Rectangle Path 1",
                  "mn": "ADBE Vector Shape - Rect",
                  "hd": false
                },
                {
                  "ty": "st",
                  "c": { "a": 0, "k": [0.392, 1, 0.855, 1], "ix": 3 },
                  "o": { "a": 0, "k": 100, "ix": 4 },
                  "w": { "a": 0, "k": 4, "ix": 5 },
                  "lc": 2,
                  "lj": 2,
                  "bm": 0,
                  "nm": "Stroke 1",
                  "mn": "ADBE Vector Graphic - Stroke",
                  "hd": false
                },
                {
                  "ty": "tr",
                  "p": { "a": 1, "k": [
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 70,
                      "s": [0, 0],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 80,
                      "s": [0, -5],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "t": 90.0000036657751,
                      "s": [0, 0]
                    }
                  ], "ix": 2 },
                  "a": { "a": 0, "k": [0, 0], "ix": 1 },
                  "s": { "a": 0, "k": [100, 100], "ix": 3 },
                  "r": { "a": 0, "k": 0, "ix": 6 },
                  "o": { "a": 0, "k": 100, "ix": 7 },
                  "sk": { "a": 0, "k": 0, "ix": 4 },
                  "sa": { "a": 0, "k": 0, "ix": 5 },
                  "nm": "Transform"
                }
              ],
              "nm": "Button 3",
              "np": 2,
              "cix": 2,
              "bm": 0,
              "ix": 7,
              "mn": "ADBE Vector Group",
              "hd": false
            },
            {
              "ty": "gr",
              "it": [
                {
                  "ty": "rc",
                  "d": 1,
                  "s": { "a": 0, "k": [30, 30], "ix": 2 },
                  "p": { "a": 0, "k": [-60, 20], "ix": 3 },
                  "r": { "a": 0, "k": 5, "ix": 4 },
                  "nm": "Rectangle Path 1",
                  "mn": "ADBE Vector Shape - Rect",
                  "hd": false
                },
                {
                  "ty": "st",
                  "c": { "a": 0, "k": [0.392, 1, 0.855, 1], "ix": 3 },
                  "o": { "a": 0, "k": 100, "ix": 4 },
                  "w": { "a": 0, "k": 4, "ix": 5 },
                  "lc": 2,
                  "lj": 2,
                  "bm": 0,
                  "nm": "Stroke 1",
                  "mn": "ADBE Vector Graphic - Stroke",
                  "hd": false
                },
                {
                  "ty": "tr",
                  "p": { "a": 1, "k": [
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 15,
                      "s": [0, 0],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 25,
                      "s": [0, -5],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "t": 35.0000014255792,
                      "s": [0, 0]
                    }
                  ], "ix": 2 },
                  "a": { "a": 0, "k": [0, 0], "ix": 1 },
                  "s": { "a": 0, "k": [100, 100], "ix": 3 },
                  "r": { "a": 0, "k": 0, "ix": 6 },
                  "o": { "a": 0, "k": 100, "ix": 7 },
                  "sk": { "a": 0, "k": 0, "ix": 4 },
                  "sa": { "a": 0, "k": 0, "ix": 5 },
                  "nm": "Transform"
                }
              ],
              "nm": "Button 4",
              "np": 2,
              "cix": 2,
              "bm": 0,
              "ix": 8,
              "mn": "ADBE Vector Group",
              "hd": false
            },
            {
              "ty": "gr",
              "it": [
                {
                  "ty": "rc",
                  "d": 1,
                  "s": { "a": 0, "k": [30, 30], "ix": 2 },
                  "p": { "a": 0, "k": [0, 20], "ix": 3 },
                  "r": { "a": 0, "k": 5, "ix": 4 },
                  "nm": "Rectangle Path 1",
                  "mn": "ADBE Vector Shape - Rect",
                  "hd": false
                },
                {
                  "ty": "st",
                  "c": { "a": 0, "k": [0.392, 1, 0.855, 1], "ix": 3 },
                  "o": { "a": 0, "k": 100, "ix": 4 },
                  "w": { "a": 0, "k": 4, "ix": 5 },
                  "lc": 2,
                  "lj": 2,
                  "bm": 0,
                  "nm": "Stroke 1",
                  "mn": "ADBE Vector Graphic - Stroke",
                  "hd": false
                },
                {
                  "ty": "tr",
                  "p": { "a": 1, "k": [
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 45,
                      "s": [0, 0],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 55,
                      "s": [0, -5],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "t": 65.0000026475043,
                      "s": [0, 0]
                    }
                  ], "ix": 2 },
                  "a": { "a": 0, "k": [0, 0], "ix": 1 },
                  "s": { "a": 0, "k": [100, 100], "ix": 3 },
                  "r": { "a": 0, "k": 0, "ix": 6 },
                  "o": { "a": 0, "k": 100, "ix": 7 },
                  "sk": { "a": 0, "k": 0, "ix": 4 },
                  "sa": { "a": 0, "k": 0, "ix": 5 },
                  "nm": "Transform"
                }
              ],
              "nm": "Button 5",
              "np": 2,
              "cix": 2,
              "bm": 0,
              "ix": 9,
              "mn": "ADBE Vector Group",
              "hd": false
            },
            {
              "ty": "gr",
              "it": [
                {
                  "ty": "rc",
                  "d": 1,
                  "s": { "a": 0, "k": [30, 30], "ix": 2 },
                  "p": { "a": 0, "k": [60, 20], "ix": 3 },
                  "r": { "a": 0, "k": 5, "ix": 4 },
                  "nm": "Rectangle Path 1",
                  "mn": "ADBE Vector Shape - Rect",
                  "hd": false
                },
                {
                  "ty": "st",
                  "c": { "a": 0, "k": [0.392, 1, 0.855, 1], "ix": 3 },
                  "o": { "a": 0, "k": 100, "ix": 4 },
                  "w": { "a": 0, "k": 4, "ix": 5 },
                  "lc": 2,
                  "lj": 2,
                  "bm": 0,
                  "nm": "Stroke 1",
                  "mn": "ADBE Vector Graphic - Stroke",
                  "hd": false
                },
                {
                  "ty": "tr",
                  "p": { "a": 1, "k": [
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 75,
                      "s": [0, 0],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 85,
                      "s": [0, -5],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "t": 95.0000038694293,
                      "s": [0, 0]
                    }
                  ], "ix": 2 },
                  "a": { "a": 0, "k": [0, 0], "ix": 1 },
                  "s": { "a": 0, "k": [100, 100], "ix": 3 },
                  "r": { "a": 0, "k": 0, "ix": 6 },
                  "o": { "a": 0, "k": 100, "ix": 7 },
                  "sk": { "a": 0, "k": 0, "ix": 4 },
                  "sa": { "a": 0, "k": 0, "ix": 5 },
                  "nm": "Transform"
                }
              ],
              "nm": "Button 6",
              "np": 2,
              "cix": 2,
              "bm": 0,
              "ix": 10,
              "mn": "ADBE Vector Group",
              "hd": false
            },
            {
              "ty": "gr",
              "it": [
                {
                  "ty": "rc",
                  "d": 1,
                  "s": { "a": 0, "k": [30, 30], "ix": 2 },
                  "p": { "a": 0, "k": [-60, 60], "ix": 3 },
                  "r": { "a": 0, "k": 5, "ix": 4 },
                  "nm": "Rectangle Path 1",
                  "mn": "ADBE Vector Shape - Rect",
                  "hd": false
                },
                {
                  "ty": "st",
                  "c": { "a": 0, "k": [0.392, 1, 0.855, 1], "ix": 3 },
                  "o": { "a": 0, "k": 100, "ix": 4 },
                  "w": { "a": 0, "k": 4, "ix": 5 },
                  "lc": 2,
                  "lj": 2,
                  "bm": 0,
                  "nm": "Stroke 1",
                  "mn": "ADBE Vector Graphic - Stroke",
                  "hd": false
                },
                {
                  "ty": "tr",
                  "p": { "a": 1, "k": [
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 20,
                      "s": [0, 0],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 30,
                      "s": [0, -5],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "t": 40.0000016292334,
                      "s": [0, 0]
                    }
                  ], "ix": 2 },
                  "a": { "a": 0, "k": [0, 0], "ix": 1 },
                  "s": { "a": 0, "k": [100, 100], "ix": 3 },
                  "r": { "a": 0, "k": 0, "ix": 6 },
                  "o": { "a": 0, "k": 100, "ix": 7 },
                  "sk": { "a": 0, "k": 0, "ix": 4 },
                  "sa": { "a": 0, "k": 0, "ix": 5 },
                  "nm": "Transform"
                }
              ],
              "nm": "Button 7",
              "np": 2,
              "cix": 2,
              "bm": 0,
              "ix": 11,
              "mn": "ADBE Vector Group",
              "hd": false
            },
            {
              "ty": "gr",
              "it": [
                {
                  "ty": "rc",
                  "d": 1,
                  "s": { "a": 0, "k": [30, 30], "ix": 2 },
                  "p": { "a": 0, "k": [0, 60], "ix": 3 },
                  "r": { "a": 0, "k": 5, "ix": 4 },
                  "nm": "Rectangle Path 1",
                  "mn": "ADBE Vector Shape - Rect",
                  "hd": false
                },
                {
                  "ty": "st",
                  "c": { "a": 0, "k": [0.392, 1, 0.855, 1], "ix": 3 },
                  "o": { "a": 0, "k": 100, "ix": 4 },
                  "w": { "a": 0, "k": 4, "ix": 5 },
                  "lc": 2,
                  "lj": 2,
                  "bm": 0,
                  "nm": "Stroke 1",
                  "mn": "ADBE Vector Graphic - Stroke",
                  "hd": false
                },
                {
                  "ty": "tr",
                  "p": { "a": 1, "k": [
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 50,
                      "s": [0, 0],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 60,
                      "s": [0, -5],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "t": 70.0000028511585,
                      "s": [0, 0]
                    }
                  ], "ix": 2 },
                  "a": { "a": 0, "k": [0, 0], "ix": 1 },
                  "s": { "a": 0, "k": [100, 100], "ix": 3 },
                  "r": { "a": 0, "k": 0, "ix": 6 },
                  "o": { "a": 0, "k": 100, "ix": 7 },
                  "sk": { "a": 0, "k": 0, "ix": 4 },
                  "sa": { "a": 0, "k": 0, "ix": 5 },
                  "nm": "Transform"
                }
              ],
              "nm": "Button 8",
              "np": 2,
              "cix": 2,
              "bm": 0,
              "ix": 12,
              "mn": "ADBE Vector Group",
              "hd": false
            },
            {
              "ty": "gr",
              "it": [
                {
                  "ty": "rc",
                  "d": 1,
                  "s": { "a": 0, "k": [30, 30], "ix": 2 },
                  "p": { "a": 0, "k": [60, 60], "ix": 3 },
                  "r": { "a": 0, "k": 5, "ix": 4 },
                  "nm": "Rectangle Path 1",
                  "mn": "ADBE Vector Shape - Rect",
                  "hd": false
                },
                {
                  "ty": "st",
                  "c": { "a": 0, "k": [0.392, 1, 0.855, 1], "ix": 3 },
                  "o": { "a": 0, "k": 100, "ix": 4 },
                  "w": { "a": 0, "k": 4, "ix": 5 },
                  "lc": 2,
                  "lj": 2,
                  "bm": 0,
                  "nm": "Stroke 1",
                  "mn": "ADBE Vector Graphic - Stroke",
                  "hd": false
                },
                {
                  "ty": "tr",
                  "p": { "a": 1, "k": [
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 80,
                      "s": [0, 0],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 90,
                      "s": [0, -5],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "t": 100.000004073084,
                      "s": [0, 0]
                    }
                  ], "ix": 2 },
                  "a": { "a": 0, "k": [0, 0], "ix": 1 },
                  "s": { "a": 0, "k": [100, 100], "ix": 3 },
                  "r": { "a": 0, "k": 0, "ix": 6 },
                  "o": { "a": 0, "k": 100, "ix": 7 },
                  "sk": { "a": 0, "k": 0, "ix": 4 },
                  "sa": { "a": 0, "k": 0, "ix": 5 },
                  "nm": "Transform"
                }
              ],
              "nm": "Button 9",
              "np": 2,
              "cix": 2,
              "bm": 0,
              "ix": 13,
              "mn": "ADBE Vector Group",
              "hd": false
            },
            {
              "ty": "gr",
              "it": [
                {
                  "ty": "rc",
                  "d": 1,
                  "s": { "a": 0, "k": [30, 30], "ix": 2 },
                  "p": { "a": 0, "k": [-60, 100], "ix": 3 },
                  "r": { "a": 0, "k": 5, "ix": 4 },
                  "nm": "Rectangle Path 1",
                  "mn": "ADBE Vector Shape - Rect",
                  "hd": false
                },
                {
                  "ty": "st",
                  "c": { "a": 0, "k": [0.392, 1, 0.855, 1], "ix": 3 },
                  "o": { "a": 0, "k": 100, "ix": 4 },
                  "w": { "a": 0, "k": 4, "ix": 5 },
                  "lc": 2,
                  "lj": 2,
                  "bm": 0,
                  "nm": "Stroke 1",
                  "mn": "ADBE Vector Graphic - Stroke",
                  "hd": false
                },
                {
                  "ty": "tr",
                  "p": { "a": 1, "k": [
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 25,
                      "s": [0, 0],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 35,
                      "s": [0, -5],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "t": 45.0000018328876,
                      "s": [0, 0]
                    }
                  ], "ix": 2 },
                  "a": { "a": 0, "k": [0, 0], "ix": 1 },
                  "s": { "a": 0, "k": [100, 100], "ix": 3 },
                  "r": { "a": 0, "k": 0, "ix": 6 },
                  "o": { "a": 0, "k": 100, "ix": 7 },
                  "sk": { "a": 0, "k": 0, "ix": 4 },
                  "sa": { "a": 0, "k": 0, "ix": 5 },
                  "nm": "Transform"
                }
              ],
              "nm": "Button 10",
              "np": 2,
              "cix": 2,
              "bm": 0,
              "ix": 14,
              "mn": "ADBE Vector Group",
              "hd": false
            },
            {
              "ty": "gr",
              "it": [
                {
                  "ty": "rc",
                  "d": 1,
                  "s": { "a": 0, "k": [30, 30], "ix": 2 },
                  "p": { "a": 0, "k": [0, 100], "ix": 3 },
                  "r": { "a": 0, "k": 5, "ix": 4 },
                  "nm": "Rectangle Path 1",
                  "mn": "ADBE Vector Shape - Rect",
                  "hd": false
                },
                {
                  "ty": "st",
                  "c": { "a": 0, "k": [0.392, 1, 0.855, 1], "ix": 3 },
                  "o": { "a": 0, "k": 100, "ix": 4 },
                  "w": { "a": 0, "k": 4, "ix": 5 },
                  "lc": 2,
                  "lj": 2,
                  "bm": 0,
                  "nm": "Stroke 1",
                  "mn": "ADBE Vector Graphic - Stroke",
                  "hd": false
                },
                {
                  "ty": "tr",
                  "p": { "a": 1, "k": [
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 55,
                      "s": [0, 0],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 65,
                      "s": [0, -5],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "t": 75.0000030548126,
                      "s": [0, 0]
                    }
                  ], "ix": 2 },
                  "a": { "a": 0, "k": [0, 0], "ix": 1 },
                  "s": { "a": 0, "k": [100, 100], "ix": 3 },
                  "r": { "a": 0, "k": 0, "ix": 6 },
                  "o": { "a": 0, "k": 100, "ix": 7 },
                  "sk": { "a": 0, "k": 0, "ix": 4 },
                  "sa": { "a": 0, "k": 0, "ix": 5 },
                  "nm": "Transform"
                }
              ],
              "nm": "Button 11",
              "np": 2,
              "cix": 2,
              "bm": 0,
              "ix": 15,
              "mn": "ADBE Vector Group",
              "hd": false
            },
            {
              "ty": "gr",
              "it": [
                {
                  "ty": "rc",
                  "d": 1,
                  "s": { "a": 0, "k": [30, 30], "ix": 2 },
                  "p": { "a": 0, "k": [60, 100], "ix": 3 },
                  "r": { "a": 0, "k": 5, "ix": 4 },
                  "nm": "Rectangle Path 1",
                  "mn": "ADBE Vector Shape - Rect",
                  "hd": false
                },
                {
                  "ty": "st",
                  "c": { "a": 0, "k": [0.392, 1, 0.855, 1], "ix": 3 },
                  "o": { "a": 0, "k": 100, "ix": 4 },
                  "w": { "a": 0, "k": 4, "ix": 5 },
                  "lc": 2,
                  "lj": 2,
                  "bm": 0,
                  "nm": "Stroke 1",
                  "mn": "ADBE Vector Graphic - Stroke",
                  "hd": false
                },
                {
                  "ty": "tr",
                  "p": { "a": 1, "k": [
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 85,
                      "s": [0, 0],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "i": { "x": 0.833, "y": 0.833 },
                      "o": { "x": 0.167, "y": 0.167 },
                      "t": 95,
                      "s": [0, -5],
                      "to": [0, 0],
                      "ti": [0, 0]
                    },
                    {
                      "t": 105.000004276738,
                      "s": [0, 0]
                    }
                  ], "ix": 2 },
                  "a": { "a": 0, "k": [0, 0], "ix": 1 },
                  "s": { "a": 0, "k": [100, 100], "ix": 3 },
                  "r": { "a": 0, "k": 0, "ix": 6 },
                  "o": { "a": 0, "k": 100, "ix": 7 },
                  "sk": { "a": 0, "k": 0, "ix": 4 },
                  "sa": { "a": 0, "k": 0, "ix": 5 },
                  "nm": "Transform"
                }
              ],
              "nm": "Button 12",
              "np": 2,
              "cix": 2,
              "bm": 0,
              "ix": 16,
              "mn": "ADBE Vector Group",
              "hd": false
            }
          ],
          "ip": 0,
          "op": 90.0000036657751,
          "st": 0,
          "bm": 0
        }
      ],
      "markers": []
    },
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  
  const steps = [
    {
      title: "Professional Tax Planning",
      description: "Our experienced tax professionals analyze your financial situation to identify all potential deductions and credits.",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364FFDA'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' /%3E%3C/svg%3E"
    },
    {
      title: "Maximized Deductions",
      description: "We work diligently to find every legal deduction and credit available to minimize your tax burden.",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364FFDA'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /%3E%3C/svg%3E"
    },
    {
      title: "Year-Round Support",
      description: "Tax planning is not a one-time event. We provide ongoing support to adapt to changing circumstances.",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364FFDA'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' /%3E%3C/svg%3E"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-sm uppercase text-accent font-semibold tracking-wider mb-2">How It Works</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Smart Tax Solutions</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our approach combines expert knowledge, cutting-edge technology, and personalized service 
            to deliver exceptional results for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div 
              ref={refContent as React.RefObject<HTMLDivElement>}
              className={`space-y-12 transition-all duration-1000 ${isVisibleContent ? 'opacity-100' : 'opacity-0 translate-x-20'}`}
            >
              {steps.map((step, index) => (
                <div 
                  key={step.title} 
                  className="flex items-start"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <img src={step.icon} alt={step.title} className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-(-20)'}`}>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl shadow-lg max-w-md">
                <Lottie 
                  options={defaultOptions}
                  height={400}
                  width={400}
                  isStopped={false}
                  isPaused={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplainerSection;
