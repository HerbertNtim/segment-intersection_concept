# 🎬 Segment Intersection Animation

This repository demonstrates **line segment intersection** using **HTML5 Canvas** and **JavaScript**.  
It visualizes two line segments, computes their intersection point in real time, and animates one of the segments around the mouse pointer.

---

## ✨ Features
- **Dynamic animation**: One segment rotates around the mouse pointer.
- **Static reference segment**: A fixed line segment for intersection testing.
- **Real-time intersection**: Intersection point `I` is calculated with parametric line equations.
- **Interactive**: Move your mouse across the canvas to control the animation.

---

## 📐 Diagram
  A ● ----------- ● B     (rotating with mouse)
                  \
                   \
                    ● I (Intersection point)
                   /
                  /
 C ● ------------● D     (static)



- `AB`: Rotating line segment (moves around the mouse).  
- `CD`: Fixed line segment.  
- `I`: Computed intersection point (only drawn when it lies within both segments).  

---

## 🧮 Math Behind the Intersection

The two line segments are represented parametrically:


Solving for `t`:


If `0 ≤ t ≤ 1`, the intersection lies on segment **AB**.  
If `0 ≤ u ≤ 1`, the intersection lies on segment **CD**.  
The point `I` is valid only when both conditions hold true.

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>



open index.html   # macOS
start index.html  # Windows
├── index.html   # Entry point, sets up the canvas
├── javascript/main.js    # Core logic for animation and math
└── README.md    # Project documentation


