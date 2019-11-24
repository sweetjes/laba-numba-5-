function isTimeRangesIntersect(timeRange1, timeRange2) {
  if (timeRange1[0] < timeRange2[0] && timeRange1[1] <= timeRange2[0]) {
    return false;
  }
  if (timeRange1[0] < timeRange2[0] && timeRange1[1] >= timeRange2[0]) {
    return true;
  }
}

//isTimeRangesIntersect(['08:30', '09:30'], ['10:30', '12:00'])
//isTimeRangesIntersect(['08:30', '19:30'], ['10:30', '12:00'])




