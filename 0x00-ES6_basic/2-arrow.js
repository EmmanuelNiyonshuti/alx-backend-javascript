export default function getNeighborhoodList() {
    this.sanFranciscoNeighborhoods = ["SOMA", "Union Square"];

    const self = this;
    self.addNeighborhood = (newNeighborhood) =>
    {
        self.sanFranciscoNeighborhoods.push(newNeighborhood);
        return self.sanFranciscoNeighborhoods;
    };
}
