define(["Ti/_/Evented","Ti/_/lang"],function(f,g){var d=(new Date).getTime(),c={},e=g.setObject("Ti.Accelerometer",f);require.on(window,"devicemotion",function(b){var a=b.acceleration||b.accelerationIncludingGravity;if(a=a&&{x:a.x,y:a.y,z:a.z,source:b.source}){if(void 0!==c.x&&(0.2<Math.abs(c.x-a.x)||0.2<Math.abs(c.y-a.y)||0.2<Math.abs(c.z-a.z)))b=(new Date).getTime(),a.timestamp=b-d,d=b,e.fireEvent("update",a);c=a}});return e});