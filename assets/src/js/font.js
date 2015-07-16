window.fontObj = {
"glyphs": {
	"A_cap": {
		"unicode": 65,
		"ot": {
			"advanceWidth": {
				"_operation": "contours[0].nodes[1].expandedTo[1].x + (serifWidth + 50) + 25 * spacing + 150",
				"_parameters": ["serifWidth", "spacing"],
				"_dependencies": ["contours.0.nodes.1.expandedTo.1.x"]
			}
		},
		"tags": ["all", "latin", "uppercase"],
		"name": "A_cap",
		"anchor": [{
			"x": {
				"_operation": "(495 + 20) * width",
				"_parameters": ["width"],
				"_dependencies": []
			},
			"y": 0
		}, {
			"x": {
				"_operation": "50 + 9",
				"_parameters": [],
				"_dependencies": []
			},
			"y": 0
		}],
		"outline": {
			"contour": [{
				"skeleton": true,
				"closed": false,
				"point": [{
					"x": {
						"_operation": "(490 + 20) * width",
						"_parameters": ["width"],
						"_dependencies": []
					},
					"y": 0,
					"typeOut": "line",
					"expand": {
						"_operation": "Object({\n	'width': thickness * (105 / 85) * opticThickness,\n	'angle': 0 + 'deg',\n	'distr': 0.25\n})",
						"_parameters": ["thickness", "opticThickness"],
						"_dependencies": []
					}
				}, {
					"x": {
						"_operation": "(495 + 20) * width * ((295 + 10) / 495)",
						"_parameters": ["width"],
						"_dependencies": []
					},
					"y": {
						"_operation": "capHeight - capHeight * (30 / 750) * thickness / 85",
						"_parameters": ["capHeight", "capHeight", "thickness"],
						"_dependencies": []
					},
					"typeOut": "line",
					"expand": {
						"_operation": "Object({\n	'width': thickness * (100 / 85) * opticThickness,\n	'angle': 0 + 'deg',\n	'distr': 0.25\n})",
						"_parameters": ["thickness", "opticThickness"],
						"_dependencies": []
					}
				}]
			}, {
				"skeleton": true,
				"closed": false,
				"point": [{
					"x": {
						"_operation": "Utils.onLine({\n	'y': 0,\n	'on': [\n		contours[0].nodes[1].point,\n		anchors[1].point\n	]\n})",
						"_parameters": [],
						"_dependencies": ["contours.0.nodes.1.point", "anchors.1.point"]
					},
					"y": 0,
					"typeOut": "line",
					"expand": {
						"_operation": "Object({\n	'width': thickness * (30 / 85) * opticThickness * contrast,\n	'angle': 0 + 'deg',\n	'distr': 0.25\n})",
						"_parameters": ["thickness", "opticThickness", "contrast"],
						"_dependencies": []
					}
				}, {
					"x": {
						"_operation": "Utils.onLine({\n	'y': contours[0].nodes[1].y - 10,\n	'on': [\n		contours[0].nodes[0].expandedTo[0].point,\n		contours[0].nodes[1].expandedTo[0].point\n	]\n})",
						"_parameters": [],
						"_dependencies": ["contours.0.nodes.1.y", "contours.0.nodes.0.expandedTo.0.point", "contours.0.nodes.1.expandedTo.0.point"]
					},
					"y": {
						"_operation": "contours[0].nodes[1].y - 10",
						"_parameters": [],
						"_dependencies": ["contours.0.nodes.1.y"]
					},
					"typeOut": "line",
					"expand": {
						"_operation": "Object({\n	'width': thickness * (20 / 85) * opticThickness * contrast,\n	'angle': 0 + 'deg',\n	'distr': 0\n})",
						"_parameters": ["thickness", "opticThickness", "contrast"],
						"_dependencies": []
					}
				}]
			}, {
				"skeleton": true,
				"closed": false,
				"point": [{
					"x": {
						"_operation": "Utils.onLine({\n	'y': capHeight * (280 / 750) * crossbar,\n	'on': [\n		contours[0].nodes[0].point,\n		contours[0].nodes[1].point\n	]\n})",
						"_parameters": ["capHeight", "crossbar"],
						"_dependencies": ["contours.0.nodes.0.point", "contours.0.nodes.1.point"]
					},
					"y": {
						"_operation": "capHeight * (298 / 750) * crossbar",
						"_parameters": ["capHeight", "crossbar"],
						"_dependencies": []
					},
					"typeOut": "line",
					"expand": {
						"_operation": "Object({\n	'width': thickness * (26 / 85) * opticThickness * contrast,\n	'angle': 90 + 'deg',\n	'distr': 0.75\n})",
						"_parameters": ["thickness", "opticThickness", "contrast"],
						"_dependencies": []
					}
				}, {
					"x": {
						"_operation": "Utils.onLine({\n	'y': contours[2].nodes[0].y,\n	'on': [\n		contours[1].nodes[1].point,\n		contours[1].nodes[0].point\n	]\n})",
						"_parameters": [],
						"_dependencies": ["contours.2.nodes.0.y", "contours.1.nodes.1.point", "contours.1.nodes.0.point"]
					},
					"y": {
						"_operation": "contours[2].nodes[0].y",
						"_parameters": [],
						"_dependencies": ["contours.2.nodes.0.y"]
					},
					"typeOut": "line",
					"expand": {
						"_operation": "Object({\n	'width': thickness * (26 / 85) * opticThickness * contrast,\n	'angle': 90 + 'deg',\n	'distr': 0.75\n})",
						"_parameters": ["thickness", "opticThickness", "contrast"],
						"_dependencies": []
					}
				}]
			}, {
				"skeleton": false,
				"closed": false,
				"point": [{
					"x": {
						"_operation": "contours[0].nodes[1].expandedTo[1].x",
						"_parameters": [],
						"_dependencies": ["contours.0.nodes.1.expandedTo.1.x"]
					},
					"y": {
						"_operation": "contours[0].nodes[1].expandedTo[1].y",
						"_parameters": [],
						"_dependencies": ["contours.0.nodes.1.expandedTo.1.y"]
					},
					"typeOut": "line"
				}, {
					"x": {
						"_operation": "Utils.onLine({\n	'y': capHeight + overshoot * 2,\n	'on': [\n		contours[0].nodes[0].expandedTo[1].point,\n		contours[0].nodes[1].expandedTo[1].point\n	]\n})",
						"_parameters": ["capHeight", "overshoot"],
						"_dependencies": ["contours.0.nodes.0.expandedTo.1.point", "contours.0.nodes.1.expandedTo.1.point"]
					},
					"y": {
						"_operation": "capHeight + overshoot * 2",
						"_parameters": ["capHeight", "overshoot"],
						"_dependencies": []
					},
					"typeOut": "line"
				}, {
					"x": {
						"_operation": "contours[3].nodes[1].x - Math.min(15, thickness * (10 / 85))",
						"_parameters": ["thickness"],
						"_dependencies": ["contours.3.nodes.1.x"]
					},
					"y": {
						"_operation": "contours[3].nodes[1].y",
						"_parameters": [],
						"_dependencies": ["contours.3.nodes.1.y"]
					},
					"dirOut": {
						"_operation": "Math.min(-116, -100 - serifCurve) + 'deg'",
						"_parameters": ["serifCurve"],
						"_dependencies": []
					},
					"tensionOut": {
						"_operation": "serifRoundness",
						"_parameters": ["serifRoundness"],
						"_dependencies": []
					}
				}, {
					"x": {
						"_operation": "contours[0].nodes[1].expandedTo[0].x",
						"_parameters": [],
						"_dependencies": ["contours.0.nodes.1.expandedTo.0.x"]
					},
					"y": {
						"_operation": "contours[0].nodes[1].expandedTo[0].y",
						"_parameters": [],
						"_dependencies": ["contours.0.nodes.1.expandedTo.0.y"]
					},
					"dirIn": {
						"_operation": "8 + 'deg'",
						"_parameters": [],
						"_dependencies": []
					},
					"tensionIn": {
						"_operation": "serifRoundness",
						"_parameters": ["serifRoundness"],
						"_dependencies": []
					}
				}]
			}],
			"component": [{
				"base": "serif",
				"anchor": [{
					"x": {
						"_operation": "Utils.onLine({\n	'y': serifHeight + serifCurve * (150 / 15),\n	'on': [\n		contours[1].nodes[1].expandedTo[1].point,\n		contours[1].nodes[0].expandedTo[1].point\n	]\n})",
						"_parameters": ["serifHeight", "serifCurve"],
						"_dependencies": ["contours.1.nodes.1.expandedTo.1.point", "contours.1.nodes.0.expandedTo.1.point"]
					},
					"y": {
						"_operation": "serifHeight + serifCurve * (150 / 15)",
						"_parameters": ["serifHeight", "serifCurve"],
						"_dependencies": []
					}
				}, {
					"x": {
						"_operation": "Utils.onLine({\n	'y': serifHeight + serifCurve * (150 / 15),\n	'on': [\n		contours[1].nodes[1].expandedTo[0].point,\n		contours[1].nodes[0].expandedTo[0].point\n	]\n})",
						"_parameters": ["serifHeight", "serifCurve"],
						"_dependencies": ["contours.1.nodes.1.expandedTo.0.point", "contours.1.nodes.0.expandedTo.0.point"]
					},
					"y": {
						"_operation": "serifHeight + serifCurve * (150 / 15)",
						"_parameters": ["serifHeight", "serifCurve"],
						"_dependencies": []
					}
				}, {
					"anchorLine": 0,
					"leftWidth": 70,
					"rightWidth": 100,
					"baseRight": {
						"_operation": "contours[1].nodes[0].expandedTo[1].point",
						"_parameters": [],
						"_dependencies": ["contours.1.nodes.0.expandedTo.1.point"]
					},
					"baseLeft": {
						"_operation": "contours[1].nodes[0].expandedTo[0].point",
						"_parameters": [],
						"_dependencies": ["contours.1.nodes.0.expandedTo.0.point"]
					},
					"anchor_0": {
						"_operation": "contours[1].nodes[0].expandedTo[1].x",
						"_parameters": [],
						"_dependencies": ["contours.1.nodes.0.expandedTo.1.x"]
					},
					"anchor_1": {
						"_operation": "contours[1].nodes[0].expandedTo[0].x",
						"_parameters": [],
						"_dependencies": ["contours.1.nodes.0.expandedTo.0.x"]
					},
					"angle": {
						"_operation": "Utils.lineAngle(contours[1].nodes[0].point, contours[1].nodes[1].point)",
						"_parameters": [],
						"_dependencies": ["contours.1.nodes.0.point", "contours.1.nodes.1.point"]
					}
				}],
				"parameter": {}
			}, {
				"base": "serif",
				"anchor": [{
					"x": {
						"_operation": "Utils.onLine({\n	'y': serifHeight + serifCurve * (120 / 15),\n	'on': [\n		contours[0].nodes[0].expandedTo[1].point,\n		contours[0].nodes[1].expandedTo[1].point\n	]\n})",
						"_parameters": ["serifHeight", "serifCurve"],
						"_dependencies": ["contours.0.nodes.0.expandedTo.1.point", "contours.0.nodes.1.expandedTo.1.point"]
					},
					"y": {
						"_operation": "serifHeight + serifCurve * (120 / 15)",
						"_parameters": ["serifHeight", "serifCurve"],
						"_dependencies": []
					}
				}, {
					"x": {
						"_operation": "Utils.onLine({\n	'y': serifHeight + serifCurve * (120 / 15),\n	'on': [\n		contours[0].nodes[0].expandedTo[0].point,\n		contours[0].nodes[1].expandedTo[0].point\n	]\n})",
						"_parameters": ["serifHeight", "serifCurve"],
						"_dependencies": ["contours.0.nodes.0.expandedTo.0.point", "contours.0.nodes.1.expandedTo.0.point"]
					},
					"y": {
						"_operation": "serifHeight + serifCurve * (120 / 15)",
						"_parameters": ["serifHeight", "serifCurve"],
						"_dependencies": []
					}
				}, {
					"anchorLine": 0,
					"leftWidth": 70,
					"rightWidth": 30,
					"baseRight": {
						"_operation": "contours[0].nodes[0].expandedTo[1].point",
						"_parameters": [],
						"_dependencies": ["contours.0.nodes.0.expandedTo.1.point"]
					},
					"baseLeft": {
						"_operation": "contours[0].nodes[0].expandedTo[0].point",
						"_parameters": [],
						"_dependencies": ["contours.0.nodes.0.expandedTo.0.point"]
					},
					"anchor_0": {
						"_operation": "contours[0].nodes[0].expandedTo[1].x",
						"_parameters": [],
						"_dependencies": ["contours.0.nodes.0.expandedTo.1.x"]
					},
					"anchor_1": {
						"_operation": "contours[0].nodes[0].expandedTo[0].x",
						"_parameters": [],
						"_dependencies": ["contours.0.nodes.0.expandedTo.0.x"]
					},
					"angle": {
						"_operation": "Utils.lineAngle(contours[0].nodes[0].point, contours[0].nodes[1].point)",
						"_parameters": [],
						"_dependencies": ["contours.0.nodes.0.point", "contours.0.nodes.1.point"]
					}
				}],
				"parameter": {}
			}]
		},
		"lib": {}
	},
    "serif": {
			"tags": ["component"],
			"name": "serif",
			"anchor": [{
				"x": {
					"_operation": "parentAnchors[0].x",
					"_parameters": [],
					"_dependencies": ["parentAnchors.0.x"]
				},
				"y": {
					"_operation": "parentAnchors[0].y",
					"_parameters": [],
					"_dependencies": ["parentAnchors.0.y"]
				}
			}, {
				"x": {
					"_operation": "parentAnchors[1].x",
					"_parameters": [],
					"_dependencies": ["parentAnchors.1.x"]
				},
				"y": {
					"_operation": "parentAnchors[1].y",
					"_parameters": [],
					"_dependencies": ["parentAnchors.1.y"]
				}
			}, {
				"anchorLine": {
					"_operation": "parentAnchors[2].anchorLine || 0",
					"_parameters": [],
					"_dependencies": ["parentAnchors.2.anchorLine"]
				},
				"leftWidth": {
					"_operation": "parentAnchors[2].leftWidth * Math.min(serifWidth / 65, 1) || 0",
					"_parameters": ["serifWidth"],
					"_dependencies": ["parentAnchors.2.leftWidth"]
				},
				"rightCurve": {
					"_operation": "parentAnchors[2].rightCurve || 1",
					"_parameters": [],
					"_dependencies": ["parentAnchors.2.rightCurve"]
				},
				"leftCurve": {
					"_operation": "parentAnchors[2].leftCurve || 1",
					"_parameters": [],
					"_dependencies": ["parentAnchors.2.leftCurve"]
				},
				"rightWidth": {
					"_operation": "parentAnchors[2].rightWidth * Math.min(serifWidth / 65, 1) || 0",
					"_parameters": ["serifWidth"],
					"_dependencies": ["parentAnchors.2.rightWidth"]
				},
				"angle": {
					"_operation": "parentAnchors[2].angle || -90 + 'deg'",
					"_parameters": [],
					"_dependencies": ["parentAnchors.2.angle"]
				},
				"directionY": {
					"_operation": "parentAnchors[2].directionY || 1",
					"_parameters": [],
					"_dependencies": ["parentAnchors.2.directionY"]
				},
				"directionX": {
					"_operation": "parentAnchors[2].directionX || 1",
					"_parameters": [],
					"_dependencies": ["parentAnchors.2.directionX"]
				},
				"anchor_0": {
					"_operation": "parentAnchors[2].anchor_0 || parentAnchors[0].x",
					"_parameters": [],
					"_dependencies": ["parentAnchors.2.anchor_0", "parentAnchors.0.x"]
				},
				"anchor_1": {
					"_operation": "parentAnchors[2].anchor_1 || parentAnchors[1].x",
					"_parameters": [],
					"_dependencies": ["parentAnchors.2.anchor_1", "parentAnchors.1.x"]
				},
				"baseRight": {
					"_operation": "typeof parentAnchors[2].baseRight !== 'undefined' ? parentAnchors[2].baseRight : {\n    'x': parentAnchors[0].x,\n    'y': anchors[2].anchorLine\n}",
					"_parameters": [],
					"_dependencies": ["parentAnchors.2.baseRight", "parentAnchors.2.baseRight", "parentAnchors.0.x", "anchors.2.anchorLine"]
				},
				"baseLeft": {
					"_operation": "typeof parentAnchors[2].baseLeft !== 'undefined' ? parentAnchors[2].baseLeft : {\n    'x': parentAnchors[1].x,\n    'y': anchors[2].anchorLine\n}",
					"_parameters": [],
					"_dependencies": ["parentAnchors.2.baseLeft", "parentAnchors.2.baseLeft", "parentAnchors.1.x", "anchors.2.anchorLine"]
				},
				"max0": {
					"_operation": "parentAnchors[2].max0 || anchors[0].point",
					"_parameters": [],
					"_dependencies": ["parentAnchors.2.max0", "anchors.0.point"]
				},
				"max1": {
					"_operation": "parentAnchors[2].max1 || anchors[1].point",
					"_parameters": [],
					"_dependencies": ["parentAnchors.2.max1", "anchors.1.point"]
				},
				"left": {
					"_operation": "typeof parentAnchors[2].left !== 'undefined' ? parentAnchors[2].left : true",
					"_parameters": [],
					"_dependencies": ["parentAnchors.2.left", "parentAnchors.2.left"]
				},
				"right": {
					"_operation": "typeof parentAnchors[2].right !== 'undefined' ? parentAnchors[2].right : true",
					"_parameters": [],
					"_dependencies": ["parentAnchors.2.right", "parentAnchors.2.right"]
				},
				"attaque": {
					"_operation": "typeof parentAnchors[2].attaque !== 'undefined' ? parentAnchors[2].attaque : false",
					"_parameters": [],
					"_dependencies": ["parentAnchors.2.attaque", "parentAnchors.2.attaque"]
				},
				"vertical": {
					"_operation": "typeof parentAnchors[2].vertical !== 'undefined' ? parentAnchors[2].vertical : false",
					"_parameters": [],
					"_dependencies": ["parentAnchors.2.vertical", "parentAnchors.2.vertical"]
				},
				"rightSerifBound": {
					"_operation": "Utils.onLine({\n    'y': contours[0].nodes[2].y,\n    'on': [\n        anchors[2].baseRight,\n        contours[0].nodes[0].point\n    ]\n})",
					"_parameters": [],
					"_dependencies": ["contours.0.nodes.2.y", "anchors.2.baseRight", "contours.0.nodes.0.point"]
				},
				"leftSerifBound": {
					"_operation": "Utils.onLine({\n    'y': contours[0].nodes[8].y,\n    'on': [\n        anchors[2].baseLeft,\n        contours[0].nodes[10].point\n    ]\n})",
					"_parameters": [],
					"_dependencies": ["contours.0.nodes.8.y", "anchors.2.baseLeft", "contours.0.nodes.10.point"]
				}
			}],
			"outline": {
				"contour": [{
					"closed": true,
					"point": [{
						"x": {
							"_operation": "Math.max(anchors[0].x, anchors[2].max0.x)",
							"_parameters": [],
							"_dependencies": ["anchors.0.x", "anchors.2.max0.x"]
						},
						"y": {
							"_operation": "Math.max(anchors[0].y, anchors[2].max0.y)",
							"_parameters": [],
							"_dependencies": ["anchors.0.y", "anchors.2.max0.y"]
						},
						"dirOut": {
							"_operation": "anchors[2].angle",
							"_parameters": [],
							"_dependencies": ["anchors.2.angle"]
						},
						"tensionOut": {
							"_operation": "1.4 * serifRoundness * anchors[2].rightCurve",
							"_parameters": ["serifRoundness"],
							"_dependencies": ["anchors.2.rightCurve"]
						}
					}, {
						"x": {
							"_operation": "anchors[2].right === false ? anchors[2].baseRight.x : parentAnchors[2].baseRight ? Math.min(Utils.onLine({\n    'y': contours[0].nodes[1].y,\n    'on': [\n        anchors[2].baseRight,\n        contours[0].nodes[0].point\n    ]\n}) + (serifCurve + serifHeight + anchors[2].rightWidth * anchors[2].rightCurve), contours[0].nodes[2].x + 20 / (serifCurve + serifHeight + anchors[2].rightWidth * anchors[2].rightCurve) * -(contours[0].nodes[2].x - Utils.onLine({\n    'y': contours[0].nodes[1].y,\n    'on': [\n        anchors[2].baseRight,\n        contours[0].nodes[0].point\n    ]\n}))) : Math.min(contours[0].nodes[2].x - serifWidth / 5, anchors[0].x + serifHeight + serifCurve + anchors[2].rightWidth * anchors[2].rightCurve)",
							"_parameters": ["serifCurve", "serifHeight", "serifCurve", "serifHeight", "serifWidth", "serifHeight", "serifCurve"],
							"_dependencies": ["anchors.2.right", "anchors.2.baseRight.x", "parentAnchors.2.baseRight", "contours.0.nodes.1.y", "anchors.2.baseRight", "contours.0.nodes.0.point", "anchors.2.rightWidth", "anchors.2.rightCurve", "contours.0.nodes.2.x", "anchors.2.rightWidth", "anchors.2.rightCurve", "contours.0.nodes.2.x", "contours.0.nodes.1.y", "anchors.2.baseRight", "contours.0.nodes.0.point", "contours.0.nodes.2.x", "anchors.0.x", "anchors.2.rightWidth", "anchors.2.rightCurve"]
						},
						"y": {
							"_operation": "anchors[2].right === false ? anchors[2].baseRight.y : anchors[2].anchorLine + serifHeight * anchors[2].directionY",
							"_parameters": ["serifHeight"],
							"_dependencies": ["anchors.2.right", "anchors.2.baseRight.y", "anchors.2.anchorLine", "anchors.2.directionY"]
						},
						"tensionOut": {
							"_operation": "serifRoundness",
							"_parameters": ["serifRoundness"],
							"_dependencies": []
						},
						"type": "smooth",
						"dirIn": {
							"_operation": "anchors[2].attaque === true ? Utils.lineAngle(contours[0].nodes[4].point, contours[0].nodes[5].point) : Utils.lineAngle(contours[0].nodes[1].point, contours[0].nodes[2].point)",
							"_parameters": [],
							"_dependencies": ["anchors.2.attaque", "contours.0.nodes.4.point", "contours.0.nodes.5.point", "contours.0.nodes.1.point", "contours.0.nodes.2.point"]
						}
					}, {
						"x": {
							"_operation": "anchors[2].right === false ? anchors[2].baseRight.x : parentAnchors[2].baseRight ? anchors[2].baseRight.x > contours[0].nodes[0].x ? Utils.onLine({\n    'y': contours[0].nodes[2].y,\n    'on': [\n        anchors[2].baseRight,\n        contours[0].nodes[0].point\n    ]\n}) + (serifWidth + anchors[2].rightWidth * Math.min(1, serifWidth)) : anchors[2].rightSerifBound > anchors[2].baseRight.x + serifWidth + anchors[2].rightWidth * Math.min(1, serifWidth) ? Utils.onLine({\n    'y': contours[0].nodes[2].y,\n    'on': [\n        anchors[2].baseRight,\n        contours[0].nodes[0].point\n    ]\n}) : anchors[2].baseRight.x + serifWidth + anchors[2].rightWidth * Math.min(1, serifWidth) : anchors[2].anchor_0 + serifWidth + anchors[2].rightWidth * Math.min(1, serifWidth)",
							"_parameters": ["serifWidth", "serifWidth", "serifWidth", "serifWidth", "serifWidth", "serifWidth", "serifWidth", "serifWidth"],
							"_dependencies": ["anchors.2.right", "anchors.2.baseRight.x", "parentAnchors.2.baseRight", "anchors.2.baseRight.x", "contours.0.nodes.0.x", "contours.0.nodes.2.y", "anchors.2.baseRight", "contours.0.nodes.0.point", "anchors.2.rightWidth", "anchors.2.rightSerifBound", "anchors.2.baseRight.x", "anchors.2.rightWidth", "contours.0.nodes.2.y", "anchors.2.baseRight", "contours.0.nodes.0.point", "anchors.2.baseRight.x", "anchors.2.rightWidth", "anchors.2.anchor_0", "anchors.2.rightWidth"]
						},
						"y": {
							"_operation": "anchors[2].right === false ? anchors[2].baseRight.y : anchors[2].attaque === true ? contours[0].nodes[4].y + serifHeight * serifMedian + (serifWidth + anchors[2].rightWidth) * (anchors[2].anchorLine + (spurHeight * 50 - 50) * anchors[2].directionY) / (anchors[2].baseRight.x + serifWidth * midWidth + anchors[2].rightWidth) : contours[0].nodes[4].y + serifHeight * serifMedian * anchors[2].directionY",
							"_parameters": ["serifHeight", "serifMedian", "serifWidth", "spurHeight", "serifWidth", "midWidth", "serifHeight", "serifMedian"],
							"_dependencies": ["anchors.2.right", "anchors.2.baseRight.y", "anchors.2.attaque", "contours.0.nodes.4.y", "anchors.2.rightWidth", "anchors.2.anchorLine", "anchors.2.directionY", "anchors.2.baseRight.x", "anchors.2.rightWidth", "contours.0.nodes.4.y", "anchors.2.directionY"]
						},
						"tensionOut": {
							"_operation": "serifTerminalCurve",
							"_parameters": ["serifTerminalCurve"],
							"_dependencies": []
						},
						"type": "smooth",
						"typeIn": "line"
					}, {
						"x": {
							"_operation": "anchors[2].right === false ? anchors[2].baseRight.x : contours[0].nodes[2].x + (contours[0].nodes[4].x - contours[0].nodes[2].x) / 2 + serifTerminal * serifWidth",
							"_parameters": ["serifTerminal", "serifWidth"],
							"_dependencies": ["anchors.2.right", "anchors.2.baseRight.x", "contours.0.nodes.2.x", "contours.0.nodes.4.x", "contours.0.nodes.2.x"]
						},
						"y": {
							"_operation": "anchors[2].right === false ? anchors[2].baseRight.y : contours[0].nodes[4].y + serifHeight * serifMedian / 2 * anchors[2].directionY",
							"_parameters": ["serifHeight", "serifMedian"],
							"_dependencies": ["anchors.2.right", "anchors.2.baseRight.y", "contours.0.nodes.4.y", "anchors.2.directionY"]
						},
						"dirOut": {
							"_operation": "Utils.lineAngle(contours[0].nodes[2].point, contours[0].nodes[4].point)",
							"_parameters": [],
							"_dependencies": ["contours.0.nodes.2.point", "contours.0.nodes.4.point"]
						},
						"type": "smooth",
						"tensionOut": {
							"_operation": "serifTerminalCurve",
							"_parameters": ["serifTerminalCurve"],
							"_dependencies": []
						},
						"tensionIn": {
							"_operation": "serifTerminalCurve",
							"_parameters": ["serifTerminalCurve"],
							"_dependencies": []
						}
					}, {
						"x": {
							"_operation": "anchors[2].right === false ? anchors[2].baseRight.x : parentAnchors[2].baseRight ? anchors[2].baseRight.x < contours[0].nodes[0].x ? anchors[2].baseRight.x + serifWidth * midWidth + anchors[2].rightWidth * Math.min(1, serifWidth) : anchors[2].baseRight.x > anchors[2].baseRight.x + serifWidth * midWidth + anchors[2].rightWidth * Math.min(1, serifWidth) - Math.abs(Utils.onLine({\n    'y': contours[0].nodes[2].y,\n    'on': [\n        anchors[2].baseRight,\n        contours[0].nodes[0].point\n    ]\n}) - anchors[2].baseRight.x) ? anchors[2].baseRight.x : anchors[2].baseRight.x + serifWidth * midWidth + anchors[2].rightWidth * Math.min(1, serifWidth) - Math.abs(Utils.onLine({\n    'y': contours[0].nodes[2].y,\n    'on': [\n        anchors[2].baseRight,\n        contours[0].nodes[0].point\n    ]\n}) - anchors[2].baseRight.x) : contours[0].nodes[0].x - (contours[0].nodes[0].x - contours[0].nodes[2].x) * midWidth",
							"_parameters": ["serifWidth", "midWidth", "serifWidth", "serifWidth", "midWidth", "serifWidth", "serifWidth", "midWidth", "serifWidth", "midWidth"],
							"_dependencies": ["anchors.2.right", "anchors.2.baseRight.x", "parentAnchors.2.baseRight", "anchors.2.baseRight.x", "contours.0.nodes.0.x", "anchors.2.baseRight.x", "anchors.2.rightWidth", "anchors.2.baseRight.x", "anchors.2.baseRight.x", "anchors.2.rightWidth", "contours.0.nodes.2.y", "anchors.2.baseRight", "contours.0.nodes.0.point", "anchors.2.baseRight.x", "anchors.2.baseRight.x", "anchors.2.baseRight.x", "anchors.2.rightWidth", "contours.0.nodes.2.y", "anchors.2.baseRight", "contours.0.nodes.0.point", "anchors.2.baseRight.x", "contours.0.nodes.0.x", "contours.0.nodes.0.x", "contours.0.nodes.2.x"]
						},
						"y": {
							"_operation": "anchors[2].right === false ? anchors[2].baseRight.y : anchors[2].anchorLine",
							"_parameters": [],
							"_dependencies": ["anchors.2.right", "anchors.2.baseRight.y", "anchors.2.anchorLine"]
						},
						"tensionOut": {
							"_operation": "serifTerminalCurve",
							"_parameters": ["serifTerminalCurve"],
							"_dependencies": []
						},
						"type": "smooth",
						"dirIn": {
							"_operation": "180 + 'deg'",
							"_parameters": [],
							"_dependencies": []
						},
						"dirOut": {
							"_operation": "0 + 'deg'",
							"_parameters": [],
							"_dependencies": []
						}
					}, {
						"x": {
							"_operation": "anchors[2].attaque === true ? anchors[0].x + 10 / 85 * thickness : contours[0].nodes[4].x - (contours[0].nodes[4].x - contours[0].nodes[6].x) / 2",
							"_parameters": ["thickness"],
							"_dependencies": ["anchors.2.attaque", "anchors.0.x", "contours.0.nodes.4.x", "contours.0.nodes.4.x", "contours.0.nodes.6.x"]
						},
						"y": {
							"_operation": "anchors[2].anchorLine + serifHeight * serifArc * anchors[2].directionY",
							"_parameters": ["serifHeight", "serifArc"],
							"_dependencies": ["anchors.2.anchorLine", "anchors.2.directionY"]
						},
						"dirIn": {
							"_operation": "anchors[2].attaque === true ? Utils.lineAngle(contours[0].nodes[4].point, contours[0].nodes[5].point) : 0 + 'deg'",
							"_parameters": [],
							"_dependencies": ["anchors.2.attaque", "contours.0.nodes.4.point", "contours.0.nodes.5.point"]
						},
						"dirOut": {
							"_operation": "180 + 'deg'",
							"_parameters": [],
							"_dependencies": []
						}
					}, {
						"x": {
							"_operation": "anchors[2].left === false ? anchors[2].baseLeft.x : parentAnchors[2].baseLeft ? anchors[2].baseLeft.x > contours[0].nodes[10].x ? anchors[2].baseLeft.x - serifWidth * midWidth - anchors[2].leftWidth * Math.min(1, serifWidth) : anchors[2].baseLeft.x < anchors[2].baseLeft.x - serifWidth * midWidth - anchors[2].leftWidth * Math.min(1, serifWidth) + Math.abs(Utils.onLine({\n    'y': contours[0].nodes[8].y,\n    'on': [\n        anchors[2].baseLeft,\n        contours[0].nodes[10].point\n    ]\n}) - anchors[2].baseLeft.x) ? anchors[2].baseLeft.x : anchors[2].baseLeft.x - serifWidth * midWidth - anchors[2].leftWidth * Math.min(1, serifWidth) + Math.abs(Utils.onLine({\n    'y': contours[0].nodes[8].y,\n    'on': [\n        anchors[2].baseLeft,\n        contours[0].nodes[10].point\n    ]\n}) - anchors[2].baseLeft.x) : contours[0].nodes[10].x - (contours[0].nodes[10].x - contours[0].nodes[8].x) * midWidth",
							"_parameters": ["serifWidth", "midWidth", "serifWidth", "serifWidth", "midWidth", "serifWidth", "serifWidth", "midWidth", "serifWidth", "midWidth"],
							"_dependencies": ["anchors.2.left", "anchors.2.baseLeft.x", "parentAnchors.2.baseLeft", "anchors.2.baseLeft.x", "contours.0.nodes.10.x", "anchors.2.baseLeft.x", "anchors.2.leftWidth", "anchors.2.baseLeft.x", "anchors.2.baseLeft.x", "anchors.2.leftWidth", "contours.0.nodes.8.y", "anchors.2.baseLeft", "contours.0.nodes.10.point", "anchors.2.baseLeft.x", "anchors.2.baseLeft.x", "anchors.2.baseLeft.x", "anchors.2.leftWidth", "contours.0.nodes.8.y", "anchors.2.baseLeft", "contours.0.nodes.10.point", "anchors.2.baseLeft.x", "contours.0.nodes.10.x", "contours.0.nodes.10.x", "contours.0.nodes.8.x"]
						},
						"y": {
							"_operation": "anchors[2].left === false ? anchors[2].baseLeft.y : anchors[2].anchorLine",
							"_parameters": [],
							"_dependencies": ["anchors.2.left", "anchors.2.baseLeft.y", "anchors.2.anchorLine"]
						},
						"tensionOut": {
							"_operation": "serifTerminalCurve",
							"_parameters": ["serifTerminalCurve"],
							"_dependencies": []
						},
						"dirOut": {
							"_operation": "0 + 'deg'",
							"_parameters": [],
							"_dependencies": []
						}
					}, {
						"x": {
							"_operation": "anchors[2].left === false ? anchors[2].baseLeft.x : contours[0].nodes[8].x - (contours[0].nodes[8].x - contours[0].nodes[6].x) / 2 - serifTerminal * serifWidth",
							"_parameters": ["serifTerminal", "serifWidth"],
							"_dependencies": ["anchors.2.left", "anchors.2.baseLeft.x", "contours.0.nodes.8.x", "contours.0.nodes.8.x", "contours.0.nodes.6.x"]
						},
						"y": {
							"_operation": "anchors[2].left === false ? anchors[2].baseLeft.y : anchors[2].anchorLine + serifHeight * serifMedian / 2 * anchors[2].directionY",
							"_parameters": ["serifHeight", "serifMedian"],
							"_dependencies": ["anchors.2.left", "anchors.2.baseLeft.y", "anchors.2.anchorLine", "anchors.2.directionY"]
						},
						"type": "smooth",
						"dirOut": {
							"_operation": "Utils.lineAngle(contours[0].nodes[6].point, contours[0].nodes[8].point)",
							"_parameters": [],
							"_dependencies": ["contours.0.nodes.6.point", "contours.0.nodes.8.point"]
						},
						"tensionOut": {
							"_operation": "serifTerminalCurve",
							"_parameters": ["serifTerminalCurve"],
							"_dependencies": []
						},
						"tensionIn": {
							"_operation": "serifTerminalCurve",
							"_parameters": ["serifTerminalCurve"],
							"_dependencies": []
						}
					}, {
						"x": {
							"_operation": "anchors[2].left === false ? anchors[2].baseLeft.x : parentAnchors[2].baseLeft ? anchors[2].baseLeft.x < contours[0].nodes[10].x ? Utils.onLine({\n    'y': contours[0].nodes[8].y,\n    'on': [\n        anchors[2].baseLeft,\n        contours[0].nodes[10].point\n    ]\n}) - (serifWidth + anchors[2].leftWidth * Math.min(1, serifWidth)) : anchors[2].leftSerifBound < anchors[2].baseLeft.x - (serifWidth + anchors[2].leftWidth * Math.min(1, serifWidth)) ? Utils.onLine({\n    'y': contours[0].nodes[8].y,\n    'on': [\n        anchors[2].baseLeft,\n        contours[0].nodes[10].point\n    ]\n}) : anchors[2].baseLeft.x - (serifWidth + anchors[2].leftWidth * Math.min(1, serifWidth)) : anchors[2].anchor_1 - (serifWidth + anchors[2].leftWidth * Math.min(1, serifWidth))",
							"_parameters": ["serifWidth", "serifWidth", "serifWidth", "serifWidth", "serifWidth", "serifWidth", "serifWidth", "serifWidth"],
							"_dependencies": ["anchors.2.left", "anchors.2.baseLeft.x", "parentAnchors.2.baseLeft", "anchors.2.baseLeft.x", "contours.0.nodes.10.x", "contours.0.nodes.8.y", "anchors.2.baseLeft", "contours.0.nodes.10.point", "anchors.2.leftWidth", "anchors.2.leftSerifBound", "anchors.2.baseLeft.x", "anchors.2.leftWidth", "contours.0.nodes.8.y", "anchors.2.baseLeft", "contours.0.nodes.10.point", "anchors.2.baseLeft.x", "anchors.2.leftWidth", "anchors.2.anchor_1", "anchors.2.leftWidth"]
						},
						"y": {
							"_operation": "anchors[2].left === false ? anchors[2].baseLeft.y : anchors[2].anchorLine + serifHeight * serifMedian * anchors[2].directionY",
							"_parameters": ["serifHeight", "serifMedian"],
							"_dependencies": ["anchors.2.left", "anchors.2.baseLeft.y", "anchors.2.anchorLine", "anchors.2.directionY"]
						},
						"tensionIn": {
							"_operation": "serifTerminalCurve",
							"_parameters": ["serifTerminalCurve"],
							"_dependencies": []
						},
						"typeOut": "line",
						"dirIn": {
							"_operation": "0 + 'deg'",
							"_parameters": [],
							"_dependencies": []
						}
					}, {
						"x": {
							"_operation": "anchors[2].left === false ? anchors[2].baseLeft.x : parentAnchors[2].baseLeft ? Math.max(Utils.onLine({\n    'y': contours[0].nodes[9].y,\n    'on': [\n        anchors[2].baseLeft,\n        contours[0].nodes[10].point\n    ]\n}) - (serifCurve + serifHeight + anchors[2].leftWidth * anchors[2].leftCurve), contours[0].nodes[8].x + 20 / (serifCurve + serifHeight + anchors[2].leftWidth * anchors[2].leftCurve) * -(contours[0].nodes[8].x - Utils.onLine({\n    'y': contours[0].nodes[9].y,\n    'on': [\n        anchors[2].baseLeft,\n        contours[0].nodes[10].point\n    ]\n}))) : Math.max(contours[0].nodes[8].x + serifWidth / 5, anchors[1].x - serifHeight - serifCurve - anchors[2].leftWidth * anchors[2].leftCurve)",
							"_parameters": ["serifCurve", "serifHeight", "serifCurve", "serifHeight", "serifWidth", "serifHeight", "serifCurve"],
							"_dependencies": ["anchors.2.left", "anchors.2.baseLeft.x", "parentAnchors.2.baseLeft", "contours.0.nodes.9.y", "anchors.2.baseLeft", "contours.0.nodes.10.point", "anchors.2.leftWidth", "anchors.2.leftCurve", "contours.0.nodes.8.x", "anchors.2.leftWidth", "anchors.2.leftCurve", "contours.0.nodes.8.x", "contours.0.nodes.9.y", "anchors.2.baseLeft", "contours.0.nodes.10.point", "contours.0.nodes.8.x", "anchors.1.x", "anchors.2.leftWidth", "anchors.2.leftCurve"]
						},
						"y": {
							"_operation": "anchors[2].left === false ? anchors[2].baseLeft.y : anchors[2].anchorLine + serifHeight * anchors[2].directionY",
							"_parameters": ["serifHeight"],
							"_dependencies": ["anchors.2.left", "anchors.2.baseLeft.y", "anchors.2.anchorLine", "anchors.2.directionY"]
						},
						"tensionOut": {
							"_operation": "serifRoundness",
							"_parameters": ["serifRoundness"],
							"_dependencies": []
						},
						"type": "smooth"
					}, {
						"x": {
							"_operation": "Math.max(anchors[1].x, anchors[2].max1.x)",
							"_parameters": [],
							"_dependencies": ["anchors.1.x", "anchors.2.max1.x"]
						},
						"y": {
							"_operation": "Math.max(anchors[1].y, anchors[2].max1.y)",
							"_parameters": [],
							"_dependencies": ["anchors.1.y", "anchors.2.max1.y"]
						},
						"dirIn": {
							"_operation": "anchors[2].angle",
							"_parameters": [],
							"_dependencies": ["anchors.2.angle"]
						},
						"typeOut": "line",
						"tensionIn": {
							"_operation": "1.4 * serifRoundness * anchors[2].leftCurve",
							"_parameters": ["serifRoundness"],
							"_dependencies": ["anchors.2.leftCurve"]
						}
					}]
				}],
				"component": []
			},
			"lib": {}
		}
  },
  "fontinfo": {
	"familyName": "genese",
	"version": "0.1.0",
	"description": "The first parametric typeface",
	"tags": [
	  "all",
	  "component",
	  "latin",
	  "lowercase",
	  "uppercase",
	  "punctuation",
	  "figures",
	  "diacritic",
	  "smallcap"
	],
	"ascender": {
	  "_operation": "Math.max(ascenderHeight, capHeight) * 1.3",
	  "_parameters": [
		"ascenderHeight",
		"capHeight"
	  ],
	  "_dependencies": []
	},
	"descender": {
	  "_operation": "descender - 50",
	  "_parameters": [
		"descender"
	  ],
	  "_dependencies": []
	},
	"cap-height": {
	  "_operation": "Math.max(ascenderHeight, capHeight) * 1.3",
	  "_parameters": [
		"ascenderHeight",
		"capHeight"
	  ],
	  "_dependencies": []
	},
	"descendent-height": {
	  "_operation": "descender - 50",
	  "_parameters": [
		"descender"
	  ],
	  "_dependencies": []
	},
  },
  "lib": {
	"parameters": {
	  "capHeight": {
		"_operation": "xHeight + capDelta",
		"_parameters": [
		  "xHeight",
		  "capDelta"
		],
		"_dependencies": []
	  },
	  "contrast": {
		"_operation": "_contrast * -1",
		"_parameters": [
		  "_contrast"
		],
		"_dependencies": []
	  },
	  "ascenderHeight": {
		"_operation": "xHeight + ascender",
		"_parameters": [
		  "xHeight",
		  "ascender"
		],
		"_dependencies": []
	  },
	  "spacing": 1.1
	},
	"transforms": {
	  "_operation": "Array([\n	'skewX',\n	slant + 'deg'\n])",
	  "_parameters": [
		"slant"
	  ],
	  "_dependencies": []
	}
  }
};
