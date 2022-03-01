let maxArea = 0;
for (i = 0; i < height.length; i++) {
    for (j = 0; j < height.length; j++) {
        if (height[i] < height[j]) {
            continue;
        } else {
            const area = Math.abs(i - j) * height[j];
            if (area > maxArea) {
                maxArea = area;
            }
        }
    }
}
return maxArea;