let lastId = 0;
let uniqueBundleID = "Wdnaoi$";

export default function getUniqueKey() {
    lastId++;
    return lastId.toString() + uniqueBundleID;
}
