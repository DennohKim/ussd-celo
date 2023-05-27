const celoKit = require("@celo/contractkit")
const nodeUrl = "https://celo-alfajores.infura.io/v3/a48178aaded545508acfbb657b5681b3"


const kit = celoKit.newKit(nodeUrl);
console.log("kit connected", kit)