let object = {
    name: "Car",
    color: "Black",
    speed: "Fast",
    inDeal: false
};
var TrafficLights;
(function (TrafficLights) {
    TrafficLights["first"] = "Red";
    TrafficLights["second"] = "Green";
    TrafficLights["third"] = "Yellow";
})(TrafficLights || (TrafficLights = {}));
export default TrafficLights;
