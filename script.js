function calculateMinCost() {
  //your code here
  
  const input = document.getElementById("rope-lengths").value;
    const ropes = input.split(",").map(Number);
    ropes.sort((a, b) => a - b);
    let cost = 0;
    while (ropes.length > 1) {
      const sum = ropes[0] + ropes[1];
      cost += sum;
      ropes.splice(0, 2, sum);
      ropes.sort((a, b) => a - b);
    }
    document.getElementById("result").innerHTML =
      "Minimum cost of ropes: " + cost;
  
}  
